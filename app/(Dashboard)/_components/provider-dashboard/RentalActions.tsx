"use client";

import {
    MoreVertical,
    CheckCircle2,
    PackageCheck,
    RotateCcw,
    XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateRentalStatus } from "../../_actions/provider-dashboard/updateRentalStatus";
import { toast } from "sonner";

type Props = {
    id: string,
}
const RentalActions = ({ id }: Props) => {
    const handleRentalStatusUpdate = async (id: string, status: string) => {
        console.log(id, status);
        const result = await updateRentalStatus(id, status)
        console.log(result);
        if (result.success) {
            toast.success('Rental Status Update Successfully')
        }
    }
    return (
        <div className="flex items-center justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2.5 border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-bold gap-1"
                    >
                        <span>Change Status</span>
                        <MoreVertical className="w-3.5 h-3.5 text-slate-500" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-44 rounded-xl p-1 border-slate-200"
                >

                    <DropdownMenuItem
                        onClick={() => handleRentalStatusUpdate(id, "CONFIRMED")}
                        className="rounded-lg text-xs font-semibold text-emerald-600 hover:bg-emerald-50 cursor-pointer"
                    >
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Confirm Order
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => handleRentalStatusUpdate(id, "PICKED_UP")}
                        className="rounded-lg text-xs font-semibold text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                    >
                        <PackageCheck className="w-3.5 h-3.5 mr-2" /> Picked Up
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => handleRentalStatusUpdate(id, "RETURNED")}
                        className="rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-50 cursor-pointer"
                    >
                        <RotateCcw className="w-3.5 h-3.5 mr-2" /> Mark Returned
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => handleRentalStatusUpdate(id, "CANCELLED")}
                        className="rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                        <XCircle className="w-3.5 h-3.5 mr-2" /> Cancel Order
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default RentalActions;