"use client";

import Link from "next/link";
import { Menu, User, LogOut, Settings, LayoutDashboard, Mountain, PackageCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";


const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Products",
        href: "/products",
    },
    {
        title: "Categories",
        href: "/categories",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];


const userMenuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "My Rentals",
        href: "/rentals",
        icon: PackageCheck,
    },
    {
        title: "Profile",
        href: "/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];


export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-opacity hover:opacity-90"
                >

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                        <Mountain size={20} className="shrink-0" />
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        Gear<span className="text-primary">Up</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm transition-colors ${item.href === pathname
                                ? "text-primary font-bold border-b-2 border-primary"
                                : "hover:text-primary font-semibold"
                                }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* User Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-3 rounded-full px-2 hover:bg-muted"
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/avatar.png" />
                                    <AvatarFallback>
                                        NA
                                    </AvatarFallback>
                                </Avatar>

                                <div className="hidden md:flex flex-col items-start">
                                    <span className="text-sm font-medium">
                                        Mohammad Abu Naim
                                    </span>

                                    <span className="text-xs font-semibold text-gray-500">
                                        Customer
                                    </span>
                                </div>

                            </Button>
                        </DropdownMenuTrigger>


                        <DropdownMenuContent
                            align="end"
                            className="w-56"
                        >

                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-2">
                                    <p className="text-sm font-medium leading-none pl-1">
                                        Mohammad Abu Naim
                                    </p>

                                    <span className="w-fit rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                                        Customer Account
                                    </span>
                                </div>
                            </DropdownMenuLabel>

                            <DropdownMenuSeparator />


                            {userMenuItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <DropdownMenuItem
                                        key={item.href}
                                        asChild
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <Icon className="h-4 w-4" />

                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                );
                            })}


                            <DropdownMenuSeparator />


                            <DropdownMenuItem
                                className="cursor-pointer text-destructive"
                            >
                                <LogOut className="mr-2 h-4 w-4" />

                                Logout
                            </DropdownMenuItem>


                        </DropdownMenuContent>

                    </DropdownMenu>



                    {/* Mobile Menu */}
                    <Sheet>

                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>


                        <SheetContent side="right">

                            <div className="mt-8 flex flex-col gap-5 p-5">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-base font-medium"
                                    >
                                        {item.title}
                                    </Link>
                                ))}

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}