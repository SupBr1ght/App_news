import { Flex, Box, Center, Spinner } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router";
import NewsLinks from "./modules/pages/NewsFeed";
import NewsPage from "./modules/pages/OneNews";
import Header from "./modules/pages/Header";
import Footer from "./modules/pages/Footer";
import { lazy, Suspense } from "react";
import Layout from "./modules/pages/Layout";

const LoginPage = lazy(() => import("./modules/auth/pagesAuth/LoginPage"));
const RegisterPage = lazy(
	() => import("./modules/auth/pagesAuth/RegisterPage"),
);


export default function App() {
	return (
		<Flex direction="column">
			<Header />
			<Box flex="1" display="flex" flexDirection="column" minH="0" overflow="auto">
				<Routes>
					<Route element={<Layout />}>
				<Route
					path="/login"
					element={
						<Suspense
							fallback={
								<Center>
									<Spinner size="xl" color="green.500" />
								</Center>
							}
						>
							<LoginPage />
						</Suspense>
					}
				/>
				<Route
					path="/register"
					element={
						<Suspense
							fallback={
								<Center>
									<Spinner size="xl" color="green.500" />
								</Center>
							}
						>
							<RegisterPage />
						</Suspense>
					}
				/>
				<Route path="*" element={<Navigate to="/login" />} />
			</Route>
					<Route path="/news" element={<NewsLinks />} />
					<Route path="/news/:id" element={<NewsPage />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</Box>

			<Footer />
		</Flex>
	);
}
