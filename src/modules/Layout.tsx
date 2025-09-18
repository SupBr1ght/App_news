import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<Box
			minH="100vh"
			w="full"
			display="flex"
			justifyContent="center"
			alignItems="center"
			bg="white"
		>
			<Outlet />
		</Box>
	);
}
