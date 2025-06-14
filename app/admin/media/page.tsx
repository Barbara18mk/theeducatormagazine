"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileIcon,
  Loader2,
  MoreHorizontal,
  Plus,
  Video,
  ArrowLeft,
  Home,
  FileText,
  ImageIcon,
  Settings,
} from "lucide-react"

export default function MediaLibraryPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  // Sample media items
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      name: "hero-image.jpg",
      type: "image",
      url: "/placeholder.svg?height=200&width=300",
      size: "1.2 MB",
      dimensions: "1200x800",
      uploadedAt: "June 10, 2025",
    },
    {
      id: 2,
      name: "teacher-interview.mp4",
      type: "video",
      url: "/placeholder.svg?height=200&width=300",
      size: "24.5 MB",
      dimensions: "1920x1080",
      uploadedAt: "June 8, 2025",
    },
    {
      id: 3,
      name: "curriculum-guide.pdf",
      type: "document",
      url: "/placeholder.svg?height=200&width=300",
      size: "3.7 MB",
      dimensions: "",
      uploadedAt: "June 5, 2025",
    },
    {
      id: 4,
      name: "classroom-photo.jpg",
      type: "image",
      url: "/placeholder.svg?height=200&width=300",
      size: "0.8 MB",
      dimensions: "1600x1200",
      uploadedAt: "June 3, 2025",
    },
    {
      id: 5,
      name: "student-presentation.pptx",
      type: "document",
      url: "/placeholder.svg?height=200&width=300",
      size: "5.2 MB",
      dimensions: "",
      uploadedAt: "June 1, 2025",
    },
    {
      id: 6,
      name: "school-event.jpg",
      type: "image",
      url: "/placeholder.svg?height=200&width=300",
      size: "1.5 MB",
      dimensions: "2000x1333",
      uploadedAt: "May 28, 2025",
    },
  ])

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files)
    }
  }

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Add new files to the media library
      const newItems = Array.from(selectedFiles).map((file, index) => {
        const isImage = file.type.startsWith("image/")
        const isVideo = file.type.startsWith("video/")
        const isAudio = file.type.startsWith("audio/")

        let type = "document"
        if (isImage) type = "image"
        if (isVideo) type = "video"
        if (isAudio) type = "audio"

        return {
          id: mediaItems.length + index + 1,
          name: file.name,
          type,
          url: isImage ? URL.createObjectURL(file) : "/placeholder.svg?height=200&width=300",
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          dimensions: isImage || isVideo ? "1200x800" : "",
          uploadedAt: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }
      })

      setMediaItems([...newItems, ...mediaItems])
      setSelectedFiles(null)
      setIsUploadDialogOpen(false)
    } catch (error) {
      console.error("Error uploading files:", error)
    } finally {
      clearInterval(interval)
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleDeleteMedia = (id: number) => {
    if (confirm("Are you sure you want to delete this media item?")) {
      setMediaItems(mediaItems.filter((item) => item.id !== id))
    }
  }

  const filteredMedia = mediaItems.filter((item) => {
    const matchesFilter = filter === "all" || item.type === filter
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

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
    <div className="min-h-screen bg-background">
      {/* Simple Admin Header */}
      <header className="border-b bg-background">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">THE EDUCATOR</span>
              <span className="rounded bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">Admin</span>
            </div>
          </div>
          <nav className="ml-8 flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2 text-sm hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/admin/articles" className="flex items-center gap-2 text-sm hover:text-primary">
              <FileText className="h-4 w-4" />
              Articles
            </Link>
            <Link href="/admin/media" className="flex items-center gap-2 text-sm font-medium text-primary">
              <ImageIcon className="h-4 w-4" />
              Media
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-2 text-sm hover:text-primary">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Upload Media
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Media</DialogTitle>
                <DialogDescription>
                  Upload images, videos, documents, and other files to your media library.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="files">Select Files</Label>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supported formats: JPG, PNG, GIF, MP4, MP3, PDF, DOC, XLS, PPT
                  </p>
                </div>
                {selectedFiles && selectedFiles.length > 0 && (
                  <div>
                    <p className="text-sm font-medium">{selectedFiles.length} file(s) selected</p>
                    <ul className="mt-2 max-h-40 overflow-auto text-sm">
                      {Array.from(selectedFiles).map((file, index) => (
                        <li key={index} className="py-1">
                          {file.name} ({(file.size / 1024).toFixed(1)} KB)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isUploading && (
                  <div className="space-y-2">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-primary transition-all" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                    <p className="text-center text-sm">{uploadProgress}% uploaded</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)} disabled={isUploading}>
                  Cancel
                </Button>
                <Button onClick={handleUpload} disabled={!selectedFiles || isUploading}>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search media..."
              className="w-full pl-8 md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Media</SelectItem>
                <SelectItem value="image">Images</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="grid" className="mt-6">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredMedia.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    {item.type === "image" ? (
                      <img
                        src={item.url || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : item.type === "video" ? (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <Video className="h-12 w-12 text-muted-foreground" />
                      </div>
                    ) : item.type === "audio" ? (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-12 w-12 text-muted-foreground"
                        >
                          <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
                          <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
                          <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <FileIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => window.open(item.url, "_blank")}>View</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            navigator.clipboard.writeText(item.url)
                            alert("URL copied to clipboard")
                          }}
                        >
                          Copy URL
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteMedia(item.id)} className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardContent className="p-2">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.uploadedAt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredMedia.length === 0 && (
              <div className="flex h-40 flex-col items-center justify-center rounded-md border border-dashed">
                <p className="text-muted-foreground">No media items found</p>
                <Button variant="link" onClick={() => setIsUploadDialogOpen(true)}>
                  Upload media
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="list" className="space-y-4">
            <div className="rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 pl-4 text-left text-sm font-medium">File</th>
                    <th className="py-3 text-left text-sm font-medium">Type</th>
                    <th className="py-3 text-left text-sm font-medium">Size</th>
                    <th className="py-3 text-left text-sm font-medium">Dimensions</th>
                    <th className="py-3 text-left text-sm font-medium">Uploaded</th>
                    <th className="py-3 pr-4 text-right text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMedia.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3 pl-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-md">
                            {item.type === "image" ? (
                              <img
                                src={item.url || "/placeholder.svg"}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            ) : item.type === "video" ? (
                              <div className="flex h-full w-full items-center justify-center bg-muted">
                                <Video className="h-5 w-5 text-muted-foreground" />
                              </div>
                            ) : item.type === "audio" ? (
                              <div className="flex h-full w-full items-center justify-center bg-muted">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-5 w-5 text-muted-foreground"
                                >
                                  <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
                                  <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
                                  <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
                                </svg>
                              </div>
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-muted">
                                <FileIcon className="h-5 w-5 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm capitalize">{item.type}</td>
                      <td className="py-3 text-sm">{item.size}</td>
                      <td className="py-3 text-sm">{item.dimensions || "-"}</td>
                      <td className="py-3 text-sm">{item.uploadedAt}</td>
                      <td className="py-3 pr-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => window.open(item.url, "_blank")}>View</DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                navigator.clipboard.writeText(item.url)
                                alert("URL copied to clipboard")
                              }}
                            >
                              Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteMedia(item.id)} className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredMedia.length === 0 && (
                <div className="flex h-40 flex-col items-center justify-center">
                  <p className="text-muted-foreground">No media items found</p>
                  <Button variant="link" onClick={() => setIsUploadDialogOpen(true)}>
                    Upload media
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
