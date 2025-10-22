import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"
import Link from "next/link"

export default function ZonePage() {
  const communes = [
    "La Rochelle",
    "Aytré",
    "Périgny",
    "Lagord",
    "Nieul-sur-Mer",
    "Dompierre-sur-Mer",
    "Puilboreau",
    "Saint-Xandre",
    "Marsilly",
    "Angoulins",
    "Châtelaillon-Plage",
    "Yves",
    "Salles-sur-Mer",
    "Thairé",
    "Bourgneuf",
    "L'Houmeau",
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-sky/30 to-beige-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <MapPin className="text-rose-powder mx-auto" size={64} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">Zone d'intervention</h1>
            <p className="text-lg md:text-xl text-gray-600">
              La Rochelle et ses environs, dans un rayon de 20 km
            </p>
          </div>
        </div>
      </section>

      {/* Zone principale */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 border-2 border-rose-powder">
              <CardHeader>
                <Navigation className="text-rose-powder mb-2 mx-auto" size={48} />
                <CardTitle className="text-3xl text-center">Où je me déplace</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg text-gray-600">
                  Je propose mes services de garde d'enfants à domicile dans{" "}
                  <span className="font-semibold text-gray-dark">La Rochelle et toute la Communauté d'Agglomération (CDA)</span>,
                  dans un rayon de <span className="font-semibold text-gray-dark">20 kilomètres</span> autour de La Rochelle.
                </p>
                <div className="bg-gradient-to-br from-rose-powder/20 to-blue-sky/20 rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-dark mb-2">🗺️ Rayon de 20 km</p>
                  <p className="text-gray-600">
                    Centré sur La Rochelle
                  </p>
                </div>
                <p className="text-gray-600">
                  Cette zone me permet de vous offrir un service de proximité et de garantir ma disponibilité
                  pour vos enfants, tout en limitant mes temps de déplacement.
                </p>
              </CardContent>
            </Card>

            {/* Communes desservies */}
            <h2 className="text-3xl font-bold text-center mb-8">Communes desservies (exemples)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {communes.map((commune, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <MapPin className="text-blue-sky mx-auto mb-2" size={24} />
                    <p className="font-medium text-gray-dark">{commune}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-blue-sky/20 to-rose-powder/20">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-semibold text-gray-dark">Votre commune ne figure pas dans cette liste ?</span>
                </p>
                <p className="text-gray-600 mb-6">
                  N'hésitez pas à me contacter pour vérifier si elle se trouve dans mon rayon d'intervention !
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Carte visuelle (placeholder) */}
      <section className="py-16 bg-gray-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Visualisation de la zone</h2>
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="aspect-video bg-gradient-to-br from-blue-sky/30 to-rose-powder/30 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="text-rose-powder mx-auto mb-4" size={80} />
                  <p className="text-2xl font-bold text-gray-dark mb-2">La Rochelle</p>
                  <div className="inline-block border-4 border-dashed border-rose-powder rounded-full w-48 h-48 flex items-center justify-center">
                    <p className="text-lg font-semibold text-gray-dark">Rayon<br />20 km</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                Carte interactive à venir prochainement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
