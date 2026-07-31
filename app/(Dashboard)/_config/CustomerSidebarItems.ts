import { ISidebarItem } from "@/lib/types";
import { LayoutDashboard, ShoppingBag, CreditCard } from "lucide-react";

export const CUSTOMER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Rentals",
    href: "/dashboard/my-rentals",
    icon: ShoppingBag,
  },
  {
    label: "Payment History",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
];