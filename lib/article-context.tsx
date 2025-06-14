"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useEffect } from "react"

export interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  status: "published" | "draft" | "scheduled"
  date: string
  author: string
  imageUrl: string
  views: number
}

interface ArticleContextType {
  articles: Article[]
  addArticle: (article: Omit<Article, "id" | "views">) => void
  updateArticle: (article: Article) => void
  deleteArticle: (id: number) => void
  getArticlesByCategory: (category: string) => Article[]
  getRecentArticles: (limit?: number) => Article[]
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined)

// Sample initial articles
const initialArticles: Article[] = [
  {
    id: 1,
    title: "New National Curriculum Framework Announced",
    excerpt:
      "Education ministry unveils comprehensive updates to the national curriculum with focus on digital literacy and critical thinking.",
    content: "Full article content here...",
    category: "Education News",
    status: "published",
    date: "June 10, 2025",
    author: "Sarah Johnson",
    imageUrl: "/placeholder.svg?height=200&width=300",
    views: 1245,
  },
  {
    id: 2,
    title: "Global Study Shows Decline in Math Proficiency",
    excerpt: "International assessment reveals concerning trends in mathematics achievement across multiple countries.",
    content: "Full article content here...",
    category: "Education News",
    status: "published",
    date: "June 8, 2025",
    author: "Michael Chen",
    imageUrl: "/placeholder.svg?height=200&width=300",
    views: 982,
  },
  {
    id: 3,
    title: "Teachers Union Negotiates Improved Working Conditions",
    excerpt: "Landmark agreement includes reduced class sizes and additional planning time for educators.",
    content: "Full article content here...",
    category: "Education News",
    status: "published",
    date: "June 5, 2025",
    author: "Lisa Patel",
    imageUrl: "/placeholder.svg?height=200&width=300",
    views: 756,
  },
  {
    id: 4,
    title: "The Future of AI in Education: Opportunities and Challenges",
    excerpt: "How artificial intelligence is reshaping classroom experiences and what educators need to know.",
    content: "Full article content here...",
    category: "Technology",
    status: "published",
    date: "June 3, 2025",
    author: "Dr. Sarah Johnson",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 1532,
  },
  {
    id: 5,
    title: "Building Inclusive Classrooms: Strategies That Work",
    excerpt: "Practical approaches to create learning environments where every student can thrive.",
    content: "Full article content here...",
    category: "Education News",
    status: "published",
    date: "June 1, 2025",
    author: "Michael Chen",
    imageUrl: "/placeholder.svg?height=200&width=300",
    views: 843,
  },
  {
    id: 6,
    title: "Mental Health Support for Educators: A Comprehensive Guide",
    excerpt: "Essential strategies and resources for maintaining mental wellness in the demanding field of education.",
    content: "Full article content here...",
    category: "Health",
    status: "published",
    date: "May 28, 2025",
    author: "Dr. Emily Rodriguez",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 1450,
  },
  {
    id: 7,
    title: "Nutrition Tips for Busy Teachers: Healthy Eating Made Simple",
    excerpt: "Practical nutrition advice and meal planning strategies for educators with demanding schedules.",
    content: "Full article content here...",
    category: "Health",
    status: "published",
    date: "May 25, 2025",
    author: "Lisa Thompson, RD",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 890,
  },
  {
    id: 8,
    title: "Innovative PE Programs: Engaging Every Student in Physical Activity",
    excerpt: "Creative approaches to physical education that motivate all students to participate and enjoy movement.",
    content: "Full article content here...",
    category: "Sports",
    status: "published",
    date: "May 22, 2025",
    author: "Coach David Martinez",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 720,
  },
  {
    id: 9,
    title: "From Teacher to EdTech Entrepreneur: A Success Story",
    excerpt: "Learn how one educator transformed classroom challenges into a thriving educational technology business.",
    content: "Full article content here...",
    category: "Entrepreneurship",
    status: "published",
    date: "May 20, 2025",
    author: "Entrepreneur Sarah Kim",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 950,
  },
  {
    id: 10,
    title: "Financial Literacy for Educators: Building Wealth on a Teacher's Salary",
    excerpt: "Practical financial strategies and investment tips specifically designed for education professionals.",
    content: "Full article content here...",
    category: "Entrepreneurship",
    status: "published",
    date: "May 18, 2025",
    author: "Financial Advisor Robert Lee",
    imageUrl: "/placeholder.svg?height=400&width=600",
    views: 1150,
  },
]

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(() => {
    if (typeof window !== "undefined") {
      const savedArticles = localStorage.getItem("articles")
      return savedArticles ? JSON.parse(savedArticles) : initialArticles
    }
    return initialArticles
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("articles", JSON.stringify(articles))
    }
  }, [articles])

  const addArticle = (article: Omit<Article, "id" | "views">) => {
    const newId = Math.max(...articles.map((a) => a.id), 0) + 1
    const newArticle: Article = {
      ...article,
      id: newId,
      views: 0,
    }
    setArticles((prev) => [newArticle, ...prev])
  }

  const updateArticle = (updatedArticle: Article) => {
    setArticles((prev) => prev.map((article) => (article.id === updatedArticle.id ? updatedArticle : article)))
  }

  const deleteArticle = (id: number) => {
    setArticles((prev) => prev.filter((article) => article.id !== id))
  }

  const getArticlesByCategory = (category: string): Article[] => {
    return articles.filter((article) => article.category === category && article.status === "published")
  }

  const getRecentArticles = (limit = 5): Article[] => {
    return articles
      .filter((article) => article.status === "published")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
  }

  const value: ArticleContextType = {
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticlesByCategory,
    getRecentArticles,
  }

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
}

export const useArticles = () => {
  const context = useContext(ArticleContext)
  if (!context) {
    throw new Error("useArticles must be used within an ArticleProvider")
  }
  return context
}
