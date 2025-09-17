import { Box, Flex, Heading, Spacer, Button, HStack } from "@chakra-ui/react";

export default function Header() {
	return (
		<Box bg="teal.500" px={6} py={4} color="white">
			<Flex align="center">
				<Heading size="md">App News</Heading>

				<Spacer />

				<HStack gap={4}>
					<Button variant="ghost" color="white">
						Main page
					</Button>
					<Button variant="ghost" color="white">
						About us
					</Button>
					<Button variant="ghost" color="white">
						Contacts
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
}
