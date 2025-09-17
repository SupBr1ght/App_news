import { Box } from "@chakra-ui/react";
import LoginForm from "../formsAuth/LoginForm";

export default function LoginPage() {
	return (
		<Box w="full" display="flex" justifyContent="center" bg="transparent">
			<LoginForm />
		</Box>
	);
}
