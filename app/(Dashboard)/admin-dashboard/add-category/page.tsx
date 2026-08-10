"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Layers,
  Sparkles,
  Loader2,
  Plus,
  Info,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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

    const result = await createCategory(payload);

    if (result.success) {
      toast.success(
        result.message || "Category Created Successfully"
      );

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="space-y-1">
          <Link
            href="/admin-dashboard/categories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Categories
          </Link>

          <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
            Create New Category
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Add a new gear category to help users organize and search items
            efficiently.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Form */}
        <Card className="lg:col-span-2 rounded-3xl border-border bg-card shadow-xs">
          <CardHeader>
            <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              Category Information
            </CardTitle>

            <CardDescription className="text-xs text-muted-foreground">
              Fill in the basic details for the gear category.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-xs font-bold text-foreground"
                >
                  Category Name{" "}
                  <span className="text-rose-500">*</span>
                </Label>

                <Input
                  id="name"
                  placeholder="e.g. Sports, Camping & Hiking, Photography"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="h-10 text-xs rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label
                    htmlFor="description"
                    className="text-xs font-bold text-foreground"
                  >
                    Description
                  </Label>

                  <span className="text-[10px] text-muted-foreground font-medium">
                    Optional
                  </span>
                </div>

                <Textarea
                  id="description"
                  placeholder="Provide a short overview of what kind of gear belongs in this category..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="text-xs rounded-xl border-border bg-background text-foreground min-h-30 focus-visible:ring-emerald-500 resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setFormData({
                      name: "",
                      description: "",
                    })
                  }
                  className="rounded-xl text-xs font-bold h-10 border-border text-foreground hover:bg-muted"
                  disabled={isLoading}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={isLoading || !formData.name.trim()}
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-10 gap-2 px-5 shadow-xs"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Save Category
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-4">
          <Card className="rounded-3xl border-border bg-card shadow-sm relative overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                Live Card Preview
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 w-fit text-emerald-600">
                  <Layers className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-black tracking-tight text-foreground">
                    {formData.name || "Category Name"}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-1 line-clamp-3 font-normal leading-relaxed">
                    {formData.description ||
                      "Category description will appear here as you type."}
                  </p>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>Status: Draft</span>
                  <span>ID: Auto-generated</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Card */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex gap-3 items-start">
            <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />

            <p className="text-xs text-emerald-400 leading-relaxed font-medium">
              Keep category names clear and concise. A well-written
              description helps providers select the correct category for
              their gear listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}