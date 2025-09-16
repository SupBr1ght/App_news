import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./components_ui/LoginPage";
import RegisterPage from "./components_ui/RegisterPage";
import NewsLinks from "./components_ui/NewsFeed";
import NewsPage from "./components_ui/OneNews";

export default function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/news" element={<NewsLinks />} />
			<Route path="/news/:id" element={<NewsPage />}></Route>
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
}
