import React from "react"
import Card from "./components/Card"
import About from "./components/About"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {

  return (
 <h1 className=" max-h-screen py-10 px-3 sm:px-5 "> 

 <Card/>
 <About/>
 <Skills/>
 <Projects/>
 <Footer/>
 </h1>
  )
}

export default App
