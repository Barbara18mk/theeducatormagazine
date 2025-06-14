"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { SecurityUtils } from "./security"

export interface Comment {
  id: number
  articleId: number
  articleTitle: string
  author: string
  email: string
  content: string
  status: "pending" | "approved" | "spam"
  date: string
  ipAddress?: string
}

interface CommentsContextType {
  comments: Comment[]
  addComment: (comment: Omit<Comment, "id" | "date" | "status">) => boolean
  updateComment: (comment: Comment) => void
  deleteComment: (id: number) => void
  getCommentsByArticle: (articleId: number) => Comment[]
  getCommentsByStatus: (status: Comment["status"]) => Comment[]
  bulkUpdateComments: (ids: number[], status: Comment["status"]) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined)

// Sample initial comments with security considerations
const initialComments: Comment[] = [
  {
    id: 1,
    articleId: 1,
    articleTitle: "New National Curriculum Framework Announced",
    author: "John Educator",
    email: "john@example.com",
    content:
      "This is a great development for our education system. Looking forward to seeing the implementation details.",
    status: "approved",
    date: "June 11, 2025",
    ipAddress: "192.168.1.1",
  },
  {
    id: 2,
    articleId: 1,
    articleTitle: "New National Curriculum Framework Announced",
    author: "Mary Teacher",
    email: "mary@example.com",
    content: "I hope this addresses the digital divide we're seeing in schools.",
    status: "approved",
    date: "June 11, 2025",
    ipAddress: "192.168.1.2",
  },
  {
    id: 3,
    articleId: 2,
    articleTitle: "Global Study Shows Decline in Math Proficiency",
    author: "Anonymous User",
    email: "spam@fake.com",
    content: "Click here for amazing deals! Buy now!",
    status: "spam",
    date: "June 10, 2025",
    ipAddress: "10.0.0.1",
  },
  {
    id: 4,
    articleId: 4,
    articleTitle: "The Future of AI in Education",
    author: "Tech Enthusiast",
    email: "tech@example.com",
    content: "AI will revolutionize how we teach and learn. Exciting times ahead!",
    status: "pending",
    date: "June 9, 2025",
    ipAddress: "192.168.1.3",
  },
]

export function CommentsProvider({ children }: { children: ReactNode }) {
  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window !== "undefined") {
      const savedComments = localStorage.getItem("comments")
      return savedComments ? JSON.parse(savedComments) : initialComments
    }
    return initialComments
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("comments", JSON.stringify(comments))
    }
  }, [comments])

  const addComment = (comment: Omit<Comment, "id" | "date" | "status">): boolean => {
    try {
      // Security validations
      if (!SecurityUtils.isValidEmail(comment.email)) {
        throw new Error("Invalid email format")
      }

      // Rate limiting check
      if (!SecurityUtils.checkRateLimit(`comment_${comment.email}`, 3, 60 * 60 * 1000)) {
        throw new Error("Too many comments. Please wait before commenting again.")
      }

      // Sanitize input
      const sanitizedComment = {
        ...comment,
        author: SecurityUtils.sanitizeHtml(comment.author).substring(0, 100),
        email: comment.email.toLowerCase().trim(),
        content: SecurityUtils.sanitizeHtml(comment.content).substring(0, 1000),
      }

      // Basic spam detection
      const spamKeywords = ["buy now", "click here", "amazing deals", "free money", "viagra", "casino"]
      const isSpam = spamKeywords.some(
        (keyword) =>
          sanitizedComment.content.toLowerCase().includes(keyword) ||
          sanitizedComment.author.toLowerCase().includes(keyword),
      )

      const newId = Math.max(...comments.map((c) => c.id), 0) + 1
      const newComment: Comment = {
        ...sanitizedComment,
        id: newId,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        status: isSpam ? "spam" : "pending", // All comments start as pending for moderation
        ipAddress: "hidden", // In production, capture real IP
      }

      setComments((prev) => [newComment, ...prev])
      return true
    } catch (error) {
      console.error("Failed to add comment:", error)
      return false
    }
  }

  const updateComment = (updatedComment: Comment) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === updatedComment.id
          ? {
              ...updatedComment,
              // Sanitize content when updating
              content: SecurityUtils.sanitizeHtml(updatedComment.content),
              author: SecurityUtils.sanitizeHtml(updatedComment.author),
            }
          : comment,
      ),
    )
  }

  const deleteComment = (id: number) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id))
  }

  const getCommentsByArticle = (articleId: number) => {
    return comments
      .filter((comment) => comment.articleId === articleId && comment.status === "approved")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const getCommentsByStatus = (status: Comment["status"]) => {
    return comments
      .filter((comment) => comment.status === status)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const bulkUpdateComments = (ids: number[], status: Comment["status"]) => {
    setComments((prev) => prev.map((comment) => (ids.includes(comment.id) ? { ...comment, status } : comment)))
  }

  return (
    <CommentsContext.Provider
      value={{
        comments,
        addComment,
        updateComment,
        deleteComment,
        getCommentsByArticle,
        getCommentsByStatus,
        bulkUpdateComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  const context = useContext(CommentsContext)
  if (context === undefined) {
    throw new Error("useComments must be used within a CommentsProvider")
  }
  return context
}
