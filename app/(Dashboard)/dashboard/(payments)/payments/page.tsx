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
} from "lucide-react";
import { IPayment } from "@/lib/types";
import Image from "next/image";
import { getMyPayments } from "@/app/(Dashboard)/_actions/dashboard/getMyPayments";


export default async function PaymentHistoryPage() {

  const payments: IPayment[] = await getMyPayments()

  const totalSpent = payments
    .filter((p) => p.status === "COMPLETED" || p.status === "PAID")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            Payment History <Receipt className="w-7 h-7 text-emerald-600" />
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Track and manage all your gear rental transactions & receipts.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-xs self-start md:self-auto cursor-pointer">
          <Download className="w-4 h-4" /> Export Ledger
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Total Spent
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
              ${totalSpent.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Completed Payments
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
              {
                payments.filter(
                  (p) => p.status === "COMPLETED" || p.status === "PAID"
                ).length
              }
            </h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Payment Security
            </p>
            <h3 className="text-sm font-bold text-slate-700 mt-1 flex items-center gap-1">
              256-bit Encrypted{" "}
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </h3>
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      {/* <PaymentFilter /> */}

      {/*  Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Rented Gear Details</th>
                <th className="py-4 px-6">Transaction ID</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Rental Link</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-sm">
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Image width={500} height={400}
                          src={payment.rentalOrder.gearItem.image}
                          alt={payment.rentalOrder.gearItem.title}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                            {payment.rentalOrder.gearItem.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                            <span>
                              Brand: {payment.rentalOrder.gearItem.brand}
                            </span>
                            <span>•</span>
                            <span>Qty: {payment.rentalOrder.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-xs whitespace-nowrap">
                      <p className="font-mono font-bold text-slate-700">
                        {payment.transactionId}
                      </p>
                      <span className="text-[10px] text-slate-400 font-mono uppercase">
                        #{payment.id}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-slate-600 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {format(new Date(payment.createdAt), "MMM dd, yyyy")}
                      </div>
                    </td>

                    <td className="py-4 px-6 font-black text-slate-900 whitespace-nowrap">
                      ${payment.amount.toLocaleString()}
                    </td>

                    <td className="py-4 px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border
                         ${payment.status === "COMPLETED"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                            : payment.status === "PAID"
                              ? "bg-blue-50 text-blue-700 border-blue-200/60"
                              : payment.status === "PENDING"
                                ? "bg-amber-50 text-amber-700 border-amber-200/60"
                                : payment.status === "FAILED"
                                  ? "bg-rose-50 text-rose-700 border-rose-200/60"
                                  : "bg-purple-50 text-purple-700 border-purple-200/60"
                          }`}
                      >
                        {payment.status === "COMPLETED" && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {payment.status === "PAID" && <CreditCard className="w-3.5 h-3.5" />}
                        {payment.status === "PENDING" && <Clock className="w-3.5 h-3.5" />}
                        {payment.status === "FAILED" && <XCircle className="w-3.5 h-3.5" />}
                        {payment.status === "REFUNDED" && <RotateCcw className="w-3.5 h-3.5" />}

                        {payment.status}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={`/dashboard/payments/${payment.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-emerald-600 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-all"
                      >
                        Payment Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="max-w-xs mx-auto space-y-3">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                        <Search className="w-6 h-6" />
                      </div>
                      <p className="text-slate-800 font-semibold text-base">
                        No transactions found
                      </p>
                      <p className="text-slate-400 text-xs">
                        We {"couldn't "}find any transaction matching your search
                        criteria.
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
  );
}