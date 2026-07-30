import Link from "next/link";
import { Mail, Phone, ArrowRight, ShieldCheck, Mountain, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export default function Footer() {
    return (
        <footer className="relative bg-card text-card-foreground border-t border-border/60 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-emerald-500/5 to-emerald-500/10 pointer-events-none" />
            <div className="container mx-auto px-4 max-w-6xl pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border/60">
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                                <Mountain className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-foreground">
                                Gear<span className="text-emerald-600">Up</span>
                            </span>
                        </Link>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                            Your ultimate destination for premium outdoor equipment rentals. Explore nature with top-tier verified gear or monetize your unused items safely.
                        </p>

                        <div className="flex items-center gap-3 pt-2 text-muted-foreground">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-muted/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-emerald-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/items" className="hover:text-emerald-600 transition-colors">
                                    Explore Gear
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-emerald-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/register" className="hover:text-emerald-600 transition-colors">
                                    Become a Provider
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Categories
                        </h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link href="/items?category=Bike" className="hover:text-emerald-600 transition-colors">
                                    Bikes & Cycling
                                </Link>
                            </li>
                            <li>
                                <Link href="/items?category=Car" className="hover:text-emerald-600 transition-colors">
                                    Cars & Vehicles
                                </Link>
                            </li>
                            <li>
                                <Link href="/items?category=Sports" className="hover:text-emerald-600 transition-colors">
                                    Sports Equipment
                                </Link>
                            </li>
                            <li>
                                <Link href="/items?category=Camping" className="hover:text-emerald-600 transition-colors">
                                    Camping & Tents
                                </Link>
                            </li>
                            <li>
                                <Link href="/items?category=Track" className="hover:text-emerald-600 transition-colors">
                                    Heavy Vehicles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                            Stay Updated
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Subscribe to our newsletter for new gear alerts and exclusive discounts.
                        </p>

                        <form className="space-y-2">
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="rounded-xl border-border bg-muted/30 text-xs pr-10 h-10 focus-visible:ring-emerald-600"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1 top-1 h-8 w-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>

                        <div className="space-y-2 pt-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                                <span>support@gearup.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                                <span>+880 1882 585833</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} GearUp. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-emerald-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-emerald-600 transition-colors">
                            Terms of Service
                        </Link>
                        <div className="flex items-center gap-1 text-emerald-600 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Verified Platform</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}