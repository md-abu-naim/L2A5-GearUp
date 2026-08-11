"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
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
    user: User;
};

const UsersTable = ({ user }: Props) => {
    const handleUserStatusUpdate = async (id: string, status: string) => {
        const result = await updateUserStatus(id, status);

        if (result.success) {
            toast.success(
                result.message || "User Status Updated Successfully"
            );
        }
    };

    const getRoleStyles = () => {
        switch (user.role) {
            case "ADMIN":
                return "bg-rose-500/10 text-rose-600 border-rose-500/20";

            case "PROVIDER":
                return "bg-violet-500/10 text-violet-600 border-violet-500/20";

            default:
                return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
        }
    };

    const getStatusStyles = () => {
        switch (user.status) {
            case "ACTIVE":
                return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";

            case "SUSPENDED":
                return "bg-rose-500/10 text-rose-600 border-rose-500/20";

            default:
                return "bg-amber-500/10 text-amber-600 border-amber-500/20";
        }
    };

    return (
        <TableRow className="border-border transition-colors hover:bg-muted/50">

            <TableCell className="py-4">
                <div className="flex items-center gap-3">

                    <Avatar className="h-9 w-9 rounded-full border border-border shrink-0">
                        <AvatarImage
                            src={user.profileImage || ""}
                            alt={user.name}
                        />

                        <AvatarFallback className="bg-emerald-500/10 text-emerald-600 font-bold text-xs">
                            {user.name
                                ? user.name.slice(0, 2).toUpperCase()
                                : "US"}
                        </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                        <p className="font-bold text-xs text-foreground truncate max-w-45">
                            {user.name}
                        </p>

                        <p className="text-[11px] text-muted-foreground font-medium truncate max-w-55">
                            {user.email}
                        </p>
                    </div>

                </div>
            </TableCell>

            <TableCell>
                <p className="font-semibold text-xs text-foreground whitespace-nowrap">
                    {user.phone || "N/A"}
                </p>
            </TableCell>

            <TableCell>
                <Badge
                    variant="outline"
                    className={`text-[10px] font-bold rounded-md px-2.5 py-0.5 ${getRoleStyles()}`}
                >
                    {user.role}
                </Badge>
            </TableCell>

            <TableCell>
                <Badge
                    variant="outline"
                    className={`text-[10px] font-bold rounded-md px-2.5 py-0.5 gap-1.5 ${getStatusStyles()}`}
                >
                    {user.status === "ACTIVE" ? (
                        <CheckCircle2 className="w-3 h-3" />
                    ) : user.status === "SUSPENDED" ? (
                        <XCircle className="w-3 h-3" />
                    ) : (
                        <AlertCircle className="w-3 h-3" />
                    )}

                    {user.status}
                </Badge>
            </TableCell>

            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 px-2.5 rounded-lg border-border bg-background text-foreground hover:bg-muted text-xs font-bold gap-1.5"
                        >
                            <span className="hidden sm:inline">
                                Change Status
                            </span>

                            <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        className="w-44 rounded-xl p-1 bg-popover border-border shadow-lg"
                    >
                        <DropdownMenuItem
                            onClick={() =>
                                handleUserStatusUpdate(
                                    user.id,
                                    "ACTIVE"
                                )
                            }
                            disabled={user.status === "ACTIVE"}
                            className="rounded-lg text-xs font-semibold text-emerald-600 focus:bg-emerald-500/10 cursor-pointer"
                        >
                            <UserCheck className="w-3.5 h-3.5 mr-2 shrink-0" />
                            Mark Active
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() =>
                                handleUserStatusUpdate(
                                    user.id,
                                    "SUSPENDED"
                                )
                            }
                            disabled={user.status === "SUSPENDED"}
                            className="rounded-lg text-xs font-semibold text-rose-600 focus:bg-rose-500/10 cursor-pointer"
                        >
                            <UserX className="w-3.5 h-3.5 mr-2 shrink-0" />
                            Suspend User
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>

        </TableRow>
    );
};

export default UsersTable;