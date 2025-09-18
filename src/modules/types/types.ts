import { z } from "zod";

export const LoginSchema = z.object({
	email: z.email(),
	password: z
		.string()
		.min(8, { message: "Password is too short" })
		.max(20, { message: "Password is too long" }),
});

export const RegisterSchema = z
	.object({
		email: z.email(),
		password: z
			.string()
			.min(8, { message: "Password is too short" })
			.max(20, { message: "Password is too long" }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type UserData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
