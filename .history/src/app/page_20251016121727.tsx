import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard"
import { Baby, Clock, Heart, MapPin, Star, Sun } from "lucide-react"

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark animate-slide-up">
              Bienvenue chez Les Ptits Loupiots Charentais 🌸
            </h1>
            <p className="text-lg md:text-xl text-gray-600 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Un accompagnement bienveillant pour vos enfants de plus de 3 ans à La Rochelle et ses environs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg">
                <Link href="/contact">Me contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Découvrir mes services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-rose-powder" size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>
            <div className="space-y-4 text-gray-600 text-center">
              <p className="text-lg">
                Je m'appelle <span className="font-semibold text-gray-dark">Camille</span>, je garde vos enfants de plus de 3 ans à domicile à La Rochelle et ses environs.
              </p>
              <p>
                Douce, bienveillante et à l'écoute, je veille sur vos enfants comme si c'étaient les miens.
                Après l'école, le soir, le mercredi, le week-end ou pendant les vacances, je m'adapte à vos besoins pour vous offrir un service de confiance.
              </p>
              <div className="pt-4">
                <Button asChild variant="secondary">
                  <Link href="/a-propos">En savoir plus sur mon parcours</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard 
              icon={Clock}
              color="text-blue-sky"
              title="Garde après l'école"
              description="Je récupère vos enfants à la sortie de l'école et les accompagne jusqu'à votre retour."
            />
            <ServiceCard 
              icon={Sun}
              color="text-rose-powder"
              title="Garde les mercredis"
              description="Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez."
            />
            <ServiceCard 
              icon={Star}
              color="text-blue-sky"
              title="Garde pendant les vacances"
              description="Je m'occupe de vos enfants pendant les vacances scolaires avec des activités variées."
            />
            <ServiceCard 
              icon={Baby}
              color="text-rose-powder"
              title="Garde le soir"
              description="Pour vos soirées en toute sérénité, je veille sur vos enfants à domicile."
            />
            <ServiceCard 
              icon={Heart}
              color="text-blue-sky"
              title="Garde ponctuelle"
              description="Besoin d'une garde en urgence ou pour une occasion spéciale ? Je suis là."
            />
            <ServiceCard 
              icon={MapPin}
              color="text-rose-powder"
              title="À votre domicile"
              description="Vos enfants restent dans leur environnement familier, pour plus de confort."
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="text-rose-powder mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Zone d'intervention</h2>
            <p className="text-lg text-gray-600 mb-8">
              Je me déplace à <span className="font-semibold text-gray-dark">La Rochelle et dans toute la CDA</span>,
              dans un rayon de <span className="font-semibold text-gray-dark">20 km</span> autour de La Rochelle.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/zone">Voir le détail de la zone</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-sky/30 to-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Prêt à me confier vos enfants ?</h2>
            <p className="text-lg text-gray-600">
              N'hésitez pas à me contacter pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="mailto:lesptitsloupiotscharentais@gmail.com">
                  M'envoyer un email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
