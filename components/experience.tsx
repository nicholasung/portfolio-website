import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "IT Advisor/Code Sensei",
      company: "Code Ninjas",
      period: "June 2024 - Current",
      description:
        "Architected and deployed local storage server with remote access emphasizing reliability and cost effectiveness. Additionally, provided live instruction for microcontrollers, AI Training, Lua and other Computer Science fundamentals.",
      skills: ["Lua", "Scratch", "Unity", "C#", "TrueNAS", "Networking"],
    },
    {
      title: "Developer/President",
      company: "UBC Esports Association",
      period: "June 2020 - April 2025",
      description:
        "Helped with development of a custom station management webapp for our PC Cafe. This entailed code reviews and pair programming sessions. Additionally, I led a large collegiate club with over 100 executives and 600 members with a focus on community building. Worked collaboratively with high profile organizations including Memory Express and Canucks Sports & Entertainment.",
      skills: ["Leadership", "React", "NextJS", "SQL", "Community Collaboration"],
    },
    {
      title: "Fintech Business Intern",
      company: "Bastion",
      period: "June 2023 - September 2023",
      description:
        "Collaborated with IT and Software Engineers to create systems that maintain critical nationwide financial systems and enable internal operations to continue.",
      skills: ["Git", "Documentation", "Infrastructure Archeitecture", "Code Review"],
    },
    {
      title: "Self-Employed",
      company: "Board's Boards",
      period: "June 2020 - March 2022",
      description:
        "Founded and operated a small business selling and installing controller modifications that included custom designed PCBs, 3D printed components and simple reverse engineering.",
      skills: ["Circuit Design", "KiCad", "Teensy", "Arduino", "Product Development", "C/C++",],
    },
  ]

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and relevant experience
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {experiences.map((experience, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div>
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">{experience.period}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
