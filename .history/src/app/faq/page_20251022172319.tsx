import { Metadata } from 'next'
import { HelpCircle, Clock, Utensils, CreditCard, Users, Calendar, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'FAQ - Questions Fréquentes | Les Ptits Loupiots Charentais',
  description: 'Réponses aux questions fréquentes sur nos services de garde d\'enfants à domicile à La Rochelle : tarifs, disponibilités, paiements CESU, annulations et plus.',
  keywords: ['FAQ garde enfants', 'questions baby-sitting', 'CESU', 'Pajemploi', 'tarifs garde enfants', 'annulation garde'],
}

interface FAQItem {
  question: string
  answer: string
  icon: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    question: "Que faire en cas d'annulation de dernière minute ?",
    answer: "Je comprends que les imprévus arrivent ! Pour les annulations :\n\n• Plus de 24h à l'avance : annulation gratuite\n• Moins de 24h : 50% du montant est dû\n• Moins de 2h ou absence : 100% du montant est dû\n\nEn cas d'urgence médicale ou familiale grave, nous trouverons ensemble une solution adaptée. La flexibilité et la compréhension mutuelle sont essentielles !",
    icon: <Clock className="text-pink-400" size={28} />
  },
  {
    question: "Les repas sont-ils inclus ?",
    answer: "Les repas ne sont pas inclus dans le tarif de base. Voici les options :\n\n• Vous fournissez les repas : je les réchauffe et les sers\n• Je prépare les repas : supplément de 5€/repas (ingrédients fournis par vos soins)\n• Goûter simple : inclus dans la prestation\n\nJe m'adapte aux régimes alimentaires spécifiques (allergies, intolérances, végétarien) et favorise une alimentation équilibrée et variée pour les enfants.",
    icon: <Utensils className="text-blue-400" size={28} />
  },
  {
    question: "Acceptez-vous les paiements CESU/Pajemploi ?",
    answer: "Oui, absolument ! J'accepte plusieurs modes de paiement :\n\n✅ CESU préfinancé (Chèque Emploi Service Universel)\n✅ Pajemploi (déclaration simplifiée)\n✅ Virement bancaire\n✅ Espèces\n✅ Chèque\n\nAvec le CESU et Pajemploi, vous bénéficiez d'un crédit d'impôt de 50% sur les sommes versées ! Je vous accompagne dans les démarches de déclaration si besoin.",
    icon: <CreditCard className="text-green-400" size={28} />
  },
  {
    question: "Combien d'enfants gardez-vous simultanément ?",
    answer: "Pour garantir une attention optimale et un encadrement de qualité :\n\n• 1 à 2 enfants : garde individuelle privilégiée\n• 3 enfants maximum : en fonction des âges et besoins\n• Fratries bienvenues : tarif dégressif appliqué\n\nJe m'assure de pouvoir répondre aux besoins spécifiques de chaque enfant tout en créant une dynamique de groupe positive quand il y a plusieurs enfants.",
    icon: <Users className="text-purple-400" size={28} />
  },
  {
    question: "Êtes-vous disponible les week-ends et soirées ?",
    answer: "Oui, je suis disponible 7 jours sur 7 !\n\n📅 Semaine : 7h00 - 19h00\n🌙 Soirées : jusqu'à 23h00 (supplément de 20%)\n🎉 Week-ends : sur réservation (supplément de 15%)\n🌃 Nuits complètes : possible selon disponibilités\n\nPour les gardes régulières en soirée ou week-end, nous pouvons établir un planning fixe avec un tarif préférentiel.",
    icon: <Calendar className="text-orange-400" size={28} />
  },
  {
    question: "Quelle est votre politique en cas de maladie ?",
    answer: "La santé de tous est prioritaire :\n\n🤒 Enfant malade :\n• Fièvre > 38.5°C : je recommande de garder l'enfant à la maison\n• Maladies contagieuses : garde impossible (gastro, varicelle, etc.)\n• Petits rhumes : garde possible avec précautions adaptées\n• Je peux administrer des médicaments prescrits avec ordonnance\n\n🤧 Si je suis malade :\n• Je vous préviens dès que possible\n• Je vous aide à trouver une solution de remplacement si besoin\n• Pas de facturation en cas d'annulation de ma part",
    icon: <Heart className="text-red-400" size={28} />
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full mb-4">
            <HelpCircle className="text-pink-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions sur mes services de garde d&apos;enfants ? 
            Retrouvez ici les réponses aux questions les plus posées par les parents.
          </p>
        </div>

        {/* Liste des FAQ */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icône */}
                  <div className="flex-shrink-0 mt-1">
                    {faq.icon}
                  </div>
                  
                  {/* Contenu */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {faq.question}
                    </h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section contact */}
        <Card className="mt-12 bg-gradient-to-br from-pink-50 to-blue-50 border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Vous avez une autre question ?
            </h2>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à me contacter ! Je serais ravie de répondre à toutes vos questions 
              et de discuter de vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
              >
                Me contacter
              </a>
              <a 
                href="tel:0605040302" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-500 font-semibold rounded-lg border-2 border-pink-500 hover:bg-pink-50 transition-colors"
              >
                06 49 54 35
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Informations complémentaires */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            ⭐ Diplômée BAFA et CAP Petite Enfance • Assurée responsabilité civile professionnelle • 
            Formée aux premiers secours
          </p>
        </div>
      </div>
    </div>
  )
}
