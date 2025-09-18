import { Box, Center, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Article {
	id: number;
	title: string;
	description: string;
	content: string;
	image: string;
}


const fetchNews = async (): Promise<Article[]> => {
	const res = await fetch("/data/NewsData.json");
	if (!res.ok) {
		throw new Error("Failed to fetch news");
	}
	return res.json();
};

export default function NewsPage() {
	const { id } = useParams<{ id: string }>();

	const { data: news = [], isLoading, isError } = useQuery({
		queryKey: ["news"],
		queryFn: fetchNews,
	});

	if (isLoading)
		return (
			<Center h="100vh">
				<Spinner size="xl" color="green.500" />
			</Center>
		);

	if (isError)
		return (
			<Center h="100vh">
				<Text color="red.500">Failed to load news</Text>
			</Center>
		);

	if (!id) return <Text>Wrong</Text>;

	const article = news.find((n) => n.id === parseInt(id, 10));
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
