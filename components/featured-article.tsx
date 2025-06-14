import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, User } from "lucide-react"

interface FeaturedArticleProps {
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  imageUrl: string
}

export function FeaturedArticle({ title, excerpt, category, date, author, imageUrl }: FeaturedArticleProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href={`/articles/${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-all group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
