import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Footer from "./modules/pages/Footer";
import Header from "./modules/pages/Header";
import Layout from "./modules/pages/Layout";

const LoginPage = lazy(() => import("./modules/auth/pagesAuth/LoginPage"));
const RegisterPage = lazy(
	() => import("./modules/auth/pagesAuth/RegisterPage"),
);
const NewsLinks = lazy(() => import("./modules/pages/NewsFeed"));
const NewsPage = lazy(() => import("./modules/pages/OneNews"));

export default function App() {
	return (
		<Flex direction="column" minH="100vh">
			<Header />
			<Box flex="1" display="flex" flexDirection="column" overflow="hidden">
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

					<Route
						path="/news"
						element={
							<Suspense
								fallback={
									<Center>
										<Spinner size="xl" color="green.500" />
									</Center>
								}
							>
								<NewsLinks />
							</Suspense>
						}
					/>
					<Route
						path="/news/:id"
						element={
							<Suspense
								fallback={
									<Center>
										<Spinner size="xl" color="green.500" />
									</Center>
								}
							>
								<NewsPage />
							</Suspense>
						}
					/>
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</Box>

			<Footer />
		</Flex>
	);
}
