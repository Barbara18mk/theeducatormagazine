"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  LinkIcon,
  ImageIcon,
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [linkUrl, setLinkUrl] = useState("")
  const [linkText, setLinkText] = useState("")
  const [showImageInput, setShowImageInput] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const handleFormat = (format: string) => {
    let formattedText = ""

    switch (format) {
      case "bold":
        formattedText = `**${value || "Bold text"}**`
        break
      case "italic":
        formattedText = `*${value || "Italic text"}*`
        break
      case "h1":
        formattedText = `# ${value || "Heading 1"}`
        break
      case "h2":
        formattedText = `## ${value || "Heading 2"}`
        break
      case "ul":
        formattedText = `- ${value || "List item"}`
        break
      case "ol":
        formattedText = `1. ${value || "List item"}`
        break
      default:
        formattedText = value
    }

    onChange(formattedText)
  }

  const handleInsertLink = () => {
    if (linkUrl && linkText) {
      const linkMarkdown = `[${linkText}](${linkUrl})`
      onChange(value ? `${value} ${linkMarkdown}` : linkMarkdown)
      setLinkUrl("")
      setLinkText("")
      setShowLinkInput(false)
    }
  }

  const handleInsertImage = () => {
    if (imageUrl) {
      const imageMarkdown = `![${imageAlt || "Image"}](${imageUrl})`
      onChange(value ? `${value}\n\n${imageMarkdown}` : imageMarkdown)
      setImageUrl("")
      setImageAlt("")
      setShowImageInput(false)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 rounded-md border bg-background p-1">
        <Button variant="ghost" size="sm" onClick={() => handleFormat("bold")}>
          <Bold className="h-4 w-4" />
          <span className="sr-only">Bold</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormat("italic")}>
          <Italic className="h-4 w-4" />
          <span className="sr-only">Italic</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormat("h1")}>
          <Heading1 className="h-4 w-4" />
          <span className="sr-only">Heading 1</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormat("h2")}>
          <Heading2 className="h-4 w-4" />
          <span className="sr-only">Heading 2</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormat("ul")}>
          <List className="h-4 w-4" />
          <span className="sr-only">Unordered List</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormat("ol")}>
          <ListOrdered className="h-4 w-4" />
          <span className="sr-only">Ordered List</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setShowLinkInput(!showLinkInput)}>
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Insert Link</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setShowImageInput(!showImageInput)}>
          <ImageIcon className="h-4 w-4" />
          <span className="sr-only">Insert Image</span>
        </Button>
        <Button variant="ghost" size="sm">
          <AlignLeft className="h-4 w-4" />
          <span className="sr-only">Align Left</span>
        </Button>
        <Button variant="ghost" size="sm">
          <AlignCenter className="h-4 w-4" />
          <span className="sr-only">Align Center</span>
        </Button>
        <Button variant="ghost" size="sm">
          <AlignRight className="h-4 w-4" />
          <span className="sr-only">Align Right</span>
        </Button>
      </div>

      {showLinkInput && (
        <div className="flex flex-wrap gap-2 rounded-md border p-2">
          <input
            type="text"
            placeholder="Link text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:flex-1"
          />
          <input
            type="url"
            placeholder="URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:flex-1"
          />
          <Button size="sm" onClick={handleInsertLink}>
            Insert Link
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowLinkInput(false)}>
            Cancel
          </Button>
        </div>
      )}

      {showImageInput && (
        <div className="flex flex-wrap gap-2 rounded-md border p-2">
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:flex-1"
          />
          <input
            type="text"
            placeholder="Alt text (optional)"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:flex-1"
          />
          <Button size="sm" onClick={handleInsertImage}>
            Insert Image
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowImageInput(false)}>
            Cancel
          </Button>
        </div>
      )}

      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your content here..."
        className="min-h-[300px] font-mono"
      />

      <div className="rounded-md border p-4">
        <h3 className="mb-2 text-sm font-medium">Preview</h3>
        <div className="prose max-w-none">
          {/* In a real app, you would render Markdown here */}
          <pre className="whitespace-pre-wrap text-sm">{value}</pre>
        </div>
      </div>
    </div>
  )
}
