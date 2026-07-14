import { useEffect } from 'react'
import AOS from 'aos'

import Header from './components/general/Header/Header'
import Footer from './components/general/Footer/Footer'
import Home from './components/home/Home'

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
