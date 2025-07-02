import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useArticles } from "@/lib/article-context"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-warm-600 to-terracotta-600 bg-clip-text text-transparent">
                  THE EDUCATOR MAGAZINE
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Insights, innovations, and inspiration for modern educators and educational leaders.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/articles"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-warm-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-warm-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Read Articles
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-sm font-semibold text-gray-900 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Stories
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Handpicked articles that are shaping the future of education
              </p>
            </div>

            <div className="magazine-grid">
              <div className="featured-card lg:col-span-2">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-800">Innovation in Education</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Education News</span>
                    <span className="text-gray-500 text-sm">5 min read</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    The Future of Digital Learning: AI and Personalized Education
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Exploring how artificial intelligence is revolutionizing personalized learning experiences and creating adaptive educational pathways for students worldwide.
                  </p>
                  <Link href="/articles" className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="article-card">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Health</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    Mental Health in Schools
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Supporting student wellbeing through comprehensive mental health programs.
                  </p>
                  <Link href="/categories/health" className="text-amber-600 font-medium text-xs hover:text-amber-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="article-card">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">Technology</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    EdTech Innovations 2024
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Latest technological breakthroughs transforming classroom experiences.
                  </p>
                  <Link href="/categories/technology" className="text-amber-600 font-medium text-xs hover:text-amber-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Categories
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dive deep into topics that matter most to modern educators
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link href="/categories/education-news" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Education News</h3>
                <p className="text-gray-500 text-xs">Latest updates</p>
              </Link>

              <Link href="/categories/health" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Health</h3>
                <p className="text-gray-500 text-xs">Wellness focus</p>
              </Link>

              <Link href="/categories/sports" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Sports</h3>
                <p className="text-gray-500 text-xs">Physical education</p>
              </Link>

              <Link href="/categories/technology" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Technology</h3>
                <p className="text-gray-500 text-xs">EdTech insights</p>
              </Link>

              <Link href="/categories/entrepreneurship" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Entrepreneurship</h3>
                <p className="text-gray-500 text-xs">Innovation</p>
              </Link>

              <Link href="/ask-kafundisha" className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-200">
                <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Ask Expert</h3>
                <p className="text-gray-500 text-xs">Get answers</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-warm-50 to-sage-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-warm-800">
                  Join Our Community
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with educators worldwide and share your experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/teacher-swaps"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-warm-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-warm-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Teacher Swaps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-warm-300 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-warm-50 hover:text-warm-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}