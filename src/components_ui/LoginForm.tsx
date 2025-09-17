import { Stack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./types/types";
import type { z } from "zod";
import FormInput from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UserStore";

type LoginFormFields = z.infer<typeof LoginSchema>;

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormFields>({
		resolver: zodResolver(LoginSchema),
	});
	const navigate = useNavigate();

	const submit = (data: LoginFormFields) => {
		useUserStore.getState().login(data.email);
		navigate("/news");
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Stack>
				<FormInput name="email" register={register} errors={errors} />
				<FormInput name="password" register={register} errors={errors} />
				<Button type="submit" colorScheme="green">
					Login
				</Button>
			</Stack>
		</form>
	);
}
