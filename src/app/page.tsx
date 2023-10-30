import { CarouselDesktop } from './components/Carousel/CarouselDesktop'
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './pages/Contact/Contact'
import { DeskPage } from './pages/DeskPage/DeskPage'
import { FieldWork } from './pages/FieldWork/FieldWork'
import { FirstPage } from './pages/FirstPage/FirstPage'
import { Menu } from './pages/Menu/Menu'
import { About } from './pages/About/About'

import './Page.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstPage />
      <FieldWork />
      <About />
      <DeskPage />
      <Contact />
    </main>
  )
}


// "use client"285d4d