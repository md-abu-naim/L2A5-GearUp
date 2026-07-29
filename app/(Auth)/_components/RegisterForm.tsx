/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2, UserCheck, Store, Lock, Mail, User } from "lucide-react";
import { RegisterFormTypes, RegisterValidation } from "../_actions/FormValidation";
import { createUser } from "../_actions/AuthActions";

export default function RegisterForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterFormTypes>({
        resolver: zodResolver(RegisterValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "CUSTOMER",
        },
    });

    const selectedRole = watch("role");


    const onSubmit = async (data: RegisterFormTypes) => {
        setIsLoading(true);
        
        try {
            await createUser(data)

          toast.success("Account created successfully! Please log in.");
        } catch (error: any) {
          toast.error(error.message || "Something went wrong during registration.");
        } finally {
          setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Create an account
                </h2>
                <p className="text-sm text-gray-500">
                    Enter your details below to set up your GearUp account
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Account Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setValue("role", "CUSTOMER")}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${selectedRole === "CUSTOMER"
                                    ? "border-emerald-600 bg-emerald-50 text-emerald-600 ring-2 ring-emerald-500/20"
                                    : "border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600"
                                }`}
                        >
                            <UserCheck className="w-4 h-4" />
                            Customer
                        </button>
                        <button
                            type="button"
                            onClick={() => setValue("role", "PROVIDER")}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${selectedRole === "PROVIDER"
                                    ? "border-emerald-600 bg-emerald-50 text-emerald-600 ring-2 ring-emerald-500/20"
                                    : "border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 "
                                }`}
                        >
                            <Store className="w-4 h-4" />
                            Gear Provider
                        </button>
                    </div>
                    {errors.role && (
                        <p className="text-xs text-red-500 font-medium">{errors.role.message}</p>
                    )}
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Alex Johnson"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all dark:text-white"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                    )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="alex@example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border transition-all dark:text-white"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all dark:text-white"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder="••••••••"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all dark:text-white"
                        />
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-500 font-medium">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </form>

            {/* Login redirect */}
            <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-emerald-600 hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </div>
    );
}