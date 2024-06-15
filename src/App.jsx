import { Aside } from "./components/aside";
import { Header } from "./components/header";
import { SectionAbout } from "./sections/sectionAbout";
import { SectionExperience } from "./sections/sectionExperience";
import { SectionHome } from "./sections/sectionHome";

export function App() {

  return (
    <>
      <Header/>
      <main className="container  px-3 md:px-8">
        <Aside/>
        <SectionHome/>
        <SectionAbout/>        
        <SectionExperience />

      </main>

      
    </>
  )
}

