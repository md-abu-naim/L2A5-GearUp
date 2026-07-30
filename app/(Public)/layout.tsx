import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navber"
import { getMe } from "@/services/getMe";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getMe()
     return (
        <div>
            <Navbar user={user} />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout