import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface LoginFormProps {
	onLogin: (data: { email: string; password: string }) => void;
}

interface LoginFormFields {
	email: string;
	password: string;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
	const { register, handleSubmit } = useForm<LoginFormFields>();

	const submit = (data: LoginFormFields) => onLogin(data);

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(submit)}
			p={4}
			borderWidth="1px"
			borderRadius="md"
		>
			<Stack>
				<Input
					placeholder="Email"
					bg="gray.200"
					{...register("email", { required: true })}
					_placeholder={{ color: "gray.500", opacity: 0.8 }}
					color="black"
				/>
				<Input
					bg="gray.200"
					type="password"
					placeholder="Password"
					_placeholder={{ color: "gray.500", opacity: 0.8 }}
					{...register("password", { required: true })}
					color="black"
				/>
				<Button type="submit" bg="green.400">
					Login
				</Button>
			</Stack>
		</Box>
	);
}
