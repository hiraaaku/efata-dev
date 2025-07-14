import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Layers, Palette, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const projects = [
    {
      id: "little-dimple",
      title: "Little Dimple",
      description: "Platform jual beli online dengan fitur lengkap, payment gateway, dan dashboard admin",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Payment Integration", "Admin Dashboard", "Product Management", "User Authentication"],
      href: "/projects/little-dimple",
    },
    {
      id: "nirmala",
      title: "Nirmala",
      description: "Opportunity Tracking Management",
      icon: <Palette className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Lead Management", "Pipeline Tracking", "Analytics Dashboard", "Team Collaboration"],
      href: "/projects/nirmala",
    },
    {
      id: "dashboard",
      title: "Analytics Dashboard",
      description: "Dashboard analytics dengan visualisasi data real-time dan reporting system",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Real-time Data", "Interactive Charts", "Export Reports", "Multi-user Access"],
      href: "/projects/dashboard",
    },
    {
      id: "fujiyama",
      title: "Fujiyama",
      description: "Inventory management",
      icon: <Layers className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Stock Management", "Supplier Tracking", "Automated Alerts", "Reporting System"],
      href: "/projects/fujiyama",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/efata-logo.png" alt="EfataDev Logo" width={32} height={32} className="h-8 w-8" />
              <h1 className="text-2xl font-bold">EfataDev</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Pilih Project Yang Ingin Anda Jelajahi
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Cek project dev Anda disini. Klik pada setiap project untuk melihat detail dan demo.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
              <Zap className="h-4 w-4" />
              <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={project.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 bg-transparent"
                      variant="outline"
                    >
                      Lihat Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">Siap Memulai Project Anda?</h3>
            <p className="text-xl mb-8 text-white/90">
              Hubungi kami untuk konsultasi dan pengembangan project custom sesuai kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://efatasolutions.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="text-primary">
                  <Code className="mr-2 h-5 w-5" />
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
