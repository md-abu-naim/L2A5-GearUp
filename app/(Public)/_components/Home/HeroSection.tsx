// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, CheckCircle2, Mountain, ShieldCheck } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";

// const HeroSection = () => {
//     return (
//         <section className="relative overflow-hidden">
//             <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-background to-background" />
//             <div className="container mx-auto px-4">
//                 <div className="grid items-center gap-12 lg:grid-cols-2">
//                     {/* Left Content */}
//                     <div className="space-y-6">
//                         <Badge
//                             variant="secondary"
//                             className="rounded-full px-4 py-1"
//                         >
//                             <Mountain className="mr-2 h-4 w-4" />
//                             Explore • Rent • Adventure
//                         </Badge>
//                         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
//                             Rent Premium Gear.
//                             <span className="block text-primary">
//                                 Explore More Adventures.
//                             </span>
//                         </h1>
//                         <p className="max-w-xl text-lg text-muted-foreground">
//                             Find high-quality sports and outdoor equipment from
//                             trusted providers. Rent what you need and start your
//                             next adventure without the hassle of ownership.
//                         </p>

//                         <div className="flex flex-col gap-3 sm:flex-row">
//                             <Button
//                                 size="lg"
//                                 asChild
//                             >
//                                 <Link href="/gear">
//                                     Explore Gear
//                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                 </Link>
//                             </Button>

//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 asChild
//                             >
//                                 <Link href="/register">
//                                     Become a Provider
//                                 </Link>
//                             </Button>

//                         </div>

//                         {/* Trust Points */}
//                         <div className="flex flex-wrap gap-5 pt-4 text-sm text-muted-foreground">

//                             <div className="flex items-center gap-2">
//                                 <CheckCircle2 className="h-5 w-5 text-primary" />
//                                 Verified Providers
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 <ShieldCheck className="h-5 w-5 text-primary" />
//                                 Secure Rental
//                             </div>
//                         </div>
//                     </div>


//                     {/* Right Content */}
//                     <div className="relative">
//                         <Card className="relative overflow-hidden rounded-3xl border-none p-2 shadow-xl">
//                             <div className="relative aspect-square overflow-hidden rounded-2xl">
//                                 <Image
//                                     src="https://images.unsplash.com/photo-1551632811-561732d1e306"
//                                     alt="Outdoor adventure gear"
//                                     fill
//                                     className="object-cover"
//                                     priority
//                                 />
//                             </div>

//                             {/* Floating Card */}
//                             <div className="absolute bottom-6 left-6 rounded-xl bg-background/90 p-4 shadow-lg backdrop-blur">
//                                 <p className="text-sm text-muted-foreground">
//                                     Available Gear
//                                 </p>
//                                 <p className="text-2xl font-bold">
//                                     500+
//                                 </p>
//                             </div>

//                             <div className="absolute right-6 top-6 rounded-xl bg-background/90 p-4 shadow-lg backdrop-blur">
//                                 <p className="text-sm text-muted-foreground">
//                                     Trusted
//                                 </p>

//                                 <p className="font-bold">
//                                     Providers
//                                 </p>
//                             </div>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;


import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mountain, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-8 lg:py-12 bg-background">
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-500/10 via-background to-background" />
            <div className="absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Content Column */}
                    <div className="space-y-6 sm:space-y-8 text-left">
                        <Badge
                            variant="secondary"
                            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 border border-emerald-300 shadow-xs"
                        >
                            <Mountain className="mr-2 h-3.5 w-3.5 text-emerald-600" />
                            Explore • Rent • Adventure
                        </Badge>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.15]">
                            Rent Premium Gear.{" "}
                            <span className="block text-emerald-600">
                                Explore More Adventures.
                            </span>
                        </h1>

                        <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Find high-quality sports and outdoor equipment from trusted
                            providers. Rent what you need and start your next adventure
                            without the hassle of ownership.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button
                                size="lg"
                                asChild
                                className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-sm shadow-xl shadow-emerald-600/25 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <Link href="/gears" className="flex items-center justify-center">
                                    Explore Gear
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="rounded-full border-border hover:bg-muted text-foreground font-semibold px-8 py-6 text-sm shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <Link href="/register">
                                    Become a Provider
                                </Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-medium text-muted-foreground border-t border-border/60">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                <span>Verified Providers</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                                <span>Secure Rental Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Card */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-emerald-500/30 to-emerald-500/5 blur-lg opacity-70" />
                        <Card className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-3 shadow-2xl">
                            <div className="relative aspect-4/3 sm:aspect-square overflow-hidden rounded-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306"
                                    alt="Outdoor adventure gear"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                            </div>

                            <div className="absolute top-6 right-6 rounded-2xl border border-border/60 bg-card/85 p-3 sm:p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                        Trusted
                                    </p>
                                    <p className="text-sm font-bold text-foreground">
                                        100% Verified
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 rounded-2xl border border-border/60 bg-card/85 p-3 sm:p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                                    <Sparkles className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                                        Available Gear
                                    </p>
                                    <p className="text-xl font-extrabold text-foreground">
                                        500+ Items
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;