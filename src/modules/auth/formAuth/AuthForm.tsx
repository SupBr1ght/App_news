import { Input, Text } from "@chakra-ui/react";
import type { FieldErrors, FieldValues, UseFormRegister, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
	name: Path<T>;
	register: UseFormRegister<T>;
	errors?: FieldErrors<T>;
	type?: string;
	placeholder?: string;
}

export default function FormInput<T extends FieldValues>({ name, register, errors, type, placeholder }: FormInputProps<T>) {
	const inputType = type ?? (name.toString().toLowerCase().includes("password") ? "password" : "text");
	const inputPlaceholder = placeholder ?? name.toString().charAt(0).toUpperCase() + name.toString().slice(1);

	return (
		<>
			<Input placeholder={inputPlaceholder} type={inputType} {...register(name)} />
			{errors?.[name]?.message && (
				<Text color="red.500" fontSize="sm">
					{errors[name]?.message?.toString()}
				</Text>
			)}
		</>
	);
}
