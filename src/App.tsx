import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./modules/Layout";
import { Center, Spinner } from "@chakra-ui/react";

const LoginPage = lazy(() => import("./modules/auth/pagesAuth/LoginPage"));
const RegisterPage = lazy(
	() => import("./modules/auth/pagesAuth/RegisterPage"),
);

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path="/login"
					element={
						<Suspense
							fallback={
								<Center h="100vh">
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
								<Center h="100vh">
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
		</Routes>
	);
}
