"use client"

import { useParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, User, Eye, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { useArticles } from "@/lib/article-context"
import { useEffect } from "react"

export default function ArticlePage() {
  const params = useParams()
  const { articles, updateArticle } = useArticles()
  const articleId = Number.parseInt(params.id as string)

  const article = articles.find((a) => a.id === articleId && a.status === "published")

  useEffect(() => {
    // Increment view count when article is viewed
    if (article) {
      const updatedArticle = {
        ...article,
        views: article.views + 1,
      }
      updateArticle(updatedArticle)
    }
  }, [article, updateArticle])

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Article Not Found</h1>
            <p className="text-muted-foreground">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/articles">
              <Button className="bg-warm-600 hover:bg-warm-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Article link copied to clipboard!")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/articles">
              <Button variant="ghost" size="sm" className="text-warm-600 hover:text-warm-700 hover:bg-warm-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 space-y-4">
            <Badge variant="outline" className="mb-2 border-warm-300 text-warm-700">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-warm-600 to-terracotta-600 bg-clip-text text-transparent">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{article.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-warm-200 pb-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-warm-600 hover:text-warm-700 hover:bg-warm-50"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="mb-8">
              <img
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg border border-warm-200"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-warm-800 prose-links:text-warm-600 prose-strong:text-warm-700">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  article.content ||
                  `<p>${article.excerpt}</p><p>This is the full article content. The admin can write detailed articles here with rich formatting, images, and comprehensive information for readers.</p><p>Articles created in the admin dashboard will appear here for all website visitors to read and enjoy.</p>`,
              }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-warm-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Published in <strong className="text-warm-700">{article.category}</strong> by{" "}
                  <strong className="text-warm-700">{article.author}</strong>
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleShare}
                className="border-warm-300 text-warm-700 hover:bg-warm-50"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
