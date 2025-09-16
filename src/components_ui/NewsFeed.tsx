import { Box, Heading, Stack } from "@chakra-ui/react";
import { newsData } from "../data/NewsData";
import { AppLink } from "../components_ui/AppLink";

export default function NewsLinks() {
	return (
		<Box
			minH="100vh"
			bg="gray.50"
			p={4}
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Heading mb={6}>Latest News</Heading>
			<Stack w="full" maxW="600px" alignItems="center">
				{newsData.map((item) => (
					<Box
						key={item.id}
						p={4}
						bg="white"
						borderRadius="md"
						boxShadow="sm"
						w="full"
						textAlign="center"
					>
						<AppLink
							to={`/news/${item.id}`}
							color="blue.500"
							fontSize="lg"
							textAlign="center"
							display="block"
						>
							{item.description}
						</AppLink>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
