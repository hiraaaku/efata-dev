'use client'

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const project = searchParams.get("project")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleLogin() {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, project }),
    })

    const data = await res.json()
    if (data.success) {
      router.push(`/${project}`) // redirect ke project kalau login sukses
    } else {
      setError("Login gagal. Coba lagi.")
    }
  }

  return (
    <div className="max-w-md mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold mb-4">Login untuk {project}</h1>
      {error && <p className="text-red-600">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border w-full p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border w-full p-2 mb-4"
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}
