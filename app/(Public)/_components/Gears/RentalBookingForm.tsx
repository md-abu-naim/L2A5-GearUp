"use client";

import { useState } from "react";
import { format, differenceInDays } from "date-fns";
import { Calendar as CalendarIcon, Sparkles, ShoppingBag, } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { GearItem } from "@/lib/types";

type GearProps = {
    gear: GearItem
}

const RentalBookingForm = ({ gear }: GearProps) => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 3)),
    });

    const rentalDays =
        date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 1;

    const totalPrice = rentalDays * gear.pricePerDay;

    const isOutOfStock = gear.status === "OUT_OF_STOCK" || gear.stock === 0;

    return (
        <div className="space-y-4 rounded-2xl border border-border/60 bg-card p-5 shadow-xs">
            <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" /> Select Rental Dates
            </h3>

            {/* Date Range Picker */}
            <div className="grid gap-2">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant="outline"
                            disabled={isOutOfStock}
                            className={cn(
                                "w-full justify-start text-left font-normal rounded-xl h-11 border-border",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-emerald-600" />
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "LLL dd, yyyy")} -{" "}
                                        {format(date.to, "LLL dd, yyyy")}
                                    </>
                                ) : (
                                    format(date.from, "LLL dd, yyyy")
                                )
                            ) : (
                                <span>Pick date range</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 rounded-2xl" align="start">
                        <Calendar
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                            disabled={{ before: new Date() }} // 👈 আজকের আগের সব তারিখ ডিসেবল করবে
                        />
                    </PopoverContent>
                </Popover>
            </div>

            {/* Booking action */}
            <div className="space-y-1.5 pt-2 text-xs">
                <div className="flex justify-between text-muted-foreground">
                    <span>Duration:</span>
                    <span className="font-semibold text-foreground">{rentalDays} Day(s)</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                    <span>Rate:</span>
                    <span className="font-semibold text-foreground">${gear.pricePerDay} / day</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-foreground border-t border-border/60 pt-2">
                    <span>Total Amount:</span>
                    <span className="text-emerald-600">${totalPrice}</span>
                </div>
            </div>

            <Button
                size="lg"
                disabled={isOutOfStock}
                className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/20"
            >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {isOutOfStock ? "Currently Out of Stock" : "Rent Now"}
            </Button>
        </div>
    );
};

export default RentalBookingForm;