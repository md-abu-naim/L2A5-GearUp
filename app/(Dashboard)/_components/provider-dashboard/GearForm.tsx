"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Image as ImageIcon,
  Tag,
  DollarSign,
  Package,
  Layers,
  FileText,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { CategoryItem } from "@/lib/types";
import { addGear } from "../../_actions/provider-dashboard/addGear";

type Props = {
  categories: CategoryItem[];
};

const GearForm = ({ categories }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const gearData = {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      image: String(formData.get("image") ?? ""),
      brand: String(formData.get("brand") ?? ""),
      category,
      pricePerDay: Number(formData.get("pricePerDay") ?? 0),
      stock: Number(formData.get("stock") ?? 0),
    };

    const result = await addGear(gearData);

    if (result.success) {
      toast.success(result.message || "Gear Created Successfully");
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Form Card */}
      <div className="lg:col-span-2">
        <Card className="rounded-3xl border-border bg-card shadow-xs overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Gear Title */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-600" />
                  Gear Title
                </label>

                <Input
                  name="title"
                  placeholder="e.g. Hiking Backpack 60L"
                  required
                  className="h-11 rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium"
                />
              </div>

              {/* Brand + Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Brand */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-emerald-600" />
                    Brand
                  </label>

                  <Input
                    name="brand"
                    placeholder="e.g. Deuter"
                    required
                    className="h-11 rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    Category
                  </label>

                  <Select onValueChange={setCategory} required>
                    <SelectTrigger className="h-11 w-full rounded-xl border-border bg-background text-foreground focus:ring-emerald-500 font-medium">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>

                    <SelectContent className="rounded-xl">
                      {categories.map((c) => (
                        <SelectItem key={c.id} value={c.name}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Price + Stock */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Price */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    Price Per Day (৳)
                  </label>

                  <Input
                    name="pricePerDay"
                    type="number"
                    placeholder="500"
                    required
                    className="h-11 rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium"
                  />
                </div>

                {/* Stock */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5 text-emerald-600" />
                    Total Stock
                  </label>

                  <Input
                    name="stock"
                    type="number"
                    placeholder="1"
                    required
                    className="h-11 rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  Image URL
                </label>

                <Input
                  name="image"
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                  className="h-11 rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  Description
                </label>

                <Textarea
                  name="description"
                  placeholder="Write details about your gear, features, and usage conditions..."
                  rows={4}
                  required
                  className="rounded-xl border-border bg-background text-foreground focus-visible:ring-emerald-500 font-medium resize-none p-3.5"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm gap-2 shadow-sm transition-all"
                >
                  <Plus className="w-4 h-4" />
                  {loading ? "Adding Gear..." : "Publish Gear Listing"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        {/* Live Preview */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
            Live Preview
          </h2>

          <Card className="rounded-3xl border-border bg-card overflow-hidden shadow-xs">
            <CardContent className="p-0 aspect-4/3 relative flex items-center justify-center bg-muted">
              {imageUrl ? (
                <Image
                  width={500}
                  height={400}
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={() => toast.error("Invalid image URL")}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground space-y-2">
                  <div className="p-3 bg-background border border-border rounded-2xl shadow-xs">
                    <ImageIcon className="w-6 h-6 text-muted-foreground" />
                  </div>

                  <span className="text-xs font-semibold text-muted-foreground">
                    Image Preview Will Appear Here
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Listing Tip */}
        <div className="p-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 dark:text-emerald-300 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Listing Tip</span>
          </div>

          <p className="text-xs text-emerald-300/80 leading-relaxed font-medium">
            Clear images and accurate descriptions increase renter trust and
            lead to faster bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GearForm;