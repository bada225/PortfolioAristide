import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiHtml5, SiCss3 } from "react-icons/si";
import Temoignage from './Temoignage';

const Competences = () => {
 
  const icons = [
    <FaReact className="text-blue-400 text-5xl" />,
    <SiTailwindcss className="text-cyan-400 text-5xl" />,
    <FaPhp className="text-indigo-500 text-5xl" />,
    <FaLaravel className="text-red-500 text-5xl" />,
    <SiMongodb className="text-green-500 text-5xl" />,
    <SiPostgresql className="text-sky-600 text-5xl" />,
    <SiHtml5 className="text-orange-600 text-5xl" />,
    <SiCss3 className="text-blue-600 text-5xl" />,
  ];

  const radius = 150; 
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 0.01); 
    }, 16); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="expertise" className="mt-[90px]" >
      <h1 className="text-4xl font-bold text-center"> Expertises</h1>

      {/* Cards Frontend / Backend */}
      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border rounded-lg shadow-lg p-7">
          <h2 className="text-3xl font-bold">🖥️ Développeur Front-end</h2>
          <p className="text-lg mt-6 leading-relaxed">
            <ReactTyped
              strings={[
                "Je transforme des idées en interfaces modernes, rapides et intuitives. Spécialisé en React.js, Tailwind CSS et architecture UI moderne, je conçois des produits digitaux esthétiques, performants et scalables."
              ]}
              typeSpeed={20}
              startDelay={1000}
              showCursor={false}
            />
          </p>
        </div>

        <div className="border rounded-lg shadow-lg p-7">
          <h2 className="text-3xl font-bold">⚙️ Développeur Back-end</h2>
          <p className="text-lg mt-6 leading-relaxed">
            <ReactTyped
              strings={[
                "Je me forme au back-end avec Node.js, Express, PostgreSQL, MongoDB et Laravel. J’implémente JWT Auth, gestion des rôles et webhooks pour créer des systèmes fiables. Mon objectif : devenir full-stack."
              ]}
              typeSpeed={20}
              startDelay={1500}
              showCursor={false}
            />
          </p>
        </div>
      </div>

  
      <div className="mt-28 relative flex items-center justify-center h-[400px] w-[400px] mx-auto">
        {/* Image centrale */}
        <img
          src="aristide.jpeg" 
          alt="Moi"
          className="w-50 h-50 rounded-full border-4 border-blue-500 shadow-lg z-10"
        />

      
        {icons.map((icon, index) => {
          const total = icons.length;
          const theta = angle + (index * (2 * Math.PI / total));
          const x = radius * Math.cos(theta);
          const y = radius * Math.sin(theta);
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <Temoignage/>
    </div>
  );
};

export default Competences;
