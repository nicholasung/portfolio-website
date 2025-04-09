import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Oil Pressure Gauge",
      description:
        "A oil pressure gauge designed to use a budget friendly development board and other componenets. It is designed to be easily adapted to many use cases. This is done with readable code and clear definitions of sensor and UI settings. This allows for usage of many sensors for many purposes with the onboard ADC.",
      image: "/images/gauge_wip.png",
      tags: ["ESP32", "C++", "LVGL", "PlatformIO", "Circuit Design", "Product Development", "3D Printing"],
      githubUrl: "https://github.com/nicholasung/oil_pressure_gauge",
      liveUrl: "https://viridian-cake-90d.notion.site/Gauge-Project-Development-1b92d68a2ff18051ba61c28d78671b7e",
    },
    {
      title: "Google Calendar Discord Bot",
      description:
        "A discord bot that syncs discord server events with a shared google calendar via the Google Calendar web API. Used to help organize plans with my friend group. Hosted on docker on my homelab.",
      image: "images/gcalbot.png",
      tags: ["Python", "Web APIs", "Docker"],
      githubUrl: "https://github.com/nicholasung/gcalbot",
      liveUrl: "",
    },
    {
      title: "Just Parry",
      description:
        "A fighting game prototype built with a custom engine in C++ with a focus on responsiveness. My significant contributions includes leading scrums, low level polling logic, code reviews and documentation. Built with guidance from UBC Course CPSC 427: Video Game Programming.",
      image: "images/bird_idle_f1.png",
      tags: ["C++", "OpenGL", "GLSL", "Git"],
      githubUrl: "https://www.youtube.com/watch?v=8tixVvmrgY8&feature=youtu.be",
      liveUrl: "https://www.youtube.com/watch?v=8tixVvmrgY8&feature=youtu.be",
    },
    {
      title: "Emote Discord Bot",
      description:
        "A simple discord bot that automatically takes flagged images and turns them into an emote. Runs within docker on my homelab.",
      image: "images/discordemotebot.png",
      tags: ["Python", "Web APIs", "Docker"],
      githubUrl: "https://github.com/nicholasung/DiscordEmoteBot",
    },
    {
      title: "Board's Snapboard",
      description:
        "Recreated and manufactured an unintrusive filtering circuit for 3.3v potentiometer based joysticks to prevent overshooting the centre.",
      image: "images/Snapback.png",
      tags: ["KiCad", "PCB Manufacturing"],
      githubUrl: "https://github.com/nicholasung/BoardsSnapboard",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my projects
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      More Info
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
