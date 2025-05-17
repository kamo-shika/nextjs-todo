"use client"

import type * as React from "react"
import { BookOpen, Calendar, CheckSquare, Home, List, Settings2, Star, Tag, Trash } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "ユーザー",
    email: "user@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "ホーム",
      url: "#",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "今日のタスク",
          url: "#",
        },
        {
          title: "すべてのタスク",
          url: "#",
        },
        {
          title: "完了したタスク",
          url: "#",
        },
      ],
    },
    {
      title: "タスク",
      url: "#",
      icon: CheckSquare,
      items: [
        {
          title: "優先度順",
          url: "#",
        },
        {
          title: "期限順",
          url: "#",
        },
        {
          title: "作成日順",
          url: "#",
        },
      ],
    },
    {
      title: "スケジュール",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "今日",
          url: "#",
        },
        {
          title: "今週",
          url: "#",
        },
        {
          title: "今月",
          url: "#",
        },
        {
          title: "カレンダー表示",
          url: "#",
        },
      ],
    },
    {
      title: "設定",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "一般設定",
          url: "#",
        },
        {
          title: "通知設定",
          url: "#",
        },
        {
          title: "テーマ設定",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "ゴミ箱",
      url: "#",
      icon: Trash,
    },
    {
      title: "ヘルプ",
      url: "#",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "仕事",
      url: "#",
      icon: List,
    },
    {
      name: "個人",
      url: "#",
      icon: Star,
    },
    {
      name: "買い物リスト",
      url: "#",
      icon: Tag,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <CheckSquare className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">TODOアプリ</span>
                  <span className="truncate text-xs">タスク管理</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
