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
                  className="inline-flex h-10 items-center justify-center rounded-md border border-warm-300 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-warm-50 hover:text-warm-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-warm-600 to-terracotta-600 bg-clip-text text-transparent">
                  Explore Our Categories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover content tailored to your interests and professional development needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4">
                <Card className="border-warm-200 hover:border-warm-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-warm-800">Education News</CardTitle>
                    <CardDescription>Stay updated with the latest developments in education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/categories/education-news" className="text-warm-600 hover:text-warm-700 font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border-warm-200 hover:border-warm-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-warm-800">Health & Wellness</CardTitle>
                    <CardDescription>Resources for educator and student wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/categories/health" className="text-warm-600 hover:text-warm-700 font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4">
                <Card className="border-warm-200 hover:border-warm-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-warm-800">Technology</CardTitle>
                    <CardDescription>Digital tools and innovations for modern classrooms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/categories/technology" className="text-warm-600 hover:text-warm-700 font-medium">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border-warm-200 hover:border-warm-300 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-warm-800">Ask Kafundisha</CardTitle>
                    <CardDescription>Get expert answers to your education questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/ask-kafundisha" className="text-warm-600 hover:text-warm-700 font-medium">
                      Ask Now →
                    </Link>
                  </CardContent>
                </Card>
              </div>
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