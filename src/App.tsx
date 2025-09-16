import { useAuth } from "./hooks/UseAuth";
import { Provider } from "./components/ui/provider";
import AuthPage from "./components_ui/AuthPage";

export default function App() {
	const { login, register } = useAuth();

	<Provider>
		<AuthPage onLogin={login} onRegister={register} />
	</Provider>;
}
