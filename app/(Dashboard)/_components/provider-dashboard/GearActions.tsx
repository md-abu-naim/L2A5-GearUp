"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CategoryItem, GearItem } from "@/lib/types"
import { Edit3, ExternalLink, Trash2 } from "lucide-react"
import Link from "next/link"
import { deleteGear } from "../../_actions/provider-dashboard/deleteGear"
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateGear } from "../../_actions/provider-dashboard/updateGear"

type Props = {
    gear: GearItem
    categories: CategoryItem[]
}

const GearActions = ({ gear, categories }: Props) => {
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState(gear.category);

    const handleDeleteGear = async (id: string) => {
        const result = await deleteGear(id)
        if (result.success) {
            toast.success(result.message)
        }
    }

    const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const payload = {
            title: (formData.get("title") ?? "").toString(),
            brand: (formData.get("brand") ?? "").toString(),
            category: (formData.get("category") ?? "").toString(),
            pricePerDay: Number(formData.get("pricePerDay") ?? 0),
            stock: Number(formData.get("stock") ?? 0),
            image: (formData.get("image") ?? "").toString(),
            description: (formData.get("description") ?? "").toString(),
        };

        const result = await updateGear(gear.id, payload)

        if (result.success) {
            toast.success(result.message || "Gear updated successfully!")
            setOpen(false)
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-3 rounded-xl border-slate-200 font-bold text-xs hover:bg-slate-50"
                    >
                        <Edit3 className="w-3.5 h-3.5 mr-1 text-slate-500" /> Edit
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Edit Gear</DialogTitle>
                        <DialogDescription>
                            Update the information for this gear item below.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Form */}
                    <form onSubmit={handleEditSubmit} className="space-y-4 py-2">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold">Title</label>
                            <Input
                                name="title"
                                defaultValue={gear.title}
                                placeholder="Gear Title"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold">Brand</label>
                                <Input
                                    name="brand"
                                    defaultValue={gear.brand}
                                    placeholder="Brand"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold">
                                    Category
                                </label>

                                <input type="hidden" name="category" value={category} />

                                <Select name="category"
                                    value={category}
                                    onValueChange={setCategory}
                                >
                                    <SelectTrigger className="w-full rounded-xl border-slate-200">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.name}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold">Price Per Day ($)</label>
                                <Input
                                    type="number"
                                    name="pricePerDay"
                                    defaultValue={gear.pricePerDay}
                                    placeholder="500"
                                    required
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold">Stock Quantity</label>
                                <Input
                                    type="number"
                                    name="stock"
                                    defaultValue={gear.stock}
                                    placeholder="1"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold">Image URL</label>
                            <Input
                                type="url"
                                name="image"
                                defaultValue={gear.image}
                                placeholder="https://..."
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold">Description</label>
                            <Textarea
                                name="description"
                                defaultValue={gear.description}
                                placeholder="Gear description..."
                                rows={3}
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Button
                onClick={() => handleDeleteGear(gear.id)}
                variant="outline"
                size="sm"
                className="h-8 px-2.5 rounded-xl border-slate-200 text-rose-600 hover:bg-rose-50 hover:border-rose-200 text-xs font-bold"
            >
                <Trash2 className="w-3.5 h-3.5 mr-1" /> Delete
            </Button>

            <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-slate-900"
            >
                <Link href={`/gears/${gear.id}`}>
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </Button>
        </div>
    )
}

export default GearActions