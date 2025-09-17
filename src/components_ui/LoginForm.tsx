import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormFields {
	email: string;
	password: string;
}

export default function LoginForm() {
	const { register, handleSubmit } = useForm<LoginFormFields>();
	const navigate = useNavigate();

	const submit = (data: LoginFormFields) => {
		console.log("Login data:", data);
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
				<Input
					color="green"
					type="password"
					placeholder="Password"
					bg="gray.200"
					{...register("password", { required: true })}
				/>
				<Button type="submit" colorScheme="green">
					Login
				</Button>
			</Stack>
		</Box>
	);
}
