import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">今日のタスク</h1>
                <p className="text-sm text-muted-foreground">2025年5月17日</p>
              </div>
              <div className="grid gap-2">
                {/* タスクリストの例 */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border p-3">
                    <div className="h-5 w-5 rounded-md border" />
                    <div className="flex-1">
                      <p className="font-medium">タスク {i + 1}</p>
                      <p className="text-sm text-muted-foreground">詳細説明がここに表示されます</p>
                    </div>
                    <div className="text-xs text-muted-foreground">今日</div>
                  </div>
                ))}
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
