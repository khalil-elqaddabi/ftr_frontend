import { useState } from "react";

import { login, register } from "./services/authService";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import AdminLayout from "./components/layout/AdminLayout";
import DriverLayout from "./components/layout/DriverLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import DriverDashboard from "./pages/driver/DriverDashboard";

import { getChauffeursCount } from "./services/userService";
import "./App.css";

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState("login");
  const [activeView, setActiveView] = useState("dashboard");
  const [driversCount, setDriversCount] = useState(null);
  // Login
  const handleLogin = async (credentials) => {
    setLoading(true);
    setError("");

    try {
      const data = await login(credentials);

      if (data.user.role === "ADMIN") {
        try {
          const result = await getChauffeursCount(data.accessToken);
          setDriversCount(result.count);
        } catch (error) {
          console.error("Failed to fetch drivers count:", error);
          setDriversCount(null);
        }
      }

      setSession({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      setActiveView("dashboard");
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Register
  const handleRegister = async (userData) => {
    setLoading(true);
    setError("");

    try {
      const data = await register(userData);

      if (data.user.role === "ADMIN") {
        try {
          const result = await getChauffeursCount(data.accessToken);
          setDriversCount(result.count);
        } catch (error) {
          console.error("Failed to fetch drivers count:", error);
          setDriversCount(null);
        }
      }

      setSession({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });

      setActiveView("dashboard");
    } catch (error) {
      setError(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Login / Register pages
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

  const { user } = session;

  // Admin Dashboard
  if (user.role === "ADMIN") {
    return (
      <AdminLayout
        user={user}
        activeView={activeView}
        onNavigate={setActiveView}
      >
        {activeView === "dashboard" ? (
          <AdminDashboard onNavigate={setActiveView} driversCount={driversCount} />
        ) : (
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h1 className="text-xl font-semibold text-slate-800">
              {activeView === "trucks"
                ? "Trucks Management"
                : "Users Management"}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              This section is under development.
            </p>
          </section>
        )}
      </AdminLayout>
    );
  }

  // Chauffeur Dashboard
  if (user.role === "CHAUFFEUR") {
    return (
      <DriverLayout
        user={user}
        activeView={activeView}
        onNavigate={setActiveView}
      >
        {activeView === "dashboard" ? (
          <DriverDashboard user={user} onNavigate={setActiveView} />
        ) : (
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h1 className="text-xl font-semibold text-slate-800">My Trips</h1>
            <p className="mt-2 text-sm text-slate-500">
              Your assigned trips will appear here.
            </p>
          </section>
        )}
      </DriverLayout>
    );
  }

  // !role
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <p className="text-lg font-medium text-red-600">
        Access denied. Unknown user role.
      </p>
    </main>
  );
}

export default App;
