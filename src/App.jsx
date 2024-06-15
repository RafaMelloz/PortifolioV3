import { Aside } from "./components/aside";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SectionHome } from "./sections/sectionHome";
import { SectionAbout } from "./sections/sectionAbout";
import { SectionExperience } from "./sections/sectionExperience";
import { SectionProjects } from "./sections/sectionProjects";

export function App() {

  return (
    <>
      <Header/>
      <main className="container mx-auto px-3 md:px-8">
        <Aside/>
        <SectionHome/>
        <SectionAbout/>        
        <SectionExperience/>
        <SectionProjects/>
      </main>
      <Footer/>
    </>
  )
}

