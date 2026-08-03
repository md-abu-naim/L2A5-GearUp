"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Sparkles, Loader2, Plus, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createCategory } from "../../_actions/admin-dashboard/createCategory";
import { toast } from "sonner";

export default function AddCategoryPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            name: formData.name,
            description: formData.description,
        };

        const result = await createCategory(payload)

        if(result.success){
            toast.success(result.message || "Category Created Successfully")
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="space-y-1">
                    <Link
                        href="/admin-dashboard/categories"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors mb-2"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Categories
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Create New Category
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500">
                        Add a new gear category to help users organize and search items efficiently.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 rounded-3xl border-slate-200/80 bg-white shadow-xs">
                    <CardHeader>
                        <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-emerald-600" /> Category Information
                        </CardTitle>
                        <CardDescription className="text-xs text-slate-500">
                            Fill in the basic details for the gear category.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold text-slate-700">
                                    Category Name <span className="text-rose-500">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="e.g. Sports, Camping & Hiking, Photography"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-10 text-xs rounded-xl border-slate-200 focus-visible:ring-emerald-500"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="description" className="text-xs font-bold text-slate-700">
                                        Description
                                    </Label>
                                    <span className="text-[10px] text-slate-400 font-medium">Optional</span>
                                </div>
                                <Textarea
                                    id="description"
                                    placeholder="Provide a short overview of what kind of gear belongs in this category..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="text-xs rounded-xl border-slate-200 min-h-[120px] focus-visible:ring-emerald-500 resize-none"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setFormData({ name: "", description: "", })}
                                    className="rounded-xl text-xs font-bold h-10 border-slate-200 text-slate-600 hover:bg-slate-50"
                                    disabled={isLoading}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading || !formData.name.trim()}
                                    className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 px-5 shadow-xs"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin text-emerald-400" /> Creating...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="w-4 h-4 text-emerald-400" /> Save Category
                                        </>
                                    )}
                                </Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>

                {/* Live Preview Side Card */}
                <div className="space-y-4">
                    <Card className="rounded-3xl border-slate-200/80 bg-slate-900 text-white p-5 shadow-sm relative overflow-hidden">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                            <Sparkles className="w-4 h-4" /> Live Card Preview
                        </div>

                        <div className="space-y-3">
                            <div className="p-3 rounded-2xl bg-white/10 w-fit text-emerald-400">
                                <Layers className="w-6 h-6" />
                            </div>

                            <div>
                                <h3 className="text-lg font-black tracking-tight text-white">
                                    {formData.name || "Category Name"}
                                </h3>
                                <p className="text-xs text-slate-400 mt-1 line-clamp-3 font-normal leading-relaxed">
                                    {formData.description || "Category description will appear here as you type."}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                                <span>Status: Draft</span>
                                <span>ID: Auto-generated</span>
                            </div>
                        </div>
                    </Card>

                    <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex gap-3 items-start">
                        <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                            Keep category names clear and concise. A well-written description helps providers select the correct category for their gear listings.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}