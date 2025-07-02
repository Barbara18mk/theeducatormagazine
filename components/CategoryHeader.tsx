import Link from "next/link"
import { BookOpen, Laptop, Users, Heart, Briefcase, MessageCircle, ArrowLeftRight, Newspaper } from "lucide-react"

export function CategoryNav() {
  const categories = [
    {
      name: "Education News",
      icon: <Newspaper className="h-6 w-6" />,
      description: "Latest updates in education",
      href: "/categories/education-news",
    },
    {
      name: "Health",
      icon: <Heart className="h-6 w-6" />,
      description: "Wellness for educators & students",
      href: "/categories/health",
    },
    {
      name: "Sports",
      icon: <Users className="h-6 w-6" />,
      description: "Physical education & athletics",
      href: "/categories/sports",
    },
    {
      name: "Technology",
      icon: <Laptop className="h-6 w-6" />,
      description: "Digital tools & innovations",
      href: "/categories/technology",
    },
    {
      name: "Entrepreneurship",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Business skills & startups",
      href: "/categories/entrepreneurship",
    },
    {
      name: "Ask Kafundisha",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Expert advice & answers",
      href: "/ask-kafundisha",
    },
    {
      name: "Teacher Swaps",
      icon: <ArrowLeftRight className="h-6 w-6" />,
      description: "Exchange programs & opportunities",
      href: "/teacher-swaps",
    },
    {
      name: "Teaching Methods",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Pedagogy & classroom practices",
      href: "/categories/teaching-methods",
    },
  ]

  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 text-center transition-colors hover:bg-accent"
        >
          <div className="mb-2 rounded-full bg-muted p-2">{category.icon}</div>
          <h3 className="font-medium">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </Link>
      ))}
    </>
  )
}
