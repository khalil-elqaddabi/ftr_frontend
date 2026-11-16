import { useState } from "react";
import { login, register } from "./services/authService";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./App.css";

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState("login");
  // handler login
  const handleLogin = async (Credentials) => {
    setLoading(true);
    setError("");

    try {
      const data = await login(Credentials);

      setSession({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    } catch (error) {
      setError(error.message || "login failed");
    } finally {
      setLoading(false);
    }
  };
  // register handker

  const handleRegister = async (userData) => {
    setLoading(true);
    setError("");

    try {
      const data = await register(userData);

      setSession({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    } catch (error) {
      setError(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    if (page === "register") {
      return (
        <RegisterPage
          onRegister={handleRegister}
          loading={loading}
          error={error}
          onShowLogin={() => {
            setError("");
            setPage("login");
          }}
        />
      );
    }

    return (
      <LoginPage
        onLogin={handleLogin}
        loading={loading}
        error={error}
        onShowRegister={() => {
          setError("");
          setPage("register");
        }}
      />
    );
  }

  return (
    <main>
      <h1>FleetTrackPRO</h1>
      <h2>
        Welcome: {session.user.firstName} {session.user.lastName}
      </h2>
      <p>Role: {session.user.role}</p>
    </main>
  );
}

export default App;
