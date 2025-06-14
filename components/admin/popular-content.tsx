import { Badge } from "@/components/ui/badge"

export function PopularContent() {
  const popularContent = [
    {
      id: 1,
      title: "The Future of AI in Education: Opportunities and Challenges",
      category: "Technology",
      views: 1532,
      engagement: 8.7,
      trend: "up",
    },
    {
      id: 4,
      title: "New National Curriculum Framework Announced",
      category: "Education News",
      views: 1245,
      engagement: 7.2,
      trend: "up",
    },
    {
      id: 2,
      title: "Global Study Shows Decline in Math Proficiency",
      category: "Education News",
      views: 982,
      engagement: 6.5,
      trend: "stable",
    },
    {
      id: 5,
      title: "Building Inclusive Classrooms: Strategies That Work",
      category: "Inclusion",
      views: 843,
      engagement: 9.1,
      trend: "up",
    },
    {
      id: 3,
      title: "Teachers Union Negotiates Improved Working Conditions",
      category: "Education News",
      views: 756,
      engagement: 5.8,
      trend: "down",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
          <div className="col-span-6">Title</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Views</div>
          <div className="col-span-2">Engagement</div>
        </div>
        <div className="divide-y">
          {popularContent.map((content) => (
            <div key={content.id} className="grid grid-cols-12 gap-2 p-4 text-sm">
              <div className="col-span-6 font-medium">{content.title}</div>
              <div className="col-span-2">
                <Badge variant="outline">{content.category}</Badge>
              </div>
              <div className="col-span-2 text-muted-foreground">{content.views}</div>
              <div className="col-span-2 flex items-center">
                <span className="mr-2">{content.engagement}</span>
                {content.trend === "up" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-green-500"
                  >
                    <path d="m6 9 6-6 6 6" />
                    <path d="M6 12h12" />
                    <path d="m6 15 6 6 6-6" />
                  </svg>
                )}
                {content.trend === "down" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-red-500"
                  >
                    <path d="m6 15 6 6 6-6" />
                    <path d="M6 12h12" />
                    <path d="m6 9 6-6 6 6" />
                  </svg>
                )}
                {content.trend === "stable" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-yellow-500"
                  >
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
