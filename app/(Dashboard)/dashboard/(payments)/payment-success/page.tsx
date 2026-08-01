import Link from "next/link";
import { format } from "date-fns";
import {
    CheckCircle2,
    ShoppingBag,
    Calendar,
    Receipt,
    ShieldCheck,
    Home,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getRentalById } from "../../../_actions/getRentalById";

type Props = {
    searchParams: Promise<{
        rentalId?: string;
    }>;
};

export default async function PaymentSuccessPage({ searchParams }: Props) {
    const { rentalId } = await searchParams

    const rental = await getRentalById(rentalId as string)

    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full space-y-8">
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-xl shadow-emerald-500/10 mb-2 animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold text-xs px-3 py-1 rounded-full">
                        Payment Completed Successfully
                    </Badge>

                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                        Thank You for Your Order!
                    </h1>

                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                        Your payment was processed successfully. We have confirmed your gear rental request.
                    </p>
                </div>

                <Card className="rounded-3xl border-border/60 bg-card p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
                    <div className="h-2 bg-emerald-600 absolute top-0 left-0 right-0" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-muted/40 p-4 rounded-2xl border border-border/50">
                        <div>
                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                                Transaction / Rental ID
                            </span>
                            <p className="font-mono text-xs font-extrabold text-foreground mt-0.5">
                                #{rentalId}
                            </p>
                        </div>
                        <Badge className="bg-emerald-600 text-white font-bold text-xs rounded-xl px-3 py-1 w-fit">
                            Status: PAID
                        </Badge>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-muted border border-border/60 shrink-0">
                            <Image width={500} height={400}
                                src={rental.gearItem.image}
                                alt={rental.gearItem.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-extrabold text-sm text-foreground">
                                {rental.gearItem.title}
                            </h3>
                            <p className="text-xs text-muted-foreground flex items-center gap-2">
                                <span>Category: {rental.gearItem.category}</span> •
                                <span>Brand: {rental.gearItem.brand}</span>
                            </p>
                        </div>
                    </div>

                    <Separator className="bg-border/60" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-2 p-3.5 rounded-2xl bg-muted/95 border border-border/40">
                            <span className="font-bold text-muted-foreground flex items-center gap-1.5 text-[11px]">
                                <Calendar className="w-3.5 h-3.5 text-emerald-600" /> Rental Schedule
                            </span>
                            <p className="font-bold text-foreground">
                                {format(new Date(rental.startDate), "MMM dd, yyyy")} →{" "}
                                {format(new Date(rental.endDate), "MMM dd, yyyy")}
                            </p>
                        </div>

                        <div className="space-y-2 p-3.5 rounded-2xl bg-muted/95 border border-border/40">
                            <span className="font-bold text-muted-foreground flex items-center gap-1.5 text-[11px]">
                                <Receipt className="w-3.5 h-3.5 text-emerald-600" /> Total Paid
                            </span>
                            <p className="font-black text-emerald-600 text-sm">
                                ${rental.totalPrice.toLocaleString()} (QTY: {rental.quantity})
                            </p>
                        </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <Button
                            asChild
                            className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-emerald-600/20 gap-2"
                        >
                            <Link href={`/dashboard/my-rentals/${rentalId}`}>
                                <ShoppingBag className="w-4 h-4" /> View Rental Details
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            asChild
                            className="h-12 border-border/60 font-bold text-xs rounded-2xl gap-2"
                        >
                            <Link href="/dashboard/my-rentals">
                                <Home className="w-4 h-4 text-muted-foreground" /> Back to My Rentals
                            </Link>
                        </Button>
                    </div>
                </Card>

                <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    A confirmation email with invoice has been sent to your registered email.
                </p>
            </div>
        </div>
    );
}