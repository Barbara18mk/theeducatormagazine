import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, User } from "lucide-react"

interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  imageUrl: string
}

export function ArticleCard({ title, excerpt, category, date, author, imageUrl }: ArticleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href={`/articles/${title.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-row">
        <div className="w-1/3 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="h-full w-full object-cover transition-all group-hover:scale-105"
          />
        </div>
        <div className="w-2/3 p-4">
          <Badge variant="outline" className="mb-1">
            {category}
          </Badge>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
