import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ArticleProvider } from "@/lib/article-context"
import { UsersProvider } from "@/lib/users-context"
import { CommentsProvider } from "@/lib/comments-context"
import { TeamProvider } from "@/lib/team-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "THE EDUCATOR MAGAZINE",
  description: "Insights, innovations, and inspiration for modern educators and educational leaders.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ArticleProvider>
            <UsersProvider>
              <CommentsProvider>
                <TeamProvider>{children}</TeamProvider>
              </CommentsProvider>
            </UsersProvider>
          </ArticleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
