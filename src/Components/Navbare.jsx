import React, { useEffect, useRef, useState } from 'react'

const links = [
  { name: 'Home', path: '#home' },
  { name: 'Projects', path: '#projects' },
  { name: 'Expertises', path: '#expertise' },
  { name: 'Testimonials', path: '#testimonials' },
  { name: 'Contact', path: '#contact' },
]

const Navbar = ({ dark }) => {
  const containerRef = useRef(null)
  const linkRefs = useRef({})
  const [pillStyle, setPillStyle] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
   
    const el = linkRefs.current[links[0].path]
    const container = containerRef.current
    if (!el || !container) return

    const elRect = el.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    setPillStyle({
      width: elRect.width,
      height: elRect.height,
      left: elRect.left - containerRect.left,
      top: elRect.top - containerRect.top,
    })
  }, [])

  return (
    <>
      {/* Navbar desktop */}
      <div
        className={`
          hidden md:block
          sticky top-8 left-1/2 -translate-x-1/2 z-50 text-3xl
          px-4 py-3 rounded-full backdrop-blur-md shadow-lg
          ${dark ? 'bg-black/60 text-white' : 'bg-white/60 text-black'}
        `}
      >
        <ul ref={containerRef} className="relative flex gap-3">
          <span
            className={`
              absolute rounded-full transition-all duration-300 ease-out
              ${dark ? 'bg-white/20' : 'bg-black/20'}
            `}
            style={pillStyle}
          />

          {links.map(link => (
            <li key={link.path}>
              <a
                href={link.path}
                ref={el => (linkRefs.current[link.path] = el)}
                className="relative px-5 py-2 z-10"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className={`
            px-4 py-2 rounded-full shadow-lg backdrop-blur-md text-xl
            ${dark ? 'bg-black/70 text-white' : 'bg-white/70 text-black'}
          `}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />

          <div
            className={`
              absolute top-20 left-1/2 -translate-x-1/2
              w-11/12 rounded-2xl p-6 shadow-xl
              ${dark ? 'bg-black/80 text-white' : 'bg-white/80 text-black'}
            `}
          >
            <ul className="flex flex-col gap-4 text-xl">
              {links.map(link => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-center hover:bg-black/10"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
