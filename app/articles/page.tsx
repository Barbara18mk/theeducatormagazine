"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, User, Search, Eye } from "lucide-react"
import Link from "next/link"
import { useArticles } from "@/lib/article-context"

export default function ArticlesPage() {
  const { articles } = useArticles()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Get all published articles (visible to users)
  const publishedArticles = articles.filter((article) => article.status === "published")

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    const filtered = publishedArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = categoryFilter === "all" || article.category === categoryFilter

      return matchesSearch && matchesCategory
    })

    // Sort articles
    switch (sortBy) {
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "newest":
      default:
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }

    return filtered
  }, [publishedArticles, searchQuery, sortBy, categoryFilter])

  const categories = [
    "Education News",
    "Health",
    "Sports",
    "Technology",
    "Entrepreneurship",
    "Ask Kafundisha",
    "Teacher Swaps",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-cream-50 to-sage-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-warm-600 to-terracotta-600 bg-clip-text text-transparent">
                All Articles
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Explore our complete collection of {publishedArticles.length} articles on education, teaching, and
                leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
              {/* Search and Filter Controls */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-8 max-w-xs border-warm-200 focus:border-warm-400"
                      placeholder="Search articles..."
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      maxLength={100}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] border-warm-200">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px] border-warm-200">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                Showing {filteredAndSortedArticles.length} of {publishedArticles.length} articles
                {searchQuery && ` for "${searchQuery}"`}
                {categoryFilter !== "all" && ` in ${categoryFilter}`}
              </div>

              {/* Articles Grid */}
              {filteredAndSortedArticles.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAndSortedArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group relative overflow-hidden rounded-lg border border-warm-200 bg-background transition-all hover:shadow-lg hover:border-warm-300"
                    >
                      <Link href={`/articles/${article.id}`}>
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={article.imageUrl || "/placeholder.svg?height=200&width=300"}
                            alt={article.title}
                            className="h-full w-full object-cover transition-all group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <Badge variant="outline" className="mb-2 border-warm-300 text-warm-700">
                            {article.category}
                          </Badge>
                          <h3 className="font-bold line-clamp-2 group-hover:text-warm-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                <time dateTime={article.date}>{article.date}</time>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <Eye className="h-3 w-3" />
                              <span>{article.views}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || categoryFilter !== "all"
                      ? "Try adjusting your search or filter criteria."
                      : "No articles have been published yet."}
                  </p>
                  {(searchQuery || categoryFilter !== "all") && (
                    <Button
                      variant="outline"
                      className="border-warm-300 text-warm-700 hover:bg-warm-50"
                      onClick={() => {
                        setSearchQuery("")
                        setCategoryFilter("all")
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
