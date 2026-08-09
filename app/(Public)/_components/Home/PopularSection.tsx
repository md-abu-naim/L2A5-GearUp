
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GearItem } from "@/lib/types";
import GearCard from "../GearCard";
import { getPopularGears } from "../../_actions/Home/getPopularGears";

const PopularGears = async() => {
    const gears: GearItem[] = await getPopularGears()
  return (
        <section className="py-16 bg-slate-50/50 dark:bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* 🔹 1. SECTION HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="space-y-2">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 text-xs font-bold px-3 py-1 rounded-full w-fit flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                            Most Rented Equipment
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                            Popular Rental Gears
                        </h2>
                        <p className="text-sm text-muted-foreground max-w-lg">
                            Explore our highest-rated and most frequently booked equipment trusted by top professionals.
                        </p>
                    </div>

                    <Button
                        asChild
                        variant="outline"
                        className="rounded-2xl border-border/80 hover:bg-slate-100 dark:hover:bg-slate-900 font-semibold text-xs h-10 px-5 gap-2 shrink-0 self-start sm:self-auto"
                    >
                        <Link href="/gears">
                            Explore All Gears <ArrowRight className="w-4 h-4 text-emerald-600" />
                        </Link>
                    </Button>
                </div>

                {/* 🔹 2. GEARS GRID / LOADING SKELETON */}
                { gears && gears.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gears.map((item) => (
                            <GearCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-12 bg-card rounded-3xl border border-border/60 p-8 space-y-3">
                        <Sparkles className="w-10 h-10 text-muted-foreground mx-auto" />
                        <h3 className="text-base font-bold text-foreground">No Popular Gears Found</h3>
                        <p className="text-xs text-muted-foreground">
                            Check back later or browse all available categories.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default PopularGears;