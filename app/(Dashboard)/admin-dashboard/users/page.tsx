// import { User } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Users, UserCheck, ShieldAlert, Package, ChevronLeft, ChevronRight } from "lucide-react";
// import UsersTable from "../../_components/admin-dashboard/UsersTable";
// import { getAllUsers } from "../../_actions/admin-dashboard/getAllUsers";
// import Link from "next/link";
// import SearchBar from "../../_components/admin-dashboard/SearchBar";

// type Props = {
//   searchParams?: Promise<{
//     search?: string;
//     page?: string;
//   }>;
// };

// export default async function AdminUsersPage({ searchParams }: Props) {
//   const resolvedParams = await searchParams;

//   const search = resolvedParams?.search || "";
//   const page = Number(resolvedParams?.page) || 1;

//   const result = await getAllUsers({
//     search,
//     page,
//     limit: 8,
//   });

//   const users: User[] = result.data.users;
//   const meta = result.data.meta;

//   return (
//     <div className="max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
//         <div>
//           <div className="flex items-center gap-2">
//             <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
//               User Management
//             </h1>
//             <Badge className="bg-slate-100 text-slate-800 border-slate-200 font-bold text-[10px] rounded-full">
//               {meta.total} Total
//             </Badge>
//           </div>
//           <p className="text-xs sm:text-sm text-slate-500 mt-1">
//             Manage user roles, monitor account status, and control permissions.
//           </p>
//         </div>

//         <Button
//           asChild
//           className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs shrink-0"
//         >
//           <Link
//             href="/admin-dashboard/add-category"
//             className="flex items-center gap-2"
//           >
//             <Package className="w-4 h-4 text-emerald-400" />
//             Add New Category
//           </Link>
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <Card className="rounded-2xl border-slate-200/80 bg-white p-4 shadow-xs">
//           <div className="flex items-center justify-between">
//             <span className="text-xs font-bold text-slate-500">Total Users</span>
//             <Users className="w-4 h-4 text-slate-400" />
//           </div>
//           <p className="text-xl font-black text-slate-900 mt-2">{meta.total}</p>
//         </Card>

//         <Card className="rounded-2xl border-slate-200/80 bg-white p-4 shadow-xs">
//           <div className="flex items-center justify-between">
//             <span className="text-xs font-bold text-slate-500">Active Accounts</span>
//             <UserCheck className="w-4 h-4 text-emerald-600" />
//           </div>
//           <p className="text-xl font-black text-slate-900 mt-2">
//             {meta.activeUsers}
//           </p>
//         </Card>

//         <Card className="rounded-2xl border-slate-200/80 bg-white p-4 shadow-xs">
//           <div className="flex items-center justify-between">
//             <span className="text-xs font-bold text-slate-500">Suspended Users</span>
//             <ShieldAlert className="w-4 h-4 text-rose-600" />
//           </div>
//           <p className="text-xl font-black text-slate-900 mt-2">
//             {meta.suspendedUsers}
//           </p>
//         </Card>
//       </div>

//       <SearchBar search={search} />

//       {/* Users Table */}
//       <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
//         <CardContent className="p-0">
//           <Table>
//             <TableHeader className="bg-slate-50 border-b border-slate-100">
//               <TableRow>
//                 <TableHead className="text-xs font-bold text-slate-600">User</TableHead>
//                 <TableHead className="text-xs font-bold text-slate-600">Phone</TableHead>
//                 <TableHead className="text-xs font-bold text-slate-600">Role</TableHead>
//                 <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
//                 <TableHead className="text-xs font-bold text-slate-600 text-right">Action</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {users.length > 0 ? (
//                 users.map((user) => (
//                   <UsersTable
//                     key={user.id}
//                     user={user}
//                   />
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={5} className="text-center py-8 text-xs text-slate-400 font-medium">
//                     No users found matching your query.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>

