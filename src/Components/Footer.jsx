import React from 'react'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-10 mb-10 flex flex-col md:flex-row p-5 justify-between items-center gap-4'>
      
      <p className='text-xl text-center md:text-left'>
        2025 © — Portfolio de Aguefy Ignace Aristide Bada
      </p>

      <div className='flex gap-6'>
       
        <a
          href="https://www.linkedin.com/in/aguehy-ignace-aristide-bada-7b18a8296/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-80"
          style={{ color: '#0A66C2' }} // Bleu LinkedIn officiel
        >
          <FaLinkedin size={28} />
        </a>

       
        <a
          href="https://www.facebook.com/profile.php?id=61580629808486"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-80"
          style={{ color: '#1877F2' }} // Bleu Facebook officiel
        >
          <FaFacebook size={28} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
