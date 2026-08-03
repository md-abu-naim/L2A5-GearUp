
import Link from "next/link";
import {
    ArrowRight,
    Sparkles,
    Grid,
    Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "../_actions/getCategories";
import { CategoryItem } from "@/lib/types";

export default async function PublicCategoriesPage() {
    const categories: CategoryItem[] = await getCategories()

    return (
        <div className="w-full bg-slate-50/50 min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12 space-y-10">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold text-xs px-3 py-1 rounded-full gap-1.5 inline-flex">
                    <Sparkles className="w-3.5 h-3.5" /> Explore All Categories
                </Badge>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    Find the Perfect Gear for Your Next Project
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Browse through our wide range of categories to rent top-quality equipment, tools, and gear directly from trusted providers.
                </p>
            </div>

            {/* Grid Display Section */}
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2">
                        <Grid className="w-4 h-4 text-slate-400" />
                        <h2 className="text-base font-extrabold text-slate-800">
                            Categories ({categories.length})
                        </h2>
                    </div>
                </div>

                {categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/gears?category=${encodeURIComponent(category.name)}`}
                                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-4 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />

                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-extrabold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                                            <Layers className="w-4 h-4" />
                                        </div>
                                        <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase bg-muted/60 px-3 py-1 rounded-full border border-border/40">
                                            Explore
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-emerald-600 relative z-10">
                                    <span>View Equipment</span>
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
                        <p className="text-sm font-bold text-slate-500">No categories found matching.</p>
                        <p className="text-xs text-slate-400 mt-1">Try searching with a different keyword.</p>
                    </div>
                )}
            </div>
        </div>
    );
}