
import Navbar from "@/components/Shared/Navber";
import {
    ShieldCheck,
    Zap,
    Users,
    Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getMe } from "@/services/getMe";

const AuthLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const user = await getMe();

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar user={user} />

            <main className="relative flex-1 overflow-hidden bg-background">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
                </div>

                <div className="relative container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                        {/* Left Side --> design */}
                        <div className="lg:col-span-6 space-y-8">

                            <div className="space-y-5">
                                <Badge
                                    className="
                                        w-fit rounded-full
                                        border border-emerald-500/20
                                        bg-emerald-500/10
                                        px-3 py-1
                                        text-xs font-bold
                                        text-emerald-600
                                    "
                                >
                                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                                    GearUp • Explore & Rent
                                </Badge>

                                <div className="space-y-4">
                                    <h1
                                        className="
                                            text-4xl font-black
                                            leading-[1.1]
                                            tracking-tight
                                            text-foreground
                                            sm:text-5xl
                                            lg:text-[52px]
                                        "
                                    >
                                        Start Your Next
                                        <br />
                                        <span className="text-emerald-600">
                                            Great Adventure.
                                        </span>
                                    </h1>

                                    <p
                                        className="
                                            max-w-xl
                                            text-sm font-medium
                                            leading-relaxed
                                            text-muted-foreground
                                            sm:text-base
                                        "
                                    >
                                        Join GearUp and discover quality outdoor
                                        equipment from trusted providers. Rent
                                        the gear you need or list your own
                                        equipment and start earning.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5 pt-2">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="
                                            flex h-11 w-11 shrink-0
                                            items-center justify-center
                                            rounded-2xl
                                            border border-emerald-500/20
                                            bg-emerald-500/10
                                            text-emerald-600
                                        "
                                    >
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-foreground">
                                            Verified Gear & Users
                                        </h4>

                                        <p
                                            className="
                                                max-w-md
                                                text-xs font-medium
                                                leading-relaxed
                                                text-muted-foreground
                                                sm:text-sm
                                            "
                                        >
                                            Quality equipment and trusted users
                                            help keep every rental safe and
                                            reliable.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="
                                            flex h-11 w-11 shrink-0
                                            items-center justify-center
                                            rounded-2xl
                                            border border-blue-500/20
                                            bg-blue-500/10
                                            text-blue-600
                                        "
                                    >
                                        <Zap className="h-5 w-5" />
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-foreground">
                                            Seamless Booking Flow
                                        </h4>

                                        <p
                                            className="
                                                max-w-md
                                                text-xs font-medium
                                                leading-relaxed
                                                text-muted-foreground
                                                sm:text-sm
                                            "
                                        >
                                            Choose your dates, reserve your
                                            equipment, and complete your
                                            payment securely.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="
                                            flex h-11 w-11 shrink-0
                                            items-center justify-center
                                            rounded-2xl
                                            border border-amber-500/20
                                            bg-amber-500/10
                                            text-amber-600
                                        "
                                    >
                                        <Users className="h-5 w-5" />
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black text-foreground">
                                            Role-Based Experience
                                        </h4>

                                        <p
                                            className="
                                                max-w-md
                                                text-xs font-medium
                                                leading-relaxed
                                                text-muted-foreground
                                                sm:text-sm
                                            "
                                        >
                                            Get a personalized dashboard built
                                            for customers, providers, and
                                            administrators.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div
                                className="
                                    flex items-center gap-3
                                    border-t border-border
                                    pt-6
                                "
                            >
                                <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full border-2 border-background bg-emerald-500/20" />
                                    <div className="h-8 w-8 rounded-full border-2 border-background bg-blue-500/20" />
                                    <div className="h-8 w-8 rounded-full border-2 border-background bg-amber-500/20" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-foreground">
                                        Built for outdoor enthusiasts
                                    </p>

                                    <p className="text-[11px] font-medium text-muted-foreground">
                                        Rent smarter. Explore further.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE --> Form */}
                        <div className="lg:col-span-6 flex justify-center lg:justify-end">
                            <Card
                                className="
                                    w-full max-w-md
                                    rounded-3xl
                                    border border-border
                                    bg-card
                                    p-6
                                    shadow-xl
                                    shadow-black/5
                                    sm:p-8
                                "
                            >
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