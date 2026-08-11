"use client";

import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { Edit3, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CategoryItem } from "@/lib/types";
import { updateCategory } from "../../_actions/admin-dashboard/updateCategory";
import { toast } from "sonner";
import { deleteCategory } from "../../_actions/admin-dashboard/deleteCategory";

type Props = {
  category: CategoryItem;
};

const CategoryActions = ({ category }: Props) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleUpdateCategory = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const payload = {
      name: String(data.get("name") || "").trim(),
      description: String(data.get("description") || "").trim(),
    };

    const result = await updateCategory(category.id, payload);

    if (result.success) {
      toast.success(result.message || "Category updated successfully");
      setIsEditOpen(false);
    } else {
      toast.error(result.message || "Failed to update category");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    const result = await deleteCategory(id);

    if (result.success) {
      toast.success(result.message || "Category deleted successfully");
    } else {
      toast.error(result.message || "Failed to delete category");
    }
  };

  return (
    <>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button
            type="button"
            onClick={() => setIsEditOpen(true)}
            variant="ghost"
            size="sm"
            className="
              h-8 w-8 p-0 rounded-xl
              text-muted-foreground
              hover:text-emerald-600
              hover:bg-emerald-50
              transition-colors
            "
            aria-label={`Edit ${category.name}`}
          >
            <Edit3 className="w-4 h-4" />
          </Button>

          <Button
            type="button"
            onClick={() => handleDeleteCategory(category.id)}
            variant="ghost"
            size="sm"
            className="
              h-8 w-8 p-0 rounded-xl
              text-muted-foreground
              hover:text-rose-600
              hover:bg-rose-50
              transition-colors
            "
            aria-label={`Delete ${category.name}`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent
          className="
            w-[calc(100%-2rem)]
            sm:max-w-115
            rounded-3xl
            border-border
            bg-background
            p-6
            shadow-xl
          "
        >
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-lg font-black tracking-tight text-foreground">
              Edit Category
            </DialogTitle>

            <DialogDescription className="text-xs leading-relaxed text-muted-foreground">
              Update the category name and description below.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleUpdateCategory}
            className="space-y-5 pt-2"
          >
            <div className="space-y-2">
              <label
                htmlFor={`category-name-${category.id}`}
                className="text-xs font-bold text-foreground"
              >
                Category Name
              </label>

              <Input
                id={`category-name-${category.id}`}
                name="name"
                defaultValue={category.name}
                placeholder="Enter category name"
                required
                className="
                  h-10
                  rounded-xl
                  border-border
                  bg-muted/40
                  text-xs
                  font-medium
                  text-foreground
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500/20
                "
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={`category-description-${category.id}`}
                className="text-xs font-bold text-foreground"
              >
                Description
              </label>

              <Textarea
                id={`category-description-${category.id}`}
                name="description"
                defaultValue={category.description || ""}
                placeholder="Write a short description..."
                className="
                  min-h-27.5
                  resize-none
                  rounded-xl
                  border-border
                  bg-muted/40
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  leading-relaxed
                  text-foreground
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500/20
                "
              />
            </div>

            <DialogFooter className="gap-2 pt-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsEditOpen(false)}
                className="
                  h-10
                  rounded-xl
                  px-4
                  text-xs
                  font-bold
                  text-muted-foreground
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="
                  h-10
                  rounded-xl
                  bg-foreground
                  px-5
                  text-xs
                  font-bold
                  text-background
                  shadow-sm
                  hover:opacity-90
                "
              >
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CategoryActions;