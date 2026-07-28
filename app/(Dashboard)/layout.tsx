import Navbar from "@/components/Shared/Navber"

const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DashboardLayout