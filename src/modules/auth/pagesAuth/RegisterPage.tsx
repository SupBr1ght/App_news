import { Box } from "@chakra-ui/react";
import RegisterForm from "../formAuth/RegisterForm";

export default function RegisterPage() {
	return (
		<Box
			flex="1"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="gray.50"
		>
			<RegisterForm />
		</Box>
	);
}
