import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AuthPage from "./components_ui/AuthPage";
import { useAuth } from "./hooks/UseAuth";

function App() {
	const { user, login, register } = useAuth();

	return (
		<ChakraProvider>
			<AuthPage onLogin={login} onRegister={register} />
		</ChakraProvider>
	);
}

export default App;
