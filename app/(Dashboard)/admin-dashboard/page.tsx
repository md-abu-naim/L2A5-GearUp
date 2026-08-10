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
    const rentals: IRental[] = await getAllRentals();
    const result = await getAllUsers();

    const users: User[] = result.data.users;
    const meta = result.data.meta;

    const activeRentals = rentals.filter((r) =>
        ["CONFIRMED", "PAID", "PICKED_UP"].includes(r.status)
    ).length;

    const pendingRentals = rentals.filter(
        (r) => r.status === "PLACED"
    ).length;

    const totalSpent = rentals
        .filter((r) => r.status !== "CANCELLED")
        .reduce((acc, curr) => acc + curr.totalPrice, 0);

    const stats = {
        totalRevenue: totalSpent,
        totalUsers: meta.total,
        activeRentals,
        pendingVerifications: pendingRentals,
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                            Admin Overview
                        </h1>

                        <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 font-bold text-[10px] rounded-full">
                            System Live
                        </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Monitor platform performance, manage users, and view transactions.
                    </p>
                </div>

                <Button
                    size="sm"
                    asChild
                    className="rounded-xl bg-foreground text-background hover:bg-foreground/90 font-bold text-xs h-10 gap-2 shadow-xs"
                >
                    <Link href="/admin/reports">
                        <Activity className="w-4 h-4 text-emerald-500" />
                        View System Logs
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Total Revenue */}
                <Card className="rounded-3xl border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Total Revenue
                            </span>

                            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600">
                                <DollarSign className="w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-foreground tracking-tight">
                                ${stats.totalRevenue.toLocaleString()}
                            </h3>

                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-emerald-600 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-0.5" />
                                    +18.4%
                                </span>

                                <span className="text-muted-foreground">
                                    • vs last month
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Total Users */}
                <Card className="rounded-3xl border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Total Platform Users
                            </span>

                            <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600">
                                <Users className="w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-foreground tracking-tight">
                                {stats.totalUsers.toLocaleString()}
                            </h3>

                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-blue-600 flex items-center">
                                    <TrendingUp className="w-3 h-3 mr-0.5" />
                                    +120 new
                                </span>

                                <span className="text-muted-foreground">
                                    • this week
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Active Rentals */}
                <Card className="rounded-3xl border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Active Rentals
                            </span>

                            <div className="p-2.5 rounded-2xl bg-violet-500/10 text-violet-600">
                                <PackageCheck className="w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-foreground tracking-tight">
                                {stats.activeRentals}
                            </h3>

                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-violet-600 flex items-center">
                                    <Activity className="w-3 h-3 mr-0.5" />
                                    Ongoing
                                </span>

                                <span className="text-muted-foreground">
                                    • in circulation
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Verification */}
                <Card className="rounded-3xl border-border bg-card shadow-xs hover:shadow-md transition-shadow">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Identity Verification
                            </span>

                            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-600">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-foreground tracking-tight">
                                {stats.pendingVerifications} Pending
                            </h3>

                            <div className="flex items-center gap-1.5 mt-1 text-xs">
                                <span className="font-bold text-amber-600 flex items-center">
                                    Action Needed
                                </span>

                                <span className="text-muted-foreground">
                                    • review NID/Docs
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-black text-foreground tracking-tight">
                                    Recent Rental Transactions
                                </h2>

                                <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 font-bold text-[10px] rounded-full">
                                    Real-time
                                </Badge>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-500/10 gap-1 rounded-xl"
                            >
                                <Link href="/admin/transactions">
                                    View All Transactions
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>

                        <Card className="rounded-3xl border-border bg-card overflow-hidden shadow-xs">
                            <CardContent className="p-0 overflow-x-auto">
                                <Table>
                                    <TableHeader className="bg-muted/60 border-b border-border">
                                        <TableRow className="border-border hover:bg-transparent">
                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Transaction
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Gear Item
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Renter / Provider
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Amount
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground text-right">
                                                Status
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {rentals.length > 0 ? (
                                            rentals.map((txn) => (
                                                <TableRow
                                                    key={txn.id}
                                                    className="border-border hover:bg-muted/50 transition-colors"
                                                >
                                                    {/* Transaction */}
                                                    <TableCell className="font-bold text-xs text-foreground whitespace-nowrap">
                                                        #{txn.id.slice(0, 8)}
                                                    </TableCell>

                                                    {/* Gear */}
                                                    <TableCell>
                                                        <div className="flex items-center gap-3">
                                                            {txn.gearItem?.image && (
                                                                <Image
                                                                    width={500}
                                                                    height={400}
                                                                    src={txn.gearItem.image}
                                                                    alt={txn.gearItem.title}
                                                                    className="w-9 h-9 rounded-xl object-cover shrink-0 border border-border"
                                                                />
                                                            )}

                                                            <div className="min-w-0">
                                                                <p className="font-bold text-xs text-foreground line-clamp-1">
                                                                    {txn.gearItem?.title}
                                                                </p>

                                                                <span className="text-[10px] font-semibold text-muted-foreground">
                                                                    {txn.gearItem?.category} •{" "}
                                                                    {txn.gearItem?.brand}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell className="text-xs font-medium">
                                                        <p className="text-foreground font-bold">
                                                            Customer:{" "}
                                                            <span className="text-muted-foreground">
                                                                #{txn.customerId.slice(0, 8)}
                                                            </span>
                                                        </p>

                                                        <p className="text-[10px] text-muted-foreground">
                                                            Provider: #
                                                            {txn.gearItem?.providerId?.slice(0, 8)}
                                                        </p>
                                                    </TableCell>

                                                    <TableCell>
                                                        <div className="text-xs font-black text-foreground">
                                                            ${txn.totalPrice}
                                                        </div>

                                                        <div className="text-[10px] font-medium text-muted-foreground">
                                                            {txn.quantity}{" "}
                                                            {txn.quantity > 1 ? "items" : "item"}
                                                        </div>
                                                    </TableCell>

                                                    <TableCell className="text-right">
                                                        <Badge
                                                            className={`text-[10px] font-bold rounded-md px-2 py-0.5 border uppercase ${txn.status === "PLACED"
                                                                    ? "bg-amber-500/15 text-amber-700 border-amber-500/20"
                                                                    : txn.status === "CONFIRMED"
                                                                        ? "bg-blue-500/15 text-blue-700 border-blue-500/20"
                                                                        : txn.status === "PAID"
                                                                            ? "bg-emerald-500/15 text-emerald-700 border-emerald-500/20"
                                                                            : txn.status === "PICKED_UP"
                                                                                ? "bg-indigo-500/15 text-indigo-700 border-indigo-500/20"
                                                                                : txn.status === "RETURNED"
                                                                                    ? "bg-green-500/15 text-green-700 border-green-500/20"
                                                                                    : txn.status === "CANCELLED"
                                                                                        ? "bg-rose-500/15 text-rose-700 border-rose-500/20"
                                                                                        : "bg-muted text-muted-foreground border-border"
                                                                }`}
                                                        >
                                                            {txn.status}
                                                        </Badge>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow className="border-border">
                                                <TableCell
                                                    colSpan={5}
                                                    className="py-12 text-center text-xs text-muted-foreground"
                                                >
                                                    No rental transactions found.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recently Registered Users */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-black text-foreground tracking-tight">
                                Recently Registered Users
                            </h2>

                            <Button
                                variant="ghost"
                                size="sm"
                                asChild
                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-500/10 gap-1 rounded-xl"
                            >
                                <Link href="/admin/users">
                                    View All Users
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                            </Button>
                        </div>

                        <Card className="rounded-3xl border-border bg-card overflow-hidden shadow-xs">
                            <CardContent className="p-0 overflow-x-auto">
                                <Table>
                                    <TableHeader className="bg-muted/60 border-b border-border">
                                        <TableRow className="border-border hover:bg-transparent">
                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                User
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Phone
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Role
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground">
                                                Status
                                            </TableHead>

                                            <TableHead className="text-xs font-bold text-muted-foreground text-right">
                                                Action
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {users?.slice(0, 6).map((user) => (
                                            <UsersTable
                                                key={user.id}
                                                user={user}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <h2 className="text-lg font-black text-foreground tracking-tight">
                        System Control
                    </h2>

                    <Card className="rounded-3xl border-border bg-card p-5 space-y-3 shadow-xs">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Quick Shortcuts
                        </h3>

                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                asChild
                                className="w-full justify-start rounded-2xl border-border text-foreground text-xs font-bold h-11 hover:bg-muted gap-2.5"
                            >
                                <Link href="/admin/categories">
                                    <Layers className="w-4 h-4 text-emerald-600" />
                                    Manage Categories & Types
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full justify-start rounded-2xl border-border text-foreground text-xs font-bold h-11 hover:bg-muted gap-2.5"
                            >
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                Identity Verifications
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full justify-start rounded-2xl border-border text-foreground text-xs font-bold h-11 hover:bg-muted gap-2.5"
                            >
                                <CreditCard className="w-4 h-4 text-emerald-600" />
                                Provider Payout Requests
                            </Button>
                        </div>
                    </Card>

                    <Card className="rounded-3xl border-border bg-card p-6 space-y-4 shadow-xs">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

                                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                                    System Health
                                </span>
                            </div>

                            <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 text-[10px] font-bold">
                                Optimal
                            </Badge>
                        </div>

                        <div className="space-y-2 text-xs">
                            <div className="flex justify-between font-medium">
                                <span className="text-muted-foreground">
                                    Database Connectivity
                                </span>

                                <span className="text-emerald-600 font-bold">
                                    99.9%
                                </span>
                            </div>

                            <div className="flex justify-between font-medium">
                                <span className="text-muted-foreground">
                                    Payment Gateway
                                </span>

                                <span className="text-emerald-600 font-bold">
                                    Active
                                </span>
                            </div>

                            <div className="flex justify-between font-medium">
                                <span className="text-muted-foreground">
                                    Storage Service
                                </span>

                                <span className="text-emerald-600 font-bold">
                                    Normal
                                </span>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-border">
                            <p className="text-[11px] text-muted-foreground">
                                Last system audit:{" "}
                                <strong className="text-foreground">
                                    {format(new Date(), "MMM dd, yyyy")}
                                </strong>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}