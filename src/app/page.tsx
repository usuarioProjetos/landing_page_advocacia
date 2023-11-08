// Style
import './Page.css'
// Pages / Components
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './pages/Contact/Contact'
import { DeskPage } from './pages/DeskPage/DeskPage'
import { FieldWork } from './pages/FieldWork/FieldWork'
import { FirstPage } from './pages/FirstPage/FirstPage'
import { BecauseWe } from './pages/BecauseWe/BecauseWe'
import { About } from './pages/About/About'

// Swiper
import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow';

// Main content
export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstPage />
      <FieldWork />
      <About />
      <BecauseWe />
      <DeskPage />
      <Contact />
    </main>
  )
}
