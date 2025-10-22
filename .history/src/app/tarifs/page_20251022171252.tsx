import { Metadata } from 'next'
import { Euro, Clock, Users, Moon, Calendar, CreditCard, Percent, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tarifs & Devis | Garde d\'Enfants à Domicile La Rochelle',
  description: 'Tarifs transparents pour la garde d\'enfants à domicile à La Rochelle. CESU et Pajemploi acceptés. Crédit d\'impôt de 50%. Devis gratuit personnalisé.',
  keywords: ['tarif garde enfants', 'prix baby-sitting La Rochelle', 'CESU', 'crédit impôt garde enfants', 'devis garde domicile'],
}

export default function TarifsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-pink-50/30 to-blue-50/30">
      <div className="container max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full mb-4">
            <Euro className="text-pink-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tarifs Transparents
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des tarifs clairs et compétitifs pour une garde de qualité. 
            Profitez d&apos;un crédit d&apos;impôt de 50% sur vos dépenses !
          </p>
        </div>

        {/* Tarif de base */}
        <Card className="mb-8 border-2 border-pink-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-blue-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clock className="text-pink-500" />
              Tarif Horaire de Base
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md border border-pink-100">
                <div className="text-5xl font-bold text-pink-500 mb-2">12€</div>
                <div className="text-gray-600 font-medium mb-2">par heure</div>
                <div className="text-sm text-gray-500">1 enfant en semaine</div>
                <div className="text-sm text-gray-500">(7h00 - 19h00)</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">Après crédit d&apos;impôt</div>
                    <div className="text-2xl font-bold text-green-600">7,50€/h</div>
                    <div className="text-sm text-gray-500">Soit 50% de réduction fiscale</div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-800 font-medium">
                    💡 Pour 3h de garde par semaine, vous ne payez réellement que <span className="font-bold">22,50€</span> après déduction fiscale !
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suppléments */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Users className="text-purple-500" />
                Fratries & Multi-enfants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">1 enfant</span>
                <span className="text-xl font-bold text-purple-600">15€/h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">2 enfants</span>
                <span className="text-xl font-bold text-purple-600">18€/h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">3 enfants</span>
                <span className="text-xl font-bold text-purple-600">22€/h</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                ⭐ Tarif dégressif : économisez en faisant garder plusieurs enfants
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Moon className="text-blue-500" />
                Horaires Spécifiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Soirée (19h - 23h)</span>
                <span className="text-xl font-bold text-blue-600">+20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Week-end</span>
                <span className="text-xl font-bold text-blue-600">+15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Nuit complète</span>
                <span className="text-xl font-bold text-blue-600">Sur devis</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                🌙 Suppléments calculés sur le tarif de base
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abonnements mensuels */}
        <Card className="mb-8 bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="text-purple-500" />
              Formules d&apos;Abonnement Mensuel
            </CardTitle>
            <p className="text-gray-600 mt-2">Économisez avec nos forfaits réguliers</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-pink-500 font-bold text-sm mb-2">OCCASIONNEL</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">15€</div>
                <div className="text-gray-600 text-sm mb-4">par heure</div>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Sans engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Idéal pour besoins ponctuels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Flexibilité maximale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-pink-400 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  POPULAIRE
                </div>
                <div className="text-pink-500 font-bold text-sm mb-2">RÉGULIER</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">13€</div>
                <div className="text-gray-600 text-sm mb-4">par heure</div>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>8h minimum / semaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Horaires fixes privilégiés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>-13% d&apos;économie</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-purple-500 font-bold text-sm mb-2">PREMIUM</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">11€</div>
                <div className="text-gray-600 text-sm mb-4">par heure</div>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>15h minimum / semaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Engagement 6 mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>-27% d&apos;économie</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Moyens de paiement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CreditCard className="text-green-500" />
              Moyens de Paiement Acceptés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">CESU Préfinancé</div>
                    <div className="text-sm text-gray-600">Chèque Emploi Service Universel</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">Pajemploi</div>
                    <div className="text-sm text-gray-600">Déclaration simplifiée</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-gray-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">Virement bancaire</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-gray-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-800">Espèces / Chèque</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Percent className="text-green-600" size={28} />
                  <h3 className="font-bold text-xl text-gray-800">Avantage Fiscal</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-lg">Crédit d&apos;impôt de 50%</p>
                  <p className="text-sm">
                    En employant une garde d&apos;enfants à domicile, vous bénéficiez d&apos;un crédit d&apos;impôt égal à <span className="font-bold">50% des sommes versées</span> dans l&apos;année.
                  </p>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <div className="text-sm font-medium text-gray-600 mb-2">Exemple concret :</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Dépense annuelle :</span>
                        <span className="font-bold">3 000€</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Crédit d&apos;impôt :</span>
                        <span className="font-bold">- 1 500€</span>
                      </div>
                      <div className="border-t pt-1 flex justify-between text-lg font-bold">
                        <span>Coût réel :</span>
                        <span className="text-pink-600">1 500€</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Plafond : 12 000€/an (+ 1 500€ par enfant supplémentaire)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services inclus */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Ce qui est inclus dans mes prestations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Activités créatives et éducatives',
                'Sorties au parc (météo favorable)',
                'Aide aux devoirs',
                'Préparation des goûters',
                'Rangement après activités',
                'Suivi du développement de l\'enfant',
                'Communication régulière avec les parents',
                'Flexibilité des horaires',
                'Respect des routines familiales'
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-pink-50 rounded-lg">
                  <CheckCircle className="text-pink-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un devis personnalisé ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Chaque famille est unique. Contactez-moi pour un devis gratuit adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 font-semibold">
                  Demander un devis gratuit
                </Button>
              </a>
              <a href="tel:0605040302">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold">
                  Appeler : 06 05 04 03 02
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Note légale */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Les tarifs indiqués sont susceptibles d&apos;évoluer. Un devis personnalisé vous sera fourni avant toute prestation.
          </p>
          <p className="mt-2">
            💼 SIRET : 992 571 860 00019 • Assurance responsabilité civile professionnelle
          </p>
        </div>
      </div>
    </div>
  )
}
