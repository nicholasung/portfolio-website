import { Award, BookOpen, GraduationCap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Education() {
  const education = [
    {
      degree: "B.Sc in Computer Science",
      institution: "University of British Columbia",
      period: "2020 - 2026 (Expected)",
      description:
        "Focusing on software engineering, distributed computing, game development",
      courses: [
        "Operating Systems",
        "Computer Networks",
        "Distributed Systems",
        "Database Management",
        "Software Engineering",
        "Game Development"
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "Febuary 2025",
      description:
        "Validated understanding in AWS infrastructure. Including knowledge of, deployment options, high availability storage, remote access, pricing, security and policy",
      skills: ["AWS", "Cloud Architecture", "Security", "Networking", "Scalability"],
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "January 2025",
      description:
        "Demonstrated understanding in Azure with regards to the offered services, ways of management, pricing, and applicable uses",
      skills: ["Azure", "Cloud Architecture", "Container Deployment", "Virtualization", "Security", "Networking", "Scalability"],
    },
  ]

  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and professional certifications
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Certifications</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="mt-6 space-y-8">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col space-y-1 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                      <div>
                        <CardTitle>{item.degree}</CardTitle>
                        <CardDescription>{item.institution}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">{item.period}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Relevant Coursework:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="certifications" className="mt-6 space-y-8">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col space-y-1 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                      <div>
                        <CardTitle>{cert.name}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">{cert.date}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
