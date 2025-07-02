

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About THE EDUCATOR MAGAZINE
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Empowering educators with insights, innovations, and inspiration since 2020.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p>
                  THE EDUCATOR MAGAZINE is dedicated to advancing educational excellence by providing thought-provoking
                  content, practical resources, and a platform for diverse voices in education. We believe in the
                  transformative power of knowledge sharing among educators at all levels.
                </p>
                <p>
                  Our publication serves as a bridge between research and practice, bringing the latest educational
                  innovations, methodologies, and insights directly to those who shape the future through teaching and
                  leadership.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p>
                  We envision a world where every educator has access to the knowledge, tools, and community support
                  needed to create transformative learning experiences. Through our platform, we aim to foster a global
                  community of education professionals committed to continuous improvement and innovation.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Team</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Editor in Chief"
                      className="rounded-full"
                    />
                    <h3 className="font-bold">Dr. Emily Chen</h3>
                    <p className="text-sm text-muted-foreground">Editor in Chief</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Managing Editor"
                      className="rounded-full"
                    />
                    <h3 className="font-bold">Marcus Johnson</h3>
                    <p className="text-sm text-muted-foreground">Managing Editor</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Technology Editor"
                      className="rounded-full"
                    />
                    <h3 className="font-bold">Dr. Sophia Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Technology Editor</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      width={100}
                      height={100}
                      alt="Pedagogy Editor"
                      className="rounded-full"
                    />
                    <h3 className="font-bold">Dr. James Wilson</h3>
                    <p className="text-sm text-muted-foreground">Pedagogy Editor</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Excellence:</strong> We are committed to publishing high-quality, well-researched content.
                  </li>
                  <li>
                    <strong>Inclusivity:</strong> We value diverse perspectives and experiences in education.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We embrace new ideas and approaches to teaching and learning.
                  </li>
                  <li>
                    <strong>Practicality:</strong> We focus on actionable insights that educators can apply in their
                    work.
                  </li>
                  <li>
                    <strong>Community:</strong> We foster connection and collaboration among education professionals.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p>
                  We welcome your feedback, questions, and contributions. Please reach out to us at{" "}
                  <a href="mailto:contact@theeducatormagazine.com" className="text-primary hover:underline">
                    contact@theeducatormagazine.com
                  </a>{" "}
                  or visit our{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
