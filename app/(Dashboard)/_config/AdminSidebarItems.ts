import { ISidebarItem } from "@/lib/types";
import { LayoutDashboard, Users, Package, FolderTree, ShoppingBag, CreditCard, Plus } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Admin Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Manage Users",
    href: "/admin-dashboard/users",
    icon: Users,
  },
  {
    label: "All Gear Listings",
    href: "/admin-dashboard/all-gears",
    icon: Package,
  },
  {
    label: "Add New Category",
    href: "/admin-dashboard/add-category",
    icon: Plus,
  },
  {
    label: "Categories",
    href: "/admin-dashboard/categories",
    icon: FolderTree,
  },
  {
    label: "All Rentals",
    href: "/admin-dashboard/all-rentals",
    icon: ShoppingBag,
  },
];