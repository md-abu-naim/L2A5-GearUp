"use client";

import {
    ShieldCheck,
    Zap,
    CreditCard,
    MessageSquare,
    Sparkles,
    BadgePercent,
    ClockCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        id: 1,
        title: "Verified Equipment & Owners",
        description:
            "Every piece of gear and owner identity goes through a strict verification process to ensure zero scams.",
        icon: ShieldCheck,
        badge: "100% Safe",
        iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/60 dark:border-emerald-800",
    },
    {
        id: 2,
        title: "Instant Booking & Approval",
        description:
            "No waiting for days. Check real-time stock availability and get your rental booking confirmed instantly.",
        icon: Zap,
        badge: "Fast Track",
        iconColor: "text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-950/60 dark:border-amber-800",
    },
    {
        id: 3,
        title: "Secure Payment Gateway",
        description:
            "Pay worry-free with encrypted local & international payment options. Money is held safely until handover.",
        icon: CreditCard,
        badge: "Protected",
        iconColor: "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/60 dark:border-blue-800",
    },
    {
        id: 4,
        title: "In-App Direct Chat",
        description:
            "Communicate directly with equipment providers to discuss pickup times, specs, and gear condition.",
        icon: MessageSquare,
        badge: "Real-time",
        iconColor: "text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-950/60 dark:border-purple-800",
    },
    {
        id: 5,
        title: "Transparent & Flexible Pricing",
        description:
            "No hidden service fees or surprise charges. Pay straightforward daily rental rates with special weekly discounts.",
        icon: BadgePercent,
        badge: "Best Rates",
        iconColor: "text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-950/60 dark:border-teal-800",
    },
    {
        id: 6,
        title: "24/7 Rental Support",
        description:
            "Need help during your creative shoot or ride? Our dedicated support team is available round-the-clock.",
        icon: ClockCheck,
        badge: "Always On",
        iconColor: "text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-950/60 dark:border-rose-800",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full w-fit mx-auto gap-1.5 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Why Choose GearUp
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Built for <span className="text-emerald-600">Creators & Adventurers</span>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground">
                        We provide the ultimate peer-to-peer gear rental experience with security, speed, and affordability at its core.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.id}
                                className="group relative rounded-3xl border border-border/60 bg-card hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                            >
                                <CardContent className="p-6 space-y-4">

                                    <div className="flex items-center justify-between">
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feature.iconColor} shadow-xs group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-lg border border-border/40">
                                            {feature.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-2 pt-1">
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                                            {feature.title}
                                        </h3>

                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                </CardContent>

                                <div className="h-1 w-0 group-hover:w-full bg-emerald-600 transition-all duration-500" />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;