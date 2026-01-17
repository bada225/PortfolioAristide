import React from 'react'
import { ReactTyped } from 'react-typed'
import Competences from './Expetises'

const Projects = () => {
  return (
    <div className='mt-[80px]'>  
          <h2 className=' text-3xl md:text-5xl text-center font-bold'>Projets</h2>
            <p className='text-xl md: text-4xl text-center  mt-8 t  font-semibold  '> <ReactTyped 
            strings={['Je conçois des applications modernes et des solutions numériques pensées pour le monde réel. <br /> J’aide à transformer des idées parfois abstraites en projets concrets, clairs et exploitables, <br /> en mettant l’accent sur l’utilité et la simplicité.']}
            typeSpeed={40}
            backSpeed={40}
             showCursor={false}cv
           />
            </p>
             
        <div>
              <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
         <div className='border rounded-lg overflow-hidden shadow-lg'>
          <div className='overflow-hidden'>
         <img src="dream.jpg" alt="projt 1" className='w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110' />
          </div>

         </div>
         <div className=' rounded-lg overflow-hidden shadow-lg'>
          <div className='overflow-hidden'>
         <img src="image2.jpg" alt="projt 2" className='w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110' />
         
          </div>
            
         </div>
            </div>
              <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
         <div className='border rounded-lg overflow-hidden shadow-lg'>
          <div className='overflow-hidden'>
         <img src="image.jpg" alt="projt 1" className='w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110' />
          </div>

         </div>
         <div className=' rounded-lg overflow-hidden shadow-lg'>
          <div className='overflow-hidden'>
         <img src="image2.jpg" alt="projt 2" className='w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110' />
         
          </div>
            
         </div>
            </div>
        </div>
             <div className='w-full h-1 bg-gray-300 mt-10'></div>  
           <section id='competence'> 
             <Competences/>
              </section>
    </div>
  )
}

export default Projects