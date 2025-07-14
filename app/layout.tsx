import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EfataDev - Project Portfolio",
  description: "Cek project dev Anda disini. Klik pada setiap project untuk melihat detail dan demo.",
  icons: {
    icon: "/efata-logo.png",
    shortcut: "/efata-logo.png",
    apple: "/efata-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
