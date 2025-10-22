"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Download } from "lucide-react"
import { useState, useEffect } from "react"

const activities = [
  {
    src: "/images/peinture.avif",
    alt: "Atelier peinture",
    title: "Atelier Peinture",
    description: "Expression artistique et créativité"
  },
  {
    src: "/images/patisserie.avif",
    alt: "Atelier pâtisserie",
    title: "Atelier Pâtisserie",
    description: "Découverte des saveurs et partage"
  },
  {
    src: "/images/coloriage.avif",
    alt: "Coloriage créatif",
    title: "Coloriage",
    description: "Développement de la motricité fine"
  },
  {
    src: "/images/jeu de societe.avif",
    alt: "Jeux de société",
    title: "Jeux de société",
    description: "Partage et apprentissage en groupe"
  },
  {
    src: "/images/decoupage et collage.webp",
    alt: "Découpage et collage",
    title: "Découpage & Collage",
    description: "Activités manuelles et créatives"
  },
  {
    src: "/images/peinture2.avif",
    alt: "Peinture créative",
    title: "Peinture Créative",
    description: "Exploration des couleurs"
  },
  {
    src: "/images/carton.avif",
    alt: "Création en carton",
    title: "Création Carton",
    description: "Recyclage et imagination"
  },
  {
    src: "/images/fabrication cabane.webp",
    alt: "Fabrication de cabane",
    title: "Construction Cabane",
    description: "Jeux d'imagination et construction"
  }
]

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play du carrousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 4000) // Change toutes les 4 secondes

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Reprend l'auto-play après 10s
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Image
              src="/logo.jpg"
              alt="Les Ptits Loupiots Charentais"
              width={80}
              height={80}
              className="mx-auto rounded-full object-cover mb-4 animate-float"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">
              Les Ptits Loupiots Charentais
            </h1>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">
              Un accompagnement bienveillant pour vos enfants de tout âge à La Rochelle et ses environs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
              <Button asChild size="lg" className="button-hover-scale">
                <Link href="/contact">Me contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-hover-scale">
                <Link href="/services">Découvrir mes services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-scale-in">
                <div className="flex items-center justify-center mb-6">
                  <Heart className="text-rose-powder animate-pulse-soft" size={48} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>
                <div className="space-y-4 text-gray-600 text-center stagger-fade-in">
                  <p className="text-lg">
                    Je m&apos;appelle{" "}
                    <span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance.
                  </p>
                  <p>
                    S.
                  </p>
                </div>
              </div>
              <div className="flex justify-center animate-slide-in-right">
                <div className="relative group">
                  {/* Forme hexagonale professionnelle */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute inset-0 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
                      <Image
                        src="/images/IMG-20251016-WA0017.jpg"
                        alt="Camille Nuret - Les Ptits Loupiots Charentais"
                        width={450}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay dégradé sophistiqué */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-powder/10 via-transparent to-blue-sky/10"></div>
                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Bordure décorative hexagonale */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-rose-powder/40 via-blue-sky/40 to-rose-powder/40 -z-10 blur-xl animate-pulse-soft" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                    {/* Cadre géométrique décoratif */}
                    <div className="absolute -inset-4 border-2 border-rose-powder/20 -z-20" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-soft">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Mes diplômes et qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-fade-in">
            <Card className="border-2 border-rose-powder card-hover-lift group">
              <CardHeader>
                <GraduationCap className="text-rose-powder mb-2 group-hover:animate-bounce-gentle" size={48} />
                <CardTitle className="text-2xl">BAFA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs.
                </p>
                <a
                  href="/bafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-rose-powder text-gray-dark rounded-lg hover:bg-rose-600 hover:text-white transition-all duration-300 button-hover-scale font-medium text-sm"
                >
                  <Download size={18} />
                  Voir mon diplôme BAFA
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-sky card-hover-lift group">
              <CardHeader>
                <Award className="text-blue-sky mb-2 group-hover:animate-bounce-gentle" size={48} />
                <CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formation spécialisée dans l&apos;accueil et la garde des jeunes enfants.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mes activités au quotidien */}
          <div className="mt-16 animate-fade-in-up">
            <div className="text-center mb-10">
              <Heart className="text-rose-powder mx-auto mb-4 animate-pulse-soft" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes activités au quotidien</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en images les moments de partage, de créativité et de complicité avec les enfants
              </p>
            </div>

            {/* Carrousel dynamique */}
            <div className="relative max-w-4xl mx-auto">
              {/* Carrousel principal */}
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={activity.src}
                      alt={activity.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay avec informations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8 text-white animate-fade-in-up">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">{activity.title}</h3>
                        <p className="text-lg md:text-xl text-white/90">{activity.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-sm">
                          <Heart className="text-rose-powder" size={20} />
                          <span>Activité {index + 1} sur {activities.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Boutons de navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-dark rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Image précédente"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-dark rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Image suivante"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Indicateurs de position */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {activities.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? "bg-rose-powder w-8 h-3"
                          : "bg-white/60 hover:bg-white/80 w-3 h-3"
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniatures en dessous */}
              <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-3">
                {activities.map((activity, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? "ring-4 ring-rose-powder scale-105"
                        : "ring-2 ring-gray-200 hover:ring-rose-powder/50 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={activity.src}
                      alt={activity.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center text-gray-600 max-w-3xl mx-auto">
              <p className="italic">
                Chaque moment passé avec les enfants est unique et précieux. 
                À travers des activités variées et adaptées, je veille à leur épanouissement 
                dans un environnement sécurisé et bienveillant.
              </p>
            </div>
          </div>

          <div className="text-center bg-white rounded-3xl shadow-lg p-8 animate-scale-in">
            <h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à me contacter pour échanger sur vos besoins !
            </p>
            <Button asChild size="lg" className="button-hover-scale">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
