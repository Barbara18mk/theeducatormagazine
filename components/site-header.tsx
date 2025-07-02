"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X, Lock } from "lucide-react"

export function SiteHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden border-warm-300 hover:bg-warm-50">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-warm-50">
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link href="/" className="hover:text-warm-700 transition-colors">
                Home
              </Link>
              <Link href="/categories/education-news" className="hover:text-warm-700 transition-colors">
                Education News
              </Link>
              <Link href="/categories/health" className="hover:text-warm-700 transition-colors">
                Health
              </Link>
              <Link href="/categories/sports" className="hover:text-warm-700 transition-colors">
                Sports
              </Link>
              <Link href="/categories/technology" className="hover:text-warm-700 transition-colors">
                Technology
              </Link>
              <Link href="/categories/entrepreneurship" className="hover:text-warm-700 transition-colors">
                Entrepreneurship
              </Link>
              <Link href="/ask-kafundisha" className="hover:text-warm-700 transition-colors">
                Ask Kafundisha
              </Link>
              <Link href="/teacher-swaps" className="hover:text-warm-700 transition-colors">
                Teacher Swaps
              </Link>
              <Link href="/about" className="hover:text-warm-700 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-warm-700 transition-colors">
                Contact
              </Link>
              <Link href="/admin/login" className="hover:text-warm-700 transition-colors flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Admin
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-serif font-bold text-xl text-gray-900">
              THE EDUCATOR
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm overflow-x-auto flex-nowrap">
          <Link href="/" className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap">
            Home
          </Link>
          <Link
            href="/categories/education-news"
            className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap"
          >
            Education News
          </Link>
          <Link
            href="/categories/health"
            className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap"
          >
            Health
          </Link>
          <Link
            href="/categories/sports"
            className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap"
          >
            Sports
          </Link>
          <Link
            href="/categories/technology"
            className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap"
          >
            Technology
          </Link>
          <Link
            href="/categories/entrepreneurship"
            className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap"
          >
            Entrepreneurship
          </Link>
          <Link href="/ask-kafundisha" className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap">
            Ask Kafundisha
          </Link>
          <Link href="/teacher-swaps" className="font-medium transition-colors hover:text-warm-700 whitespace-nowrap">
            Teacher Swaps
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {showSearch ? (
            <div className="relative">
              <Input
                className="w-[200px] pr-8 border-warm-300 focus:border-warm-500"
                placeholder="Search articles..."
                type="search"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 hover:bg-warm-100"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} className="hover:bg-warm-100">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link
            href="/admin/login"
            className="hidden md:flex items-center gap-1 text-sm font-medium transition-colors hover:text-warm-700"
          >
            <Lock className="h-4 w-4" />
            Admin
          </Link>
        </div>
      </div>
    </header>
  )
}
