import Link from "next/link";
import { format, differenceInDays } from "date-fns";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    CreditCard,
    Download,
    ExternalLink,
    ShieldCheck,
    Receipt,
    RotateCcw,
    Clock,
    XCircle,
    Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { getPaymentById } from "@/app/(Dashboard)/_actions/dashboard/getPaymentById";


// 🔹 Single Payment Data Object (Provided by user)
const paymentData = {
    id: "cmsafvijv00002svwjq2h9tco",
    amount: 42000,
    status: "COMPLETED",
    transactionId: "pi_3TzdSqP1zo7ZJ7qZ0vW6qTbO",
    rentalOrderId: "dc5b962f-9dff-4f9c-afa6-c3aa8d3c9468",
    customerId: "e61fb164-4c2e-4768-b656-5c92e06d4e14",
    createdAt: "2026-08-01T14:00:41.900Z",
    updatedAt: "2026-08-01T14:00:41.900Z",
    rentalOrder: {
        customerId: "e61fb164-4c2e-4768-b656-5c92e06d4e14",
        gearItemId: "a5edc6fa-0dd5-43ef-99d3-d01280bf54b1",
        quantity: 2,
        startDate: "2026-07-10T00:00:00.000Z",
        endDate: "2026-07-12T00:00:00.000Z",
        totalPrice: 21000,
        status: "PAID",
        gearItem: {
            title: "Track Driving",
            description: "Professional mountain track",
            brand: "Trek",
            pricePerDay: 500,
            image:
                "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
            category: "Bike",
            providerId: "6c28680e-f65a-468c-9b73-187458cde5a5",
        },
    },
};

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PaymentDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const payment = await getPaymentById(id)
    const { rentalOrder } = payment

    const totalDays = Math.max(
        1,
        differenceInDays(
            new Date(rentalOrder.endDate),
            new Date(rentalOrder.startDate)
        )
    );

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs font-bold px-3 py-0.5 rounded-full">
                            Financial Ledger & Invoices
                        </Badge>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
                        Payment Details <Receipt className="w-6 h-6 text-emerald-600" />
                    </h1>
                    <p className="text-xs text-muted-foreground max-w-md">
                        View transaction details, payment breakdown, and download official receipt invoices for your rental.
                    </p>
                </div>

                <div className="bg-card border border-border/70 p-4 sm:p-5 rounded-2xl min-w-55 space-y-1 shadow-xs">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-emerald-600" /> Total Paid Amount
                    </span>
                    <p className="text-2xl font-black text-emerald-600">
                        ${paymentData.amount.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <Button variant="outline" size="sm" asChild className="rounded-xl gap-2 text-xs font-bold border-border/60">
                    <Link href="/dashboard/payments">
                        <ArrowLeft className="w-4 h-4" /> Back to History
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-xl border-border/60 text-xs font-bold gap-2 hover:bg-emerald-500/10 hover:text-emerald-600"
                >
                    <Download className="w-4 h-4" /> Download Invoice
                </Button>
            </div>

            {/* PAYMENTS TABLE */}
            <Card className="rounded-3xl border-border/60 bg-card overflow-hidden shadow-xs">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-muted/40">
                                <TableRow>
                                    <TableHead className="text-xs font-bold">Transaction / Item</TableHead>
                                    <TableHead className="text-xs font-bold">Trx ID</TableHead>
                                    <TableHead className="text-xs font-bold">Date</TableHead>
                                    <TableHead className="text-xs font-bold">Duration</TableHead>
                                    <TableHead className="text-xs font-bold">Amount</TableHead>
                                    <TableHead className="text-xs font-bold">Status</TableHead>
                                    <TableHead className="text-xs font-bold text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                <TableRow className="hover:bg-muted/30 transition-colors">

                                    {/* Gear & Payment ID */}
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Image width={600} height={500}
                                                src={rentalOrder.gearItem.image}
                                                alt={rentalOrder.gearItem.title}
                                                className="w-10 h-10 rounded-xl object-cover border border-border/60 shrink-0"
                                            />
                                            <div className="space-y-0.5">
                                                <p className="font-extrabold text-xs text-foreground line-clamp-1">
                                                    {rentalOrder.gearItem.title}
                                                </p>
                                                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                                                    #{paymentData.id}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-xs font-mono font-bold text-muted-foreground">
                                        <button
                                            className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer"
                                            title="Click to copy"
                                        >
                                            {paymentData.transactionId}
                                        </button>
                                    </TableCell>

                                    {/* Date */}
                                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                                        {format(new Date(paymentData.createdAt), "MMM dd, yyyy")}
                                    </TableCell>

                                    {/* Duration */}
                                    <TableCell className="text-xs font-semibold text-foreground whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                            <span>{totalDays} Days ({rentalOrder.quantity} Qty)</span>
                                        </div>
                                    </TableCell>

                                    {/* Amount */}
                                    <TableCell className="text-xs font-black text-foreground">
                                        ${paymentData.amount.toLocaleString()}
                                    </TableCell>

                                    {/* Status Badge */}
                                    <TableCell>
                                        <Badge
                                            className={`font-bold text-[10px] rounded-lg px-2.5 py-0.5 border shadow-none gap-1 ${paymentData.status === "COMPLETED" || paymentData.status === "PAID"
                                                ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                                : paymentData.status === "PENDING"
                                                    ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                                    : paymentData.status === "FAILED"
                                                        ? "bg-rose-500/10 text-rose-600 border-rose-500/20"
                                                        : "bg-purple-500/10 text-purple-600 border-purple-500/20"
                                                }`}
                                        >
                                            {(paymentData.status === "COMPLETED" || paymentData.status === "PAID") && (
                                                <CheckCircle2 className="w-3 h-3" />
                                            )}
                                            {paymentData.status === "PENDING" && <Clock className="w-3 h-3" />}
                                            {paymentData.status === "FAILED" && <XCircle className="w-3 h-3" />}
                                            {paymentData.status === "REFUNDED" && <RotateCcw className="w-3 h-3" />}
                                            {paymentData.status}
                                        </Badge>
                                    </TableCell>

                                    {/* Action Link */}
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            asChild
                                            className="h-8 rounded-xl text-xs font-bold gap-1"
                                        >
                                            <Link href={`/dashboard/customer/rentals/${paymentData.rentalOrderId}`}>
                                                Rental <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-3xl border-border/60 bg-card p-6 space-y-4">
                    <h2 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-emerald-600" /> Payment & Price Breakdown
                    </h2>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-muted-foreground">
                            <span>Brand & Category</span>
                            <span className="font-bold text-foreground">{rentalOrder.gearItem.brand} ({rentalOrder.gearItem.category})</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Daily Rate</span>
                            <span className="font-bold text-foreground">${rentalOrder.gearItem.pricePerDay} / day</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Quantity × Duration</span>
                            <span className="font-bold text-foreground">{rentalOrder.quantity} Items × {totalDays} Days</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Order Subtotal</span>
                            <span className="font-bold text-foreground">${rentalOrder.totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-border/60 pt-2 flex justify-between text-xs font-black text-foreground">
                            <span>Total Amount</span>
                            <span className="text-emerald-600 text-sm">${paymentData.amount.toLocaleString()}</span>
                        </div>
                    </div>
                </Card>

                <Card className="rounded-3xl border-border/60 bg-card p-6 space-y-4">
                    <h2 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-600" /> Rental Schedule
                    </h2>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-muted-foreground">
                            <span>Start Date</span>
                            <span className="font-bold text-foreground">
                                {format(new Date(rentalOrder.startDate), "PPP")}
                            </span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>End Date</span>
                            <span className="font-bold text-foreground">
                                {format(new Date(rentalOrder.endDate), "PPP")}
                            </span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Customer ID</span>
                            <span className="font-mono text-muted-foreground truncate max-w-55">
                                {paymentData.customerId}
                            </span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Provider ID</span>
                            <span className="font-mono text-muted-foreground truncate max-w-55">
                                {rentalOrder.gearItem.providerId}
                            </span>
                        </div>
                    </div>
                </Card>

            </div>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>All payment transactions are encrypted with SSL 256-bit Security.</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                    <Building2 className="w-3.5 h-3.5" /> Integrated Gateways: Stripe / Mobile Banking
                </div>
            </div>
        </div>
    );
}