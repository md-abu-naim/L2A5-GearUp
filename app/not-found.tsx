import Link from "next/link";
import { Compass, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
    return (
        <main className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background px-4 py-12">
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-dark:from-emerald-950/10 via-background to-background dark:from-emerald-950/10" />
            <div className="container mx-auto max-w-md text-center">
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 shadow-xl shadow-emerald-500/5">
                    <Compass className="h-10 w-10 animate-spin-slow" />
                    <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-background ring-2 ring-emerald-500/30 text-emerald-500">
                        <Search className="h-3.5 w-3.5" />
                    </div>
                </div>

                <Badge
                    variant="secondary"
                    className="mb-4 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100/80 border border-emerald-200"
                >
                    404 Error
                </Badge>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                    Page Not Found
                </h1>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Looks like you&apos;ve wandered off the trail. The page you are looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                        asChild
                        variant="default"
                        className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-700 text-white font-medium px-6 py-2.5 shadow-md shadow-emerald-600/20"
                    >
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto rounded-xl border-border hover:bg-muted font-medium px-6 py-2.5 text-foreground"
                    >
                        <Link href="/items">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Explore Gear
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}