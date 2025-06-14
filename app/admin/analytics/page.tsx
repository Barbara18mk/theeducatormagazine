"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MessageSquare,
  FileText,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"
import { useArticles } from "@/lib/article-context"
import { useUsers } from "@/lib/users-context"
import { useComments } from "@/lib/comments-context"

export default function AnalyticsPage() {
  const router = useRouter()
  const { articles } = useArticles()
  const { users } = useUsers()
  const { comments } = useComments()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("7d")

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const auth = localStorage.getItem("adminAuthenticated")
      if (auth !== "true") {
        router.push("/admin/login")
      } else {
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Calculate analytics data
  const totalPageViews = articles.reduce((sum, article) => sum + article.views, 0)
  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "active").length
  const totalComments = comments.length
  const approvedComments = comments.filter((c) => c.status === "approved").length
  const publishedArticles = articles.filter((a) => a.status === "published").length

  // Mock real-time data (in a real app, this would come from your analytics service)
  const [realTimeData, setRealTimeData] = useState({
    currentVisitors: 42,
    todayViews: 1247,
    todayUsers: 89,
    todayComments: 12,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        currentVisitors: Math.max(1, prev.currentVisitors + Math.floor(Math.random() * 6) - 2),
        todayViews: prev.todayViews + Math.floor(Math.random() * 3),
        todayUsers: prev.todayUsers + Math.floor(Math.random() * 2),
        todayComments: prev.todayComments + (Math.random() > 0.9 ? 1 : 0),
      }))
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Top performing articles
  const topArticles = articles
    .filter((a) => a.status === "published")
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)

  // Traffic sources (mock data)
  const trafficSources = [
    { source: "Direct", visitors: 2847, percentage: 45 },
    { source: "Google Search", visitors: 1923, percentage: 30 },
    { source: "Social Media", visitors: 956, percentage: 15 },
    { source: "Email", visitors: 478, percentage: 7 },
    { source: "Referrals", visitors: 191, percentage: 3 },
  ]

  // Device breakdown (mock data)
  const deviceData = [
    { device: "Mobile", users: 3245, percentage: 58, icon: Smartphone },
    { device: "Desktop", users: 1876, percentage: 33, icon: Monitor },
    { device: "Tablet", users: 503, percentage: 9, icon: Tablet },
  ]

  // Geographic data (mock data)
  const geographicData = [
    { country: "United States", users: 1847, percentage: 32 },
    { country: "United Kingdom", users: 923, percentage: 16 },
    { country: "Canada", users: 654, percentage: 11 },
    { country: "Australia", users: 432, percentage: 8 },
    { country: "Germany", users: 387, percentage: 7 },
    { country: "Others", users: 1481, percentage: 26 },
  ]

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Visitors</CardTitle>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{realTimeData.currentVisitors}</div>
            <p className="text-xs text-muted-foreground">Active right now</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{realTimeData.todayViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{realTimeData.todayUsers}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% from yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{realTimeData.todayComments}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline h-3 w-3 mr-1" />
              -3% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalPageViews.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">All time views</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalUsers}</div>
                <p className="text-xs text-muted-foreground">{activeUsers} active users</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Published Articles</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{publishedArticles}</div>
                <p className="text-xs text-muted-foreground">Total published content</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Articles</CardTitle>
                <CardDescription>Most viewed articles this period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topArticles.map((article, index) => (
                    <div key={article.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium line-clamp-1">{article.title}</p>
                          <p className="text-xs text-muted-foreground">{article.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{article.views.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>User interaction statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Comment Approval Rate</span>
                    <span className="text-sm">{Math.round((approvedComments / totalComments) * 100)}%</span>
                  </div>
                  <Progress value={(approvedComments / totalComments) * 100} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Activation Rate</span>
                    <span className="text-sm">{Math.round((activeUsers / totalUsers) * 100)}%</span>
                  </div>
                  <Progress value={(activeUsers / totalUsers) * 100} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Content Engagement</span>
                    <span className="text-sm">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance by Category</CardTitle>
                <CardDescription>Average views per category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Technology", "Education News", "Health", "Sports", "Entrepreneurship"].map((category) => {
                    const categoryArticles = articles.filter((a) => a.category === category && a.status === "published")
                    const avgViews =
                      categoryArticles.length > 0
                        ? Math.round(categoryArticles.reduce((sum, a) => sum + a.views, 0) / categoryArticles.length)
                        : 0
                    const maxViews = 2000 // For progress bar calculation

                    return (
                      <div key={category} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{category}</span>
                          <span className="text-sm">{avgViews} avg views</span>
                        </div>
                        <Progress value={(avgViews / maxViews) * 100} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing Schedule</CardTitle>
                <CardDescription>Articles published over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{publishedArticles}</div>
                    <p className="text-sm text-muted-foreground">Total Published</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold">{articles.filter((a) => a.status === "draft").length}</div>
                      <p className="text-xs text-muted-foreground">Drafts</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{articles.filter((a) => a.status === "scheduled").length}</div>
                      <p className="text-xs text-muted-foreground">Scheduled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
                <CardDescription>How users access your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceData.map((device) => (
                    <div key={device.device} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <device.icon className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">{device.device}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{device.users.toLocaleString()}</span>
                        <Badge variant="outline">{device.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your users are located</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicData.map((location) => (
                    <div key={location.country} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{location.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{location.users.toLocaleString()}</span>
                        <Badge variant="outline">{location.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source) => (
                    <div key={source.source} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{source.source}</span>
                        <span className="text-sm">{source.visitors.toLocaleString()} visitors</span>
                      </div>
                      <Progress value={source.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Activity</CardTitle>
                <CardDescription>Live user activity on your site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{realTimeData.currentVisitors}</div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Page Views (last hour)</span>
                      <span>247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>New Sessions</span>
                      <span>89</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bounce Rate</span>
                      <span>34%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg. Session Duration</span>
                      <span>3m 42s</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  )
}
