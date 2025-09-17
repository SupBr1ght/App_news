import { Input, Text } from "@chakra-ui/react";
import type { UseFormRegister } from "react-hook-form";

interface FormInputProps {
	name: string;
	register: UseFormRegister<any>;
	errors?: any;
	type?: string;
	placeholder?: string;
}

export default function FormInput({
	name,
	register,
	errors,
	type,
	placeholder,
}: FormInputProps) {
	const inputType =
		type ?? (name.toLowerCase().includes("password") ? "password" : "text");
	const inputPlaceholder =
		placeholder ?? name.charAt(0).toUpperCase() + name.slice(1);

	return (
		<>
			<Input
				placeholder={inputPlaceholder}
				type={inputType}
				bg="gray.200"
				color="green"
				_placeholder={{ color: "gray.500", opacity: 0.8 }}
				{...register(name)}
			/>
			{errors?.[name] && (
				<Text color="red.500" fontSize="sm">
					{errors[name]?.message}
				</Text>
			)}
		</>
	);
}