import Link from "next/link";
import { Lock, ArrowLeft, ShieldAlert, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeatureUnavailablePage() {
  return (
    <main className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-dark:from-amber-950/10 via-background to-background dark:from-amber-950/10" />

      <div className="container mx-auto max-w-md text-center">
        {/* Glow Icon Wrapper */}
        <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/20 shadow-xl shadow-amber-500/5">
          <Lock className="h-10 w-10" />
          <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-background ring-2 ring-amber-500/30 text-amber-500">
            <ShieldAlert className="h-4 w-4" />
          </div>
        </div>

        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-4 rounded-full px-4 py-1.5 text-xs font-medium text-amber-700 bg-amber-100/80 border border-amber-200"
        >
          Access Restricted
        </Badge>

        {/* Main Content */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Feature Not Available
        </h1>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          This feature is currently not available for your account type or role. Please upgrade your account or contact an administrator to gain access.
        </p>

        {/* Info Box */}
        <div className="mt-6 rounded-2xl border border-border/80 bg-card/60 p-4 text-left shadow-sm backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">
                How to unlock?
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                To access provider features or premium functionality, switch your role from your profile settings or subscribe to a plan.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            variant="default"
            className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 shadow-md shadow-emerald-600/20"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto rounded-xl border-border hover:bg-muted font-medium px-6 py-2.5"
          >
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}