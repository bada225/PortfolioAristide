import React from 'react'
import { ReactTyped } from 'react-typed'
import Projects from './Projects'

const Home = () => {
  return (
    <section className="p-10 mt-10 space-y-10">

      <h1 className="text-4xl md:text-8xl font-bold text-center font-buda mb-20 ">
        <ReactTyped
          strings={["developer"]}
          typeSpeed={60}
          showCursor={false}
        />
        <br />
        <ReactTyped
          strings={["frontend"]}
          typeSpeed={80}
          startDelay={1500}
          showCursor={false}
        />
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


        <div className=" p-5 text-center md:text-left P-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center">En parlons</h1>
          <p className=" text-4xl md: text-xl mt-4  text-center md:text-2xl text-gray-400 hover:text-black cursor-pointer">
            badaaristide02@gmail.com
          </p>
        </div>


        <div className="space-y-6 text-lg md:text-xl leading-relaxed p-10 font-semibold ">
          <ReactTyped
            strings={[
              "Je suis développeur front-end en formation. J’aime transformer des idées floues en projets concrets et fonctionnels."
            ]}
            typeSpeed={40}
            showCursor={false}
          />

          <ReactTyped
            strings={[
              "Que ce soit coder une interface, résoudre un bug ou comprendre une architecture, je m’efforce de trouver des solutions claires et durables."
            ]}
            typeSpeed={40}
            startDelay={2000}
            showCursor={false}
          />
          <br />
          <ReactTyped
            strings={[
              "Mon objectif : apprendre vite, coder proprement et livrer un travail utilisable en production."
            ]}
            typeSpeed={40}
            startDelay={4000}
            showCursor={false}
            className="text-xl "
          />
        </div>
      </div>
      <div className='w-full bg-gray-300 h-1'></div>
      <section id="projects">
        <Projects />
      </section>

    </section>
  )
}

export default Home
