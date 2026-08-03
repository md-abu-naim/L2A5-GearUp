import Link from "next/link";
import { Package, PackageCheck, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IRental } from "@/lib/types";
import RentalTable from "../../_components/provider-dashboard/RentalTable";
import { getAllRentals } from "../../_actions/admin-dashboard/getAllRentals";

export default async function AllRentals() {
    const rentals: IRental[] = await getAllRentals()

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                        Rental Orders <PackageCheck className="w-7 h-7 text-emerald-600" />
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Monitor, approve, and track all gear rental bookings placed by customers.
                    </p>
                </div>
                <Button
                    asChild
                    className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs shrink-0"
                >
                    <Link
                        href="/admin-dashboard/add-category"
                        className="flex items-center gap-2"
                    >
                        <Package className="w-4 h-4 text-emerald-400" />
                        Add New Category
                    </Link>
                </Button>
            </div>

            <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-slate-50 border-b border-slate-100">
                                <TableRow>
                                    <TableHead className="text-xs font-bold text-slate-600">Order & Gear</TableHead>
                                    <TableHead className="text-xs font-bold text-slate-600">Rental Duration</TableHead>
                                    <TableHead className="text-xs font-bold text-slate-600">Amount</TableHead>
                                    <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
                                    <TableHead className="text-xs font-bold text-slate-600 text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {rentals.length > 0 ? (
                                    rentals.map((rental) => (
                                        <RentalTable key={rental.id} rental={rental} />
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-12 text-xs text-slate-400">
                                            No rental orders found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}