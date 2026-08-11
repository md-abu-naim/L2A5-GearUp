
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "sonner";
import {
  Loader2,
  Lock,
  Mail,
  LogIn,
  User,
  Store,
  ShieldCheck,
} from "lucide-react";
import {
  LoginFormTypes,
  LoginValidation,
} from "../_actions/FormValidation";
import { UserRole } from "@/lib/types";
import { loginUser } from "../_actions/AuthActions";

type FormProps = {
  redirectTo?: string;
};

export default function LoginForm({ redirectTo }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [demoLoadingRole, setDemoLoadingRole] = useState<UserRole | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Normal Login
  const onSubmit = async (data: LoginFormTypes) => {
    setIsLoading(true);

    try {
      const payload = {
        email: data.email,
        password: data.password,
      };

      const result = await loginUser(
        payload,
        redirectTo as string
      );

      if (result.success) {
        toast.success(
          result.message || "Welcome back! Logging in..."
        );
      }
    } catch (error: any) {
      toast.error(
        error.message ||
        "Something went wrong during login."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Demo Login
  const handleDemoLogin = async (role: UserRole) => {
    setIsLoading(true);
    setDemoLoadingRole(role);

    try {
      let payload = null;

      if (role === "ADMIN") {
        payload = {
          email: "admin1@gmail.com",
          password: "Admin1",
        };
      } else if (role === "PROVIDER") {
        payload = {
          email: "provider@test.com",
          password: "Provider1",
        };
      } else {
        payload = {
          email: "customer@gmail.com",
          password: "Customer1",
        };
      }

      const result = await loginUser(
        payload,
        redirectTo as string
      );

      if (result.success) {
        toast.success(
          result.message ||
          `Demo ${role.toLowerCase()} login successful!`
        );
      }
    } catch (error: any) {
      toast.error(
        error.message ||
        "Demo login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
      setDemoLoadingRole(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl
              border border-emerald-500/20
              bg-emerald-500/10
              text-emerald-600
            "
          >
            <LogIn className="h-4 w-4" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
            Welcome Back
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Sign in to GearUp
          </h2>

          <p className="mt-1 text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm">
            Enter your credentials to access your GearUp account.
          </p>
        </div>
      </div>

      {/* Normal Login Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-wider
              text-muted-foreground
            "
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="alex@example.com"
              autoComplete="email"
              className="
                h-11
                w-full
                rounded-xl
                border
                border-input
                bg-background
                pl-9
                pr-4
                text-sm
                font-medium
                text-foreground
                outline-none
                transition-all
                focus:ring-2
                focus:ring-emerald-500/20
              "
            />
          </div>

          {errors.email && (
            <p className="text-xs font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-muted-foreground
              "
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="
                text-xs
                font-semibold
                text-emerald-600
                transition-colors
                hover:text-emerald-500
                hover:underline
              "
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <Lock
              className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              className="
                h-11
                w-full
                rounded-xl
                border
                border-input
                bg-background
                pl-9
                pr-4
                text-sm
                font-medium
                text-foreground
                outline-none
                transition-all
                focus:ring-2
                focus:ring-emerald-500/20
              "
            />
          </div>

          {errors.password && (
            <p className="text-xs font-medium text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Sign In */}
        <button
          type="submit"
          disabled={isLoading}
          className="
            mt-2
            flex
            h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-4
            text-sm
            font-bold
            text-white
            shadow-md
            shadow-emerald-600/20
            transition-all
            duration-200
            hover:bg-emerald-700
            hover:shadow-lg
            hover:shadow-emerald-600/20
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isLoading && !demoLoadingRole ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing In...
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Sign In
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={() => {
          window.location.href =
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
        }}
        disabled={isLoading}
        className="
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-input
          bg-background
          px-4
          text-sm
          font-bold
          text-foreground
          transition-all
          hover:bg-muted
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {isLoading && !demoLoadingRole ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.4Z"
            />

            <path
              fill="#34A853"
              d="M12 21.5c2.63 0 4.84-.87 6.45-2.37l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.75 9.75 0 0 0 12 21.5Z"
            />

            <path
              fill="#FBBC05"
              d="M6.54 13.58A5.86 5.86 0 0 1 6.23 12c0-.55.1-1.09.31-1.58V7.9H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.06 1.05 4.1l3.24-2.52Z"
            />

            <path
              fill="#EA4335"
              d="M12 6.39c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.47 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.4l3.24 2.52C7.31 8.11 9.46 6.39 12 6.39Z"
            />
          </svg>
        )}

        Continue with Google
      </button>

      {/* Demo Login */}
      <div className="space-y-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-background px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Quick Demo Access
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {/* Demo Customer */}
          <button
            type="button"
            onClick={() =>
              handleDemoLogin("CUSTOMER")
            }
            disabled={isLoading}
            className="
              flex
              h-10
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-emerald-200
              bg-emerald-50
              px-2
              text-[11px]
              font-bold
              text-emerald-700
              transition-all
              hover:border-emerald-300
              hover:bg-emerald-100
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {demoLoadingRole === "CUSTOMER" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              <>
                <User className="h-3.5 w-3.5" />
                Demo Customer
              </>
            )}
          </button>

          {/* Demo Provider */}
          <button
            type="button"
            onClick={() =>
              handleDemoLogin("PROVIDER")
            }
            disabled={isLoading}
            className="
              flex
              h-10
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-blue-200
              bg-blue-50
              px-2
              text-[11px]
              font-bold
              text-blue-700
              transition-all
              hover:border-blue-300
              hover:bg-blue-100
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {demoLoadingRole === "PROVIDER" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              <>
                <Store className="h-3.5 w-3.5" />
                Demo Provider
              </>
            )}
          </button>

          {/* Demo Admin */}
          <button
            type="button"
            onClick={() =>
              handleDemoLogin("ADMIN")
            }
            disabled={isLoading}
            className="
              flex
              h-10
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-purple-200
              bg-purple-50
              px-2
              text-[11px]
              font-bold
              text-purple-700
              transition-all
              hover:border-purple-300
              hover:bg-purple-100
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {demoLoadingRole === "ADMIN" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              <>
                <ShieldCheck className="h-3.5 w-3.5" />
                Demo Admin
              </>
            )}
          </button>
        </div>

        <p className="text-center text-[10px] font-medium text-muted-foreground">
          Explore GearUp without creating an account.
        </p>
      </div>

      {/* Register */}
      <div className="border-t border-border pt-5">
        <p className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
          Don&apos;t have an account?{" "}

          <Link
            href="/register"
            className="
              font-bold
              text-emerald-600
              transition-colors
              hover:text-emerald-500
              hover:underline
            "
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}