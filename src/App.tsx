import React from "react";
import { Box } from "@chakra-ui/react";
import { useAuth } from "./hooks/UseAuth";
import AuthPage from "./components_ui/AuthPage";
import { Provider } from "./components/ui/provider";

export default function App() {
	const { login, register } = useAuth();

	return (
		<Provider>
			<Box
				minH="100vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				bg="gray.50"
				p={4}
			>
				<Box display="flex" flexDirection="column" gap={4} w="full" maxW="md">
					<AuthPage onLogin={login} onRegister={register} />
				</Box>
			</Box>
		</Provider>
	);
}
