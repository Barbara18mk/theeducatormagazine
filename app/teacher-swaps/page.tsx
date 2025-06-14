import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, Calendar, Globe, Filter } from "lucide-react"

export default function TeacherSwapsPage() {
  const featuredSwaps = [
    {
      id: 1,
      title: "Secondary Math Teacher - 3 Month Exchange",
      location: "Nairobi, Kenya",
      duration: "3 months",
      dates: "Sept - Dec 2025",
      type: "International",
      teacher: {
        name: "David Kimani",
        subject: "Mathematics",
        level: "Secondary",
        avatar: "DK",
      },
      description:
        "Looking for a mathematics teacher exchange in Europe or North America. I teach advanced mathematics and would like to experience different teaching methodologies.",
    },
    {
      id: 2,
      title: "Primary School Teacher - 1 Semester Swap",
      location: "Toronto, Canada",
      duration: "6 months",
      dates: "Jan - June 2026",
      type: "International",
      teacher: {
        name: "Sarah Johnson",
        subject: "General Education",
        level: "Primary",
        avatar: "SJ",
      },
      description:
        "Seeking a teacher swap in East Africa or Southeast Asia. I teach all primary subjects and have experience with diverse learning needs.",
    },
    {
      id: 3,
      title: "Science Teacher - 2 Week Observation",
      location: "Cape Town, South Africa",
      duration: "2 weeks",
      dates: "July 2025",
      type: "Short-term",
      teacher: {
        name: "Michael Ndlovu",
        subject: "Science",
        level: "Middle School",
        avatar: "MN",
      },
      description:
        "Looking for a brief exchange to observe science teaching methods in other schools. Happy to host a teacher at my school in return.",
    },
    {
      id: 4,
      title: "English Language Arts - Full Year Exchange",
      location: "Sydney, Australia",
      duration: "1 year",
      dates: "2025-2026 Academic Year",
      type: "International",
      teacher: {
        name: "Emma Wilson",
        subject: "English",
        level: "High School",
        avatar: "EW",
      },
      description:
        "Seeking a year-long exchange with an English teacher from the UK, US, or Canada. I specialize in literature and creative writing.",
    },
  ]

  const localSwaps = [
    {
      id: 5,
      title: "History Teacher - Same District Swap",
      location: "Chicago, USA",
      duration: "1 semester",
      dates: "Fall 2025",
      type: "Local",
      teacher: {
        name: "Robert Chen",
        subject: "History",
        level: "High School",
        avatar: "RC",
      },
      description:
        "Looking to swap with another history teacher within the Chicago Public School district to gain experience in a different school environment.",
    },
    {
      id: 6,
      title: "Art Teacher - Weekly Exchange",
      location: "Melbourne, Australia",
      duration: "1 day/week",
      dates: "Ongoing",
      type: "Part-time",
      teacher: {
        name: "Lisa Nguyen",
        subject: "Art",
        level: "Primary",
        avatar: "LN",
      },
      description:
        "Interested in a weekly exchange where I teach art at your school one day, and you teach at mine. Looking to diversify student experiences.",
    },
  ]

  const virtualSwaps = [
    {
      id: 7,
      title: "Virtual Language Exchange - Spanish/English",
      location: "Remote",
      duration: "Ongoing",
      dates: "Flexible",
      type: "Virtual",
      teacher: {
        name: "Carlos Mendez",
        subject: "Spanish",
        level: "Secondary",
        avatar: "CM",
      },
      description:
        "Looking to connect my Spanish class with an English class for virtual language exchange sessions. Flexible scheduling.",
    },
    {
      id: 8,
      title: "Virtual STEM Collaboration",
      location: "Remote",
      duration: "3 months",
      dates: "Sept - Nov 2025",
      type: "Virtual",
      teacher: {
        name: "Dr. Priya Sharma",
        subject: "Computer Science",
        level: "High School",
        avatar: "PS",
      },
      description:
        "Seeking a teacher partner for a virtual STEM project collaboration between our classes. Focus on coding and digital innovation.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teacher Swaps</h1>
              <p className="text-muted-foreground md:text-xl">
                Connect with educators worldwide for teaching exchanges, observations, and collaborative opportunities.
              </p>
              <div className="flex flex-col gap-2 pt-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <a href="/teacher-swaps/create">Create Swap Listing</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/teacher-swaps/browse">Browse All Opportunities</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Find Your Perfect Teaching Exchange</h2>
                <div className="flex items-center gap-2">
                  <Input className="max-w-xs" placeholder="Search opportunities..." type="search" />
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="featured" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="local">Local</TabsTrigger>
                  <TabsTrigger value="virtual">Virtual</TabsTrigger>
                </TabsList>
                <TabsContent value="featured" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {featuredSwaps.map((swap) => (
                      <Card key={swap.id} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                <a href={`/teacher-swaps/${swap.id}`} className="hover:underline">
                                  {swap.title}
                                </a>
                              </CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>{swap.location}</span>
                              </CardDescription>
                            </div>
                            <Badge variant={swap.type === "International" ? "default" : "outline"}>{swap.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{swap.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="h-3.5 w-3.5" />
                              <span>{swap.dates}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{swap.teacher.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{swap.teacher.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {swap.teacher.subject} • {swap.teacher.level}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm line-clamp-2">{swap.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={`/teacher-swaps/${swap.id}`}>View Details</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="local" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {localSwaps.map((swap) => (
                      <Card key={swap.id} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                <a href={`/teacher-swaps/${swap.id}`} className="hover:underline">
                                  {swap.title}
                                </a>
                              </CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>{swap.location}</span>
                              </CardDescription>
                            </div>
                            <Badge variant="outline">{swap.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{swap.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="h-3.5 w-3.5" />
                              <span>{swap.dates}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{swap.teacher.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{swap.teacher.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {swap.teacher.subject} • {swap.teacher.level}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm line-clamp-2">{swap.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={`/teacher-swaps/${swap.id}`}>View Details</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="virtual" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {virtualSwaps.map((swap) => (
                      <Card key={swap.id} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                <a href={`/teacher-swaps/${swap.id}`} className="hover:underline">
                                  {swap.title}
                                </a>
                              </CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5" />
                                <span>{swap.location}</span>
                              </CardDescription>
                            </div>
                            <Badge variant="secondary">{swap.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{swap.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="h-3.5 w-3.5" />
                              <span>{swap.dates}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{swap.teacher.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{swap.teacher.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {swap.teacher.subject} • {swap.teacher.level}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm line-clamp-2">{swap.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={`/teacher-swaps/${swap.id}`}>View Details</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-center">
                <Button asChild>
                  <a href="/teacher-swaps/browse">View All Opportunities</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">How Teacher Swaps Work</h2>
              <p className="text-muted-foreground">
                Our platform connects educators worldwide for enriching exchange experiences.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1. Create Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sign up and create your educator profile with your teaching experience, subjects, and the type of
                    exchange you're interested in.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Browse Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Search for teaching exchanges that match your interests, location preferences, and availability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Connect & Arrange</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Message potential matches, discuss details, and finalize your teaching exchange with our support
                    throughout the process.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <Button asChild size="lg">
                <a href="/teacher-swaps/register">Get Started Today</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
