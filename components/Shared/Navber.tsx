// "use client";

// import Link from "next/link";
// import { Menu, User, LogOut, Settings, LayoutDashboard, Mountain, PackageCheck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { usePathname, useRouter } from "next/navigation";
// import { IUSER } from "@/lib/types";
// import { logout } from "@/services/logout";
// import { toast } from "sonner";


// const navItems = [
//     {
//         title: "Home",
//         href: "/",
//     },
//     {
//         title: "Products",
//         href: "/products",
//     },
//     {
//         title: "Categories",
//         href: "/categories",
//     },
//     {
//         title: "About",
//         href: "/about",
//     },
//     {
//         title: "Contact",
//         href: "/contact",
//     },
// ];

// const userMenuItems = [
//     {
//         title: "Dashboard",
//         href: "/dashboard",
//         icon: LayoutDashboard,
//     },
//     {
//         title: "My Rentals",
//         href: "/rentals",
//         icon: PackageCheck,
//     },
//     {
//         title: "Profile",
//         href: "/profile",
//         icon: User,
//     },
//     {
//         title: "Settings",
//         href: "/settings",
//         icon: Settings,
//     },
// ];

// type NavberProps = {
//     user: IUSER
// }

// export default function Navbar({ user }: NavberProps) {
//     const pathname = usePathname()
//     const router = useRouter()

//     const handleUserMenuAction = async (action: string) => {
//         console.log(`User Menu Action: ${action}`);

//         if (action === "/dashboard") {
//             if (user.data.user.role === "CUSTOMER") {
//                 router.push("/dashboard")
//             }
//             else if (user.data.user.role === "PROVIDER") {
//                 router.push("/provider-dashboard")
//             }
//             else if (user.data.user.role === "ADMIN") {
//                 router.push("/admin-dashboard")
//             }

//             return;
//         }

//         if (action === 'logout') {
//           await logout()
//           toast.success('User Logout Successfully')
//         }
//     }

//     return (
//         <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
//             <div className="container mx-auto flex h-16 items-center justify-between px-4">
//                 <Link
//                     href="/"
//                     className="flex items-center gap-2 transition-opacity hover:opacity-90"
//                 >

//                     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
//                         <Mountain size={20} className="shrink-0" />
//                     </div>

//                     <span className="text-xl font-bold tracking-tight">
//                         Gear<span className="text-primary">Up</span>
//                     </span>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden md:flex items-center gap-6">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`text-sm transition-colors ${item.href === pathname
//                                 ? "text-primary font-bold border-b-2 border-primary"
//                                 : "hover:text-primary font-semibold"
//                                 }`}
//                         >
//                             {item.title}
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Right Side */}
//                 <div className="flex items-center gap-3">

//                     {/* User Dropdown */}
//                     {
//                         user.success ? (
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button
//                                         variant="ghost"
//                                         className="flex items-center gap-3 rounded-full px-2 hover:bg-muted"
//                                     >
//                                         <Avatar className="h-9 w-9">
//                                             <AvatarImage src={`${user.data.user.profileImage} || /avatar.png`} />
//                                             <AvatarFallback>
//                                                 NA
//                                             </AvatarFallback>
//                                         </Avatar>

//                                         <div className="hidden md:flex flex-col items-start">
//                                             <span className="text-sm font-medium">
//                                                 {user.data.user.name}
//                                             </span>

//                                             <span className="text-xs font-semibold text-gray-500">
//                                                 {user.data.user.role}
//                                             </span>
//                                         </div>

//                                     </Button>
//                                 </DropdownMenuTrigger>


//                                 <DropdownMenuContent
//                                     align="end"
//                                     className="w-56"
//                                 >

//                                     <DropdownMenuLabel className="font-normal">
//                                         <div className="flex flex-col space-y-2">
//                                             <p className="text-sm font-medium leading-none pl-1">
//                                                 {user.data.user.name}
//                                             </p>

//                                             <span className="w-fit rounded-full bg-blue-100 px-2.5 py-1 font-medium text-blue-600 uppercase">
//                                                 {user.data.user.role} Account
//                                             </span>
//                                         </div>
//                                     </DropdownMenuLabel>

//                                     <DropdownMenuSeparator />


//                                     {userMenuItems.map((item) => (
//                                         <DropdownMenuItem onClick={() => handleUserMenuAction(item.href)}
//                                             key={item.href} asChild
//                                         >
//                                             <Link
//                                                 href={item.href}
//                                                 className="flex items-center gap-2 cursor-pointer"
//                                             >
//                                                 <item.icon className="h-4 w-4" />

//                                                 {item.title}
//                                             </Link>
//                                         </DropdownMenuItem>
//                                     ))}


//                                     <DropdownMenuSeparator />


//                                     <DropdownMenuItem onClick={async () => { await handleUserMenuAction('logout')}}
//                                         className="cursor-pointer text-destructive"
//                                     >
//                                         <LogOut className="mr-2 h-4 w-4" />

//                                         Logout
//                                     </DropdownMenuItem>


//                                 </DropdownMenuContent>

//                             </DropdownMenu>
//                         ) :
//                             <Link href={'/login'} >
//                                 <Button className="px-4 text-md">
//                                     Login
//                                 </Button>
//                             </Link>
//                     }


//                     {/* Mobile Menu */}
//                     <Sheet>

//                         <SheetTrigger asChild>
//                             <Button
//                                 variant="outline"
//                                 size="icon"
//                                 className="md:hidden"
//                             >
//                                 <Menu className="h-5 w-5" />
//                             </Button>
//                         </SheetTrigger>


//                         <SheetContent side="right">

//                             <div className="mt-8 flex flex-col gap-5 p-5">
//                                 {navItems.map((item) => (
//                                     <Link
//                                         key={item.href}
//                                         href={item.href}
//                                         className="text-base font-medium"
//                                     >
//                                         {item.title}
//                                     </Link>
//                                 ))}

//                             </div>
//                         </SheetContent>
//                     </Sheet>
//                 </div>
//             </div>
//         </div>
//     );
// }


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
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                        <Mountain className="h-5 w-5 shrink-0" />
                    </div>

                    <span className="text-xl font-black tracking-tight text-foreground">
                        Gear<span className="text-emerald-600">Up</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = item.href === pathname;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm transition-all duration-200 relative py-1 ${isActive
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

                <div className="flex items-center gap-3">
                    {user?.success ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-3 rounded-full pl-2 pr-3 py-1.5 hover:bg-muted/60 transition-colors"
                                >
                                    <Avatar className="h-8 w-8 border border-border">
                                        <AvatarImage
                                            src={user.data.user.profileImage || "/avatar.png"}
                                            alt={user.data.user.name}
                                        />
                                        <AvatarFallback className="bg-emerald-100 text-emerald-800 text-xs font-bold">
                                            {
                                                user.data.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
                                            }
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="hidden lg:flex flex-col items-start text-left">
                                        <span className="text-xs font-semibold leading-tight text-foreground">
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
                                        <p className="text-sm font-semibold text-foreground">
                                            {user.data.user.name}
                                        </p>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">
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
                                        className="rounded-xl p-2.5 cursor-pointer text-xs font-medium focus:bg-emerald-500/10 focus:text-emerald-700"
                                    >
                                        <item.icon className="mr-2.5 h-4 w-4" />
                                        <span>{item.title}</span>
                                    </DropdownMenuItem>
                                ))}

                                <DropdownMenuSeparator className="my-1" />

                                <DropdownMenuItem
                                    onClick={() => handleUserMenuAction("logout")}
                                    className="rounded-xl p-2.5 cursor-pointer text-xs font-medium text-destructive focus:bg-destructive/10 focus:text-destructive"
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
                            className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 shadow-md shadow-emerald-600/20"
                        >
                            <Link href="/login">Login</Link>
                        </Button>
                    )}

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden rounded-xl border-border h-9 w-9"
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
                                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive
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