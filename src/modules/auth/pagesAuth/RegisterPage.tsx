import { Box } from "@chakra-ui/react";
import RegisterForm from "../formsAuth/RegisterForm";

export default function RegisterPage() {
	return (
		<Box w="full" display="flex" justifyContent="center" bg="transparent">
			<RegisterForm />
		</Box>
	);
}
