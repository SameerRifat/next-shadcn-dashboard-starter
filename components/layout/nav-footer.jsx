// components/layout/nav-user.jsx
"use client"

import {
    Moon,
    Sun,
} from "lucide-react"
import {
    useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function NavFooter() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"
    const { state, isMobile } = useSidebar()

    return (
        <div className={cn(
                    "flex items-center gap-3 px-2",
                    state === "collapsed" && "justify-center"
                )}>
                    {isDark
                        ? <Moon className="size-4.5 shrink-0 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                        : <Sun className="size-4.5 shrink-0 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                    }

                    {state !== "collapsed" ? (
                        <>
                            <span className="flex-1 text-sm font-medium text-sidebar-foreground">
                                {/* {t("darkMode")} */}
                                Dark Mode
                            </span>
                            <Switch
                                checked={isDark}
                                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                                aria-label="Dark Mode"
                                // aria-label={t("toggleDarkMode")}
                            />
                        </>
                    ) : (
                        <Switch
                            checked={isDark}
                            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                            aria-label="Toggle dark mode"
                            // aria-label={t("toggleDarkMode")}
                            className="scale-75"
                        />
                    )}
                </div>
    )
}
