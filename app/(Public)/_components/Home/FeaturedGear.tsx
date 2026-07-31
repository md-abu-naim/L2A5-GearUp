import Link from "next/link";
import {ArrowRight, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedGears } from "../../_actions/Home/gearService";
import GearCard from "../GearCard";
import { GearItem } from "@/lib/types";

export default async function FeaturedGearSection() {
    const gears: GearItem[] = await getFeaturedGears()

    return (
        <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/30 via-background to-background" />
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div className="space-y-3">
                        <Badge
                            variant="secondary"
                            className="rounded-full px-4 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100/80 border border-emerald-200"
                        >
                            <Mountain className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                            Explore & Rent
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                            Featured Outdoor Gear
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-lg">
                            Handpicked top-rated equipment ready for your next adventure. Verified quality guaranteed.
                        </p>
                    </div>

                    <Button
                        asChild
                        variant="outline"
                        className="rounded-xl border-border hover:bg-muted text-foreground font-medium self-start sm:self-auto"
                    >
                        <Link href="/items" className="flex items-center gap-2">
                            View All Gear
                            <ArrowRight className="w-4 h-4 text-emerald-600" />
                        </Link>
                    </Button>
                </div>

                {/* Gears Grid */}
                {gears.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        No gear items found at the moment.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {
                            gears.map(gear => <GearCard key={gear.id} item={gear} />)
                        }
                    </div>
                )}
            </div>
        </section>
    );
}