import { Box } from "@chakra-ui/react";
import LoginForm from "../formAuth/LoginForm";

export default function LoginPage() {
	return (
		<Box
			flex="1"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="gray.50"
		>
			<LoginForm />
		</Box>
	);
}
