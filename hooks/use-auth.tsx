"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { SecurityUtils } from "@/lib/security"

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const isValid = SecurityUtils.validateAdminSession()
      setIsAuthenticated(isValid)
      setIsLoading(false)

      if (
        !isValid &&
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/admin") &&
        window.location.pathname !== "/admin/login"
      ) {
        router.push("/admin/login")
      }
    }

    checkAuth()

    // Check session validity every minute
    const interval = setInterval(checkAuth, 60000)

    return () => clearInterval(interval)
  }, [router])

  const login = (password: string): boolean => {
    // Rate limiting for login attempts
    if (!SecurityUtils.checkRateLimit("admin_login", 3, 15 * 60 * 1000)) {
      throw new Error("Too many login attempts. Please try again in 15 minutes.")
    }

    // In production, this should be hashed and compared with a secure backend
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "SecureAdmin123!"

    if (password === adminPassword) {
      SecurityUtils.setAdminSession()
      setIsAuthenticated(true)
      return true
    }

    return false
  }

  const logout = () => {
    SecurityUtils.clearAdminSession()
    setIsAuthenticated(false)
    router.push("/admin/login")
  }

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  }
}
