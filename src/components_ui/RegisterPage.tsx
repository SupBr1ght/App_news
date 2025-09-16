import { Box } from "@chakra-ui/react";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
	return (
		<Box
			minH="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="gray.50"
			p={4}
		>
			<RegisterForm />
		</Box>
	);
}