//           {/* Pagination Controls */}
//           {meta.totalPage > 1 && (
//             <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
//               <span className="text-xs text-slate-500 font-medium">
//                 Showing{" "}
//                 <strong className="text-slate-800">
//                   {(meta.page - 1) * meta.limit + 1}
//                 </strong>{" "}
//                 to{" "}
//                 <strong className="text-slate-800">
//                   {Math.min(meta.page * meta.limit, meta.total)}
//                 </strong>{" "}
//                 of{" "}
//                 <strong className="text-slate-800">
//                   {meta.total}
//                 </strong>{" "}
//                 users
//               </span>

//               <div className="flex items-center gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   asChild={meta.page > 1}
//                   disabled={meta.page <= 1}
//                   className="h-8 px-3 rounded-lg text-xs font-bold border-slate-200"
//                 >
//                   {meta.page > 1 ? (
//                     <Link href={`?search=${search}&page=${meta.page - 1}`}>
//                       <ChevronLeft className="w-3.5 h-3.5 mr-1" /> Previous
//                     </Link>
//                   ) : (
//                     <span className="flex items-center gap-1 opacity-50">
//                       <ChevronLeft className="w-3.5 h-3.5" /> Previous
//                     </span>
//                   )}
//                 </Button>

//                 <span className="text-xs font-bold text-slate-600 px-2">
//                   {meta.page} / {meta.totalPage}
//                 </span>

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   asChild={meta.page < meta.totalPage}
//                   disabled={meta.page >= meta.totalPage}
//                   className="h-8 px-3 rounded-lg text-xs font-bold border-slate-200"
//                 >
//                   {meta.page < meta.totalPage ? (
//                     <Link href={`?search=${search}&page=${meta.page + 1}`}>
//                       Next <ChevronRight className="w-3.5 h-3.5 ml-1" />
//                     </Link>
//                   ) : (
//                     <span className="flex items-center gap-1 opacity-50">
//                       Next <ChevronRight className="w-3.5 h-3.5" />
//                     </span>
//                   )}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import { User } from "@/lib/types";
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
import {
    Users,
    UserCheck,
    ShieldAlert,
    Package,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import UsersTable from "../../_components/admin-dashboard/UsersTable";
import { getAllUsers } from "../../_actions/admin-dashboard/getAllUsers";
import Link from "next/link";
import SearchBar from "../../_components/admin-dashboard/SearchBar";

type Props = {
    searchParams?: Promise<{
        search?: string;
        page?: string;
    }>;
};

export default async function AdminUsersPage({ searchParams }: Props) {
    const resolvedParams = await searchParams;

    const search = resolvedParams?.search || "";
    const page = Number(resolvedParams?.page) || 1;

    const result = await getAllUsers({
        search,
        page,
        limit: 8,
    });

    const users: User[] = result.data.users;
    const meta = result.data.meta;

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-16 pt-2 px-4 sm:px-6 min-h-screen bg-background">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-5 border-b border-border">

                <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                            User Management
                        </h1>

                        <Badge
                            variant="secondary"
                            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold border border-border bg-muted text-muted-foreground"
                        >
                            {meta.total} Total
                        </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                        Manage user roles, monitor account status, and control permissions.
                    </p>
                </div>

                <Button
                    asChild
                    className="rounded-xl bg-foreground text-background hover:bg-foreground/90 font-bold text-xs h-10 gap-2 shadow-sm shrink-0"
                >
                    <Link
                        href="/admin-dashboard/add-category"
                        className="flex items-center gap-2"
                    >
                        <Package className="w-4 h-4 text-emerald-500" />
                        Add New Category
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <Card className="rounded-2xl border-border bg-card shadow-sm transition-all hover:shadow-md">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground">
                                Total Users
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                                <Users className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>

                        <p className="text-2xl font-black text-foreground mt-3 tracking-tight">
                            {meta.total}
                        </p>

                        <p className="text-[10px] text-muted-foreground mt-1">
                            Registered platform users
                        </p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl border-border bg-card shadow-sm transition-all hover:shadow-md">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground">
                                Active Accounts
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                                <UserCheck className="w-4 h-4 text-emerald-600" />
                            </div>
                        </div>

                        <p className="text-2xl font-black text-foreground mt-3 tracking-tight">
                            {meta.activeUsers}
                        </p>

                        <p className="text-[10px] text-emerald-600 mt-1 font-medium">
                            Currently active
                        </p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl border-border bg-card shadow-sm transition-all hover:shadow-md">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-muted-foreground">
                                Suspended Users
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10">
                                <ShieldAlert className="w-4 h-4 text-rose-600" />
                            </div>
                        </div>

                        <p className="text-2xl font-black text-foreground mt-3 tracking-tight">
                            {meta.suspendedUsers}
                        </p>

                        <p className="text-[10px] text-rose-600 mt-1 font-medium">
                            Requires attention
                        </p>
                    </CardContent>
                </Card>

            </div>

            <SearchBar search={search} />

            <Card className="rounded-3xl border-border bg-card overflow-hidden shadow-sm">

                <CardContent className="p-0">

                    <div className="overflow-x-auto">
                        <Table>

                            <TableHeader className="bg-muted/60 border-b border-border">
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className="text-xs font-bold text-muted-foreground">
                                        User
                                    </TableHead>

                                    <TableHead className="text-xs font-bold text-muted-foreground">
                                        Phone
                                    </TableHead>

                                    <TableHead className="text-xs font-bold text-muted-foreground">
                                        Role
                                    </TableHead>

                                    <TableHead className="text-xs font-bold text-muted-foreground">
                                        Status
                                    </TableHead>

                                    <TableHead className="text-xs font-bold text-muted-foreground text-right">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>

                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <UsersTable
                                            key={user.id}
                                            user={user}
                                        />
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="text-center py-12 text-xs text-muted-foreground font-medium"
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <Users className="w-6 h-6 text-muted-foreground/50" />

                                                <span>
                                                    No users found matching your query.
                                                </span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}

                            </TableBody>

                        </Table>
                    </div>

                    {meta.totalPage > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-6 py-4 border-t border-border bg-muted/30">

                            <span className="text-xs text-muted-foreground font-medium">
                                Showing{" "}
                                <strong className="text-foreground">
                                    {(meta.page - 1) * meta.limit + 1}
                                </strong>{" "}
                                to{" "}
                                <strong className="text-foreground">
                                    {Math.min(meta.page * meta.limit, meta.total)}
                                </strong>{" "}
                                of{" "}
                                <strong className="text-foreground">
                                    {meta.total}
                                </strong>{" "}
                                users
                            </span>

                            <div className="flex items-center gap-2">

                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild={meta.page > 1}
                                    disabled={meta.page <= 1}
                                    className="h-8 px-3 rounded-lg text-xs font-bold border-border bg-background text-foreground hover:bg-muted"
                                >
                                    {meta.page > 1 ? (
                                        <Link
                                            href={`?search=${encodeURIComponent(search)}&page=${meta.page - 1}`}
                                            className="flex items-center"
                                        >
                                            <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                                            Previous
                                        </Link>
                                    ) : (
                                        <span className="flex items-center gap-1 opacity-40">
                                            <ChevronLeft className="w-3.5 h-3.5" />
                                            Previous
                                        </span>
                                    )}
                                </Button>

                                <div className="flex items-center justify-center min-w-16 h-8 rounded-lg border border-border bg-muted/50 px-2">
                                    <span className="text-xs font-bold text-foreground">
                                        {meta.page}
                                        <span className="text-muted-foreground mx-1">
                                            /
                                        </span>
                                        {meta.totalPage}
                                    </span>
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild={meta.page < meta.totalPage}
                                    disabled={meta.page >= meta.totalPage}
                                    className="h-8 px-3 rounded-lg text-xs font-bold border-border bg-background text-foreground hover:bg-muted"
                                >
                                    {meta.page < meta.totalPage ? (
                                        <Link
                                            href={`?search=${encodeURIComponent(search)}&page=${meta.page + 1}`}
                                            className="flex items-center"
                                        >
                                            Next
                                            <ChevronRight className="w-3.5 h-3.5 ml-1" />
                                        </Link>
                                    ) : (
                                        <span className="flex items-center gap-1 opacity-40">
                                            Next
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </span>
                                    )}
                                </Button>

                            </div>
                        </div>
                    )}

                </CardContent>
            </Card>

        </div>
    );
}