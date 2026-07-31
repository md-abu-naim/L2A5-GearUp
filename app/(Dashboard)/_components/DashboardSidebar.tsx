"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { ISidebarItem, NavbarProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  Mountain, Sparkles, X } from "lucide-react";
import { sidebarMenuItems } from "../_config/SidebarMenuItems";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar(); 

  let navItems: ISidebarItem[] = [];
  const role = user?.data?.user?.role;

  if (role === "CUSTOMER") {
    navItems = sidebarMenuItems.CUSTOMER;
  } else if (role === "PROVIDER") {
    navItems = sidebarMenuItems.PROVIDER;
  } else if (role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  }

  const handleItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar
      className="border-r border-border/40 bg-card/80 backdrop-blur-md shadow-inner"
    >
      <SidebarHeader className="border-b border-border/40 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-emerald-600/25">
              <Mountain />
            </div>
            <div className="flex flex-col">
              <span className="font-black flex items-center gap-1">
                {role}

                <Sparkles className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
              </span>
              <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
                Dashboard
              </span>
            </div>
          </Link>

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenMobile(false)}
              className="h-8 w-8 rounded-lg lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      onClick={handleItemClick}
                      className={cn(
                        "flex w-full items-center gap-3.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 relative",
                        isActive
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 font-bold border border-emerald-700/50"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon
                          className={cn(
                            "h-4 w-4 shrink-0 transition-colors",
                            isActive ? "text-white" : "text-muted-foreground"
                          )}
                        />
                        <span className="truncate">{item.label}</span>

                        {isActive && (
                          <span className="absolute right-3.5 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-3">
        <div className="text-[10px] text-center text-muted-foreground/60 font-medium">
          GearRental Platform © {new Date().getFullYear()}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}