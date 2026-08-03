"use client";

import { useState } from "react";
import { Star, Send, Loader2, MessageSquareText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "../../_actions/dashboard/createReview";
import { toast } from "sonner";

interface ReviewFormProps {
    gearItemId: string;
}

export default function ReviewForm({ gearItemId }: ReviewFormProps) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            gearItemId,
            rating,
            comment,
        };

        const result = await createReview(payload)

        if (result.success) {
            toast.success(result.message || "Thanks For Your Review")
            await new Promise((resolve) => setTimeout(resolve, 1200));

            setIsSubmitted(true);
        }

    };

    if (isSubmitted) {
        return (
            <Card className="rounded-2xl border-emerald-500/20 bg-emerald-500/5 p-6 shadow-xs">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-600">
                        <Star className="w-6 h-6 fill-emerald-600" />
                    </div>
                    <h4 className="font-extrabold text-base text-foreground">Thank You for Your Feedback!</h4>
                    <p className="text-xs text-muted-foreground max-w-sm">
                        Your review helps other renters make better choices and helps us maintain gear quality.
                    </p>
                </div>
            </Card>
        );
    }

    return (
        <Card className="rounded-2xl border-border/60 bg-card p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
                <MessageSquareText className="w-4 h-4 text-emerald-600" />
                <h3 className="font-extrabold text-sm text-foreground">Leave a Review</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted-foreground block">
                        Rate your experience <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className="p-1 text-slate-300 transition-colors focus:outline-hidden"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                <Star
                                    className={`w-6 h-6 transition-all ${star <= (hoverRating || rating)
                                        ? "fill-amber-400 text-amber-400 scale-110"
                                        : "text-slate-300 hover:text-slate-400"
                                        }`}
                                />
                            </button>
                        ))}
                        <span className="text-xs font-bold text-slate-500 ml-2">
                            {rating > 0 ? `${rating} / 5` : ""}
                        </span>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted-foreground block">
                        Your Review
                    </label>
                    <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="How was the gear condition? Was the handover smooth? Share your thoughts..."
                        className="text-xs rounded-xl border-border/60 min-h-[90px] focus-visible:ring-emerald-500 resize-none"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting || rating === 0}
                    className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 px-6 gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin text-emerald-400" /> Submitting...
                        </>
                    ) : (
                        <>
                            <Send className="w-3.5 h-3.5 text-emerald-400" /> Submit Review
                        </>
                    )}
                </Button>
            </form>
        </Card>
    );
}