import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AskKafundishaPage() {
  const recentQuestions = [
    {
      id: 1,
      question: "What are the best strategies for managing a classroom with diverse learning needs?",
      askedBy: "Teacher James",
      date: "June 10, 2025",
      category: "Classroom Management",
      answers: 3,
      avatar: "JM",
    },
    {
      id: 2,
      question: "How can I incorporate technology effectively in a low-resource classroom?",
      askedBy: "Ms. Rodriguez",
      date: "June 8, 2025",
      category: "Technology",
      answers: 5,
      avatar: "MR",
    },
    {
      id: 3,
      question: "What are some effective ways to engage parents in their children's education?",
      askedBy: "Principal Wilson",
      date: "June 5, 2025",
      category: "Community Engagement",
      answers: 7,
      avatar: "PW",
    },
    {
      id: 4,
      question: "How do I address student anxiety about standardized testing?",
      askedBy: "Counselor Smith",
      date: "June 1, 2025",
      category: "Student Wellbeing",
      answers: 4,
      avatar: "CS",
    },
  ]

  const popularQuestions = [
    {
      id: 5,
      question: "What are effective strategies for teaching multilingual students?",
      askedBy: "Ms. Johnson",
      date: "May 25, 2025",
      category: "Inclusive Education",
      answers: 12,
      avatar: "MJ",
    },
    {
      id: 6,
      question: "How can I implement project-based learning in a traditional curriculum?",
      askedBy: "Mr. Thompson",
      date: "May 20, 2025",
      category: "Teaching Methods",
      answers: 9,
      avatar: "MT",
    },
    {
      id: 7,
      question: "What are the best resources for professional development on a budget?",
      askedBy: "Teacher Davis",
      date: "May 15, 2025",
      category: "Professional Growth",
      answers: 15,
      avatar: "TD",
    },
    {
      id: 8,
      question: "How do I balance teaching content with developing critical thinking skills?",
      askedBy: "Dr. Martinez",
      date: "May 10, 2025",
      category: "Curriculum Design",
      answers: 11,
      avatar: "DM",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ask Kafundisha</h1>
              <p className="text-muted-foreground md:text-xl">
                Get expert answers to your teaching and education questions from our community of educators and
                specialists.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="recent">Recent Questions</TabsTrigger>
                    <TabsTrigger value="popular">Popular Questions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="mt-6 space-y-6">
                    {recentQuestions.map((question) => (
                      <Card key={question.id}>
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                <a href={`/ask-kafundisha/question/${question.id}`} className="hover:underline">
                                  {question.question}
                                </a>
                              </CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback>{question.avatar}</AvatarFallback>
                                </Avatar>
                                <span>{question.askedBy}</span>
                                <span>•</span>
                                <span>{question.date}</span>
                              </CardDescription>
                            </div>
                            <Badge variant="outline">{question.category}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              {question.answers} {question.answers === 1 ? "answer" : "answers"}
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={`/ask-kafundisha/question/${question.id}`}>View Discussion</a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  <TabsContent value="popular" className="mt-6 space-y-6">
                    {popularQuestions.map((question) => (
                      <Card key={question.id}>
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                <a href={`/ask-kafundisha/question/${question.id}`} className="hover:underline">
                                  {question.question}
                                </a>
                              </CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback>{question.avatar}</AvatarFallback>
                                </Avatar>
                                <span>{question.askedBy}</span>
                                <span>•</span>
                                <span>{question.date}</span>
                              </CardDescription>
                            </div>
                            <Badge variant="outline">{question.category}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              {question.answers} {question.answers === 1 ? "answer" : "answers"}
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={`/ask-kafundisha/question/${question.id}`}>View Discussion</a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
                <div className="mt-8 flex justify-center">
                  <Button asChild>
                    <a href="/ask-kafundisha/browse">Browse All Questions</a>
                  </Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Ask a Question</CardTitle>
                    <CardDescription>
                      Get answers from experienced educators and specialists in our community.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="question-title" className="text-sm font-medium">
                          Question Title
                        </label>
                        <Input id="question-title" placeholder="What would you like to know?" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="question-details" className="text-sm font-medium">
                          Details
                        </label>
                        <Textarea
                          id="question-details"
                          placeholder="Provide more context about your question..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="question-category" className="text-sm font-medium">
                          Category
                        </label>
                        <select
                          id="question-category"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="teaching-methods">Teaching Methods</option>
                          <option value="classroom-management">Classroom Management</option>
                          <option value="technology">Technology</option>
                          <option value="curriculum-design">Curriculum Design</option>
                          <option value="student-wellbeing">Student Wellbeing</option>
                          <option value="professional-growth">Professional Growth</option>
                          <option value="inclusive-education">Inclusive Education</option>
                          <option value="community-engagement">Community Engagement</option>
                        </select>
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Question
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>About Kafundisha</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      "Kafundisha" means "teacher" in Swahili. Our Ask Kafundisha platform connects educators with
                      experts who can provide guidance, share experiences, and offer solutions to the challenges faced
                      in education today.
                    </p>
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">How it works:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Ask your question using the form</li>
                        <li>Our community of verified educators will respond</li>
                        <li>Get multiple perspectives and practical advice</li>
                        <li>Join the discussion to help others</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
