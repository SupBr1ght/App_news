import { Box, Heading, Stack } from "@chakra-ui/react";
import { newsData } from "../../data/NewsData";
import { AppLink } from "./AppLink";

export default function NewsLinks() {
	return (
		<Box
			p={4}
			bg="gray.50"
			w="full"
			flex={1}
			display="flex"
			flexDirection="column"
			alignItems="center"
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
							color="teal.500"
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
