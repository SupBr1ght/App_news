import { Box, Link } from "@chakra-ui/react";
import { newsData } from "../data/NewsData";
import { Link as RouterLink } from "react-router-dom";

export default function NewsLinks() {
	return (
		<Box>
			{newsData.map((item) => (
				<Box key={item.id} mb={4} textAlign="center">
					<Link
						as={RouterLink}
						key={item.id}
						display="block"
						textAlign="center"
						color="blue.500"
						mb={4}
					>
						{item.description}
					</Link>
				</Box>
			))}
		</Box>
	);
}
