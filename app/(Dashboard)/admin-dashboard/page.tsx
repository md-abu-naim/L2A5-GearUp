// import Link from "next/link";
// import { format } from "date-fns";
// import {
//   Users,
//   PackageCheck,
//   DollarSign,
//   TrendingUp,
//   ShieldCheck,
//   AlertCircle,
//   ArrowUpRight,
//   ChevronRight,
//   Activity,
//   CheckCircle2,
//   Layers,
  
// } from "lucide-react";
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

// export default async function AdminDashboard() {
//   // Mock Data (Real app-e DB query/API call hobe)
//   const stats = {
//     totalRevenue: 245800,
//     totalUsers: 1250,
//     activeRentals: 184,
//     pendingVerifications: 12,
//   };

//   const recentUsers = [
//     { id: "1", name: "Rahim Ahmed", email: "rahim@example.com", role: "PROVIDER", status: "VERIFIED", date: new Date() },
//     { id: "2", name: "Karim Chowdhury", email: "karim@example.com", role: "RENTER", status: "PENDING", date: new Date() },
//     { id: "3", name: "Tanvir Hossain", email: "tanvir@example.com", role: "PROVIDER", status: "VERIFIED", date: new Date() },
//     { id: "4", name: "Nusrat Jahan", email: "nusrat@example.com", role: "RENTER", status: "VERIFIED", date: new Date() },
//   ];

//   const pendingGears = [
//     { id: "g1", title: "Camping Tent 4-Person", provider: "Rahim Ahmed", category: "Camping", price: 800 },
//     { id: "g2", title: "DJI Mavic Air 2 Drone", provider: "Tanvir Hossain", category: "Electronics", price: 2500 },
//     { id: "g3", title: "Trekking Poles (Pair)", provider: "Sajid Hasan", category: "Hiking", price: 300 },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
      
//       {/* Top Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
//         <div>
//           <div className="flex items-center gap-2">
//             <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
//               Admin Overview
//             </h1>
//             <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
//               System Live
//             </Badge>
//           </div>
//           <p className="text-xs sm:text-sm text-slate-500 mt-1">
//             Monitor platform performance, manage users, and approve new listings.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Button
//             size="sm"
//             asChild
//             className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs"
//           >
//             <Link href="/admin/reports">
//               <Activity className="w-4 h-4 text-emerald-400" /> View System Logs
//             </Link>
//           </Button>
//         </div>
//       </div>

//       {/* Metrics Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
//         {/* Total Platform Revenue */}
//         <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
//           <CardContent className="p-6 space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
//                 Total Revenue
//               </span>
//               <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
//                 <DollarSign className="w-5 h-5" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-black text-slate-900 tracking-tight">
//                 ৳{stats.totalRevenue.toLocaleString()}
//               </h3>
//               <div className="flex items-center gap-1.5 mt-1 text-xs">
//                 <span className="font-bold text-emerald-600 flex items-center">
//                   <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
//                 </span>
//                 <span className="text-slate-400">• vs last month</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Total Users */}
//         <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
//           <CardContent className="p-6 space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
//                 Total Platform Users
//               </span>
//               <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600">
//                 <Users className="w-5 h-5" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-black text-slate-900 tracking-tight">
//                 {stats.totalUsers.toLocaleString()}
//               </h3>
//               <div className="flex items-center gap-1.5 mt-1 text-xs">
//                 <span className="font-bold text-blue-600 flex items-center">
//                   <TrendingUp className="w-3 h-3 mr-0.5" /> +120 new
//                 </span>
//                 <span className="text-slate-400">• this week</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Active Rentals */}
//         <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
//           <CardContent className="p-6 space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
//                 Active Rentals
//               </span>
//               <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600">
//                 <PackageCheck className="w-5 h-5" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-black text-slate-900 tracking-tight">
//                 {stats.activeRentals}
//               </h3>
//               <div className="flex items-center gap-1.5 mt-1 text-xs">
//                 <span className="font-bold text-purple-600 flex items-center">
//                   <Activity className="w-3 h-3 mr-0.5" /> Ongoing
//                 </span>
//                 <span className="text-slate-400">• in circulation</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Pending Approval */}
//         <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
//           <CardContent className="p-6 space-y-4">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
//                 Pending Approvals
//               </span>
//               <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
//                 <AlertCircle className="w-5 h-5" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-black text-slate-900 tracking-tight">
//                 {stats.pendingVerifications} Items
//               </h3>
//               <div className="flex items-center gap-1.5 mt-1 text-xs">
//                 <span className="font-bold text-amber-600 flex items-center">
//                   Action Needed
//                 </span>
//                 <span className="text-slate-400">• requires review</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//       </div>

//       {/* Main Grid: Left side approvals & Right side stats */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Left Column: Recent Registrations & Approvals */}
//         <div className="lg:col-span-2 space-y-8">
          
