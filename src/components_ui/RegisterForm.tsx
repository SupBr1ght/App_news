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
				<Input placeholder="Email" {...register("email", { required: true })} />
				<Input
					type="password"
					placeholder="Password"
					{...register("password", { required: true })}
				/>
				<Button type="submit">Register</Button>
			</Stack>
		</Box>
	);
}
