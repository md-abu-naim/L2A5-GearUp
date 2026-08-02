import { TableCell, TableRow } from "@/components/ui/table"
import { IRental } from "@/lib/types";
import { Calendar, CheckCircle2, Clock, RotateCcw, XCircle } from "lucide-react"
import Image from "next/image"
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import RentalActions from "./RentalActions";

type RentalTableProps = {
    rental: IRental
};

const RentalTable = ({ rental }: RentalTableProps) => {
    return (
        <TableRow key={rental.id} className="hover:bg-slate-50/60 transition-colors">
            <TableCell>
                <div className="flex items-center gap-3">
                    <Image width={600} height={500}
                        src={rental.gearItem.image}
                        alt={rental.gearItem.title}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                        <p className="font-bold text-xs text-slate-900 line-clamp-1">
                            {rental.gearItem.title}
                        </p>
                        <span className="text-[10px] font-mono text-slate-400">
                            {rental.id}
                        </span>
                    </div>
                </div>
            </TableCell>

            <TableCell className="text-xs text-slate-500 whitespace-nowrap">
                <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>
                        {format(new Date(rental.startDate), "MMM dd")} - {format(new Date(rental.endDate), "MMM dd")}
                    </span>
                </div>
            </TableCell>

            <TableCell className="text-xs font-black text-slate-900">
                ${rental.totalPrice.toLocaleString()}
            </TableCell>

            <TableCell>
                <Badge
                    className={`font-bold text-[10px] rounded-lg px-2.5 py-0.5 border shadow-none gap-1 ${rental.status === "CONFIRMED" || rental.status === "PAID"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : rental.status === "PLACED"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : rental.status === "RETURNED" || rental.status === 'PICKED_UP'
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                >
                    {rental.status === "CONFIRMED" && <CheckCircle2 className="w-3 h-3" />}
                    {rental.status === "PLACED" && <Clock className="w-3 h-3" />}
                    {rental.status === "RETURNED" && <RotateCcw className="w-3 h-3" />}
                    {rental.status === "CANCELLED" && <XCircle className="w-3 h-3" />}
                    {rental.status}
                </Badge>
            </TableCell>

            <TableCell className="text-right">
                <RentalActions id={rental.id} />
            </TableCell>
        </TableRow>
    )
}

export default RentalTable