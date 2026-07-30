import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "../../_actions/getCategories";
import { CategoryItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default async function CategorySection() {
  const categories: CategoryItem[] = await getCategories();

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/20 via-background to-background" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100/80 border border-emerald-200"
          >
            <Layers className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            Categories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Browse Gear by Category
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Explore our curated collections and find the perfect equipment for your next adventure.
          </p>
        </div>

        {/* Category Grid */}
        {categories.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No categories found at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/gear?category=${encodeURIComponent(category.name)}`}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-4 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-extrabold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      {
                        category.name.charAt(0).toUpperCase()
                      }
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
        )}
      </div>
    </section>
  );
}