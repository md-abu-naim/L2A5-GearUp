import Navbar from "@/components/Shared/Navber"

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default LoginLayout