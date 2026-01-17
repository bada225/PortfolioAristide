import React from 'react'
import Contact from './Contact'
const ScrollContainer = () => {
  return (
    <section id="testimonials"
      className=' mt-10'
    >
   <h1 className="text-4xl font-bold md:text-center">Temoignagne</h1>

      <div  
      className="mt-20 flex justify-center">
      <div className="w-full max-w-5xl border rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold mb-6">
           Bada Aguehy Ignace  Aristide
        </h2>

        
      
        <div className="h-[400px] overflow-y-auto pr-4 space-y-6 text-lg leading-relaxed font-semibold ">
          <p>
            Je suis un développeur en constante évolution, animé par la volonté
            de comprendre les systèmes en profondeur et de construire des
            applications solides, maintenables et pensées pour la production.
          </p>

          <p>
            Je me forme activement au back-end avec JavaScript, en travaillant
            notamment avec Node.js, Express et Laravel. Mon objectif est clair :
            être capable de concevoir des architectures complètes, sécurisées et
            évolutives.
          </p>

          <p>
            J’utilise PostgreSQL et MongoDB selon les besoins, en mettant en place
            des schémas cohérents, des relations maîtrisées et des requêtes
            performantes.
          </p>

          <p>
            L’authentification via JWT, la gestion des rôles et des permissions,
            les webhooks et les files d’attente font partie intégrante de mes
            apprentissages et de mes implémentations.
          </p>

          <p>
            Chaque fonctionnalité est pensée pour répondre à un besoin réel.
            Les spécifications ne restent pas dans des outils de prise de notes :
            elles deviennent des systèmes concrets, testables et utilisables.
          </p>

          <p>
            Mon ambition est de devenir développeur full-stack, capable de
            maîtriser l’interface utilisateur aussi bien que l’architecture
            serveur, avec une attention particulière portée à la sécurité, à la
            performance et à l’expérience utilisateur.
          </p>

          <p>
            Ce scroll container te permet de tester le comportement du défilement
            sans dépendre du scroll global de la page, ce qui est très utilisé
            dans les dashboards, portfolios avancés et applications modernes.
          </p>
        </div>
      </div>
        </div>
         <Contact/>
      
    </section>
  )
}

export default ScrollContainer
