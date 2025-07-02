import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-900 text-white">
      <div className="container flex flex-col gap-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">THE EDUCATOR MAGAZINE</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your premier destination for educational insights, innovations, and inspiration. 
              Connecting educators worldwide with cutting-edge content and expert perspectives.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-warm-800">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Home
              </Link>
              <Link href="/articles" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                All Articles
              </Link>
              <Link href="/about" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Contact
              </Link>
              <Link href="/ask-kafundisha" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Ask Kafundisha
              </Link>
              <Link href="/teacher-swaps" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Teacher Swaps
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-warm-800">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/categories/education-news"
                className="text-sm hover:text-warm-700 transition-colors text-warm-600"
              >
                Education News
              </Link>
              <Link href="/categories/health" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Health
              </Link>
              <Link href="/categories/sports" className="text-sm hover:text-warm-700 transition-colors text-warm-600">
                Sports
              </Link>
              <Link
                href="/categories/technology"
                className="text-sm hover:text-warm-700 transition-colors text-warm-600"
              >
                Technology
              </Link>
              <Link
                href="/categories/entrepreneurship"
                className="text-sm hover:text-warm-700 transition-colors text-warm-600"
              >
                Entrepreneurship
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-warm-800">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-warm-500 hover:text-warm-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-warm-500 hover:text-warm-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-warm-500 hover:text-warm-700 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-warm-500 hover:text-warm-700 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-warm-600">
            © {new Date().getFullYear()} THE EDUCATOR MAGAZINE. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-warm-600 hover:text-warm-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-warm-600 hover:text-warm-700 transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin/login" className="text-sm text-warm-600 hover:text-warm-700 transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
