import Navbar from "@/components/Shared/Navber"

const PublicLayout = async({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default PublicLayout