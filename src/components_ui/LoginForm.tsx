import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./types/types";
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
		<Box
			flex={1}
			as="form"
			onSubmit={handleSubmit(submit)}
			p={4}
			borderWidth="1px"
			borderRadius="md"
			maxW="400px"
			w="full"
			bg="white"
			boxShadow="md"
		>
			<Stack>
				<Input
					placeholder="Email"
					bg="gray.200"
					color="green"
					{...register("email", { required: true })}
				/>
				{errors.email && (
					<Text color="red.500" fontSize="sm">
						{errors.email.message}
					</Text>
				)}
				<Input
					color="green"
					type="password"
					placeholder="Password"
					bg="gray.200"
					{...register("password", { required: true })}
				/>
				{errors.password && (
					<Text color="red.500" fontSize="sm">
						{errors.password.message}
					</Text>
				)}
				<Button type="submit" colorScheme="green">
					Login
				</Button>
			</Stack>
		</Box>
	);
}
