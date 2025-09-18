import { Box, Center, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
			bg="gray.50"
			color="blackAlpha.900"
			flex={1}
			boxSizing="border-box"
			overflowX="hidden"
			pb={100}
			pt={50}
		>
			<VStack gap={6} align="stretch" maxW="800px" mx="auto">
				<Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
					{article.title}
				</Text>

				<Image
					src={article.image}
					alt={article.title}
					borderRadius="md"
					fit="fill"
				/>

				<Text fontSize="lg" fontWeight="medium" color="gray.700">
					{article.description}
				</Text>

				<Box fontSize="md" lineHeight="tall" color="gray.800">
					<Text whiteSpace="pre-wrap">{article.content}</Text>
				</Box>
			</VStack>
		</Box>
	);
}
