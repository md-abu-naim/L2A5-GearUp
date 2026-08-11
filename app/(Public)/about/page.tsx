import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
  Package,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { label: "Verified Gears", value: "2,500+", icon: Package },
    { label: "Happy Explorers", value: "10,000+", icon: Users },
    { label: "Trusted Providers", value: "850+", icon: ShieldCheck },
    { label: "Satisfaction Rate", value: "99.2%", icon: Award },
  ];

  const features = [
    {
      title: "Quality Verified Equipment",
      description:
        "Every item listed on our platform undergoes a strict quality check to ensure safety during your adventures.",
      icon: ShieldCheck,
      color:
        "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
    {
      title: "Affordable Exploration",
      description:
        "Rent premium outdoor gear at a fraction of the retail price. Save money while experiencing the best.",
      icon: Sparkles,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      title: "Community Driven",
      description:
        "Connect with local gear owners and passionate adventurers. Earn extra income by listing your unused gear.",
      icon: Users,
      color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
  ];

  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold text-xs px-3 py-1 rounded-full w-max">
              <Compass className="w-3.5 h-3.5 mr-1.5" />
              About Our Platform
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
              Empowering Outdoor{" "}
              <br className="hidden sm:inline" />
              <span className="text-emerald-600">
                Adventures
              </span>{" "}
              for Everyone.
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              We connect outdoor enthusiasts with trusted local gear
              providers. Whether you&apos;re planning a weekend trekking trip
              or an intense mountain expedition, we make premium adventure
              gear accessible, affordable, and sustainable.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm h-12 px-6 gap-2 shadow-sm"
              >
                <Link href="/gears">
                  Explore Gears
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl border-border text-foreground font-bold text-sm h-12 px-6 hover:bg-muted"
              >
                <Link href="/register">
                  Become a Provider
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-border shadow-lg aspect-4/3 bg-muted">
              <Image
                width={1000}
                height={750}
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000"
                alt="Outdoor Adventure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Info Card */}
            <Card className="absolute -bottom-6 -left-6 z-20 rounded-2xl border-border bg-card p-4 shadow-xl max-w-60 hidden sm:block">
              <CardContent className="p-0 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xs font-black text-foreground">
                    100% Insured
                  </h4>

                  <p className="text-[11px] font-medium text-muted-foreground">
                    Every gear item is safe with us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <Card
                key={idx}
                className="rounded-3xl border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="p-2.5 w-max rounded-2xl bg-emerald-500/10 text-emerald-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      {stat.value}
                    </h3>

                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Why Choose Our Platform?
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Built for adventurers, trusted by providers. Here is what sets
              us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={idx}
                  className="rounded-3xl border-border bg-card shadow-sm p-6 space-y-4 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div
                    className={`p-3 w-max rounded-2xl border ${feature.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-foreground tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}