import { CarouselDesktop } from './components/Carousel/CarouselDesktop'
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './pages/Contact/Contact'
import { DeskPage } from './pages/DeskPage/DeskPage'
import { FieldWork } from './pages/FieldWork/FieldWork'
import { FirstPage } from './pages/FirstPage/FirstPage'
import { Menu } from './pages/Menu/Menu'
import { ProfessionalsPage } from './pages/ProfessionalsPage/ProfessionalsPage'

import './Page.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstPage />
      <FieldWork />
      <DeskPage />
      {/* <ProfessionalsPage /> */}
      <Contact />
    </main>
  )
}


// "use client"285d4d