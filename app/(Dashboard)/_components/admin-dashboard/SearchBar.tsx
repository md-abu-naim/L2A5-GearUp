"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

type Props = {
    search: string;
};

const SearchBar = ({ search }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState(search);

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearch = (text: string) => {
        setValue(text);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams);

            if (text.trim()) {
                params.set("search", text.trim());
            } else {
                params.delete("search");
            }

            params.set("page", "1");

            router.push(`/admin-dashboard/users?${params.toString()}`);
        }, 500);
    };

    return (
        <div className="flex items-center justify-between gap-3 bg-card p-3 rounded-2xl border border-border shadow-sm">
            <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />

                <Input
                    value={value}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search by name, email or phone..."
                    className="pl-9 h-9 text-xs rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-emerald-500 focus-visible:border-emerald-500"
                />
            </div>
        </div>
    );
};

export default SearchBar;