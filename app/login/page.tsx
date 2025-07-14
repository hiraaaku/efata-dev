// app/projects/login/page.tsx
"use client"

import { Suspense } from "react"
import LoginPageContent from "app/projects/login/login-content"

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  )
}
