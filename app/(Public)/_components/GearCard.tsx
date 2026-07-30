import Link from "next/link";
import Image from "next/image";
import { Tag, ArrowRight, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GearItem } from "@/lib/types";

interface GearCardProps {
    item: GearItem;
}

const GearCard = ({ item }: GearCardProps) => {
    const { image, title, category, status, brand, provider, stock, pricePerDay, description } = item || {}

    return (
        <Card title="Click for Details" className="group overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-52 w-full overflow-hidden bg-muted">
                <Image
                    src={image || "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-background/80 text-foreground backdrop-blur-md border border-border/50 text-xs font-medium rounded-lg">
                        <Tag className="w-3 h-3 mr-1 text-emerald-600" />
                        {category}
                    </Badge>
                </div>

                <div className="absolute top-3 right-3">
                    {status === "OUT_OF_STOCK" ? (
                        <Badge variant="destructive" className="rounded-lg text-[11px] font-semibold px-2.5 py-1">
                            {status}
                        </Badge>
                    ) : (
                        <Badge className="bg-emerald-600 text-white rounded-lg text-[11px] font-semibold px-2.5 py-1">
                            {status} ({stock})
                        </Badge>
                    )}
                </div>
            </div>

            <CardContent className="p-5 flex-1 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wider text-emerald-600">
                        {brand}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-muted-foreground">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        {provider?.name}
                    </span>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-emerald-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {description}
                    </p>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 border-t border-border/40 flex items-center justify-between mt-auto">
                <div className="pt-3">
                    <span className="text-2xl font-extrabold text-foreground">
                        ${pricePerDay}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium"> / day</span>
                </div>

                <Button
                    asChild
                    disabled={status === "OUT_OF_STOCK"}
                    size="sm"
                    className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 shadow-md shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Link href={`/${item.id}`} className="flex items-center gap-1">
                        {status === "OUT_OF_STOCK" ? "Unavailable" : "Rent Now"}
                        {status !== "OUT_OF_STOCK" && <ArrowRight className="w-4 h-4 ml-1" />}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default GearCard;