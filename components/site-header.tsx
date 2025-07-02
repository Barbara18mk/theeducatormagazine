"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Articles", href: "/articles" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Ask Kafundisha", href: "/ask-kafundisha" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl text-orange-600">
              THE EDUCATOR
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-orange-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Link href="/" className="font-bold text-lg text-orange-600">
              THE EDUCATOR
            </Link>
          </div>
          <Button asChild variant="ghost">
            <Link href="/admin">Admin</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader