import { CarouselDesktop } from './pages/FieldWork/Desktop/CarouselDesktop'
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './pages/Contact/Contact'
import { DeskPage } from './pages/DeskPage/DeskPage'
import { FieldWork } from './pages/FieldWork/FieldWork'
import { FirstPage } from './pages/FirstPage/FirstPage'
import { Menu } from './pages/Menu/Menu'
import { About } from './pages/About/About'

import './Page.css'
import { BecauseWe } from './pages/BecauseWe/BecauseWe'
import { NewAbout } from './pages/About/NewAbout'

// Swiper
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow';

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstPage />
      <FieldWork />
      {/* <About /> */}
      <BecauseWe />
      <DeskPage />
      <Contact />
    </main>
  )
}


// "use client"285d4d