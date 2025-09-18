import { Box, Center, Heading, Image, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AppLink } from "./AppLink";

interface Article {
	id: number;
	title: string;
	description: string;
	content: string;
	image: string;
}

export default function NewsLinks() {
	const [news, setNews] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/data/NewsData.json")
			.then((res) => res.json())
			.then((data: Article[]) => setNews(data))
			.finally(() => setLoading(false));
	}, []);

	if (loading)
		return (
			<Center h="100vh">
				<Spinner size="xl" color="green.500" />
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
