import Link from "next/link";
import { Package, PackageCheck } from "lucide-react";
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
  const rentals: IRental[] = await getAllRentals();

  return (
    <div className="min-h-screen w-full bg-background px-4 pb-16 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="flex items-center gap-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Rental Orders
                <PackageCheck className="h-6 w-6 text-emerald-600 sm:h-7 sm:w-7" />
              </h1>

              <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                {rentals.length} Orders
              </span>
            </div>

            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Monitor, approve, and track all gear rental bookings placed by
              customers.
            </p>
          </div>

          <Button
            asChild
            className="
              h-10
              shrink-0
              rounded-xl
              bg-foreground
              px-4
              text-xs
              font-bold
              text-background
              shadow-sm
              transition-all
              hover:opacity-90
            "
          >
            <Link
              href="/admin-dashboard/add-category"
              className="flex items-center gap-2"
            >
              <Package className="h-4 w-4 text-emerald-500" />
              Add New Category
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="rounded-2xl border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Total Orders
              </p>

              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="text-2xl font-black tracking-tight text-foreground">
                  {rentals.length}
                </p>

                <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-600">
                  <PackageCheck className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Active Rentals
              </p>

              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="text-2xl font-black tracking-tight text-foreground">
                  {
                    rentals.filter((rental) =>
                      ["CONFIRMED", "PAID", "PICKED_UP"].includes(
                        rental.status
                      )
                    ).length
                  }
                </p>

                <div className="rounded-xl bg-blue-500/10 p-2 text-blue-600">
                  <PackageCheck className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Pending Orders
              </p>

              <div className="mt-2 flex items-end justify-between gap-3">
                <p className="text-2xl font-black tracking-tight text-foreground">
                  {rentals.filter((rental) => rental.status === "PLACED").length}
                </p>

                <div className="rounded-xl bg-amber-500/10 p-2 text-amber-600">
                  <Package className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden rounded-3xl border-border bg-card shadow-sm">
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div>
                <h2 className="text-sm font-black text-foreground sm:text-base">
                  All Rental Transactions
                </h2>

                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Complete overview of customer rental activity.
                </p>
              </div>

              <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold text-muted-foreground">
                {rentals.length} Total
              </span>
            </div>

            <div className="overflow-x-auto">
              <Table className="min-w-212.5">
                <TableHeader className="bg-muted/50">
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="h-11 text-xs font-bold text-muted-foreground">
                      Order & Gear
                    </TableHead>

                    <TableHead className="h-11 text-xs font-bold text-muted-foreground">
                      Rental Duration
                    </TableHead>

                    <TableHead className="h-11 text-xs font-bold text-muted-foreground">
                      Amount
                    </TableHead>

                    <TableHead className="h-11 text-xs font-bold text-muted-foreground">
                      Status
                    </TableHead>

                    <TableHead className="h-11 text-right text-xs font-bold text-muted-foreground">
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
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-40 text-center"
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="rounded-2xl bg-muted p-3 text-muted-foreground">
                            <Package className="h-5 w-5" />
                          </div>

                          <p className="text-xs font-bold text-foreground">
                            No rental orders found
                          </p>

                          <p className="text-[11px] text-muted-foreground">
                            There are currently no rental transactions to
                            display.
                          </p>
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
    </div>
  );
}