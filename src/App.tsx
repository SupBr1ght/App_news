import { Flex, Box } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./components_ui/LoginPage";
import RegisterPage from "./components_ui/RegisterPage";

export default function App() {
	return (
		<Flex direction="column" minH="100vh">
			<Box flex="1" display="flex">
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</Box>
		</Flex>
	);
}
