
"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const statuses = [
  "ALL",
  "COMPLETED",
  "PAID",
  "PENDING",
  "FAILED",
  "REFUNDED",
];

const PaymentFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "ALL";

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "ALL") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-80">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          defaultValue={search}
          placeholder="Search gear, payment ID or Trx ID..."
          onChange={(e) => updateQuery("search", e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-50 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 overflow-x-auto">
        {statuses.map((item) => (
          <button
            key={item}
            disabled={isPending}
            onClick={() => updateQuery("status", item)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              status === item
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {item === "ALL" ? "All Payments" : item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentFilter;