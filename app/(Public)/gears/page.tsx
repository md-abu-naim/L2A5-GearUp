import GearFilters from "../_components/Gears/GearFilters";
import GearCard from "../_components/GearCard";
import { CategoryItem, GearItem, GearQuery } from "@/lib/types";
import { getCategories } from "../_actions/getCategories";
import { getGears } from "../_actions/Gears/getGears";

type GearsPageProps = {
  searchParams: Promise<GearQuery>;
};

export default async function GearsPage({ searchParams }: GearsPageProps) {
  const params = await searchParams

  const gears: GearItem[] = await getGears(params)
  const gearsForBrand: GearItem[] = await getGears()
  const categories: CategoryItem[] = await getCategories()

  return (
    <div className="px-8 py-8">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-linear-to-b from-emerald-500/5 via-emerald-500/2 to-transparent p-6 text-center mb-10 shadow-xs">
        <div className="absolute top-1/2 left-1/2 -z-10 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-2xl space-y-3">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 border border-emerald-500/20">
            Premium Rentals
          </span>
          <h1 className="text-2xl font-extrabold sm:text-4xl lg:text-4xl">
            Explore Gear & <span className="text-emerald-600">Equipment</span>
          </h1>
          <p className="mx-auto max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
            Find and rent premium adventure gear from trusted providers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <GearFilters categories={categories} gears={gears} gearsBrand={gearsForBrand} />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gears.map((item) => (
              <GearCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}