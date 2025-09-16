import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = ({ email, password }) => {
    // mocked login
    if (email && password) setUser({ email });
  };

  const register = ({ email, password }) => {
    // mocked register
    if (email && password) setUser({ email });
  };

  const logout = () => setUser(null);

  return { user, login, register, logout };
}
