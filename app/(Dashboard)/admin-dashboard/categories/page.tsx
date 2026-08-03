import { format } from "date-fns";
import { Plus, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CategoryActions from "../../_components/admin-dashboard/CategoryActions";
import { getCategories } from "@/app/(Public)/_actions/getCategories";
import { CategoryItem } from "@/lib/types";


export default async function CategoriesPage() {
  const categories: CategoryItem[] = await getCategories()

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Gear Categories
            </h1>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
              {categories.length} Total
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage product categories and descriptions for equipment listings.
          </p>
        </div>

        <Button
          className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs shrink-0"
        >
          <Plus className="w-4 h-4 text-emerald-400" /> Add New Category
        </Button>
      </div>

      {/* Categories Table */}
      <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 border-b border-slate-100">
              <TableRow>
                <TableHead className="text-xs font-bold text-slate-600">Category Name</TableHead>
                <TableHead className="text-xs font-bold text-slate-600">Description</TableHead>
                <TableHead className="text-xs font-bold text-slate-600">Created At</TableHead>
                <TableHead className="text-xs font-bold text-slate-600 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <TableRow key={category.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Category Name */}
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                          <Layers className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">{category.name}</p>
                          <span className="text-[10px] text-slate-400">ID: #{category.id.slice(0, 8)}</span>
                        </div>
                      </div>
                    </TableCell>

                    {/* Description */}
                    <TableCell className="max-w-md">
                      <p className="text-xs text-slate-600 font-medium line-clamp-2">
                        {category.description || "No description provided."}
                      </p>
                    </TableCell>

                    {/* Created Date */}
                    <TableCell>
                      <span className="text-xs text-slate-500 font-medium">
                        {format(new Date(category.createdAt), "MMM dd, yyyy")}
                      </span>
                    </TableCell>

                    {/* Action Buttons */}
                    <CategoryActions category={category} />
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-xs text-slate-400 font-medium">
                    No categories found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}