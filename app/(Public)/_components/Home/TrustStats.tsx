"use client";

import { ShieldCheck, PackageCheck, Users, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
    {
        id: 1,
        title: "1,200+",
        subtitle: "Verified Equipment",
        description: "Inspected & ready to rent",
        icon: PackageCheck,
        color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/60 dark:border-emerald-800",
    },
    {
        id: 2,
        title: "850+",
        subtitle: "Active Providers",
        description: "Trusted gear owners",
        icon: Users,
        color: "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/60 dark:border-blue-800",
    },
    {
        id: 3,
        title: "4.9 / 5",
        subtitle: "User Rating",
        description: "From 3,000+ happy rentals",
        icon: Star,
        color: "text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-950/60 dark:border-amber-800",
    },
    {
        id: 4,
        title: "100%",
        subtitle: "Secure & Insured",
        description: "Guaranteed damage protection",
        icon: ShieldCheck,
        color: "text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-950/60 dark:border-teal-800",
    },
];

const TrustStats = () => {
    return (
        <section className="bg-slate-50/50 dark:bg-slate-950/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center justify-center mb-8">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full gap-1.5 shadow-xs">
                            <Award className="w-3.5 h-3.5 text-emerald-600" />
                            Trusted Rental Community
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800/80">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.id}
                                    className={`flex items-start gap-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                                        }`}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${stat.color} shadow-xs`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <div className="space-y-0.5">
                                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                            {stat.title}
                                        </h3>
                                        <p className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                                            {stat.subtitle}
                                        </p>
                                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStats;