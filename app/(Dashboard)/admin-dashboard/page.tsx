import Link from "next/link";
import { format } from "date-fns";
import {
    Users,
    PackageCheck,
    DollarSign,
    TrendingUp,
    ShieldCheck,
    ChevronRight,
    Activity,
    Layers,
    CreditCard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getAllRentals } from "../_actions/provider-dashboard/getAllRentals";
import { getAllUsers } from "../_actions/admin-dashboard/getAllUsers";
import { IRental, User } from "@/lib/types";
import Image from "next/image";
import UsersTable from "../_components/admin-dashboard/UsersTable";

export default async function AdminDashboardPage() {
    const rentals: IRental[] = await getAllRentals()
    const result = await getAllUsers()
    const users: User[] = result.data.users;
    const meta = result.data.meta;

    const activeRentals = rentals.filter((r) => ["CONFIRMED", "PAID", "PICKED_UP"].includes(r.status))?.length;
    const pendingRentals = rentals.filter((r) => r.status === "PLACED")?.length;
    const totalSpent = rentals.filter((r) => r.status !== "CANCELLED").reduce((acc, curr) => acc + curr.totalPrice, 0);

    const stats = {
        totalRevenue: totalSpent,
        totalUsers: meta.total,
        activeRentals: activeRentals,
        pendingVerifications: pendingRentals,
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                            Admin Overview
                        </h1>
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
                            System Live
                        </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Monitor platform performance, manage users, and view transactions.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        size="sm"
                        asChild
                        className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs"
                    >
                        <Link href="/admin/reports">
                            <Activity className="w-4 h-4 text-emerald-400" /> View System Logs
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Total Revenue
                            </span>
                            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                                <DollarSign className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                ${stats.totalRevenue.toLocaleString()}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-emerald-600 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
                                </span>
                                <span className="text-slate-400">• vs last month</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Total Platform Users
                            </span>
                            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600">
                                <Users className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                {stats.totalUsers.toLocaleString()}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-blue-600 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-0.5" /> +120 new
                                </span>
                                <span className="text-slate-400">• this week</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Active Rentals */}
                <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Active Rentals
                            </span>
                            <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600">
                                <PackageCheck className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                {stats.activeRentals}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-purple-600 flex items-center">
                                    <Activity className="w-3 h-3 mr-0.5" /> Ongoing
                                </span>
                                <span className="text-slate-400">• in circulation</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Identity Verification
                            </span>
                            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                {stats.pendingVerifications} Pending
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-amber-600 flex items-center">
                                    Action Needed
                                </span>
                                <span className="text-slate-400">• review NID/Docs</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/*  Left side Transactions & Right side System Control */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                                    Recent Rental Transactions
                                </h2>
                                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
                                    Real-time
                                </Badge>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
                            >
                                <Link href="/admin/transactions">
                                    View All Transactions <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>

                        <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader className="bg-slate-50 border-b border-slate-100">
                                        <TableRow>
                                            <TableHead className="text-xs font-bold text-slate-600">Transaction</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Gear Item</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Renter / Provider</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Amount</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600 text-right">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {rentals.map((txn) => (
                                            <TableRow key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                                                <TableCell className="font-bold text-xs text-slate-900">
                                                    #{txn.id.slice(0, 8)}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        {txn.gearItem?.image && (
                                                            <Image width={500} height={400}
                                                                src={txn.gearItem.image}
                                                                alt={txn.gearItem.title}
                                                                className="w-9 h-9 rounded-xl object-cover shrink-0 border border-slate-200"
                                                            />
                                                        )}
                                                        <div>
                                                            <p className="font-bold text-xs text-slate-900 line-clamp-1">
                                                                {txn.gearItem?.title}
                                                            </p>
                                                            <span className="text-[10px] font-semibold text-slate-400">
                                                                {txn.gearItem?.category} • {txn.gearItem?.brand}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-xs text-slate-500 font-medium">
                                                    <p className="text-slate-900 font-bold">
                                                        Customer: <span className="text-slate-600">#{txn.customerId.slice(0, 8)}</span>
                                                    </p>
                                                    <p className="text-[10px] text-slate-400">
                                                        Provider: #{txn.gearItem?.providerId?.slice(0, 8)}
                                                    </p>
                                                </TableCell>

                                                <TableCell>
                                                    <div className="text-xs font-black text-slate-900">
                                                        ${txn.totalPrice}
                                                    </div>
                                                    <div className="text-[10px] font-medium text-slate-400">
                                                        {txn.quantity} {txn.quantity > 1 ? "items" : "item"}
                                                    </div>
                                                </TableCell>

                                                <TableCell className="text-right">
                                                    <Badge
                                                        className={`text-[10px] font-bold rounded-md px-2 py-0.5 border-none uppercase ${txn.status === "PLACED"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : txn.status === "CONFIRMED"
                                                                ? "bg-blue-100 text-blue-700"
                                                                : txn.status === "PAID"
                                                                    ? "bg-emerald-100 text-emerald-700"
                                                                    : txn.status === "PICKED_UP"
                                                                        ? "bg-indigo-100 text-indigo-700"
                                                                        : txn.status === "RETURNED"
                                                                            ? "bg-green-100 text-green-700"
                                                                            : txn.status === "CANCELLED"
                                                                                ? "bg-rose-100 text-rose-700"
                                                                                : "bg-slate-100 text-slate-700"
                                                            }`}
                                                    >
                                                        {txn.status}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* User Management Overview */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-black text-slate-900 tracking-tight">
                                Recently Registered Users
                            </h2>

                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
                            >
                                <Link href="/admin/users">
                                    View All Users <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>

                        <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader className="bg-slate-50 border-b border-slate-100">
                                        <TableRow>
                                            <TableHead className="text-xs font-bold text-slate-600">User</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Phone</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Role</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
                                            <TableHead className="text-xs font-bold text-slate-600 text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {users?.slice(0, 6).map((user) => (
                                            <UsersTable key={user.id} user={user} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                {/* Right Column: Platform Quick Actions */}
                <div className="space-y-6">

                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-black text-slate-900 tracking-tight">
                            System Control
                        </h2>
                    </div>

                    <Card className="rounded-3xl border-slate-200/80 bg-white p-5 space-y-3 shadow-xs">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Quick Shortcuts
                        </h3>

                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                asChild
                                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
                            >
                                <Link href="/admin/categories">
                                    <Layers className="w-4 h-4 text-emerald-600" /> Manage Categories & Types
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                asChild
                                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
                            >
                                <Button>
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Identity Verifications
                                </Button>
                            </Button>

                            <Button
                                variant="outline"
                                asChild
                                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
                            >
                                <span>
                                    <CreditCard className="w-4 h-4 text-emerald-600" /> Provider Payout Requests
                                </span>
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-3xl border-slate-200/80 bg-slate-900 text-white p-6 space-y-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                    System Health
                                </span>
                            </div>
                            <Badge className="bg-emerald-500/20 text-emerald-300 border-none text-[10px] font-bold">
                                Optimal
                            </Badge>
                        </div>

                        <div className="space-y-2 text-xs text-slate-300">
                            <div className="flex justify-between font-medium">
                                <span>Database Connectivity</span>
                                <span className="text-emerald-400 font-bold">99.9%</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>Payment Gateway</span>
                                <span className="text-emerald-400 font-bold">Active</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>Storage Service</span>
                                <span className="text-emerald-400 font-bold">Normal</span>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-slate-800">
                            <p className="text-[11px] text-slate-400">
                                Last system audit: <strong className="text-slate-200">{format(new Date(), "MMM dd, yyyy")}</strong>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}