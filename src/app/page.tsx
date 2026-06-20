import HomeSection from "@/containers/home";
import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container space-y-28 pt-28 md:pt-48 pb-16 md:pb-24">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
