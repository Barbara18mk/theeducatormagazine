import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useArticles } from "@/lib/hooks/use-articles"
import Link from "next/link"

export default function Home() {
  const { getRecentArticles } = useArticles()
  const recentArticles = getRecentArticles(6)

  return (
    <main className="container grid items-start gap-6 pt-6 md:pt-10 lg:grid-cols-4 lg:gap-10">
      <div className="lg:col-span-3">
        <h2 className="font-semibold text-2xl">Dashboard</h2>
        <div className="grid gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Last month revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>Last month sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Recent Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recentArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="group">
                <article className="overflow-hidden rounded-lg border border-warm-200 bg-background transition-all hover:shadow-lg hover:border-warm-300">
                  <img
                    src={article.imageUrl || "/placeholder.svg?height=200&width=300"}
                    alt={article.title}
                    className="aspect-video w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 border-warm-300 text-warm-700">
                      {article.category}
                    </Badge>
                    <h3 className="font-bold line-clamp-2 group-hover:text-warm-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>You made $576 in sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-none pl-0 space-y-2">
              <li className="relative pl-6">
                <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-warm-500"></div>
                <p>
                  <span className="font-medium">2 Sales</span> on
                  <Link href="#" className="text-warm-500 underline underline-offset-2">
                    Some Random Day
                  </Link>
                </p>
              </li>
              <li className="relative pl-6">
                <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-warm-500"></div>
                <p>
                  <span className="font-medium">1 Sales</span> on
                  <Link href="#" className="text-warm-500 underline underline-offset-2">
                    Another Day
                  </Link>
                </p>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
