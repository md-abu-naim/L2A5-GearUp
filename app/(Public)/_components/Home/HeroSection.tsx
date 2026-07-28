import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mountain, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-background to-background dark:from-blue-950/20" />

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <Badge
                            variant="secondary"
                            className="rounded-full px-4 py-1"
                        >
                            <Mountain className="mr-2 h-4 w-4" />
                            Explore • Rent • Adventure
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Rent Premium Gear.
                            <span className="block text-primary">
                                Explore More Adventures.
                            </span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground">
                            Find high-quality sports and outdoor equipment from
                            trusted providers. Rent what you need and start your
                            next adventure without the hassle of ownership.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                asChild
                            >
                                <Link href="/gear">
                                    Explore Gear
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                            >
                                <Link href="/register">
                                    Become a Provider
                                </Link>
                            </Button>

                        </div>

                        {/* Trust Points */}
                        <div className="flex flex-wrap gap-5 pt-4 text-sm text-muted-foreground">

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                Verified Providers
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                Secure Rental
                            </div>
                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="relative">
                        <Card className="relative overflow-hidden rounded-3xl border-none p-2 shadow-xl">
                            <div className="relative aspect-square overflow-hidden rounded-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306"
                                    alt="Outdoor adventure gear"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 rounded-xl bg-background/90 p-4 shadow-lg backdrop-blur">
                                <p className="text-sm text-muted-foreground">
                                    Available Gear
                                </p>
                                <p className="text-2xl font-bold">
                                    500+
                                </p>
                            </div>

                            <div className="absolute right-6 top-6 rounded-xl bg-background/90 p-4 shadow-lg backdrop-blur">
                                <p className="text-sm text-muted-foreground">
                                    Trusted
                                </p>

                                <p className="font-bold">
                                    Providers
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;