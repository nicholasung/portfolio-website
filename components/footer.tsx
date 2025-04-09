import { FileText, Github, Globe, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            {/* &copy; {new Date().getFullYear()} Portfolio. All rights reserved. */}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/nicholasung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/nicholasung-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:nicholaskeaneung@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="/Nicholas_Ung_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </Link>
          <Link href="https://links.nicholasung.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Links</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
