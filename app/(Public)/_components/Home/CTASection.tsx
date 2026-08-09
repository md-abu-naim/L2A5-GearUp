import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, UserPlus, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-emerald-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-card p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 h-1.5 w-full bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 border border-emerald-300 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Join the Adventure Platform
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                Ready to Gear Up for Your Next Journey?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether {"you're"} looking to rent high-quality outdoor equipment or monetize your unused gear, our platform makes it seamless and secure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-foreground/90 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Insured Equipment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Rental Providers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant Online Booking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Support Service</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Action */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8 space-y-5 shadow-inner">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Get Started Now
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Select how you want to continue today
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full justify-between rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-13 px-5 shadow-lg shadow-emerald-600/25 transition-all duration-300"
                  >
                    <Link href="/gears">
                      <span className="flex items-center gap-2.5">
                        <Compass className="w-4 h-4" />
                        Explore All Gear
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-between rounded-xl border-border bg-card hover:bg-muted text-foreground font-semibold h-13 px-5 shadow-xs transition-all duration-300"
                  >
                    <Link href="/register">
                      <span className="flex items-center gap-2.5">
                        <UserPlus className="w-4 h-4 text-emerald-600" />
                        Become a Provider
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  </Button>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No hidden fees • Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}