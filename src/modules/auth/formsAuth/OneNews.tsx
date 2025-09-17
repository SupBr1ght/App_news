import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { newsData } from "../data/NewsData";

export default function NewsPage() {
	const { id } = useParams();

	if (!id) return <Text>Wrong</Text>;

	const article = newsData.find((n) => n.id === parseInt(id, 10));
	console.log("id from useParams:", id);

	if (!article) return <Text>The news didn't found</Text>;

	return (
		<Box
			flex={1}
			bg="green.200"
			color="blackAlpha.800"
			p={6}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Heading mb={4}>{article.title}</Heading>
			<Text fontSize="lg" textAlign="center">
				{article.content}
			</Text>
		</Box>
	);
}
