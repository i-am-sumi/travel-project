"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.includes("@") && password.length >= 6) {
      const username = email.split("@")[0];
      login({ name: username, email });
      router.push("/");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-teal-300 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 mb-6"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 mb-6"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-teal-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
