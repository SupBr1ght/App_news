import { Box, Link, Stack, Heading } from "@chakra-ui/react";
import { newsData } from "../data/NewsData";
import { Link as RouterLink } from "react-router-dom";

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
						w="full" // або "auto", якщо хочеш Box під текст
						textAlign="center"
					>
						<Link
							as={RouterLink}
							color="blue.500"
							fontSize="lg"
							textAlign="center"
							display="block"
						>
							{item.description}
						</Link>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
