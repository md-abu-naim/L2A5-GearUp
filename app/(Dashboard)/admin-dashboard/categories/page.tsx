import Link from "next/link";
import { format } from "date-fns";
import { Plus, Layers, FolderOpen } from "lucide-react";
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
    const categories: CategoryItem[] = await getCategories();

    return (
        <div className="mx-auto min-h-screen max-w-7xl space-y-6 bg-background px-4 pt-2 pb-16 sm:px-6">

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors md:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                                Gear Categories
                            </h1>

                            <Badge className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 shadow-none">
                                {categories.length} Total
                            </Badge>
                        </div>

                        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            Manage equipment categories and descriptions to keep
                            gear listings organized and easy to discover.
                        </p>
                    </div>

                    <Button
                        asChild
                        className="h-10 shrink-0 rounded-xl bg-foreground px-4 text-xs font-bold text-background shadow-sm hover:bg-foreground/90"
                    >
                        <Link
                            href="/admin-dashboard/add-category"
                            className="flex items-center gap-2"
                        >
                            <Plus className="h-4 w-4 text-emerald-500" />
                            Add New Category
                        </Link>
                    </Button>
                </div>
            </div>

            <Card className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <CardContent className="p-0">
                    {categories.length > 0 ? (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-muted/60">
                                    <TableRow className="border-border hover:bg-transparent">
                                        <TableHead className="whitespace-nowrap text-xs font-bold text-muted-foreground">
                                            Category Name
                                        </TableHead>

                                        <TableHead className="text-xs font-bold text-muted-foreground">
                                            Description
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-xs font-bold text-muted-foreground">
                                            Created At
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right text-xs font-bold text-muted-foreground">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {categories.map((category) => (
                                        <TableRow
                                            key={category.id}
                                            className="border-border transition-colors hover:bg-muted/40"
                                        >
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50">
                                                        <Layers className="h-4 w-4 text-emerald-600" />
                                                    </div>

                                                    <div className="min-w-0">
                                                        <p className="truncate text-xs font-bold text-foreground">
                                                            {category.name}
                                                        </p>

                                                        <span className="mt-0.5 block font-mono text-[9px] text-muted-foreground">
                                                            ID: #{category.id.slice(0, 8)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell className="max-w-md">
                                                <p className="line-clamp-2 text-xs font-medium leading-relaxed text-muted-foreground">
                                                    {category.description ||
                                                        "No description provided."}
                                                </p>
                                            </TableCell>

                                            <TableCell>
                                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted">
                                                        <FolderOpen className="h-3.5 w-3.5" />
                                                    </span>

                                                    <span className="whitespace-nowrap">
                                                        {format(
                                                            new Date(category.createdAt),
                                                            "MMM dd, yyyy"
                                                        )}
                                                    </span>
                                                </div>
                                            </TableCell>

                                            <CategoryActions category={category} />
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
                                <FolderOpen className="h-7 w-7 text-muted-foreground" />
                            </div>

                            <h3 className="text-sm font-black text-foreground">
                                No Categories Found
                            </h3>

                            <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
                                There are no gear categories available yet.
                                Create your first category to organize gear
                                listings.
                            </p>

                            <Button
                                asChild
                                className="mt-5 h-9 rounded-xl bg-foreground px-4 text-xs font-bold text-background hover:bg-foreground/90"
                            >
                                <Link
                                    href="/admin-dashboard/add-category"
                                    className="flex items-center gap-2"
                                >
                                    <Plus className="h-3.5 w-3.5" />
                                    Create Category
                                </Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}