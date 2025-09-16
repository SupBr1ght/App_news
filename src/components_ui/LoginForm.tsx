import { useForm } from "react-hook-form";
import { Box, Input, Button, Stack } from "@chakra-ui/react";

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
				<Input placeholder="Email" {...register("email", { required: true })} />
				<Input
					type="password"
					placeholder="Password"
					{...register("password", { required: true })}
				/>
				<Button type="submit">Login</Button>
			</Stack>
		</Box>
	);
}
