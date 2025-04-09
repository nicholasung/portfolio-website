import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hi, I'm Nic Ung
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Computer Science Student | DevOps Enthusiast | Embedded Systems Developer
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="max-w-[600px] text-muted-foreground">
                I'm passionate about homelabbing, server infrastructure, and embedded systems development. Outside of this, I enjoy Cars, 3D printing and modelling, and cooking.
                Currently seeking opportunities in DevOps and embedded systems roles.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#projects">
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/Nicholas_Ung_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full bg-muted flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
