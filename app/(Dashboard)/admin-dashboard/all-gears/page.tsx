import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
    Boxes,
    CheckCircle2,
    XCircle,
    Calendar,
    User,
    Tag,
    Layers,
    Package,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CategoryItem, GearItem } from "@/lib/types";
import GearActions from "../../_components/provider-dashboard/GearActions";
import { getCategories } from "@/app/(Public)/_actions/getCategories";
import { getAllGears } from "../../_actions/admin-dashboard/getAllGears";

export default async function AllGears() {
    const gears: GearItem[] = await getAllGears();
    const categories: CategoryItem[] = await getCategories();

    return (
        <div className="max-w-7xl mx-auto min-h-screen space-y-6 bg-background px-4 pt-2 pb-16 sm:px-6">

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <Badge className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700 shadow-none">
                            <Boxes className="mr-1.5 h-3.5 w-3.5" />
                            Inventory Hub
                        </Badge>

                        <h1 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                            All Gear Items{" "}
                            <span className="text-muted-foreground">
                                ({gears.length})
                            </span>
                        </h1>

                        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground md:text-sm">
                            Manage all gear listings, review product details,
                            monitor availability, and keep the platform inventory
                            organized.
                        </p>
                    </div>

                    <Button
                        asChild
                        className="h-10 shrink-0 rounded-xl bg-foreground px-4 text-xs font-bold text-background shadow-sm hover:bg-foreground/90"
                    >
                        <Link
                            href="/admin-dashboard/add-category"
                            className="flex items-center gap-2"
                        >
                            <Package className="h-4 w-4 text-emerald-500" />
                            Add New Category
                        </Link>
                    </Button>
                </div>
            </div>

            {gears.length === 0 ? (
                <Card className="rounded-3xl border border-border bg-card p-12 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                        <Boxes className="h-7 w-7 text-muted-foreground" />
                    </div>

                    <h2 className="text-lg font-black text-foreground">
                        No Gear Items Found
                    </h2>

                    <p className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                        There are currently no gear items available in the
                        inventory.
                    </p>
                </Card>
            ) : (
                <div className="space-y-5">
                    {gears.map((gear) => (
                        <Card
                            key={gear.id}
                            className="group overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md md:p-6"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row">

                                <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-auto lg:w-60">
                                    <Image
                                        src={gear.image}
                                        alt={gear.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 240px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-3 top-3">
                                        <Badge
                                            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[10px] font-bold shadow-sm ${
                                                gear.status === "AVAILABLE"
                                                    ? "border-emerald-500 bg-emerald-500 text-white"
                                                    : "border-rose-500 bg-rose-500 text-white"
                                            }`}
                                        >
                                            {gear.status === "AVAILABLE" ? (
                                                <CheckCircle2 className="h-3 w-3" />
                                            ) : (
                                                <XCircle className="h-3 w-3" />
                                            )}

                                            {gear.status === "AVAILABLE"
                                                ? "AVAILABLE"
                                                : "OUT OF STOCK"}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1 space-y-4">

                                    <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <span className="block truncate font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                ID: {gear.id}
                                            </span>

                                            <h2 className="mt-1 truncate text-xl font-black tracking-tight text-foreground">
                                                {gear.title}
                                            </h2>
                                        </div>

                                        <div className="shrink-0">
                                            <GearActions
                                                gear={gear}
                                                categories={categories}
                                            />
                                        </div>
                                    </div>

                                    <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                        {gear.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-muted/50 p-3.5 sm:grid-cols-4">
                                        <div className="min-w-0">
                                            <span className="block text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                Category
                                            </span>

                                            <span className="mt-1 flex items-center gap-1.5 truncate text-xs font-bold text-foreground">
                                                <Tag className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                                                {gear.category}
                                            </span>
                                        </div>

                                        <div className="min-w-0">
                                            <span className="block text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                Brand
                                            </span>

                                            <span className="mt-1 flex items-center gap-1.5 truncate text-xs font-bold text-foreground">
                                                <Layers className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                                                {gear.brand}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                Price / Day
                                            </span>

                                            <span className="mt-1 block text-sm font-black text-emerald-600">
                                                ${gear.pricePerDay}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="block text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                Stock
                                            </span>

                                            <span className="mt-1 block text-sm font-black text-foreground">
                                                {gear.stock}
                                                <span className="ml-1 text-[10px] font-semibold text-muted-foreground">
                                                    units
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-1 text-[11px] sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex min-w-0 items-center gap-2">
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <User className="h-3.5 w-3.5 text-muted-foreground" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                                                    Provider
                                                </p>

                                                <div className="flex min-w-0 flex-wrap items-center gap-x-2">
                                                    <span className="truncate font-bold text-foreground">
                                                        {gear.provider.name}
                                                    </span>

                                                    <span className="truncate font-mono text-[10px] text-muted-foreground">
                                                        {gear.provider.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex shrink-0 items-center gap-1.5 text-muted-foreground">
                                            <Calendar className="h-3.5 w-3.5" />

                                            <span>
                                                Created{" "}
                                                <span className="font-semibold text-foreground">
                                                    {format(
                                                        new Date(gear.createdAt),
                                                        "MMM dd, yyyy"
                                                    )}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}