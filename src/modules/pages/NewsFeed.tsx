import { Box, Center, Heading, Image, Spinner, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { AppLink } from "./AppLink";

interface Article {
	id: number;
	title: string;
	description: string;
	content: string;
	image: string;
}

// upload news
const fetchNews = async (): Promise<Article[]> => {
	const res = await fetch("/data/NewsData.json");
	if (!res.ok) {
		throw new Error("Failed to fetch news");
	}
	return res.json();
};

export default function NewsLinks() {
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
				<Heading color="red.500">Failed to load news</Heading>
			</Center>
		);

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
			<Stack w="full" maxW="600px" alignItems="center" gap={4}>
				{news.map((item) => (
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
						<Box w="100%" maxW="800px" mt={4} position="relative">
							<Image
								src={item.image}
								fit="contain"
								borderRadius="md"
								loading="lazy"
							/>
						</Box>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
