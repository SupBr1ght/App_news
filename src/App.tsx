import { Provider } from "./components/ui/provider";
import AuthPage from "./components_ui/AuthPage";
import NewsLinks from "./components_ui/NewsFeed";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function App() {
	return (
		<Provider>
			<Routes>
				<Route
					path="/"
					element={
						<Box
							minH="100vh"
							bg="gray.50"
							display="flex"
							alignItems="center"
							justifyContent="center"
							p={4}
						>
							<AuthPage onLogin={() => {}} onRegister={() => {}} />
						</Box>
					}
				/>
				<Route
					path="/news"
					element={
						<Box minH="100vh" bg="gray.50" p={4}>
							<Box textAlign="center" bg="green.400" color="black" p={4} mb={6}>
								<h2>Latest News</h2>
							</Box>
							<Box maxW="600px" mx="auto">
								<NewsLinks />
							</Box>
						</Box>
					}
				/>
				<Route
					path="/news"
					element={
						<Box
							minH="100vh"
							bg="gray.50"
							display="flex"
							flexDirection="column"
							alignItems="center"
							p={4}
						>
							<Box maxW="800px" w="full" textAlign="center">
								<NewsLinks />
							</Box>
						</Box>
					}
				/>
			</Routes>
		</Provider>
	);
}
