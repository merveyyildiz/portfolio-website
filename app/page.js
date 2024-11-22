import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Project/ProjectsSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
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
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
