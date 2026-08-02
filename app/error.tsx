"use client";

import { 
  AlertTriangle, 
  ArrowLeft, 
  Home, 
  RotateCcw, 
  HelpCircle 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ErrorPageProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="max-w-md w-full space-y-6 text-center">
        
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center rounded-3xl bg-rose-500/10 text-rose-600 border border-rose-500/20 shadow-xs">
          <AlertTriangle className="w-12 h-12 stroke-[1.5]" />
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            Error
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
            Oops! Something went wrong
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
            {error?.message ||
              "We encountered an unexpected issue while loading this page. Please try again or head back to safety."}
          </p>
        </div>

        {error?.digest && (
          <Card className="border-border/60 bg-muted/30 rounded-2xl">
            <CardContent className="p-3 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
              <span>Error Code / Digest:</span>
              <span className="font-bold text-foreground">{error.digest}</span>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          
          {reset && (
            <Button
              onClick={() => reset()}
              className="w-full sm:w-auto h-10 rounded-xl gap-2 font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Try Again
            </Button>
          )}

          <Button
            variant="outline"
            onClick={() => router.back()}
            className="w-full sm:w-auto h-10 rounded-xl gap-2 font-bold text-xs border-border/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Go Back
          </Button>

          <Button
            variant="secondary"
            asChild
            className="w-full sm:w-auto h-10 rounded-xl gap-2 font-bold text-xs bg-muted/60 hover:bg-muted"
          >
            <Link href="/">
              <Home className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-border/40 text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
          <span>Need help?</span>
          <Link
            href="/contact"
            className="text-emerald-600 font-bold hover:underline"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}