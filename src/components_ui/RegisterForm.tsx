import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "./types/types";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterFormFields = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormFields>({
		resolver: zodResolver(RegisterSchema),
	});
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
					color="green"
					{...register("email", { required: true })}
				/>
				{errors.email && (
					<Text color="red.500" fontSize="sm">
						{errors.email.message}
					</Text>
				)}
				<Input
					type="password"
					color="green"
					placeholder="Password"
					bg="gray.200"
					{...register("password", { required: true })}
				/>
				{errors.password && (
					<Text color="red.500" fontSize="sm">
						{errors.password.message}
					</Text>
				)}
				<Input
					color="green"
					type="password"
					placeholder="Confirm password"
					bg="gray.200"
					{...register("confirmPassword", { required: true })}
				/>
				{errors.confirmPassword && (
					<Text color="red.500" fontSize="sm">
						{errors.confirmPassword.message}
					</Text>
				)}
				<Button type="submit" colorScheme="blue">
					Register
				</Button>
			</Stack>
		</Box>
	);
}
