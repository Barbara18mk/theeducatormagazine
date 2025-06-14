"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useArticles } from "@/lib/article-context"

export function RecentArticles() {
  const { articles } = useArticles()

  // Get published articles sorted by date (newest first)
  const recentArticles = articles
    .filter((article) => article.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
          <div className="col-span-6">Title</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-1">Views</div>
          <div className="col-span-1"></div>
        </div>
        <div className="divide-y">
          {recentArticles.map((article) => (
            <div key={article.id} className="grid grid-cols-12 gap-2 p-4 text-sm">
              <div className="col-span-6 font-medium">{article.title}</div>
              <div className="col-span-2">
                <Badge variant="outline">{article.category}</Badge>
              </div>
              <div className="col-span-2 text-muted-foreground">{article.date}</div>
              <div className="col-span-1 text-muted-foreground">{article.views}</div>
              <div className="col-span-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/admin/articles/${article.id}`}>Edit</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/admin/articles">View All Articles</Link>
        </Button>
      </div>
    </div>
  )
}
