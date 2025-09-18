import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={new QueryClient}>
				<Provider>
					<App />
				</Provider>
			</QueryClientProvider>

		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
