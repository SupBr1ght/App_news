import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider>
				<App />
			</Provider>
		</StrictMode>,
	);
} else {
	throw new Error("Root element not found");
}