//           {/* Pending Gear Listings */}
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-lg font-black text-slate-900 tracking-tight">
//                   Pending Gear Approval
//                 </h2>
//                 <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-bold text-[10px] rounded-full">
//                   {pendingGears.length} Requests
//                 </Badge>
//               </div>

//               <Button
//                 variant="ghost"
//                 size="sm"
//                 asChild
//                 className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
//               >
//                 <Link href="/admin/gears">
//                   Manage All <ChevronRight className="w-3.5 h-3.5" />
//                 </Link>
//               </Button>
//             </div>

//             <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
//               <CardContent className="p-0">
//                 <Table>
//                   <TableHeader className="bg-slate-50 border-b border-slate-100">
//                     <TableRow>
//                       <TableHead className="text-xs font-bold text-slate-600">Gear Item</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600">Category</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600">Price/Day</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600">Provider</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600 text-right">Quick Action</TableHead>
//                     </TableRow>
//                   </TableHeader>

//                   <TableBody>
//                     {pendingGears.map((gear) => (
//                       <TableRow key={gear.id} className="hover:bg-slate-50/80 transition-colors">
//                         <TableCell className="font-bold text-xs text-slate-900">
//                           {gear.title}
//                         </TableCell>
//                         <TableCell className="text-xs font-medium text-slate-600">
//                           <Badge variant="outline" className="rounded-lg text-[10px] border-slate-200">
//                             {gear.category}
//                           </Badge>
//                         </TableCell>
//                         <TableCell className="text-xs font-bold text-slate-900">
//                           ৳{gear.price}
//                         </TableCell>
//                         <TableCell className="text-xs text-slate-500 font-medium">
//                           {gear.provider}
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <div className="flex items-center justify-end gap-1.5">
//                             <Button size="sm" className="h-7 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px]">
//                               Approve
//                             </Button>
//                             <Button size="sm" variant="outline" className="h-7 px-2.5 rounded-lg border-slate-200 text-rose-600 hover:bg-rose-50 text-[11px] font-bold">
//                               Reject
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </div>

//           {/* User Management Overview */}
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <h2 className="text-lg font-black text-slate-900 tracking-tight">
//                 Recently Registered Users
//               </h2>

//               <Button
//                 variant="ghost"
//                 size="sm"
//                 asChild
//                 className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
//               >
//                 <Link href="/admin/users">
//                   View All Users <ChevronRight className="w-3.5 h-3.5" />
//                 </Link>
//               </Button>
//             </div>

//             <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
//               <CardContent className="p-0">
//                 <Table>
//                   <TableHeader className="bg-slate-50 border-b border-slate-100">
//                     <TableRow>
//                       <TableHead className="text-xs font-bold text-slate-600">User</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600">Role</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
//                       <TableHead className="text-xs font-bold text-slate-600 text-right">Action</TableHead>
//                     </TableRow>
//                   </TableHeader>

//                   <TableBody>
//                     {recentUsers.map((user) => (
//                       <TableRow key={user.id} className="hover:bg-slate-50/80 transition-colors">
//                         <TableCell>
//                           <div>
//                             <p className="font-bold text-xs text-slate-900">{user.name}</p>
//                             <p className="text-[11px] text-slate-400 font-medium">{user.email}</p>
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <Badge 
//                             className={`text-[10px] font-bold rounded-md px-2 py-0.5 border-none ${
//                               user.role === "PROVIDER" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
//                             }`}
//                           >
//                             {user.role}
//                           </Badge>
//                         </TableCell>
//                         <TableCell>
//                           <span className={`inline-flex items-center text-[11px] font-bold gap-1 ${
//                             user.status === "VERIFIED" ? "text-emerald-600" : "text-amber-600"
//                           }`}>
//                             {user.status === "VERIFIED" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
//                             {user.status}
//                           </span>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             asChild
//                             className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-slate-900"
//                           >
//                             <Link href={`/admin/users/${user.id}`}>
//                               <ArrowUpRight className="w-4 h-4" />
//                             </Link>
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </div>

//         </div>

//         {/* Right Column: Platform Quick Actions & System Health */}
//         <div className="space-y-6">
          
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-black text-slate-900 tracking-tight">
//               System Control
//             </h2>
//           </div>

//           {/* Quick Management Actions */}
//           <Card className="rounded-3xl border-slate-200/80 bg-white p-5 space-y-3 shadow-xs">
//             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
//               Quick Shortcuts
//             </h3>

//             <div className="space-y-2">
//               <Button
//                 variant="outline"
//                 asChild
//                 className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
//               >
//                 <Link href="/admin/categories">
//                   <Layers className="w-4 h-4 text-emerald-600" /> Manage Categories & Types
//                 </Link>
//               </Button>

