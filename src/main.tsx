import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider.tsx";
import { Box } from "@chakra-ui/react";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider>
				<BrowserRouter>
					<Box
						minH="100vh"
						w="full"
						bgGradient="linear(to-br, green.50, green.100)"
					>
						<App />
					</Box>
				</BrowserRouter>
			</Provider>
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
