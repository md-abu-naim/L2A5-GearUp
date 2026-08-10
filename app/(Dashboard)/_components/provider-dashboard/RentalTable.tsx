import { TableCell, TableRow } from "@/components/ui/table";
import { IRental } from "@/lib/types";
import {
    Calendar,
    CheckCircle2,
    Clock,
    PackageCheck,
    RotateCcw,
    XCircle,
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import RentalActions from "./RentalActions";
import Image from "next/image";

type RentalTableProps = {
    rental: IRental;
};

const RentalTable = ({ rental }: RentalTableProps) => {
    return (
        <TableRow className="border-border hover:bg-muted/50 transition-colors">
            {/* Gear Item */}
            <TableCell>
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-muted border border-border shrink-0">
                        <Image width={600} height={500}
                            src={rental.gearItem.image}
                            alt={rental.gearItem.title}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs font-bold text-foreground truncate max-w-[180px]">
                            {rental.gearItem.title}
                        </p>

                        <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                            {rental.id}
                        </p>
                    </div>
                </div>
            </TableCell>

            <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-muted-foreground" />

                    <span>
                        {format(new Date(rental.startDate), "MMM dd")} -{" "}
                        {format(new Date(rental.endDate), "MMM dd")}
                    </span>
                </div>
            </TableCell>

            <TableCell className="text-xs font-black text-foreground">
                $ {rental.totalPrice.toLocaleString()}
            </TableCell>

            <TableCell>
                <Badge
                    className={`font-bold text-[10px] rounded-lg px-2.5 py-0.5 border shadow-none gap-1 ${rental.status === "CONFIRMED" || rental.status === "PAID"
                        ? "bg-emerald-500/15 text-emerald-700 border-emerald-500/30"

                        : rental.status === "PLACED"
                            ? "bg-amber-500/15 text-amber-700 border-amber-500/30"

                            : rental.status === "RETURNED" ||
                                rental.status === "PICKED_UP"
                                ? "bg-blue-500/15 text-blue-700 border-blue-500/30"

                                : "bg-rose-500/15 text-rose-700 border-rose-500/30"
                        }`}
                >
                    {rental.status === "CONFIRMED" && (
                        <CheckCircle2 className="w-3 h-3" />
                    )}

                    {rental.status === "PAID" && (
                        <CheckCircle2 className="w-3 h-3" />
                    )}

                    {rental.status === "PLACED" && (
                        <Clock className="w-3 h-3" />
                    )}

                    {rental.status === "PICKED_UP" && (
                        <PackageCheck className="w-3 h-3" />
                    )}

                    {rental.status === "RETURNED" && (
                        <RotateCcw className="w-3 h-3" />
                    )}

                    {rental.status === "CANCELLED" && (
                        <XCircle className="w-3 h-3" />
                    )}

                    {rental.status}
                </Badge>
            </TableCell>



            <TableCell className="text-right">
                <RentalActions id={rental.id} />
            </TableCell>
        </TableRow>
    );
};

export default RentalTable;