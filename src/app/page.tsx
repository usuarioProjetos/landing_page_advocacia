import { Navbar } from './components/Navbar/Navbar'
import { DeskPage } from './pages/DeskPage/DeskPage'
import { FieldWork } from './pages/FieldWork/FieldWork'
import { FirstPage } from './pages/FirstPage/FirstPage'
import { Menu } from './pages/Menu/Menu'

import './Page.css'

export default function Home() {
  return (
    <main>

      <Navbar />
      <FirstPage />
      {/* <Menu /> */}
      <FieldWork />
      <DeskPage />

    </main>
  )
}


// "use client"
