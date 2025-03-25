"use client"

import * as React from "react"
import {
  Frame,
  GalleryVerticalEnd,
  Layers,
  LayoutDashboard,
  Megaphone,
  PieChart,
  ShoppingBag,
  Tag,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Yellow Hat",
    email: "Admin",
    avatar: "/logo-symbol.png",
  },
  teams: [
    {
      name: "Yellow Hat",
      logo: GalleryVerticalEnd,
      plan: "Hardware and Tools",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Products",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Add New Product",
          url: "/Home/Products/Add-New-Product",
        },
        {
          title: "View All Products",
          url: "/Home/Products/View-Products",
        },

      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: Layers,
      items: [
        {
          title: "Add New Category",
          url: "/Home/Categories/Add-New-Category",
        },
        {
          title: "View All Categories",
          url: "/Home/Categories/View-Category",
        },
      ],
    },
    {
      title: "Brands",
      url: "#",
      icon: Tag,
      items: [
        {
          title: "Add New Brand",
          url: "/Home/Brands/Add-New-Brand",
        },
        {
          title: "View All Brands",
          url: "/Home/Brands/View-Brand",
        },

      ],
    },
    {
      title: "Advertisements",
      url: "#",
      icon: Megaphone,
      items: [
        {
          title: "Add New Advertisements",
          url: "/Home/Advertisements/Add-New-Advertisement",
        },
        {
          title: "View All Advertisements",
          url: "/Home/Advertisements/View-Advertisement",
        },

      ],
    },
  ],
  Deals: [
    {
      name: "Weekly Deals",
      url: "/Home/Weekly-Deals",
      icon: Frame,
    },
    {
      name: "Todays Deals",
      url: "/Home/Todays-Deals",
      icon: PieChart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.Deals} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
