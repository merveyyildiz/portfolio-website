import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import projectsData from "./data/projectsData.json";
import heroData from "./data/heroData";

export const metadata = {
  title: 'Merve Sert',
  description: "Merve Sert portfolio",
  keywords: "HTML, CSS, JavaScript, NextJS, React",
  author: "Merve Sert",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container px-12 py-4 mx-auto">
        <HeroSection heroData={heroData} />
        <AboutSection />
        <ProjectSection projectsData={projectsData} />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
