// 'use client'
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

// type Props = {
//   search: string;
// };

// const SearchBar = ({search}: Props) => {
//     return (
//         <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
//             <form className="relative w-full sm:w-80" method="GET">
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
//                 <Input
//                     name="search"
//                     defaultValue={search}
//                     placeholder="Search by name, email or phone..."
//                     className="pl-9 h-9 text-xs rounded-xl border-slate-200 focus-visible:ring-emerald-500"
//                 />
//             </form>
//         </div>
//     )
// }

// export default SearchBar


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

      if (text) {
        params.set("search", text);
      } else {
        params.delete("search");
      }

      params.set("page", "1");

      router.push(`/admin-dashboard/users?${params.toString()}`);
    }, 500);
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
      <div className="relative w-full sm:w-80">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />

        <Input
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name, email or phone..."
          className="pl-9 h-9 text-xs rounded-xl border-slate-200 focus-visible:ring-emerald-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;