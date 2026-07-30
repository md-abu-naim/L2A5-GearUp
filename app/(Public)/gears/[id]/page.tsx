import Image from "next/image";
import Link from "next/link";
import { User, Mail, ArrowLeft, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getGearById } from "../../_actions/Gears/getGearById";
import RentalBookingForm from "../../_components/Gears/RentalBookingForm";
import { GearItem } from "@/lib/types";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GearDetailsPage({ params }: PageProps) {
  const { id } = await params

  const gear: GearItem = await getGearById(id)

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-xl text-muted-foreground hover:text-foreground"
        >
          <Link href="/gears" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Gear List
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column - Product Image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-lg">
            <Image
              src={gear.image}
              alt={gear.title}
              fill
              className="object-cover"
              priority
            />
            <Badge
              className={cn(
                "absolute top-4 right-4 px-3 py-1 text-xs font-semibold shadow-md",
                gear.status === "OUT_OF_STOCK" || gear.stock === 0
                  ? "bg-destructive text-white"
                  : "bg-emerald-600 text-white"
              )}
            >
              {gear.status} ({gear.stock})
            </Badge>
          </div>
        </div>

        {/* Right Column - Product Info & Rent Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-emerald-600 border-emerald-500/20 bg-emerald-500/10">
                {gear.category}
              </Badge>
              <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                Brand: {gear.brand}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {gear.title}
            </h1>

            <div className="flex items-baseline gap-2 pt-2">
              <span className="text-3xl font-black text-emerald-600">
                ${gear.pricePerDay}
              </span>
              <span className="text-sm text-muted-foreground font-medium">/ day</span>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-b border-border/60 py-4">
            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-1 tracking-wider">
              Description
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {gear.description}
            </p>
          </div>

          {/* Provider Card */}
          <Card className="rounded-2xl border-border/60 bg-card p-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Provided by</p>
                <h4 className="text-sm font-bold text-foreground">
                  {gear.provider.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <Mail className="h-3 w-3" />
                  <span>{gear.provider.email}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Rental Booking Box */}
          <RentalBookingForm gear={gear} />
        </div>
      </div>
    </div>
  );
}
