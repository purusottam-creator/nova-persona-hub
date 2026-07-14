import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Purusottam Nanda — MERN Stack & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Purusottam Nanda — B.Tech CSE (AI) student and MERN stack developer building futuristic, AI-augmented web experiences.",
      },
      { property: "og:title", content: "Purusottam Nanda — MERN Stack & AI Developer" },
      {
        property: "og:description",
        content:
          "Futuristic developer portfolio: projects, skills, journey, and contact.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}
