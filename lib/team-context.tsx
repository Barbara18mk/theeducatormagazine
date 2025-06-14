"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define team member type
export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  photo: string
  email: string
  joinedDate: string
  isActive: boolean
  socialLinks?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

interface TeamContextType {
  teamMembers: TeamMember[]
  addTeamMember: (member: Omit<TeamMember, "id">) => void
  updateTeamMember: (member: TeamMember) => void
  deleteTeamMember: (id: number) => void
  getActiveMembers: () => TeamMember[]
}

const TeamContext = createContext<TeamContextType | undefined>(undefined)

// Sample initial team members
const initialTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Editor-in-Chief",
    bio: "Educational leader with 15+ years in curriculum development and teacher training.",
    photo: "/placeholder.svg?height=200&width=200",
    email: "sarah@theeducator.com",
    joinedDate: "January 2023",
    isActive: true,
    socialLinks: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Technology Editor",
    bio: "EdTech specialist focusing on digital learning tools and classroom technology integration.",
    photo: "/placeholder.svg?height=200&width=200",
    email: "michael@theeducator.com",
    joinedDate: "March 2023",
    isActive: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      website: "https://edtechblog.com",
    },
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Health & Wellness Writer",
    bio: "School nurse and health educator promoting student wellness and mental health awareness.",
    photo: "/placeholder.svg?height=200&width=200",
    email: "lisa@theeducator.com",
    joinedDate: "February 2023",
    isActive: true,
    socialLinks: {
      twitter: "https://twitter.com/lisarodriguez",
    },
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Sports & PE Coordinator",
    bio: "Former PE teacher and coach, advocating for physical education and student athletics.",
    photo: "/placeholder.svg?height=200&width=200",
    email: "james@theeducator.com",
    joinedDate: "April 2023",
    isActive: true,
  },
]

export function TeamProvider({ children }: { children: ReactNode }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    if (typeof window !== "undefined") {
      const savedTeam = localStorage.getItem("teamMembers")
      return savedTeam ? JSON.parse(savedTeam) : initialTeamMembers
    }
    return initialTeamMembers
  })

  // Save team members to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("teamMembers", JSON.stringify(teamMembers))
    }
  }, [teamMembers])

  // Add a new team member
  const addTeamMember = (member: Omit<TeamMember, "id">) => {
    const newId = Math.max(...teamMembers.map((m) => m.id), 0) + 1
    const newMember: TeamMember = {
      ...member,
      id: newId,
    }
    setTeamMembers((prev) => [newMember, ...prev])
  }

  // Update an existing team member
  const updateTeamMember = (updatedMember: TeamMember) => {
    setTeamMembers((prev) => prev.map((member) => (member.id === updatedMember.id ? updatedMember : member)))
  }

  // Delete a team member
  const deleteTeamMember = (id: number) => {
    setTeamMembers((prev) => prev.filter((member) => member.id !== id))
  }

  // Get active team members
  const getActiveMembers = () => {
    return teamMembers.filter((member) => member.isActive)
  }

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        getActiveMembers,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export function useTeam() {
  const context = useContext(TeamContext)
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider")
  }
  return context
}
