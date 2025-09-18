import { useEffect, useState } from "react";
import { Box, Heading, Text, Image, Spinner, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface Article {
	id: number;
	title: string;
	description: string;
	content: string;
	image: string;
}

export default function NewsPage() {
	const { id } = useParams();
	const [article, setArticle] = useState<Article | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/data/NewsData.json")
			.then((res) => res.json())
			.then((data: Article[]) => {
				if (!id) return;
				const found = data.find((n) => n.id === parseInt(id, 10));
				setArticle(found || null);
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading)
		return (
			<Center h="100vh">
				<Spinner size="xl" color="green.500" />
			</Center>
		);

	if (!id) return <Text>Wrong</Text>;
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
			minH="calc(100vh - 100px)"
		>
			<Heading mb={4}>{article.title}</Heading>
			<Text fontSize="lg" textAlign="center">
				{article.content}
			</Text>


			<Box w="100%" maxW="800px" mt={4} position="relative">
				<Box pt="56.25%" />
				<Image
					src={article.image}
					fit="contain"
					borderRadius="md"
					loading="lazy"
					position="absolute"
					top={0}
					left={0}
					w="100%"
					h="100%"
				/>
			</Box>
		</Box>
	);
}
