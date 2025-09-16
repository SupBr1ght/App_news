import { Box } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<Box
			minH="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="gray.50"
			p={4}
		>
			<LoginForm />
		</Box>
	);
}
