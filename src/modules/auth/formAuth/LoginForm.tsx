import { Box, Button, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";
import { useUserStore } from "../../../store/UserStore";
import { LoginSchema } from "../../types/types";
import FormInput from "./AuthForm";

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
			<Box
				flex={1}
				borderWidth="1px"
				borderRadius="xl"
				maxW="600px"
				w="full"
				bgColor="green.200"
				bgGradient="linear(to-br, green.50, green.100)"
				boxShadow="lg"
				p={6}
			>
				<VStack gap={4}>
					<FormInput name="email" register={register} errors={errors} />
					<FormInput name="password" register={register} errors={errors} />
					<Button type="submit" size="md" w="full" bgColor="green.300">
						Login
					</Button>
				</VStack>
			</Box>{" "}
		</form>
	);
}
