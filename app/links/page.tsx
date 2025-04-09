import { ExternalLink } from "lucide-react"
import Link from "next/link"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LinksPage() {
  const links = [
    {
      title: "GitHub",
      description: "Check out my code repositories and open-source contributions",
      url: "https://github.com/yourusername",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      title: "Resume",
      description: "Download my latest resume",
      url: "/resume.pdf",
    },
    {
      title: "Blog",
      description: "Read my technical articles and project documentation",
      url: "https://blog.yourdomain.com",
    },
    {
      title: "Homelab Documentation",
      description: "Detailed documentation of my homelab setup",
      url: "https://homelab.yourdomain.com",
    },
    {
      title: "Email",
      description: "Contact me via email",
      url: "mailto:your.email@example.com",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Links</h1>
          <p className="mt-4 text-muted-foreground">All my important links and resources in one place</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {links.map((link, index) => (
            <Link href={link.url} key={index} target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {link.title}
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
