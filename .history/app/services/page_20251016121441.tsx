import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Calendar, Clock, Heart, Moon, Sun, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Clock,
    color: "text-rose-powder",
    title: "Garde après l'école",
    description: "Je récupère vos enfants à la sortie de l'école et les accompagne jusqu'à votre retour à la maison.",
    details: [
      "Récupération à l'école",
      "Goûter et temps calme",
      "Aide aux devoirs si besoin",
      "Activités ludiques",
      "Sécurité et bienveillance",
    ],
  },
  {
    icon: Moon,
    color: "text-blue-sky",
    title: "Garde le soir",
    description: "Pour vos soirées en toute tranquillité, je m'occupe de vos enfants à votre domicile.",
    details: [
      "Dîner et routine du soir",
      "Jeux calmes",
      "Lecture d'histoires",
      "Coucher si nécessaire",
      "Présence rassurante",
    ],
  },
  {
    icon: Sun,
    color: "text-rose-powder",
    title: "Garde les mercredis",
    description: "Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez.",
    details: [
      "Journée complète ou demi-journée",
      "Activités manuelles et créatives",
      "Jeux d'extérieur si possible",
      "Repas préparés ou fournis par les parents",
      "Sortie au parc",
    ],
  },
  {
    icon: Calendar,
    color: "text-blue-sky",
    title: "Garde pendant les vacances",
    description: "Je m'occupe de vos enfants pendant les vacances scolaires avec des activités variées.",
    details: [
      "Garde régulière ou ponctuelle",
      "Programme d'activités adapté",
      "Sorties éducatives",
      "Jeux et créativité",
      "Ambiance vacances à la maison",
    ],
  },
  {
    icon: Sparkles,
    color: "text-rose-powder",
    title: "Garde ponctuelle",
    description: "Besoin d'une garde en urgence ou pour une occasion spéciale ? Je suis disponible.",
    details: [
      "Weekend et jours fériés",
      "Sorties ou événements",
      "Urgences de dernière minute",
      "Adaptation à vos besoins",
      "Flexibilité maximale",
    ],
  },
  {
    icon: Baby,
    color: "text-blue-sky",
    title: "À votre domicile",
    description: "Tous mes services sont proposés à votre domicile, pour le confort de vos enfants.",
    details: [
      "Environnement familier",
      "Pas de transport nécessaire",
      "Respect de vos habitudes",
      "Utilisation de vos jeux et livres",
      "Confort et sérénité",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">Mes services</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Des prestations adaptées à vos besoins et à l'épanouissement de vos enfants
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-rose-powder/20 to-blue-sky/20 p-8 flex items-center justify-center">
                      <Icon className={service.color} size={80} />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <Heart className="text-rose-powder mr-2 mt-1 flex-shrink-0" size={16} />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 bg-gray-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pourquoi choisir mes services ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <span className="text-4xl mb-2">🎓</span>
                  <CardTitle>Diplômée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">BAFA et CAP Petite Enfance pour une garde professionnelle</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <span className="text-4xl mb-2">💝</span>
                  <CardTitle>Bienveillante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Une attention particulière portée à chaque enfant</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <span className="text-4xl mb-2">🏠</span>
                  <CardTitle>À domicile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Vos enfants restent dans leur environnement familier</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Intéressé par mes services ?</h3>
              <p className="text-gray-600 mb-6">
                Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:lesptitsloupiotscharentais@gmail.com">M'envoyer un email</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
