import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthPageProps {
	onLogin: (data: { email: string; password: string }) => void;
	onRegister: (data: { email: string; password: string }) => void;
}

export default function AuthPage({ onLogin, onRegister }: AuthPageProps) {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<Box p={8}>
			<Stack align="center">
				{isLogin ? (
					<LoginForm onLogin={onLogin} />
				) : (
					<RegisterForm onRegister={onRegister} />
				)}
				<Button
					bg="gray.200"
					size="lg"
					margin="40px"
					onClick={() => setIsLogin(!isLogin)}
				>
					{isLogin ? "Go to Registration" : "Go to Login"}
				</Button>
			</Stack>
		</Box>
	);
}
