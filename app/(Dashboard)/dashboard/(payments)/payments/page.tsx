
import Link from "next/link";
import { format } from "date-fns";
import {
  CreditCard,
  Search,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Receipt,
  RotateCcw,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { IPayment } from "@/lib/types";
import { getMyPayments } from "@/app/(Dashboard)/_actions/dashboard/getMyPayments";

export default async function PaymentHistoryPage() {
  const payments: IPayment[] = await getMyPayments();

  const completedPayments = payments.filter(
    (payment) =>
      payment.status === "COMPLETED" || payment.status === "PAID"
  );

  const totalSpent = completedPayments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Receipt className="h-5 w-5" />
              </div>

              <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Payment History
              </h1>
            </div>

            <p className="max-w-2xl text-sm text-muted-foreground">
              Track and manage all your gear rental transactions and payment
              records in one place.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-foreground px-4 text-sm font-bold text-background shadow-sm transition-all hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Export Ledger
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <CreditCard className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Total Spent
                </p>
                <h3 className="mt-1 text-2xl font-black text-foreground">
                  ${totalSpent.toLocaleString()}
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Completed Payments
                </p>
                <h3 className="mt-1 text-2xl font-black text-foreground">
                  {completedPayments.length}
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Payment Security
                </p>

                <h3 className="mt-1 flex items-center gap-1.5 text-sm font-bold text-foreground">
                  256-bit Encrypted
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-4">
            <div>
              <h2 className="text-sm font-black text-foreground">
                Transaction History
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {payments.length} transaction
                {payments.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <CreditCard className="h-4 w-4" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-225 border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Rented Gear</th>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {payments.length > 0 ? (
                  payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="group transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                            <Image
                              fill
                              sizes="48px"
                              src={payment.rentalOrder.gearItem.image}
                              alt={payment.rentalOrder.gearItem.title}
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-55 truncate text-sm font-bold text-foreground transition-colors group-hover:text-emerald-600">
                              {payment.rentalOrder.gearItem.title}
                            </p>

                            <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                              <span>
                                Brand:{" "}
                                {payment.rentalOrder.gearItem.brand}
                              </span>
                              <span className="opacity-50">•</span>
                              <span>
                                Qty: {payment.rentalOrder.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <p className="font-mono text-xs font-bold text-foreground">
                          {payment.transactionId}
                        </p>

                        <span className="mt-1 block font-mono text-[10px] uppercase text-muted-foreground">
                          #{payment.id}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          {format(
                            new Date(payment.createdAt),
                            "MMM dd, yyyy"
                          )}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="text-sm font-black text-foreground">
                          ${payment.amount.toLocaleString()}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                            payment.status === "COMPLETED"
                              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600"
                              : payment.status === "PAID"
                                ? "border-blue-500/20 bg-blue-500/10 text-blue-600"
                                : payment.status === "PENDING"
                                  ? "border-amber-500/20 bg-amber-500/10 text-amber-600"
                                  : payment.status === "FAILED"
                                    ? "border-rose-500/20 bg-rose-500/10 text-rose-600"
                                    : "border-purple-500/20 bg-purple-500/10 text-purple-600"
                          }`}
                        >
                          {payment.status === "COMPLETED" && (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          )}

                          {payment.status === "PAID" && (
                            <CreditCard className="h-3.5 w-3.5" />
                          )}

                          {payment.status === "PENDING" && (
                            <Clock className="h-3.5 w-3.5" />
                          )}

                          {payment.status === "FAILED" && (
                            <XCircle className="h-3.5 w-3.5" />
                          )}

                          {payment.status === "REFUNDED" && (
                            <RotateCcw className="h-3.5 w-3.5" />
                          )}

                          {payment.status}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <Link
                          href={`/dashboard/payments/${payment.id}`}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-600"
                        >
                          Payment Details
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <div className="mx-auto max-w-xs space-y-3">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <Search className="h-6 w-6" />
                        </div>

                        <p className="text-base font-bold text-foreground">
                          No transactions found
                        </p>

                        <p className="text-xs leading-relaxed text-muted-foreground">
                          We {"couldn't"} find any transaction matching your
                          current search criteria.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}