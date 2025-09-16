import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface RegisterFormFields {
	email: string;
	password: string;
}

export default function RegisterForm() {
	const { register, handleSubmit } = useForm<RegisterFormFields>();
	const navigate = useNavigate();

	const submit = (data: RegisterFormFields) => {
		console.log("Register data:", data);
		navigate("/news");
	};

	return (
		<Box
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
					{...register("email", { required: true })}
				/>
				<Input
					type="password"
					placeholder="Password"
					bg="gray.200"
					{...register("password", { required: true })}
				/>
				<Button type="submit" colorScheme="blue">
					Register
				</Button>
			</Stack>
		</Box>
	);
}
