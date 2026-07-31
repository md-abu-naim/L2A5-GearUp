"use client";

import Image from "next/image";
import { format } from "date-fns";
import {
  Package,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ExternalLink,
} from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IRental } from "@/lib/types";

interface RentalProps {
  rental: IRental;
}

const RentalTables = ({ rental }: RentalProps) => {
  return (
    <TableRow
      key={rental.id}
      className="hover:bg-muted/30 transition-colors"
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-muted shrink-0 border border-border/60">
            {rental.gearItem?.image ? (
              <Image
                src={rental.gearItem.image}
                alt="Gear Image"
                fill
                className="object-cover"
              />
            ) : (
              <Package className="w-6 h-6 m-auto text-muted-foreground" />
            )}
          </div>
          <div>
            <p className="font-bold text-xs text-foreground line-clamp-1">
              {rental.gearItem?.title ||
                `Gear ID: ${rental.gearItemId.slice(0, 8)}...`}
            </p>
            <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono text-muted-foreground uppercase">
              Order #{rental.id.slice(0, 8)}
            </span>
          </div>
        </div>
      </TableCell>

      <TableCell className="text-xs font-bold text-foreground">
        <span className="bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-lg border border-emerald-500/20">
          {rental.quantity} Item{rental.quantity > 1 ? "s" : ""}
        </span>
      </TableCell>

      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
        <div className="flex items-center gap-1 font-medium">
          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {rental.startDate
              ? format(new Date(rental.startDate), "MMM dd, yyyy")
              : "N/A"}
          </span>
          <span className="text-emerald-600 font-bold">→</span>
          <span>
            {rental.endDate
              ? format(new Date(rental.endDate), "MMM dd, yyyy")
              : "N/A"}
          </span>
        </div>
      </TableCell>

      <TableCell className="text-xs font-black text-foreground">
        ${rental.totalPrice?.toLocaleString() || 0}
      </TableCell>

      <TableCell>
        <Badge
          className={cn(
            "font-semibold gap-1 text-[11px] rounded-lg border shadow-none px-2.5 py-1",
            rental.status === "PLACED" &&
              "bg-amber-500/10 text-amber-600 border-amber-500/20",
            rental.status === "CONFIRMED" &&
              "bg-blue-500/10 text-blue-600 border-blue-500/20",
            rental.status === "PAID" &&
              "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
            rental.status === "PICKED_UP" &&
              "bg-purple-500/10 text-purple-600 border-purple-500/20",
            rental.status === "RETURNED" &&
              "bg-teal-500/10 text-teal-600 border-teal-500/20",
            rental.status === "CANCELLED" &&
              "bg-rose-500/10 text-rose-600 border-rose-500/20"
          )}
        >
          {rental.status === "PLACED" && <Clock className="w-3 h-3" />}
          {rental.status === "RETURNED" && (
            <CheckCircle2 className="w-3 h-3" />
          )}
          {rental.status === "CANCELLED" && <XCircle className="w-3 h-3" />}
          {rental.status}
        </Badge>
      </TableCell>

      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 rounded-lg text-xs gap-1"
        >
          Details <ExternalLink className="w-3 h-3" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RentalTables;