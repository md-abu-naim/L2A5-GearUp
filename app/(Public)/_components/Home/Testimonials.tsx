
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Star, MessageSquareQuote, Sparkles, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IReviewItem } from "@/lib/types";
import { getReviews } from "../../_actions/Home/getReviews";


const Testimonials = async () => {
    const reviews: IReviewItem[] = await getReviews()
    return (
        <section className="pt-20 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full w-fit mx-auto gap-1.5 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Verified Community Feedback
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Loved by <span className="text-emerald-600">Creators & Renters</span>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground">
                        Read real reviews from members who have rented and shared gear on GearUp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <Card
                            key={review.id}
                            className="group relative rounded-3xl border border-border/60 bg-card hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                        >
                            <CardContent className="p-6 space-y-5 flex flex-col justify-between h-full">

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        {/* Star Rating Render */}
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating
                                                            ? "text-amber-400 fill-amber-400"
                                                            : "text-slate-200 dark:text-slate-800"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <MessageSquareQuote className="w-7 h-7 text-emerald-600/30 group-hover:text-emerald-600 transition-colors" />
                                    </div>

                                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                                        {`"${review.comment}"`}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/40 space-y-3">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted border border-border">
                                                <Image
                                                    src={
                                                        review.customer?.image ||
                                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                                                    }
                                                    alt={review.customer?.name || "Customer"}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-xs font-bold text-foreground flex items-center gap-1">
                                                    {review.customer?.name || "Anonymous Renter"}
                                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                                </h4>
                                                <span className="text-[10px] text-muted-foreground block">
                                                    {review.customer?.role || "Verified User"}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="text-[10px] text-muted-foreground font-medium">
                                            {format(new Date(review.createdAt), "MMM dd, yyyy")}
                                        </span>
                                    </div>

                                    {review.gearItem && (
                                        <div className="bg-slate-100/80 dark:bg-slate-900 px-3 py-1.5 rounded-xl text-[10px] text-muted-foreground truncate font-medium">
                                            <span className="text-emerald-600 font-bold">Rented: </span>
                                            {review.gearItem.title}
                                        </div>
                                    )}

                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;