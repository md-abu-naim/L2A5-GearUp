import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Grid3X3,
  Layers,
  PackageSearch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "../_actions/getCategories";
import { CategoryItem } from "@/lib/types";

export default async function PublicCategoriesPage() {
  const categories: CategoryItem[] = await getCategories();

  return (
    <div className="min-h-screen w-full bg-background px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <section className="mx-auto max-w-3xl text-center">
          <Badge className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
            <Sparkles className="h-3.5 w-3.5" />
            Explore All Categories
          </Badge>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find the Perfect Gear for Your Next Project
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse through our wide range of categories to rent top-quality
            equipment, tools, and gear directly from trusted providers.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Grid3X3 className="h-4 w-4" />
              </div>

              <div>
                <h2 className="text-sm font-black text-foreground sm:text-base">
                  Browse Categories
                </h2>
                <p className="text-[11px] text-muted-foreground sm:text-xs">
                  {categories.length} categories available
                </p>
              </div>
            </div>

            <span className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {categories.length} Total
            </span>
          </div>

          {categories.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/gears?category=${encodeURIComponent(
                    category.name
                  )}`}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/15" />

                  <div className="relative z-10 flex min-h-58.75 flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                          <Layers className="h-5 w-5" />
                        </div>

                        <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          Explore
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black tracking-tight text-foreground transition-colors duration-200 group-hover:text-emerald-600">
                          {category.name}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                          {category.description ||
                            "Explore quality equipment available in this category."}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-bold text-emerald-600">
                        View Equipment
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <PackageSearch className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-base font-black text-foreground">
                No Categories Found
              </h3>

              <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
                There are currently no equipment categories available. Please
                check back later for new categories.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}