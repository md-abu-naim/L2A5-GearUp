'use client'
import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import { Edit3, Trash2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { CategoryItem } from '@/lib/types';
import { updateCategory } from '../../_actions/admin-dashboard/updateCategory';
import { toast } from 'sonner';
import { deleteCategory } from '../../_actions/admin-dashboard/deleteCategory';

type Props = {
    category: CategoryItem
}
const CategoryActions = ({ category }: Props) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleUpdateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const payload = {
            name: data.get("name") as string,
            description: data.get("description") as string,
        };

        const result = await updateCategory(category.id, payload);

        if (result.success) {
            toast.success(result.message || "Category Updated Successfully");
            setIsEditOpen(false);
        }
    };

    const handleDeleteCategory = async (id: string) => {
        const result = await deleteCategory(id)

        if (result.success) {
            toast.success(result.message || "Category Deleted Successfull")
        }
    }
    return (
        <>
            <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                    {/* Edit Action */}
                    <Button onClick={() => setIsEditOpen(true)}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                    >
                        <Edit3 className="w-4 h-4" />
                    </Button>

                    {/* Delete Action */}
                    <Button onClick={() => handleDeleteCategory(category.id)}
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50"
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
            </TableCell>


            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent className="sm:max-w-[425px] rounded-2xl bg-white p-6">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-black text-slate-900">Edit Category</DialogTitle>
                        <DialogDescription className="text-xs text-slate-500">
                            Update category details.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleUpdateCategory} className="space-y-4 py-2">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Category Name</label>
                            <Input
                                defaultValue={category.name}
                                name='name'
                                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="h-9 text-xs rounded-xl border-slate-200"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700">Description</label>
                            <Textarea name='description'
                                defaultValue={category.description}
                                className="text-xs rounded-xl border-slate-200 min-h-[90px]"
                            />
                        </div>

                        <DialogFooter className="pt-2">
                            <Button onClick={() => setIsEditOpen(false)}
                                type="button" variant="ghost" className="rounded-xl text-xs font-bold">
                                Cancel
                            </Button>
                            <Button type="submit" className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold">
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CategoryActions