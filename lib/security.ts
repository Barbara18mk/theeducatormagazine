// Security utilities for input sanitization and validation
export class SecurityUtils {
  // Sanitize HTML content to prevent XSS attacks
  static sanitizeHtml(input: string): string {
    if (!input) return ""

    // Remove script tags and dangerous attributes
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+\s*=/gi, "")
      .replace(/data:/gi, "")
      .replace(/vbscript:/gi, "")
      .trim()
  }

  // Validate email format
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) && email.length <= 254
  }

  // Validate password strength
  static isValidPassword(password: string): boolean {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  }

  // Rate limiting check
  static checkRateLimit(key: string, maxAttempts = 5, windowMs: number = 15 * 60 * 1000): boolean {
    if (typeof window === "undefined") return true

    const now = Date.now()
    const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || "[]")

    // Remove old attempts outside the window
    const validAttempts = attempts.filter((timestamp: number) => now - timestamp < windowMs)

    if (validAttempts.length >= maxAttempts) {
      return false
    }

    validAttempts.push(now)
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(validAttempts))
    return true
  }

  // Generate secure random token
  static generateSecureToken(): string {
    const array = new Uint8Array(32)
    if (typeof window !== "undefined" && window.crypto) {
      window.crypto.getRandomValues(array)
    } else {
      // Fallback for server-side
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256)
      }
    }
    return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
  }

  // Validate admin session
  static validateAdminSession(): boolean {
    if (typeof window === "undefined") return false

    const auth = localStorage.getItem("adminAuthenticated")
    const sessionToken = localStorage.getItem("adminSessionToken")
    const sessionExpiry = localStorage.getItem("adminSessionExpiry")

    if (!auth || !sessionToken || !sessionExpiry) return false

    const now = Date.now()
    const expiry = Number.parseInt(sessionExpiry)

    if (now > expiry) {
      // Session expired, clear storage
      localStorage.removeItem("adminAuthenticated")
      localStorage.removeItem("adminSessionToken")
      localStorage.removeItem("adminSessionExpiry")
      return false
    }

    return auth === "true"
  }

  // Set secure admin session
  static setAdminSession(): void {
    if (typeof window === "undefined") return

    const token = this.generateSecureToken()
    const expiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours

    localStorage.setItem("adminAuthenticated", "true")
    localStorage.setItem("adminSessionToken", token)
    localStorage.setItem("adminSessionExpiry", expiry.toString())
  }

  // Clear admin session
  static clearAdminSession(): void {
    if (typeof window === "undefined") return

    localStorage.removeItem("adminAuthenticated")
    localStorage.removeItem("adminSessionToken")
    localStorage.removeItem("adminSessionExpiry")
  }
}
