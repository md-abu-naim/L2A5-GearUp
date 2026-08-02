"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { User } from "@/lib/types";
import {
    AlertCircle,
    CheckCircle2,
    XCircle,
    MoreVertical,
    UserCheck,
    UserX,
} from "lucide-react";
import { updateUserStatus } from "../../_actions/admin-dashboard/updateUserStatus";
import { toast } from "sonner";

type Props = {
    user: User
}

const UsersTable = ({ user }: Props) => {

    const handleUserStatusUpdate = async (id: string, status: string) => {
        const result = await updateUserStatus(id, status)

        if (result.success) {
            toast.success(result.message || "User Status Updated Successfully")
        }
    }
    return (
        <TableRow key={user.id} className="hover:bg-slate-50/80 transition-colors">
            <TableCell>
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 rounded-full border border-slate-200">
                        <AvatarImage src={user.profileImage || ""} alt={user.name} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-800 font-bold text-xs">
                            {user.name ? user.name.slice(0, 2).toUpperCase() : "US"}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-bold text-xs text-slate-900">{user.name}</p>
                        <p className="text-[11px] text-slate-400 font-medium">{user.email}</p>
                    </div>

                </div>
            </TableCell>
            <TableCell >
                <div>
                    <p className="font-bold text-xs text-slate-900">{user?.phone || "N/A"}</p>
                </div>
            </TableCell>

            <TableCell>
                <Badge
                    className={`text-[10px] font-bold rounded-md px-2 py-0.5 border-none ${user.role === "ADMIN"
                        ? "bg-rose-100 text-rose-700"
                        : user.role === "PROVIDER"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                >
                    {user.role}
                </Badge>
            </TableCell>

            <TableCell>
                <span
                    className={`inline-flex items-center text-[11px] font-bold gap-1 ${user.status === "ACTIVE"
                        ? "text-emerald-600"
                        : user.status === "SUSPENDED"
                            ? "text-rose-600"
                            : "text-amber-600"
                        }`}
                >
                    {user.status === "ACTIVE" ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : user.status === "SUSPENDED" ? (
                        <XCircle className="w-3.5 h-3.5" />
                    ) : (
                        <AlertCircle className="w-3.5 h-3.5" />
                    )}
                    {user.status}
                </span>
            </TableCell>

            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 px-2.5 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-bold gap-1"
                        >
                            <span>Change Status</span>
                            <MoreVertical className="w-3.5 h-3.5 text-slate-500" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-40 rounded-xl p-1 bg-white border-slate-200 shadow-md"
                    >
                        <DropdownMenuItem
                            onClick={() => handleUserStatusUpdate(user.id, "ACTIVE")}
                            className="rounded-lg text-xs font-semibold text-emerald-600 hover:bg-emerald-50 cursor-pointer flex items-center"
                        >
                            <UserCheck className="w-3.5 h-3.5 mr-2 shrink-0" /> Mark Active
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => handleUserStatusUpdate(user.id, "SUSPENDED")}
                            className="rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 cursor-pointer flex items-center"
                        >
                            <UserX className="w-3.5 h-3.5 mr-2 shrink-0" /> Suspend User
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}

export default UsersTable