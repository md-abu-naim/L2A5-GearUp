import LoginForm from "../_components/LoginForm"

type LoginProps = {
  searchParams: Promise<{
    redirectTo?: string;
  }>;
};

const Login = async({ searchParams }: LoginProps) => {
  const params = await searchParams;
  return (
    <LoginForm redirectTo={params.redirectTo} />
  )
}

export default Login