import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {

  const contactInfo = [
    {
      title: "Email Us",
      value: "support@gearshare.com",
      description: "We usually respond within 2 hours.",
      icon: Mail,
      color:
        "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
    {
      title: "Call Us",
      value: "+880 1700-000000",
      description: "Mon-Fri from 9am to 6pm.",
      icon: Phone,
      color:
        "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      title: "Visit Our Office",
      value: "Gulshan 2, Dhaka, Bangladesh",
      description: "Come say hello at our HQ.",
      icon: MapPin,
      color:
        "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-16 pt-6 px-4 sm:px-6 bg-background min-h-screen transition-colors">

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 pb-6 border-b border-border">
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold text-xs px-3 py-1 rounded-full w-max mx-auto">
          <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
          Get in Touch
        </Badge>

        <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
          We&apos;re Here to Help You
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
          Have questions about renting gear or listing your equipment? Send us
          a message and our team will get back to you shortly.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Left Side: Contact Cards */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-black text-foreground tracking-tight">
              Contact Information
            </h2>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon;

              return (
                <Card
                  key={idx}
                  className="rounded-3xl border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div
                      className={`p-3 rounded-2xl border ${info.color} shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {info.title}
                      </h3>

                      <p className="text-sm font-black text-foreground wrap-break-word">
                        {info.value}
                      </p>

                      <p className="text-xs text-muted-foreground font-medium">
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Working Hours Card */}
          <Card className="rounded-3xl border-emerald-500/20 bg-emerald-500/10 text-foreground p-6 space-y-3">
            <div className="flex items-center gap-2 font-bold text-xs">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Customer Support Hours</span>
            </div>

            <p className="text-xstext-emerald-400 leading-relaxed font-medium">
              Our support team is available Saturday through Thursday from
              9:00 AM to 8:00 PM. Emergency rental support is active 24/7.
            </p>
          </Card>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-2">
          <Card className="rounded-3xl border-border bg-card shadow-sm overflow-hidden">
            <CardContent className="p-6 sm:p-8 space-y-6">

              <div className="space-y-1 border-b border-border pb-4">
                <h2 className="text-xl font-black text-foreground tracking-tight">
                  Send Us a Message
                </h2>

                <p className="text-xs text-muted-foreground font-medium">
                  Fill out the form below and we will respond as soon as
                  possible.
                </p>
              </div>

              {/* Server Action Form */}
              <form className="space-y-5">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                      Your Name
                    </label>

                    <Input
                      name="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      required
                      className="h-11 rounded-xl border-border bg-background focus-visible:ring-emerald-500 font-medium text-foreground text-sm placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                      Email Address
                    </label>

                    <Input
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="h-11 rounded-xl border-border bg-background focus-visible:ring-emerald-500 font-medium text-foreground text-sm placeholder:text-muted-foreground"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Subject
                  </label>

                  <Input
                    name="subject"
                    type="text"
                    placeholder="e.g. Question about Backpack Rental"
                    required
                    className="h-11 rounded-xl border-border bg-background focus-visible:ring-emerald-500 font-medium text-foreground text-sm placeholder:text-muted-foreground"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Message
                  </label>

                  <Textarea
                    name="message"
                    placeholder="Describe how we can help you..."
                    rows={5}
                    required
                    className="rounded-xl border-border bg-background focus-visible:ring-emerald-500 font-medium text-foreground text-sm placeholder:text-muted-foreground resize-none p-3.5"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto h-11 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm gap-2 shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Banner */}
      <Card className="rounded-3xl border-border bg-card p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-muted text-muted-foreground shrink-0">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
          </div>

          <div>
            <h3 className="text-sm font-black text-foreground">
              Have Quick Questions?
            </h3>

            <p className="text-xs text-muted-foreground font-medium">
              Check our Frequently Asked Questions for instant answers.
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          asChild
          className="rounded-xl border-border text-foreground font-bold text-xs h-10 px-5 hover:bg-muted shrink-0"
        >
          <Link href="/faq">
            Visit FAQ Center
          </Link>
        </Button>

      </Card>
    </div>
  );
}