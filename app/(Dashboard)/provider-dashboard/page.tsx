
import Link from "next/link";
import { format } from "date-fns";
import {
  Plus,
  DollarSign,
  PackageCheck,
  Clock,
  ArrowUpRight,
  XCircle,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllRentals } from "../_actions/provider-dashboard/getAllRentals";
import { IRental } from "@/lib/types";
import RentalTable from "../_components/provider-dashboard/RentalTable";

export default async function ProviderDashboardPage() {
  const rentals: IRental[] = await getAllRentals()

  const activeRentals = rentals.filter((r) => ["CONFIRMED", "PAID", "PICKED_UP"].includes(r.status));
  const pendingRentals = rentals.filter((r) => r.status === "PLACED");
  const cancelledRentals = rentals.filter((r) => r.status === "CANCELLED");
  const totalSpent = rentals.filter((r) => r.status !== "CANCELLED").reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Provider Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your listed gears, incoming rental requests, and track earnings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            asChild
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-10 gap-2 shadow-sm"
          >
            <Link href="/provider-dashboard/add-gear">
              <Plus className="w-4 h-4" /> Add New Gear
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card
          className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Earnings
              </span>
              <div className={`p-2.5 rounded-2xl bg-emerald-50 text-emerald-600`}>
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {totalSpent}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +12.5%
                </span>
                <span className="text-slate-400">• vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className="rounded-3xl border-slate-200/80 bg-blue-50 text-blue-600 shadow-xs hover:shadow-md transition-shadow"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Active Rentals
              </span>
              <div className={`p-2.5 rounded-2xl bg-emerald-50 text-emerald-600`}>
                <PackageCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {activeRentals?.length} Rentals
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-emerald-600 flex items-center">
                  <Clock className="w-3 h-3 mr-0.5" /> +{activeRentals?.length} Active
                </span>
                <span className="text-slate-400">• currently in use</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className="rounded-3xl border-slate-200/80 bg-amber-50 text-amber-600 shadow-xs hover:shadow-md transition-shadow"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pending Requests
              </span>
              <div className={`p-2.5 rounded-2xl bg-emerald-50 text-emerald-600`}>
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {pendingRentals?.length} Rentals
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> Requires Action
                </span>
                <span className="text-slate-400">• needs approval</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className="rounded-3xl border-slate-200/80 bg-amber-50 text-amber-600 shadow-xs hover:shadow-md transition-shadow"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Cancelled Rentals
              </span>
              <div className={`p-2.5 rounded-2xl bg-emerald-50 text-emerald-600`}>
                <XCircle className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {cancelledRentals?.length} Rentals
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> Requires Action
                </span>
                <span className="text-slate-400">• needs approval</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                Pending Rental Requests
              </h2>
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-bold text-[10px] rounded-full">
                02 Action Needed
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
            >
              <Link href="/provider-dashboard/rentals">
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50 border-b border-slate-100">
                  <TableRow>
                    <TableHead className="text-xs font-bold text-slate-600">Gear Item</TableHead>
                    <TableHead className="text-xs font-bold text-slate-600">Dates</TableHead>
                    <TableHead className="text-xs font-bold text-slate-600">Total</TableHead>
                    <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
                    <TableHead className="text-xs font-bold text-slate-600 text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {pendingRentals?.slice(0, 6).map((rental) => (
                    <RentalTable key={rental.id} rental={rental} />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">
              Currently Rented Out
            </h2>
            <span className="text-xs font-bold text-slate-400">
              {activeRentals.length} Active
            </span>
          </div>

          <Card className="rounded-3xl border-slate-200/80 bg-white p-4 space-y-3 shadow-xs">
            {activeRentals?.slice(0, 3).map((rental) => (
              <div
                key={rental.id}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 hover:border-slate-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {rental.gearItem.title}
                  </h4>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-[9px] font-bold px-2 py-0.5 rounded-md shrink-0">
                    ON RENT
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Renter: <strong className="text-slate-700">{rental.gearItem.providerId}</strong></span>
                  <span className="flex items-center gap-1 text-slate-600 font-medium">
                    <Clock className="w-3 h-3 text-emerald-600" /> Due: {format(new Date(rental.endDate), "MMM dd")}
                  </span>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full rounded-xl border-slate-200 text-slate-700 text-xs font-bold h-9 mt-2 hover:bg-slate-50"
            >
              <Link href="/provider-dashboard/rentals">
                View All Active Rentals <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}