//               <Button
//                 variant="outline"
//                 asChild
//                 className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
//               >
//                 <Link href="/admin/verifications">
//                   <ShieldCheck className="w-4 h-4 text-emerald-600" /> Identity Verifications
//                 </Link>
//               </Button>

//               <Button
//                 variant="outline"
//                 asChild
//                 className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
//               >
//                 <Link href="/admin/payouts">
//                   <DollarSign className="w-4 h-4 text-emerald-600" /> Provider Payout Requests
//                 </Link>
//               </Button>
//             </div>
//           </Card>

//           {/* System Health Status Card */}
//           <Card className="rounded-3xl border-slate-200/80 bg-slate-900 text-white p-6 space-y-4 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
//                   System Health
//                 </span>
//               </div>
//               <Badge className="bg-emerald-500/20 text-emerald-300 border-none text-[10px] font-bold">
//                 Optimal
//               </Badge>
//             </div>

//             <div className="space-y-2 text-xs text-slate-300">
//               <div className="flex justify-between font-medium">
//                 <span>Database Connectivity</span>
//                 <span className="text-emerald-400 font-bold">99.9%</span>
//               </div>
//               <div className="flex justify-between font-medium">
//                 <span>Payment Gateway</span>
//                 <span className="text-emerald-400 font-bold">Active</span>
//               </div>
//               <div className="flex justify-between font-medium">
//                 <span>Storage Service</span>
//                 <span className="text-emerald-400 font-bold">Normal</span>
//               </div>
//             </div>

//             <div className="pt-2 border-t border-slate-800">
//               <p className="text-[11px] text-slate-400">
//                 Last system audit: <strong className="text-slate-200">{format(new Date(), "MMM dd, yyyy")}</strong>
//               </p>
//             </div>
//           </Card>

//         </div>

//       </div>

//     </div>
//   );
// }

import Link from "next/link";
import { format } from "date-fns";
import {
  Users,
  PackageCheck,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  Activity,
  CheckCircle2,
  Layers,
  ShoppingBag,
  CreditCard,
  Clock
} from "lucide-react";
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

