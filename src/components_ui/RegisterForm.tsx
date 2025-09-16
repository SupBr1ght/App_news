import { useForm } from "react-hook-form";
import { Box, Input, Button, Stack } from "@chakra-ui/react";

interface RegisterFormProps {
	onRegister: (data: { email: string; password: string }) => void;
}

interface RegisterFormFields {
	email: string;
	password: string;
}

export default function RegisterForm({ onRegister }: RegisterFormProps) {
	const { register, handleSubmit } = useForm<RegisterFormFields>();

	const submit = (data: RegisterFormFields) => onRegister(data);

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
					Register
				</Button>
			</Stack>
		</Box>
	);
}
