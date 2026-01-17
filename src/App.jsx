import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Header from './Components/Page/Header'
import Home from './Components/Page/Home'
import Projects from './Components/Page/Projects'
import Competences from './Components/Page/Expetises'
import Temoignage from './Components/Page/Temoignage'
import Contact from './Components/Page/Contact'
import Chargement from './Components/Page/Chargement' // 👈 ajout

const App = () => {
  const [dark , setDark] = useState(false)

  return (
    <BrowserRouter>
      <main className={dark ? "bg-black text-white min-h-screen" : "bg-white min-h-screen"}>
        {/* Simulation de chargement */}
        <Chargement />

        <Header toggleDark={() => setDark(!dark)} dark={dark}/> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/testimonials" element={<Temoignage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
