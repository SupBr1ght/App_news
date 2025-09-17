import { Flex, Box } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./components_ui/LoginPage";
import RegisterPage from "./components_ui/RegisterPage";
import NewsLinks from "./components_ui/NewsFeed";
import NewsPage from "./components_ui/OneNews";
import Header from "./components_ui/Header";
import Footer from "./components_ui/Footer";

export default function App() {
	return (
		<Flex direction="column" minH="100vh">
			<Header />
			<Box flex="1" display="flex">
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/news" element={<NewsLinks />} />
					<Route path="/news/:id" element={<NewsPage />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</Box>

			<Footer />
		</Flex>
	);
}
