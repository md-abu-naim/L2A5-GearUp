// import { SidebarProvider } from "@/components/ui/sidebar"
// import { getMe } from "@/services/getMe"
// import DashboardSidebar from "./_components/DashboardSidebar"

// const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
//     const user = await getMe()
//     console.log(user);
//     return (
//         <SidebarProvider>
//             <div className="flex flex-1">
//                 <DashboardSidebar user={user} />
//                 <main className="flex-1 min-w-0">{children}</main>
//             </div>
//         </SidebarProvider>
//     )
// }

// export default DashboardLayout


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/Shared/Navber";
import DashboardSidebar from "./_components/DashboardSidebar";
import { getMe } from "@/services/getMe";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-1 w-full relative">
          <DashboardSidebar user={user} />
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/40 bg-card/40 backdrop-blur-sm lg:hidden">
              <SidebarTrigger className="h-9 w-9 border border-border/60 rounded-xl" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Dashboard Menu
              </span>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="hidden lg:block">
                <Navbar user={user} />
              </div>
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;