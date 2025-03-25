"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      toast.error("Please enter username and password!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);

      if (username === "admin" && password === "password") {
        toast.success("Successfully logged in!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => router.push("/Home/Dashboard"), 1500);
      } else {
        toast.error("Invalid credentials!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }, 2000);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <ToastContainer />
      <div className="absolute left-0 top-0 h-full w-1/3 bg-white flex flex-col items-center justify-center p-8">
        <Image src="/logo.png" alt="Logo" width={300} height={500} className="mb-6" />

        <div className="w-3/4 mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-[10px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-3/4 mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-[10px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`w-3/4 p-3 rounded-[10px] transition text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-700"}`}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
