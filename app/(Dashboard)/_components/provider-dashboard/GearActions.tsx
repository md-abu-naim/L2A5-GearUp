"use client"
import { Button } from "@/components/ui/button"
import { GearItem } from "@/lib/types"
import { Edit3, ExternalLink, Trash2 } from "lucide-react"
import Link from "next/link"
import { deleteGear } from "../../_actions/provider-dashboard/deleteGear"
import { toast } from "sonner"

type Props = {
    gear: GearItem
}

const GearActions = ({gear}: Props) => {

    const handleDeleteGear = async(id: string) => {
        const result = await deleteGear(id)
        if(result.success){
            toast.success(result.message)
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="sm"
                asChild
                className="h-8 px-3 rounded-xl border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
            >
                <Link href={`/dashboard/provider/my-gears/edit/${gear.id}`}>
                    <Edit3 className="w-3.5 h-3.5 mr-1 text-slate-500" /> Edit
                </Link>
            </Button>

            <Button onClick={() => handleDeleteGear(gear.id)}
                variant="outline"
                size="sm"
                className="h-8 px-2.5 rounded-xl border-slate-200 text-rose-600 hover:bg-rose-50 hover:border-rose-200 text-xs font-bold"
            >
                <Trash2 className="w-3.5 h-3.5 mr-1" /> Delete
            </Button>

            <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-slate-900"
            >
                <Link href={`/gears/${gear.id}`}>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </Button>
        </div>
    )
}

export default GearActions