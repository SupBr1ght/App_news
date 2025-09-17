import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
