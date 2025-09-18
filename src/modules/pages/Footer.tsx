import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box bg="teal.500" px={6} py={4} color="white">
			<Flex align="center" justify="space-between" flexWrap="wrap">
				<Text>© 2025 My Site All rights reserved.</Text>

				<HStack gap={4}>
					<Link href="#" color="white">
						Policy
					</Link>
					<Link href="#" color="white">
						terms
					</Link>
					<Link href="#" color="white">
						Contacts
					</Link>
				</HStack>
			</Flex>
		</Box>
	);
}
