import Image from "next/image";
import Link from "next/link";
import { format, differenceInDays } from "date-fns";
import {
    ArrowLeft,
    Calendar,
    Clock,
    CheckCircle2,
    XCircle,
    Package,
    Tag,
    ShieldCheck,
    User,
    Hash,
    Layers,
    Receipt,
    Download,
    CreditCard
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { getRentalById } from "@/app/(Dashboard)/_actions/getRentalById";
import PayButton from "@/app/(Dashboard)/_components/PayButton";
import { IRental } from "@/lib/types";

interface IRentalDetails {
    id: string;
    customerId: string;
    gearItemId: string;
    quantity: number;
    startDate: string;
    endDate: string;
    totalPrice: number;
    status: "PLACED" | "CONFIRMED" | "PAID" | "PICKED_UP" | "RETURNED" | "CANCELLED";
    createdAt: string;
    updatedAt: string;
    gearItem: {
        id: string;
        title: string;
        description: string;
        brand: string;
        pricePerDay: number;
        stock: number;
        status: string;
        image: string;
        providerId: string;
        category: string;
        createdAt: string;
        updatedAt: string;
    };
}

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function RentalDetailsPage({ params }: PageProps) {
    const { id } = await params
    const rental:IRental = await getRentalById(id)

    const start = new Date(rental.startDate);
    const end = new Date(rental.endDate);
    const totalDays = Math.max(differenceInDays(end, start), 1);

    const isPayable = rental.status === "PLACED" || rental.status === "CONFIRMED";

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-xl border-border/60 hover:bg-muted"
                    >
                        <Link href="/dashboard/my-rentals">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-xl md:text-2xl font-black tracking-tight text-foreground">
                            Rental Order Details
                        </h1>
                        <p className="text-xs text-muted-foreground font-mono">
                            Order ID: #{rental.id?.slice(0, 12)}...
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-xl border-border/60 text-xs font-bold gap-1.5"
                    >
                        <Download className="w-3.5 h-3.5" /> Invoice
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Card className="rounded-2xl border-border/60 bg-card overflow-hidden shadow-xs">
                        <div className="relative h-64 sm:h-80 w-full bg-muted">
                            <Image
                                src={rental.gearItem.image}
                                alt={rental.gearItem.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-3 left-3 flex gap-2">
                                <Badge className="bg-black/60 backdrop-blur-md text-white border-none font-bold text-xs rounded-lg px-2.5 py-1">
                                    {rental.gearItem.category}
                                </Badge>
                                <Badge className="bg-emerald-600 text-white border-none font-bold text-xs rounded-lg px-2.5 py-1">
                                    Brand: {rental.gearItem.brand}
                                </Badge>
                            </div>
                        </div>

                        <CardContent className="p-6 space-y-4">
                            <div>
                                <h2 className="text-2xl font-black text-foreground">
                                    {rental.gearItem.title}
                                </h2>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {rental.gearItem.description}
                                </p>
                            </div>

                            <Separator className="bg-border/40" />

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-xl bg-muted/60 text-muted-foreground">
                                        <Tag className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-[10px]">Price / Day</p>
                                        <p className="font-bold text-foreground">
                                            ${rental.gearItem.pricePerDay}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-xl bg-muted/60 text-muted-foreground">
                                        <Layers className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-[10px]">Stock Left</p>
                                        <p className="font-bold text-foreground">
                                            {rental.gearItem.stock} Units
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-xl bg-muted/60 text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-[10px]">Gear Status</p>
                                        <p className="font-bold text-emerald-600">
                                            {rental.gearItem.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-border/60 bg-card p-6 shadow-xs space-y-4">
                        <h3 className="font-extrabold text-sm text-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-600" /> Booking Schedule
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/95 p-4 rounded-xl border border-border/40">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                    Start Date
                                </span>
                                <p className="text-sm font-bold text-foreground">
                                    {format(new Date(rental.startDate), "EEEE, MMM dd, yyyy")}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">
                                    End Date
                                </span>
                                <p className="text-sm font-bold text-foreground">
                                    {format(new Date(rental.endDate), "EEEE, MMM dd, yyyy")}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* RIGHT COLUMN: PAYMENT BUTTON */}
                <div className="space-y-6">
                    <Card className="rounded-2xl border-border/60 bg-card p-6 shadow-xs space-y-4">
                        <h3 className="font-extrabold text-sm text-foreground">Rental Status</h3>
                        <div className="flex items-center justify-between">
                            <Badge
                                className={cn(
                                    "font-bold text-xs rounded-xl px-3 py-1.5 gap-1.5 border shadow-none",
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
                                {rental.status === "PLACED" && <Clock className="w-3.5 h-3.5" />}
                                {rental.status === "RETURNED" && (
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                )}
                                {rental.status === "CANCELLED" && (
                                    <XCircle className="w-3.5 h-3.5" />
                                )}
                                {rental.status}
                            </Badge>

                            <span className="text-[11px] text-muted-foreground">
                                Placed on {format(new Date(rental.createdAt), "MMM dd")}
                            </span>
                        </div>
                    </Card>

                    {/* PAYMENT & PRICE SUMMARY */}
                    <Card className="rounded-2xl border-border/60 bg-card p-6 shadow-xs space-y-4">
                        <h3 className="font-extrabold text-sm text-foreground flex items-center gap-2">
                            <Receipt className="w-4 h-4 text-emerald-600" /> Payment Summary
                        </h3>

                        <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Rate per day</span>
                                <span>${rental.gearItem.pricePerDay}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Quantity</span>
                                <span>x {rental.quantity}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Duration</span>
                                <span>{totalDays} Day(s)</span>
                            </div>

                            <Separator className="bg-border/40 my-2" />

                            <div className="flex justify-between items-center text-sm font-black text-foreground">
                                <span>Total Amount</span>
                                <span className="text-lg text-emerald-600">
                                    ${rental.totalPrice.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        {isPayable ? (
                            <PayButton rental={rental} />
                        ) : rental.status === "PAID" ? (
                            <Button
                                disabled
                                className="w-full h-11 bg-emerald-500/10 text-emerald-600 font-bold text-xs rounded-xl border border-emerald-500/20 gap-2 mt-4"
                            >
                                <CheckCircle2 className="w-4 h-4" /> Payment Completed
                            </Button>
                        ) : null}
                    </Card>

                    <Card className="rounded-2xl border-border/60 bg-card p-6 shadow-xs space-y-3">
                        <h3 className="font-extrabold text-sm text-foreground">
                            Reference Information
                        </h3>

                        <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="w-3.5 h-3.5" />
                                <span className="truncate">
                                    Customer ID: {rental.customerId.slice(0, 12)}...
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Package className="w-3.5 h-3.5" />
                                <span className="truncate">
                                    Provider ID: {rental.gearItem.providerId.slice(0, 12)}...
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Hash className="w-3.5 h-3.5" />
                                <span className="truncate">
                                    Gear Item ID: {rental.gearItemId.slice(0, 12)}...
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}


