import { Box, Button, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { z } from "zod";
import { RegisterSchema } from "../../types/types";
import FormInput from "./AuthForm";

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
		<form onSubmit={handleSubmit(submit)}>
			<Box
				borderWidth="1px"
				borderRadius="xl"
				maxW="600px"
				w="full"
				bgColor="green.200"
				bgGradient="linear(to-br, green.50, green.100)"
				boxShadow="lg"
				p={6}
			>
				<VStack gap={8}>
					<FormInput name="email" register={register} errors={errors} />
					<FormInput name="password" register={register} errors={errors} />
					<FormInput
						name="confirmPassword"
						register={register}
						errors={errors}
					/>
					<Button
						type="submit"
						colorScheme="green"
						w="full"
						bgColor="green.300"
					>
						Register
					</Button>
				</VStack>
			</Box>
		</form>
	);
}
