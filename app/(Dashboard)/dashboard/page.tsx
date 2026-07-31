import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  CreditCard,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// --- Static Mock Data ---
const MOCK_STATS = {
  totalRentals: 8,
  activeRentals: 2,
  completedRentals: 5,
  totalSpent: 1250,
};

const MOCK_RECENT_RENTALS = [
  {
    id: "RENT-9021",
    gearName: "Exclusive Mountain Bike",
    category: "Bike",
    startDate: "2026-08-01",
    endDate: "2026-08-05",
    totalAmount: 500,
    status: "APPROVED",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "RENT-8834",
    gearName: "2-Person Waterproof Tent",
    category: "Camping",
    startDate: "2026-07-20",
    endDate: "2026-07-23",
    totalAmount: 120,
    status: "COMPLETED",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "RENT-8120",
    gearName: "Pro Hiking Backpack 50L",
    category: "Trekking",
    startDate: "2026-07-10",
    endDate: "2026-07-12",
    totalAmount: 60,
    status: "PENDING",
    image:
      "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&q=80&w=200",
  },
];

const MOCK_PAYMENTS = [
  {
    id: "PAY-1092",
    rentalId: "RENT-9021",
    amount: 500,
    method: "Stripe",
    date: "2026-07-30",
    status: "SUCCESS",
  },
  {
    id: "PAY-1044",
    rentalId: "RENT-8834",
    amount: 120,
    method: "bKash",
    date: "2026-07-19",
    status: "SUCCESS",
  },
  {
    id: "PAY-0988",
    rentalId: "RENT-8120",
    amount: 60,
    method: "SSLCommerz",
    date: "2026-07-09",
    status: "PENDING",
  },
];

// Helper for Status Badge Styling
const getStatusBadge = (status: string) => {
  switch (status) {
    case "APPROVED":
    case "SUCCESS":
    case "COMPLETED":
      return (
        <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 font-semibold gap-1 text-[11px] rounded-lg">
          <CheckCircle2 className="w-3 h-3" /> {status}
        </Badge>
      );
    case "PENDING":
      return (
        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20 font-semibold gap-1 text-[11px] rounded-lg">
          <Clock className="w-3 h-3" /> PENDING
        </Badge>
      );
    case "CANCELLED":
    case "FAILED":
      return (
        <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20 font-semibold gap-1 text-[11px] rounded-lg">
          <XCircle className="w-3 h-3" /> {status}
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="text-[11px] rounded-lg">
          {status}
        </Badge>
      );
  }
};

export default function CustomerDashboardPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
            Customer Dashboard
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Welcome back! Overview of your rentals, orders and payment transactions.
          </p>
        </div>
        <Button
          asChild
          className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-10 w-fit shadow-md shadow-emerald-600/10"
        >
          <Link href="/gear">
            <ShoppingBag className="w-4 h-4 mr-2" /> Rent New Gear
          </Link>
        </Button>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="rounded-2xl border-border/60 bg-card p-5 shadow-xs hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              Total Rentals
            </span>
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-black text-foreground">
              {MOCK_STATS.totalRentals}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              All time rental orders
            </p>
          </div>
        </Card>

        <Card className="rounded-2xl border-border/60 bg-card p-5 shadow-xs hover:border-amber-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              Active Rentals
            </span>
            <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-black text-foreground">
              {MOCK_STATS.activeRentals}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Currently in use / approved
            </p>
          </div>
        </Card>

        <Card className="rounded-2xl border-border/60 bg-card p-5 shadow-xs hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              Completed
            </span>
            <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-black text-foreground">
              {MOCK_STATS.completedRentals}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Successfully returned
            </p>
          </div>
        </Card>

        <Card className="rounded-2xl border-border/60 bg-card p-5 shadow-xs hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              Total Spent
            </span>
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-black text-foreground">
              ${MOCK_STATS.totalSpent}
            </p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Life-time expenditure
            </p>
          </div>
        </Card>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Order History (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Order History</h2>
            <Button variant="link" size="sm" asChild className="text-emerald-600 text-xs font-semibold">
              <Link href="/dashboard/customer/rentals">
                View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <Card className="rounded-2xl border-border/60 bg-card overflow-hidden shadow-xs">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="text-xs font-bold uppercase">Gear</TableHead>
                  <TableHead className="text-xs font-bold uppercase">Duration</TableHead>
                  <TableHead className="text-xs font-bold uppercase">Total</TableHead>
                  <TableHead className="text-xs font-bold uppercase">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_RECENT_RENTALS.map((rental) => (
                  <TableRow key={rental.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-muted shrink-0">
                          <Image
                            src={rental.image}
                            alt={rental.gearName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-foreground line-clamp-1">
                            {rental.gearName}
                          </p>
                          <span className="text-[10px] text-muted-foreground uppercase">
                            {rental.id}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {rental.startDate} <span className="mx-0.5">→</span> {rental.endDate}
                    </TableCell>
                    <TableCell className="text-xs font-bold text-foreground">
                      ${rental.totalAmount}
                    </TableCell>
                    <TableCell>{getStatusBadge(rental.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Right Side: Payment History (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Payment History</h2>
            <Button variant="link" size="sm" asChild className="text-emerald-600 text-xs font-semibold">
              <Link href="/dashboard/customer/payments">
                View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <Card className="rounded-2xl border-border/60 bg-card p-4 space-y-3 shadow-xs">
            {MOCK_PAYMENTS.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/40 hover:border-border transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-foreground">
                      ${payment.amount}
                    </p>
                    <span className="text-[10px] font-medium text-muted-foreground bg-background px-1.5 py-0.5 rounded border border-border/50">
                      {payment.method}
                    </span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    ID: {payment.id} • {payment.date}
                  </p>
                </div>
                <div>{getStatusBadge(payment.status)}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}