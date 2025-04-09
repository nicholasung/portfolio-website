import { Code, Cpu, Network, Server, Terminal } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      description: "Building and maintaining scalable infrastructure",
      icon: <Server className="h-10 w-10" />,
      skills: [
        "Docker & Kubernetes",
        "Linux System Administration",
        "Cloud Platforms (AWS, Azure)",
        "Unraid",
        "TrueNAS",
        "OPNSense"
      ],
    },
    {
      title: "Embedded Systems",
      description: "Developing for resource-constrained devices",
      icon: <Cpu className="h-10 w-10" />,
      skills: [
        "Microcontroller Programming (Arduino, ESP32, RP2040)",
        "Real-time Operating Systems",
        "Sensor Integration",
        "Low-level C/C++",
        "PCB Design Basics",
      ],
    },
    {
      title: "Software Development",
      description: "Creating robust and efficient applications",
      icon: <Code className="h-10 w-10" />,
      skills: ["Python", "C/C++", "Java", "JavaScript", "Dart", "OpenGL", "GLSL", "Bash Scripting", "Version Control (Git)"],
    },
    {
      title: "Networking",
      description: "Designing and securing networks",
      icon: <Network className="h-10 w-10" />,
      skills: [
        "Network Architecture",
        "Firewalls & VPNs",
        "DNS Management",
        "VLAN Configuration",
        "Network Monitoring",
        "Troubleshooting",
      ],
    },
    {
      title: "Command Line & Automation",
      description: "Streamlining workflows and processes",
      icon: <Terminal className="h-10 w-10" />,
      skills: [
        "Shell Scripting",
        "Task Automation",
        "Cron Jobs",
        "Text Processing",
        "System Monitoring",
        "Process Management",
      ],
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical expertise in DevOps, embedded systems, and software development
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex items-center justify-center">{category.icon}</div>
                <CardTitle className="text-center">{category.title}</CardTitle>
                <CardDescription className="text-center">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc pl-5 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
