// components/layout/dashboard-header.jsx
"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { ChevronsLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { LocaleSwitcher } from "./locale-switcher"
import { useTranslations } from "next-intl"

export function DashboardHeader() {
    const { toggleSidebar } = useSidebar()
    const t = useTranslations("DashboardHeader")

    return (
        <header className="sticky top-0 flex items-center bg-sidebar w-full shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
            <div className="flex h-(--header-height) w-full items-center">
                <div className="min-w-(--sidebar-width) flex items-center justify-between px-2">
                    <Link href="/dashboard" className="flex items-center justify-center gap-2">
                        <div>
                            <Image src="/logo.png" alt="Giant Logo" width={24} height={24} className="h-auto!" />
                        </div>
                        <div className="grid flex-1 text-start leading-tight group-data-[collapsible=icon]:hidden transition-all transition-duration-200">
                            <span className="truncate font-semibold text-[22px]">
                                <span className="text-primary">Giant</span>
                                <span className="text-foreground">Seller</span>
                            </span>
                        </div>
                    </Link>
                    <Button
                        className="h-8 w-8"
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                    >
                        <ChevronsLeft className="text-muted-foreground" />
                    </Button>
                </div>
                <div className="flex w-full items-center max-w-[1150px] mx-auto gap-3 px-4">

                    {/* Search Bar */}
                    <div className="hidden sm:flex flex-1 min-w-0 max-w-112.5">
                        <div className="relative w-full">
                            <Search className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                            <Input
                                type="search"
                                placeholder={t("searchPlaceholder")}
                                className="w-full rounded-full border border-border bg-transparent ps-10 pe-1.5 py-3 text-start placeholder:text-sm placeholder:text-muted-foreground"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="ms-auto flex items-center gap-2">
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}
