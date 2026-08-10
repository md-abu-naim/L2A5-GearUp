"use client";

import Link from "next/link";
import {
  Menu,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
  Mountain,
  PackageCheck,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { IUSER } from "@/lib/types";
import { logout } from "@/services/logout";
import { toast } from "sonner";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Gears", href: "/gears" },
  { title: "Categories", href: "/categories" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const userMenuItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Rentals", href: "/rentals", icon: PackageCheck },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];

type NavbarProps = {
  user: IUSER;
};

export default function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleUserMenuAction = async (action: string) => {
    if (action === "/dashboard") {
      const role = user?.data?.user?.role;
      if (role === "CUSTOMER") {
        router.push("/dashboard");
      } else if (role === "PROVIDER") {
        router.push("/provider-dashboard");
      } else if (role === "ADMIN") {
        router.push("/admin-dashboard");
      }
      return;
    }

    if (action === "logout") {
      await logout();
      toast.success("Logged out successfully");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] shrink-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Mountain className="h-5 w-5 shrink-0" />
          </div>

          <span className="text-xl font-black tracking-tight text-foreground">
            Gear<span className="text-emerald-600">Up</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-emerald-600 font-bold"
                    : "text-muted-foreground hover:text-foreground font-medium"
                }`}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 🔹 RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          <div className="flex items-center justify-center">
            <ThemeToggle />
          </div>

          {user?.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2.5 rounded-full pl-1.5 pr-2.5 py-1 hover:bg-muted/60 transition-colors h-10"
                >
                  <Avatar className="h-8 w-8 border border-border">
                    <AvatarImage
                      src={user.data.user.profileImage || "/avatar.png"}
                      alt={user.data.user.name}
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {user.data.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="hidden lg:flex flex-col items-start text-left">
                    <span className="text-xs font-semibold leading-tight text-foreground max-w-25 truncate">
                      {user.data.user.name}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground capitalize">
                      {user.data.user.role?.toLowerCase()}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 rounded-2xl p-2 shadow-xl border-border"
              >
                <DropdownMenuLabel className="p-2 font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {user.data.user.name}
                    </p>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                        {user.data.user.role}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="my-1" />

                {userMenuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    onClick={() => handleUserMenuAction(item.href)}
                    className="rounded-xl p-2.5 cursor-pointer text-xs font-medium focus:bg-emerald-500/10 focus:text-emerald-600"
                  >
                    <item.icon className="mr-2.5 h-4 w-4" />
                    <span>{item.title}</span>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator className="my-1" />

                <DropdownMenuItem
                  onClick={() => handleUserMenuAction("logout")}
                  className="rounded-xl p-2.5 cursor-pointer text-xs font-medium text-destructive focus:bg-destructive/10"
                >
                  <LogOut className="mr-2.5 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              size="sm"
              className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 h-9 shadow-md shadow-emerald-600/20 shrink-0"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-xl border-border h-9 w-9 shrink-0"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-6">
              <SheetHeader className="text-left border-b border-border pb-4">
                <SheetTitle className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-emerald-600" />
                  <span className="font-extrabold text-foreground">
                    Gear<span className="text-emerald-600">Up</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = item.href === pathname;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-600 font-bold"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}