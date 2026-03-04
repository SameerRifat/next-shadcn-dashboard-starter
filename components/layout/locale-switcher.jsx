// components/layout/locale-switcher.jsx
"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { setLocale } from "@/app/actions"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn, getPortalProps } from "@/lib/utils"
import { useDirection } from "@/components/ui/direction"

const LOCALES = [
    { code: "en", flag: "🇺🇸" },
    { code: "ur", flag: "🇵🇰" },
]
// const LOCALES = [
//     { code: "en", flag: "🇺🇸" },
//     { code: "es", flag: "🇪🇸" },
//     { code: "pt", flag: "🇧🇷" },
//     { code: "fr", flag: "🇫🇷" },
//     { code: "it", flag: "🇮🇹" },
//     { code: "de", flag: "🇩🇪" },
//     { code: "nl", flag: "🇳🇱" },
//     { code: "ur", flag: "🇵🇰" },
// ]

export function LocaleSwitcher() {
    const t = useTranslations("LocaleSwitcher")
    const locale = useLocale()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const dir = useDirection()

    function handleLocaleChange(newLocale) {
        startTransition(async () => {
            await setLocale(newLocale)
            router.refresh()
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={cn(
                        "relative flex items-center justify-center rounded-full",
                        "bg-[#F8F8F8] dark:bg-muted",
                        "size-8 sm:size-10 shrink-0 transition-colors",
                        "hover:bg-[#EFEFEF] dark:hover:bg-muted/70",
                        "disabled:opacity-50 disabled:pointer-events-none"
                    )}
                    aria-label={t("label")}
                    disabled={isPending}
                >
                    <Globe className="size-4 sm:size-5 text-muted-foreground" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-40" {...getPortalProps(dir)}>
                {LOCALES.map(({ code, flag }) => (
                    <DropdownMenuItem
                        key={code}
                        onClick={() => handleLocaleChange(code)}
                        className={cn(
                            "gap-2 cursor-pointer",
                            locale === code && "bg-primary/10 text-primary font-medium"
                        )}
                    >
                        <span aria-hidden="true">{flag}</span>
                        {t(code)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
