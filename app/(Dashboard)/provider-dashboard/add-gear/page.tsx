import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import GearForm from "../../_components/provider-dashboard/GearForm";
import { getCategories } from "@/app/(Public)/_actions/getCategories";
import { CategoryItem } from "@/lib/types";


export default async function AddGearPage() {
const categories: CategoryItem[] = await getCategories()

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Add New Gear
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        List a new adventure gear to start earning rental income.
                    </p>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-xl border-slate-200 text-slate-700 font-bold text-xs h-10 gap-2 hover:bg-slate-100"
                >
                    <Link href="/provider-dashboard/my-gears">
                        <ArrowLeft className="w-4 h-4" /> Back to My Gears
                    </Link>
                </Button>
            </div>

            {/* Form */}
            <GearForm categories={categories} />
        </div>
    )
}