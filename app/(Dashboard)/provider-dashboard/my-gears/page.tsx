import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
    Plus,
    Boxes,
    CheckCircle2,
    XCircle,
    Calendar,
    User,
    Tag,
    Layers,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { getMyGears } from "../../_actions/provider-dashboard/getMyGears";
import { CategoryItem, GearItem } from "@/lib/types";
import GearActions from "../../_components/provider-dashboard/GearActions";
import { getCategories } from "@/app/(Public)/_actions/getCategories";

export default async function MyGearsPage() {
    const gears: GearItem[] = await getMyGears();
    const categories: CategoryItem[] = await getCategories();

    return (
        <div className="min-h-screen max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
                <div className="space-y-1.5">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-bold px-3 py-0.5 rounded-full w-fit">
                        <Boxes className="w-3.5 h-3.5 mr-1" /> Inventory Hub
                    </Badge>

                    <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                        My Gear Items ({gears.length})
                    </h1>

                    <p className="text-xs md:text-sm text-muted-foreground max-w-lg">
                        Manage product specifications, monitor live rental rates, and
                        update equipment availability.
                    </p>
                </div>

                <Button
                    size="sm"
                    asChild
                    className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-11 px-5 gap-2 shadow-xs shrink-0"
                >
                    <Link href="/provider-dashboard/add-gear">
                        <Plus className="w-4 h-4" /> Add New Gear
                    </Link>
                </Button>
            </div>

            {/* Gear List */}
            <div className="space-y-5">
                {gears.map((gear) => (
                    <Card
                        key={gear.id}
                        className="rounded-3xl border-border bg-card overflow-hidden shadow-xs hover:shadow-md hover:border-muted-foreground/30 transition-all p-5 md:p-6"
                    >
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="relative w-full lg:w-56 h-48 lg:h-auto rounded-2xl overflow-hidden bg-muted shrink-0 border border-border">
                                <Image
                                    src={gear.image}
                                    alt={gear.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 224px"
                                    className="object-cover"
                                    priority
                                />

                                <div className="absolute top-3 left-3">
                                    <Badge
                                        className={`font-bold text-[10px] px-2.5 py-1 rounded-lg border shadow-sm flex items-center gap-1 ${gear.status === "AVAILABLE"
                                            ? "bg-emerald-500 text-white border-emerald-600"
                                            : "bg-rose-500 text-white border-rose-600"
                                            }`}
                                    >
                                        {gear.status === "AVAILABLE" ? (
                                            <CheckCircle2 className="w-3 h-3" />
                                        ) : (
                                            <XCircle className="w-3 h-3" />
                                        )}

                                        {gear.status === "AVAILABLE"
                                            ? "AVAILABLE"
                                            : "OUT OF STOCK"}
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-border">
                                    <div>
                                        <span className="text-[10px] font-mono font-bold text-muted-foreground block uppercase">
                                            ID: {gear.id}
                                        </span>

                                        <h2 className="text-xl font-black text-foreground tracking-tight mt-0.5">
                                            {gear.title}
                                        </h2>
                                    </div>

                                    <GearActions
                                        gear={gear}
                                        categories={categories}
                                    />
                                </div>

                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {gear.description}
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/60 p-3.5 rounded-2xl border border-border text-xs">
                                    <div>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                                            Category
                                        </span>

                                        <span className="font-bold text-foreground flex items-center gap-1 mt-0.5">
                                            <Tag className="w-3 h-3 text-primary" />
                                            {gear.category}
                                        </span>
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                                            Brand
                                        </span>

                                        <span className="font-bold text-foreground flex items-center gap-1 mt-0.5">
                                            <Layers className="w-3 h-3 text-primary" />
                                            {gear.brand}
                                        </span>
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                                            Price / Day
                                        </span>

                                        <span className="font-black text-emerald-700 mt-0.5 block">
                                            ${gear.pricePerDay.toLocaleString()}
                                        </span>
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                                            Stock Units
                                        </span>

                                        <span className="font-black text-foreground mt-0.5 block">
                                            {gear.stock} Available
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground pt-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-muted-foreground flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            Owner:
                                        </span>

                                        <span className="font-bold text-foreground">
                                            {gear.provider.name}
                                        </span>

                                        <span className="text-muted-foreground font-mono">
                                            ({gear.provider.email})
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            Created:{" "}
                                            {format(
                                                new Date(gear.createdAt),
                                                "MMM dd, yyyy"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}