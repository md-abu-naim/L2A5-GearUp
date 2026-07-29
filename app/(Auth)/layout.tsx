import Navbar from "@/components/Shared/Navber";
import { Mountain, ShieldCheck, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />

            <main className="relative flex-1 flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-dark:from-blue-950/20 via-background to-background dark:from-blue-950/20" />
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid items-center gap-12 lg:grid-cols-12">

                        {/* LEFT SIDE: Common Design for both Login & Register */}
                        <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-4">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold">
                                    <Mountain className="mr-2 h-4 w-4 text-primary" />
                                    GearUp • Explore & Rent
                                </Badge>
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl leading-[1.15] text-foreground">
                                    Start Your Next <br />
                                    <span className="text-primary">Great Adventure.</span>
                                </h1>
                                <p className="max-w-md text-base text-muted-foreground leading-relaxed">
                                    Join our outdoor community. Rent top-tier sports equipment or earn by listing your own gear effortlessly.
                                </p>
                            </div>

                            <div className="space-y-6 pt-2">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-foreground">Verified Gear & Users</h4>
                                        <p className="text-sm text-muted-foreground">Every item is checked to guarantee safety and quality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-foreground">Seamless Booking Flow</h4>
                                        <p className="text-sm text-muted-foreground">Select dates, confirm, and pay securely via Stripe.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-foreground">Role-Based Dashboard</h4>
                                        <p className="text-sm text-muted-foreground">Tailored experience for both Customers and Providers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Dynamic Form Wrapper */}
                        <div className="lg:col-span-6 flex justify-center lg:justify-end">
                            <Card className="w-full max-w-lg rounded-3xl border border-border/60 bg-card/80 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                                {children}
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;