export default async function AdminDashboardPage() {
  // Mock Data (Real app-e DB query/API call hobe)
  const stats = {
    totalRevenue: 245800,
    totalUsers: 1250,
    activeRentals: 184,
    pendingVerifications: 12,
  };

  const recentTransactions = [
    {
      id: "TXN-1001",
      gearTitle: "Deuter Hiking Backpack 60L",
      renterName: "Sajid Hasan",
      providerName: "Rahim Ahmed",
      amount: 1500,
      status: "COMPLETED",
      date: new Date(),
    },
    {
      id: "TXN-1002",
      gearTitle: "Camping Tent 4-Person",
      renterName: "Karim Chowdhury",
      providerName: "Tanvir Hossain",
      amount: 2400,
      status: "ACTIVE",
      date: new Date(),
    },
    {
      id: "TXN-1003",
      gearTitle: "DJI Mavic Air 2 Drone",
      renterName: "Nusrat Jahan",
      providerName: "Tanvir Hossain",
      amount: 5000,
      status: "ACTIVE",
      date: new Date(),
    },
    {
      id: "TXN-1004",
      gearTitle: "Trekking Poles (Pair)",
      renterName: "Abir Rahman",
      providerName: "Sajid Hasan",
      amount: 600,
      status: "PENDING",
      date: new Date(),
    },
  ];

  const recentUsers = [
    { id: "1", name: "Rahim Ahmed", email: "rahim@example.com", role: "PROVIDER", status: "VERIFIED", date: new Date() },
    { id: "2", name: "Karim Chowdhury", email: "karim@example.com", role: "RENTER", status: "PENDING", date: new Date() },
    { id: "3", name: "Tanvir Hossain", email: "tanvir@example.com", role: "PROVIDER", status: "VERIFIED", date: new Date() },
    { id: "4", name: "Nusrat Jahan", email: "nusrat@example.com", role: "RENTER", status: "VERIFIED", date: new Date() },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16 pt-2 px-4 sm:px-6 bg-slate-50/50 min-h-screen">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Admin Overview
            </h1>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
              System Live
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Monitor platform performance, manage users, and view transactions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            asChild
            className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-10 gap-2 shadow-xs"
          >
            <Link href="/admin/reports">
              <Activity className="w-4 h-4 text-emerald-400" /> View System Logs
            </Link>
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Total Platform Revenue */}
        <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Revenue
              </span>
              <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                ৳{stats.totalRevenue.toLocaleString()}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +18.4%
                </span>
                <span className="text-slate-400">• vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Users */}
        <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Platform Users
              </span>
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {stats.totalUsers.toLocaleString()}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-blue-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +120 new
                </span>
                <span className="text-slate-400">• this week</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Rentals */}
        <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Active Rentals
              </span>
              <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600">
                <PackageCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {stats.activeRentals}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-purple-600 flex items-center">
                  <Activity className="w-3 h-3 mr-0.5" /> Ongoing
                </span>
                <span className="text-slate-400">• in circulation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Verifications */}
        <Card className="rounded-3xl border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Identity Verification
              </span>
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {stats.pendingVerifications} Pending
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span className="font-bold text-amber-600 flex items-center">
                  Action Needed
                </span>
                <span className="text-slate-400">• review NID/Docs</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Main Grid: Left side Transactions & Right side System Control */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Recent Transactions & User Overview */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Recent Rental Transactions (NEW SECTION) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Recent Rental Transactions
                </h2>
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 font-bold text-[10px] rounded-full">
                  Real-time
                </Badge>
              </div>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
              >
                <Link href="/admin/transactions">
                  View All Transactions <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50 border-b border-slate-100">
                    <TableRow>
                      <TableHead className="text-xs font-bold text-slate-600">Transaction</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600">Gear Item</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600">Renter / Provider</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600">Amount</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {recentTransactions.map((txn) => (
                      <TableRow key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                        <TableCell className="font-bold text-xs text-slate-900">
                          {txn.id}
                        </TableCell>
                        <TableCell className="font-bold text-xs text-slate-800">
                          {txn.gearTitle}
                        </TableCell>
                        <TableCell className="text-xs text-slate-500 font-medium">
                          <p className="text-slate-900 font-bold">{txn.renterName}</p>
                          <p className="text-[10px] text-slate-400">To: {txn.providerName}</p>
                        </TableCell>
                        <TableCell className="text-xs font-black text-slate-900">
                          ৳{txn.amount}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge 
                            className={`text-[10px] font-bold rounded-md px-2 py-0.5 border-none ${
                              txn.status === "COMPLETED" 
                                ? "bg-emerald-100 text-emerald-700" 
                                : txn.status === "ACTIVE" 
                                ? "bg-blue-100 text-blue-700" 
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {txn.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* User Management Overview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                Recently Registered Users
              </h2>

              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 gap-1 rounded-xl"
              >
                <Link href="/admin/users">
                  View All Users <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>

            <Card className="rounded-3xl border-slate-200/80 bg-white overflow-hidden shadow-xs">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50 border-b border-slate-100">
                    <TableRow>
                      <TableHead className="text-xs font-bold text-slate-600">User</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600">Role</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600">Status</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-slate-50/80 transition-colors">
                        <TableCell>
                          <div>
                            <p className="font-bold text-xs text-slate-900">{user.name}</p>
                            <p className="text-[11px] text-slate-400 font-medium">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            className={`text-[10px] font-bold rounded-md px-2 py-0.5 border-none ${
                              user.role === "PROVIDER" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center text-[11px] font-bold gap-1 ${
                            user.status === "VERIFIED" ? "text-emerald-600" : "text-amber-600"
                          }`}>
                            {user.status === "VERIFIED" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 w-8 p-0 rounded-xl text-slate-500 hover:text-slate-900"
                          >
                            <Link href={`/admin/users/${user.id}`}>
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Right Column: Platform Quick Actions & System Health */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">
              System Control
            </h2>
          </div>

          {/* Quick Management Actions */}
          <Card className="rounded-3xl border-slate-200/80 bg-white p-5 space-y-3 shadow-xs">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Quick Shortcuts
            </h3>

            <div className="space-y-2">
              <Button
                variant="outline"
                asChild
                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
              >
                <Link href="/admin/categories">
                  <Layers className="w-4 h-4 text-emerald-600" /> Manage Categories & Types
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
              >
                <Link href="/admin/verifications">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Identity Verifications
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="w-full justify-start rounded-2xl border-slate-200 text-slate-800 text-xs font-bold h-11 hover:bg-slate-50 gap-2.5"
              >
                <Link href="/admin/payouts">
                  <CreditCard className="w-4 h-4 text-emerald-600" /> Provider Payout Requests
                </Link>
              </Button>
            </div>
          </Card>

          {/* System Health Status Card */}
          <Card className="rounded-3xl border-slate-200/80 bg-slate-900 text-white p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  System Health
                </span>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-none text-[10px] font-bold">
                Optimal
              </Badge>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between font-medium">
                <span>Database Connectivity</span>
                <span className="text-emerald-400 font-bold">99.9%</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Payment Gateway</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Storage Service</span>
                <span className="text-emerald-400 font-bold">Normal</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <p className="text-[11px] text-slate-400">
                Last system audit: <strong className="text-slate-200">{format(new Date(), "MMM dd, yyyy")}</strong>
              </p>
            </div>
          </Card>

        </div>

      </div>

    </div>
  );
}