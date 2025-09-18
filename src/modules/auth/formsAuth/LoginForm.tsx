import { Stack, Button, Box, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../types/types";
import type { z } from "zod";
import FormInput from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/UserStore";

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
				p={10}
				mx="auto"
				mt={10}
				borderWidth="1px"
				borderRadius="xl"
				maxW="600px"
				w="full"
				bgColor="green.200"
				bgGradient="linear(to-br, green.50, green.100)"
				boxShadow="lg"
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
