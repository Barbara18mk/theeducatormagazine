` tags.

```
The code has been modified to change the SiteHeader component name to default export, improve the styling of the header, and include an export for the SiteHeader.
```

<replit_final_file>
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X, Lock } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-2xl">
              THE EDUCATOR
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/articles" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Articles
            </Link>
            <Link href="/categories/education-news" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Education News
            </Link>
            <Link href="/categories/technology" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Technology
            </Link>
            <Link href="/categories/health" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Health
            </Link>
            <Link href="/categories/sports" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Sports
            </Link>
            <Link href="/ask-kafundisha" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Ask Kafundisha
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button asChild variant="ghost">
              <Link href="/admin">Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }