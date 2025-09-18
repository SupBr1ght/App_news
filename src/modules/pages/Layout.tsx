import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
	return (
		<>
			<Header />
			<Box
				w="full"
				flex="1"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				bg="white"
				overflow="hidden"
				minH="100vh"
			>
				<main className="min-h-screen">
					<Outlet />
				</main>
			</Box>
			<Footer />
		</>
	);
}
