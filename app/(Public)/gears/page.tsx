import GearFilters from "../_components/Gears/GearFilters";
import GearCard from "../_components/GearCard";
import { CategoryItem, GearItem } from "@/lib/types";
import { getCategories } from "../_actions/getCategories";
import { getGears } from "../_actions/Gears/getGears";


export default async function GearListingPage() {
  const gears: GearItem[] = await getGears()
  const categories: CategoryItem[] = await getCategories()
  return (
    <div className="px-8 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Explore Gear & Equipment
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Find and rent premium adventure gear from trusted providers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <GearFilters categories={categories} gears={gears} />
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