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

const RentalActions = () => {
  return (
    <div className="flex items-center justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2.5 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-bold gap-1"
          >
            <span>Change Status</span>
            <MoreVertical className="w-3.5 h-3.5 text-slate-500" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-44 rounded-xl p-1 bg-white border-slate-200"
        >

          <DropdownMenuItem
            onClick={() => alert("Status updated to CONFIRMED")}
            className="rounded-lg text-xs font-semibold text-emerald-600 hover:bg-emerald-50 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Confirm Order
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => alert("Status updated to PICKED_UP")}
            className="rounded-lg text-xs font-semibold text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            <PackageCheck className="w-3.5 h-3.5 mr-2" /> Picked Up
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => alert("Status updated to RETURNED")}
            className="rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-2" /> Mark Returned
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => alert("Status updated to CANCELLED")}
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