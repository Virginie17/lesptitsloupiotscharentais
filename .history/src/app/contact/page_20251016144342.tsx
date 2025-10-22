import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Mail className="text-rose-powder mx-auto" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">Me contacter</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Une question ? Un besoin de garde ? Je suis à votre écoute !
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire et infos */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />

            {/* Informations de contact */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-rose-powder/20 to-blue-sky/20">
                <CardHeader>
                  <Mail className="text-rose-powder mb-2" size={40} />
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:lesptitsloupiotscharentais@gmail.com"
                    className="text-gray-600 hover:text-rose-powder transition-colors font-medium"
                  >
                    lesptitsloupiotscharentais@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="text-blue-sky mb-2" size={40} />
                  <CardTitle className="text-xl">Zone d'intervention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    La Rochelle et ses environs
                  </p>
                  <p className="text-gray-600">
                    Rayon de 20 km autour de La Rochelle
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-sky/20 to-rose-powder/20">
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Temps de réponse :</strong> Je m&apos;efforce de répondre à toutes les demandes dans les 24 heures.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Disponibilité :</strong> N&apos;hésitez pas à préciser vos besoins (dates, horaires, âge des enfants) pour que je puisse vous répondre au mieux.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
