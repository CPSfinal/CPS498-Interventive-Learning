import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import UTILITY_URL from "../config";

// Define the shape of the authentication context
interface AuthContextType {
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

// Create the authentication context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for the AuthProvider component
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    // Function to log in and store the token
    const login = async (email: string, password: string) => {
        try {
            const response = await fetch(UTILITY_URL + "auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("token", data.token); // save the JWT token to local storage
            } else {
                console.error("Login failed:", data.message);
                // handle login failure
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    // Effect to check for stored token on mount
    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use the AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
