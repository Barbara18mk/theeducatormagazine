"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useUsers } from "@/lib/users-context"

export function RecentUsers() {
  const { users } = useUsers()

  // Get recent users (last 5 registered)
  const recentUsers = users
    .sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime())
    .slice(0, 5)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "inactive":
        return "secondary"
      case "pending":
        return "outline"
      default:
        return "outline"
    }
  }

  const getSubscriptionColor = (type?: string) => {
    switch (type) {
      case "institution":
        return "bg-purple-100 text-purple-800"
      case "plus":
        return "bg-blue-100 text-blue-800"
      case "basic":
        return "bg-green-100 text-green-800"
      case "free":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
          <div className="col-span-4">User</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Subscription</div>
          <div className="col-span-2">Joined</div>
        </div>
        <div className="divide-y">
          {recentUsers.map((user) => (
            <div key={user.id} className="grid grid-cols-12 gap-2 p-4 text-sm">
              <div className="col-span-4 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
              </div>
              <div className="col-span-2">
                <Badge variant="outline" className="capitalize">
                  {user.role}
                </Badge>
              </div>
              <div className="col-span-2">
                <Badge variant={getStatusColor(user.status)} className="capitalize">
                  {user.status}
                </Badge>
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getSubscriptionColor(user.subscriptionType)}`}
                >
                  {user.subscriptionType || "free"}
                </span>
              </div>
              <div className="col-span-2 text-muted-foreground">{user.joinedDate}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/admin/users">View All Users</Link>
        </Button>
      </div>
    </div>
  )
}
