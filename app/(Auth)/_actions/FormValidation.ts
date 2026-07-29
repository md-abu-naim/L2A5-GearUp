import { z } from "zod";

export const RegisterValidation = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    role: z.enum(["CUSTOMER", "PROVIDER"], {
        message: "Please select a role",
    }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });


export type RegisterFormTypes = z.infer<typeof RegisterValidation>;


export const LoginValidation = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(6, { message: "Password is required." }),
});

export type LoginFormTypes = z.infer<typeof LoginValidation>;