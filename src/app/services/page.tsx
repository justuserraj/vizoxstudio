import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code2, Smartphone, TrendingUp, Cpu, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ALL_SERVICES = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Creating comprehensive brand systems, from logo design to brand guidelines and typography selection.",
    icon: Paintbrush,
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "High-performance marketing websites and interactive web applications using Next.js and React.",
    icon: Code2,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications prioritizing intuitive user experiences.",
    icon: Smartphone,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven SEO, content marketing, and paid campaign strategies that convert.",
    icon: TrendingUp,
  },
  {
    slug: "system-automation",
    title: "System Automation",
    description: "Custom internal tools and automation to streamline your business operations.",
    icon: Cpu,
  },
  {
    slug: "motion-interaction",
    title: "Motion & Interaction",
    description: "Engaging 3D modeling, advanced animations, and Lottie implementations.",
    icon: MonitorPlay,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-7xl">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Comprehensive solutions for <span className="text-gradient">modern brands.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer end-to-end digital services. From initial concept and branding to technical implementation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_SERVICES.map((service, idx) => (
              <Link key={idx} href={`/services/${service.slug}`} className="block h-full cursor-pointer">
                <Card className="h-full border-border/50 bg-surface/50 backdrop-blur-sm group hover:border-primary/50 hover:bg-surface transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-24 text-center">
             <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
              <Link href="/contact">Require a custom solution?</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
