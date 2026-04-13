
import './App.css'
import Baner from './assets/components/Baner/Baner'
import Cards from './assets/components/Cards/Cards'
import Containeer from './assets/components/Containeer/Containeer'
import Faq from './assets/components/Faq/Faq'
import Footersec from './assets/components/Footer/Footersec'
import Hero from './assets/components/Hero/Hero'
import NavBar from './assets/components/NavBar/NavBar'
import Navigatesec from './assets/components/Navigate/Navigatesec'
import SubHero from './assets/components/SubHero/SubHero'
import Testss from './assets/components/Testss/Testss'

function App() {

  return (
    <>
      <Baner />
      <NavBar logo="Little Learners" items={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]} />
      <Hero image="/assets/img/hero.png" wellcome="Welcome to Little Learners Academy" title="Where Young Minds Blossom and " title2=" Dreams Take Flight." discription="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" >
        <SubHero />
      </Hero>
      <Containeer content='Children Deserve Bright Future' />
      <Cards />
      <Containeer content='Their Happy Words 🤗' />
      <Testss/>
      <Containeer content='Solutions For The Doubts'/>
      <Faq />
      <Containeer content='Explore More'/>
      <Navigatesec/>
      <Footersec/>
      


    </>
  )
}
export default App
