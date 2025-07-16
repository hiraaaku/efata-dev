"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const projectName = searchParams.get("project") || "project"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Project-specific redirect URLs
      const projectUrls = {
        "little-dimple": "https://littledimple.efatasolutionsdemo.web.id/",
        nirmala: "https://nirmalaavijaya.efatasolutionsdemo.web.id/",
        dashboard: "https://smartanalytics.efatasolutionsdemo.web.id/",
        fujiyama: "https://fujiyama.efatasolutionsdemo.web.id/",
      }

      const redirectUrl = projectUrls[projectName as keyof typeof projectUrls]

      if (!redirectUrl) {
        throw new Error("Project tidak ditemukan")
      }

      // Make API call to login endpoint
      const response = await fetch("https://efatasolutionsdemo.web.id/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project: projectName,
          username: username,
          password: password,
        }),
      })

      if (response.ok) {
        // Login successful, redirect to project URL
        window.location.href = redirectUrl
      } else {
        // Handle login error
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Login gagal. Silakan coba lagi.")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert(error instanceof Error ? error.message : "Terjadi kesalahan saat login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Link>

          <div className="flex items-center justify-center mb-6">
            <Image src="/efata-logo.png" alt="EfataDev Logo" width={48} height={48} className="h-12 w-12 mr-3" />
            <h1 className="text-2xl font-bold">EfataDev</h1>
          </div>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl">Login untuk Demo</CardTitle>
            <CardDescription>
              Masuk untuk melihat demo {projectName.charAt(0).toUpperCase() + projectName.slice(1).replace("-", " ")}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-slate-700">
                  Username
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Masukkan username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-slate-600">Ingat saya</span>
                </label>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Lupa password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  "Masuk ke Demo"
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="text-center text-xs text-slate-500">
                <p>Demo credentials untuk testing:</p>
                <p className="font-mono bg-slate-100 px-2 py-1 rounded mt-1">Username: demo | Password: demo123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
