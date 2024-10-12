import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Partners from "./components/Partners"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Team />
      <Footer />
    </>
  )
}

export default App
