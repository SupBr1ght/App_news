import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { newsData } from "../../data/NewsData";

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
			<Box w="100%" maxW="800px" aspectRatio={16 / 9} mt={4}>
				<Image
					src={article.image}
					alt={article.title}
					borderRadius="md"
					loading="lazy"
					h="600px"
					w="1000px"
					fit="contain"
				/>
			</Box>

		</Box>
	);
}
