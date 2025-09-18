import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./modules/pages/Layout";

const LoginPage = lazy(() => import("./modules/auth/pagesAuth/LoginPage"));
const RegisterPage = lazy(
	() => import("./modules/auth/pagesAuth/RegisterPage"),
);
const NewsLinks = lazy(() => import("./modules/pages/NewsFeed"));
const NewsPage = lazy(() => import("./modules/pages/OneNews"));



export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Layout />}> //1
						<Route
							path="/login"
							element={
								<LoginPage />
							}
						/>
						<Route
							path="/register"
							element={
								<RegisterPage />
							}
						/>
						<Route
							path="/news"
							element={
								<NewsLinks />
							}
						/>
						<Route
							path="/news/:id"
							element={
								<NewsPage />
							}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>








	);
}
