import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 The Educator Magazine. All rights reserved.{" "}
            <Link href="/about" className="font-medium underline underline-offset-4">
              About Us
            </Link>
            {" | "}
            <Link href="/contact" className="font-medium underline underline-offset-4">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }