import { ISidebarItem } from "@/lib/types";
import { LayoutDashboard, Package, PlusCircle, ShoppingBag, CreditCard } from "lucide-react";

export const PROVIDER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Provider Dashboard",
    href: "/provider-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Gear List",
    href: "/provider-dashboard/gear",
    icon: Package,
  },
  {
    label: "Add New Gear",
    href: "/provider-dashboard/gear/new",
    icon: PlusCircle,
  },
  {
    label: "Rental Requests",
    href: "/provider-dashboard/rentals",
    icon: ShoppingBag,
  },
  {
    label: "Earnings",
    href: "/provider-dashboard/payments",
    icon: CreditCard,
  },
];