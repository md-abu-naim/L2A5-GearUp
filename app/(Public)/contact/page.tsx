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
  // Server Action Handler Example
  async function handleContactSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // TODO: আপনার backend API বা Email sending logic এখানে লিখুন
    console.log("Contact Submission:", { name, email, subject, message });
  }

  const contactInfo = [
    {
      title: "Email Us",
      value: "support@gearshare.com",
      description: "We usually respond within 2 hours.",
      icon: Mail,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Call Us",
      value: "+880 1700-000000",
      description: "Mon-Fri from 9am to 6pm.",
      icon: Phone,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Visit Our Office",
      value: "Gulshan 2, Dhaka, Bangladesh",
      description: "Come say hello at our HQ.",
      icon: MapPin,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-16 pt-6 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 pb-4 border-b border-slate-200">
        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-xs px-3 py-1 rounded-full w-max mx-auto">
          <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600 inline" />
          Get in Touch
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          We&apos;re Here to Help You
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Have questions about renting gear or listing your equipment? Send us a message and our team will get back to you shortly.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Side: Contact Cards & Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">
              Contact Information
            </h2>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card
                  key={idx}
                  className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className={`p-3 rounded-2xl border ${info.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {info.title}
                      </h3>
                      <p className="text-sm font-black text-slate-900">
                        {info.value}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Working Hours Card */}
          <Card className="rounded-3xl border-slate-200/80 bg-emerald-50 text-emerald-900 p-6 space-y-3">
            <div className="flex items-center gap-2 font-bold text-xs">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Customer Support Hours</span>
            </div>
            <p className="text-xs text-emerald-700 leading-relaxed font-medium">
              Our support team is available Saturday through Thursday from 9:00 AM to 8:00 PM. Emergency rental support is active 24/7.
            </p>
          </Card>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-2">
          <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs overflow-hidden">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Fill out the form below and we will respond as soon as possible.
                </p>
              </div>

              {/* Server Action Form */}
              <form action={handleContactSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      required
                      className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500 font-medium text-slate-900 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      required
                      className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500 font-medium text-slate-900 text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    type="text"
                    placeholder="e.g. Question about Backpack Rental"
                    required
                    className="h-11 rounded-xl border-slate-200 focus-visible:ring-emerald-500 font-medium text-slate-900 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe how we can help you..."
                    rows={5}
                    required
                    className="rounded-xl border-slate-200 focus-visible:ring-emerald-500 font-medium text-slate-900 text-sm resize-none p-3.5"
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

      {/* FAQ Banner Link */}
      <Card className="rounded-3xl border-slate-200/80 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-slate-100 text-slate-700 shrink-0">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900">Have Quick Questions?</h3>
            <p className="text-xs text-slate-500 font-medium">Check our Frequently Asked Questions for instant answers.</p>
          </div>
        </div>
        <Button
          variant="outline"
          asChild
          className="rounded-xl border-slate-200 text-slate-700 font-bold text-xs h-10 px-5 hover:bg-slate-50 shrink-0"
        >
          <Link href="/faq">
            Visit FAQ Center
          </Link>
        </Button>
      </Card>

    </div>
  );
}