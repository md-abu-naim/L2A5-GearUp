import Link from "next/link";
import { PackageCheck, Plus } from "lucide-react";
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
import { getAllRentals } from "../../_actions/provider-dashboard/getAllRentals";
import { IRental } from "@/lib/types";
import RentalTable from "../../_components/provider-dashboard/RentalTable";

export default async function ProviderRentalsPage() {
  const rentals: IRental[] = await getAllRentals();

  return (
    <div className="min-h-screen max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-2">
            Rental Orders
            <PackageCheck className="w-7 h-7 text-emerald-600" />
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Monitor, approve, and track all gear rental bookings placed by
            customers.
          </p>
        </div>

        <Button
          size="sm"
          asChild
          className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-10 gap-2 shadow-sm"
        >
          <Link href="/provider-dashboard/add-gear">
            <Plus className="w-4 h-4" />
            Add New Gear
          </Link>
        </Button>
      </div>

      {/* Rental Table */}
      <Card className="rounded-3xl border-border bg-card overflow-hidden shadow-xs">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/60 border-b border-border">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-xs font-bold text-muted-foreground">
                    Order & Gear
                  </TableHead>

                  <TableHead className="text-xs font-bold text-muted-foreground">
                    Rental Duration
                  </TableHead>

                  <TableHead className="text-xs font-bold text-muted-foreground">
                    Amount
                  </TableHead>

                  <TableHead className="text-xs font-bold text-muted-foreground">
                    Status
                  </TableHead>

                  <TableHead className="text-xs font-bold text-muted-foreground text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rentals.length > 0 ? (
                  rentals.map((rental) => (
                    <RentalTable
                      key={rental.id}
                      rental={rental}
                    />
                  ))
                ) : (
                  <TableRow className="border-border">
                    <TableCell
                      colSpan={5}
                      className="text-center py-12 text-xs text-muted-foreground"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <PackageCheck className="w-8 h-8 text-muted-foreground/50" />

                        <span>No rental orders found.</span>
                      </div>
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