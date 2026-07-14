import Banner from './Banner/Banner'
import About from './About/About'
import Experience from './Experience/Experience'
import Project from './Project/Project'
import Certificate from './Certificate/Certificate'
import Contact from './Contact/Contact'

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Experience />
      <Project />
      <Certificate />
      <Contact />
    </main>
  )
}
