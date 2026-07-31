import { ShoppingBag, Package } from "lucide-react";
import { getMyRentals } from "../../_actions/getMyRentals";
import { IRental } from "@/lib/types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import RentalTables from "../../_components/RentalTables";

export default async function MyRentalsPage() {
  const rentals: IRental[] = (await getMyRentals()) || [];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
            My Rentals <ShoppingBag className="w-6 h-6 text-emerald-600" />
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            Track and manage your gear rental requests, active bookings & history.
          </p>
        </div>
      </div>

      <Card className="border-border/60 bg-card rounded-2xl shadow-xs overflow-hidden">
        {rentals.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-foreground">
              No Rentals Found
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              You {"haven't"} placed any gear rental requests yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead className="text-xs font-bold">
                    Gear Item / Order ID
                  </TableHead>
                  <TableHead className="text-xs font-bold">Quantity</TableHead>
                  <TableHead className="text-xs font-bold">
                    Rental Duration
                  </TableHead>
                  <TableHead className="text-xs font-bold">
                    Total Price
                  </TableHead>
                  <TableHead className="text-xs font-bold">Status</TableHead>
                  <TableHead className="text-xs font-bold text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rentals.map((rental) => (
                  <RentalTables key={rental.id} rental={rental} />
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}