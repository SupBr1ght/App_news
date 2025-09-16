import { useState } from "react";

export interface User {
	email: string;
}

export function useAuth() {
	const [user, setUser] = useState<User | null>(null);

	const login = (data: { email: string; password: string }) => {
		if (data.email && data.password) setUser({ email: data.email });
	};

	const register = (data: { email: string; password: string }) => {
		if (data.email && data.password) setUser({ email: data.email });
	};

	const logout = () => setUser(null);

	return { user, login, register, logout };
}
