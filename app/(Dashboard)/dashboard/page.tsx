import Link from "next/link";
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
import { getMyRentals } from "../_actions/CustomerDashboard/getMyRentals";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { IRental } from "@/lib/types";

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

export default async function CustomerDashboardPage() {
  const rentals: IRental[] = await getMyRentals()

  const activeRentals = rentals.filter((r) => ["CONFIRMED", "PAID", "PICKED_UP"].includes(r.status)).length;

  const completedRentals = rentals.filter((r) => r.status === "RETURNED").length;

  const totalSpent = rentals.filter((r) => r.status !== "CANCELLED").reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-8">
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
              {rentals?.length}
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
              {activeRentals}
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
              {completedRentals}
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
              ${totalSpent}
            </p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Life-time expenditure
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Order History</h2>
            <Button variant="link" size="sm" asChild className="text-emerald-600 text-xs font-semibold">
              <Link href="/dashboard/my-rentals">
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
                {rentals.map((rental) => (
                  <TableRow key={rental.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 font-bold text-xs">
                          Qty: {rental.quantity}
                        </div>
                        <div>
                          <p className="font-bold text-xs text-foreground line-clamp-1">
                            Gear ID: {rental.gearItemId.slice(0, 8)}...
                          </p>
                          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono text-muted-foreground uppercase">
                            Order #{rental.id.slice(0, 8)}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {format(new Date(rental.startDate), "MMM dd, yyyy")}
                      <span className="mx-1 text-emerald-600 font-bold">→</span>
                      {format(new Date(rental.endDate), "MMM dd, yyyy")}
                    </TableCell>

                    <TableCell className="text-xs font-black text-foreground">
                      ${rental.totalPrice.toLocaleString()}
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          rental.status === "PLACED"
                            ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                            : rental.status === "CONFIRMED"
                              ? "bg-blue-500/10 text-blue-700 border-blue-500/20"
                              : rental.status === "PAID"
                                ? "bg-green-500/10 text-green-700 border-green-500/20"
                                : rental.status === "PICKED_UP"
                                  ? "bg-purple-500/10 text-purple-700 border-purple-500/20"
                                  : rental.status === "RETURNED"
                                    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
                                    : "bg-red-500/10 text-red-700 border-red-500/20"
                        }
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {rental.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Right Side: Payment History */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Payment History</h2>
            <Button variant="link" size="sm" asChild className="text-emerald-600 text-xs font-semibold">
              <Link href="/dashboard/payments">
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
                <div>
                  <Badge
                    className={cn(
                      "font-semibold gap-1 text-[11px] rounded-lg border shadow-none transition-colors",
                      payment.status === "COMPLETED" && "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20",
                      payment.status === "PENDING" && "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20",
                      payment.status === "FAILED" && "bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 border-rose-500/20"
                    )}
                  >
                    {payment.status === "COMPLETED" && <CheckCircle2 className="w-3 h-3" />}
                    {payment.status === "PENDING" && <Clock className="w-3 h-3" />}
                    {payment.status === "FAILED" && <XCircle className="w-3 h-3" />}
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}