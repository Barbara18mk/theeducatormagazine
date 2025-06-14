"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useArticles } from "@/lib/article-context"

export function DraftArticles() {
  const { articles } = useArticles()

  // Get draft and scheduled articles
  const draftArticles = articles
    .filter((article) => article.status === "draft" || article.status === "scheduled")
    .slice(0, 4)

  return (
    <div className="space-y-4">
      {draftArticles.map((article) => (
        <div key={article.id} className="flex items-center justify-between rounded-lg border p-3">
          <div className="space-y-1">
            <div className="font-medium">{article.title}</div>
            <div className="flex items-center gap-2 text-xs">
              <Badge variant={article.status === "draft" ? "outline" : "secondary"}>
                {article.status === "draft" ? "Draft" : "Scheduled"}
              </Badge>
              <span className="text-muted-foreground">
                {article.status === "draft" ? `Last edited: ${article.date}` : `Publishes: ${article.date}`}
              </span>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/admin/articles/${article.id}`}>Edit</Link>
          </Button>
        </div>
      ))}
      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/admin/articles?filter=draft">View All Drafts</Link>
        </Button>
      </div>
    </div>
  )
}
