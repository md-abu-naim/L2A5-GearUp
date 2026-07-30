"use client";

import { useRef, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryItem, GearItem } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

type GearFiltersProps = {
    categories: CategoryItem[];
    gears: GearItem[];
    gearsBrand: GearItem[];
};

export default function GearFilters({ categories, gears, gearsBrand }: GearFiltersProps) {
    const searchParams = useSearchParams()
    const [maxPrice, setMaxPrice] = useState(500);
    const [search, setSearch] = useState(searchParams.get('search') || "")
    const router = useRouter()

    const setFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value === "all" || value === "") {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        router.push(`/gears?${params.toString()}`);
    };

    const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleSearch = (value: string) => {
        setSearch(value);

        if (debouncedReference.current) {
            clearTimeout(debouncedReference.current);
        }

        debouncedReference.current = setTimeout(() => {
            setFilter("search", value);
        }, 500);
    };

    const brands = [...new Set(gearsBrand.map((gear) => gear.brand))];

    return (
        <aside className="space-y-6 border border-border/60 p-5 rounded-2xl bg-card h-fit">
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <h2 className="font-bold text-foreground flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                    Filters
                </h2>
                <Button onClick={() => router.push("/gears")}
                    variant="ghost"
                    size="sm"
                    className="text-xs bg-emerald-300 hover:bg-emerald-500 hover:text-white"
                >
                    Reset
                </Button>
            </div>

            {/* Search Filter */}
            <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                    Search
                </Label>
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search gear..."
                        className="pl-9 h-9 text-xs rounded-xl"
                    />
                </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                    Category
                </Label>
                <Select defaultValue="all" onValueChange={(value) => setFilter("category", value)}>
                    <SelectTrigger className="w-full h-9 text-xs rounded-xl">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.name}>
                                {cat.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
                <Label className="text-xs font-semibold text-muted-foreground uppercase">
                    Brand
                </Label>
                <Select defaultValue="all" onValueChange={(value) => setFilter("brand", value)}>
                    <SelectTrigger className="w-full h-9 text-xs rounded-xl">
                        <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Brands</SelectItem>
                        {brands.map((brand, idx) => (
                            <SelectItem key={idx} value={brand}>
                                {brand}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Price Filter */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <Label className="text-xs font-semibold text-muted-foreground uppercase">
                        Max Price / Day
                    </Label>
                    <span className="text-xs font-bold text-emerald-600">
                        ${maxPrice}
                    </span>
                </div>
                <Slider onValueCommit={(value) => setFilter("maxPrice", value[0].toString())}
                    value={[maxPrice]}
                    max={500}
                    step={10}
                    onValueChange={(val) => setMaxPrice(val[0])}
                />
            </div>

            {/* Availability Filter */}
            <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="available" onCheckedChange={(checked) => setFilter('availability', checked ? 'AVAILABLE' : "")} />
                <Label
                    htmlFor="available"
                    className="text-xs font-medium cursor-pointer"
                >
                    In Stock & Available Only
                </Label>
            </div>
        </aside>
    );
}