import { Box, Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
	return (
		<Box bg="teal.500" px={6} py={4} color="white">
			<Flex align="center">
				<Heading size="md">App News</Heading>

				<Spacer />

				<HStack gap={4}>
					<Link href="#" color="white">
						Main page
					</Link>
					<Link href="#" color="white">
						About us
					</Link>
					<Link href="#" color="white">
						Contacts
					</Link>
				</HStack>
			</Flex>
		</Box>
	);
}
