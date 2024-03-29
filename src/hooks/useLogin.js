import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const apiUrl = process.env.REACT_APP_API_URL;
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    console.log("login request made", email, password);
    const response = await fetch(`${apiUrl}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const json = await response.json();
    const userRole = json.userRole;
    console.log("User Role:", userRole);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      console.log("logging in", json);
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: { ...json, role: userRole } });

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
