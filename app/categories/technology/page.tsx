"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"
import { useArticles } from "@/lib/article-context"
import { Search, Laptop, Smartphone, Globe, Code } from "lucide-react"

export default function TechnologyPage() {
  const { articles } = useArticles()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")

  // Filter articles for technology category
  const technologyArticles = articles.filter(
    (article) => article.category.toLowerCase() === "technology" && article.status === "published",
  )

  // Filter by search term and subcategory
  const filteredArticles = technologyArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubcategory =
      selectedSubcategory === "all" || article.subcategory?.toLowerCase() === selectedSubcategory
    return matchesSearch && matchesSubcategory
  })

  const subcategories = [
    { id: "all", name: "All Tech", icon: Laptop },
    { id: "edtech", name: "EdTech Tools", icon: Code },
    { id: "digital-learning", name: "Digital Learning", icon: Globe },
    { id: "mobile-apps", name: "Mobile Apps", icon: Smartphone },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  <Laptop className="h-4 w-4" />
                  Educational Technology
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Technology in Education
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the latest educational technology tools, digital learning strategies, and innovative
                  solutions transforming modern classrooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search technology articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {subcategories.map((subcategory) => {
                  const Icon = subcategory.icon
                  return (
                    <Button
                      key={subcategory.id}
                      variant={selectedSubcategory === subcategory.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSubcategory(subcategory.id)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {subcategory.name}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedSubcategory === "all"
                  ? "All Technology Articles"
                  : subcategories.find((s) => s.id === selectedSubcategory)?.name}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({filteredArticles.length} articles)
                </span>
              </h2>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    date={article.date}
                    author={article.author}
                    imageUrl={article.imageUrl}
                  />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Laptop className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm
                      ? `No technology articles match "${searchTerm}". Try a different search term.`
                      : "No articles available in this category yet."}
                  </p>
                  <Button asChild>
                    <Link href="/articles">Browse All Articles</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
