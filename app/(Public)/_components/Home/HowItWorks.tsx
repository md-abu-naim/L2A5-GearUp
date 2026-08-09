"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CalendarCheck,
  PackageCheck,
  RotateCcw,
  PlusCircle,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  Sparkles,
  UserCheck,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const renterSteps = [
  {
    step: "01",
    title: "Discover Gear",
    description: "Browse thousands of high-quality cameras, bikes, drones, and equipment listed near you.",
    icon: Search,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    step: "02",
    title: "Book & Pay",
    description: "Choose your rental dates, check availability, and complete a 100% secure online booking.",
    icon: CalendarCheck,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    step: "03",
    title: "Pick Up & Use",
    description: "Collect the verified gear from the provider or get it delivered, then create your masterpiece.",
    icon: PackageCheck,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    step: "04",
    title: "Easy Return",
    description: "Return the gear safely on time and drop a review to help the GearUp community grow.",
    icon: RotateCcw,
    color: "bg-teal-50 text-teal-600 border-teal-200",
  },
];

// 🔹 Steps Data for Providers
const providerSteps = [
  {
    step: "01",
    title: "List Your Gear",
    description: "Upload high-res photos, set daily rental pricing, stock, and clear usage terms in minutes.",
    icon: PlusCircle,
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    step: "02",
    title: "Approve Orders",
    description: "Receive rental requests from verified members and confirm bookings on your dashboard.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    step: "03",
    title: "Handover Gear",
    description: "Hand over the equipment smoothly to the renter or arrange a pickup date.",
    icon: PackageCheck,
    color: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    step: "04",
    title: "Get Paid",
    description: "Receive instant payouts directly into your bank account as soon as the rental period completes.",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("renter");

  const steps = activeTab === "renter" ? renterSteps : providerSteps;

  return (
    <section className=" bg-slate-50/60 dark:bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full w-fit mx-auto gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Simple & Transparent Process
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
            How <span className="text-emerald-600">GearUp</span> Works
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Whether you want to rent premium gear for your next project or earn passive income from unused equipment, we’ve made it seamless.
          </p>

          <div className="inline-flex items-center bg-slate-200/80 dark:bg-slate-800 p-1.5 rounded-2xl border border-border/60 mt-4">
            <button
              onClick={() => setActiveTab("renter")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === "renter"
                  ? "bg-white dark:bg-slate-900 text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <UserCheck className="w-4 h-4 text-emerald-600" /> For Renters
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === "provider"
                  ? "bg-white dark:bg-slate-900 text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600" /> For Gear Owners
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group relative rounded-3xl border border-border/60 bg-card hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <CardContent className="p-6 space-y-5">

                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color} shadow-xs group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-3xl font-black text-slate-200 dark:text-slate-800 font-mono">
                      {item.step}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </CardContent>

                <div className="h-1 w-0 group-hover:w-full bg-emerald-600 transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 shadow-lg shadow-emerald-600/20"
          >
            <Link href={activeTab === "renter" ? "/gears" : "/dashboard/provider/add-gear"}>
              {activeTab === "renter" ? "Start Renting Now" : "List Your Equipment"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;