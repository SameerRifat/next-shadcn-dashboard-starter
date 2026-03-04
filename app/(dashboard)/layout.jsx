// app/(dashboard)/layout.jsx
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }) {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider className="flex flex-col">
                <DashboardHeader />
                <div className="flex flex-1">
                    <DashboardSidebar />
                    <SidebarInset className="overflow-y-auto h-[calc(100svh-var(--header-height))]">
                        {children}
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}