import { Box } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider>
				<BrowserRouter>
					<Box w="full" bgGradient="linear(to-br, green.50, green.100)">
						{" "}
						<App />
					</Box>
				</BrowserRouter>
			</Provider>
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
