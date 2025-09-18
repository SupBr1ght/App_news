import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<Box
			w="full"
			flex="1"
			display="flex"
			justifyContent="center"
			alignItems="center"
			bg="white"
			overflow="hidden"
		>
			<Outlet />
		</Box>
	);
}
