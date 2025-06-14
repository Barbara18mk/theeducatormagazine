"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define user type
export interface User {
  id: number
  name: string
  email: string
  role: "subscriber" | "contributor" | "admin"
  status: "active" | "inactive" | "pending"
  joinedDate: string
  lastActive: string
  subscriptionType?: "free" | "basic" | "plus" | "institution"
  avatar?: string
}

interface UsersContextType {
  users: User[]
  addUser: (user: Omit<User, "id">) => void
  updateUser: (user: User) => void
  deleteUser: (id: number) => void
  getUsersByRole: (role: string) => User[]
  getActiveUsers: () => User[]
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

// Sample initial users
const initialUsers: User[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "subscriber",
    status: "active",
    joinedDate: "June 1, 2025",
    lastActive: "2 hours ago",
    subscriptionType: "plus",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@school.edu",
    role: "contributor",
    status: "active",
    joinedDate: "May 28, 2025",
    lastActive: "1 day ago",
    subscriptionType: "institution",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Lisa Patel",
    email: "lisa.patel@gmail.com",
    role: "subscriber",
    status: "active",
    joinedDate: "May 25, 2025",
    lastActive: "3 hours ago",
    subscriptionType: "basic",
    avatar: "LP",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@university.edu",
    role: "contributor",
    status: "active",
    joinedDate: "May 20, 2025",
    lastActive: "5 hours ago",
    subscriptionType: "institution",
    avatar: "JW",
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    email: "emma.r@teacher.org",
    role: "subscriber",
    status: "active",
    joinedDate: "May 15, 2025",
    lastActive: "1 day ago",
    subscriptionType: "plus",
    avatar: "ER",
  },
  {
    id: 6,
    name: "Robert Kim",
    email: "robert.kim@email.com",
    role: "subscriber",
    status: "inactive",
    joinedDate: "May 10, 2025",
    lastActive: "1 week ago",
    subscriptionType: "free",
    avatar: "RK",
  },
  {
    id: 7,
    name: "Jennifer Adams",
    email: "j.adams@principal.edu",
    role: "subscriber",
    status: "active",
    joinedDate: "May 5, 2025",
    lastActive: "2 days ago",
    subscriptionType: "basic",
    avatar: "JA",
  },
  {
    id: 8,
    name: "Carlos Mendez",
    email: "carlos.mendez@school.org",
    role: "subscriber",
    status: "pending",
    joinedDate: "June 12, 2025",
    lastActive: "Never",
    subscriptionType: "free",
    avatar: "CM",
  },
  {
    id: 9,
    name: "Aisha Johnson",
    email: "aisha.johnson@college.edu",
    role: "contributor",
    status: "active",
    joinedDate: "April 30, 2025",
    lastActive: "4 hours ago",
    subscriptionType: "institution",
    avatar: "AJ",
  },
  {
    id: 10,
    name: "David Thompson",
    email: "d.thompson@email.com",
    role: "subscriber",
    status: "active",
    joinedDate: "April 25, 2025",
    lastActive: "6 hours ago",
    subscriptionType: "plus",
    avatar: "DT",
  },
]

export function UsersProvider({ children }: { children: ReactNode }) {
  // Initialize with sample users and check localStorage for any saved users
  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window !== "undefined") {
      const savedUsers = localStorage.getItem("users")
      return savedUsers ? JSON.parse(savedUsers) : initialUsers
    }
    return initialUsers
  })

  // Save users to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users])

  // Add a new user
  const addUser = (user: Omit<User, "id">) => {
    const newId = Math.max(...users.map((u) => u.id), 0) + 1
    const newUser: User = {
      ...user,
      id: newId,
    }
    setUsers((prev) => [newUser, ...prev])
  }

  // Update an existing user
  const updateUser = (updatedUser: User) => {
    setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)))
  }

  // Delete a user
  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  // Get users by role
  const getUsersByRole = (role: string) => {
    return users.filter((user) => user.role === role)
  }

  // Get active users
  const getActiveUsers = () => {
    return users.filter((user) => user.status === "active")
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        getUsersByRole,
        getActiveUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext)
  if (context === undefined) {
    throw new Error("useUsers must be used within a UsersProvider")
  }
  return context
}
