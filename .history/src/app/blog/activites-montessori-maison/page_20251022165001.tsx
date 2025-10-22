import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Heart, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '10 Activités Montessori à Faire à la Maison | Blog Les Ptits Loupiots',
  description: 'Découvrez 10 activités Montessori simples et efficaces à réaliser chez vous pour éveiller l\'autonomie et la créativité de votre enfant. Conseils d\'expert.',
  keywords: ['activités Montessori', 'pédagogie Montessori maison', 'activités enfants', 'autonomie enfant', 'éveil enfant'],
}

export default function ActivitesMontessoriPage() {
  const activities = [
    {
      title: "Le Transvasement",
      age: "18 mois - 4 ans",
      description: "Transvaser de l'eau, du riz ou des lentilles d'un récipient à l'autre avec une cuillère ou un entonnoir.",
      benefits: "Développe la motricité fine, la concentration et la coordination œil-main.",
      materials: "2 bols, cuillère, grains (riz, lentilles), plateau"
    },
    {
      title: "Le Tri par Couleur",
      age: "2 - 5 ans",
      description: "Trier des objets (pompons, boutons, perles) par couleur dans des compartiments.",
      benefits: "Apprentissage des couleurs, développement de la logique et de la catégorisation.",
      materials: "Objets colorés variés, boîte à compartiments ou bols"
    },
    {
      title: "Les Cadres d'Habillage",
      age: "2.5 - 6 ans",
      description: "S'entraîner à fermer et ouvrir des fermetures éclair, boutons, pressions, lacets.",
      benefits: "Autonomie dans l'habillage, développement de la motricité fine.",
      materials: "Cadres en tissu avec différentes fermetures (DIY ou achetés)"
    },
    {
      title: "Le Versé",
      age: "2 - 5 ans",
      description: "Verser de l'eau d'un pichet à un verre sans renverser, avec une éponge à disposition.",
      benefits: "Précision du geste, confiance en soi, vie pratique.",
      materials: "Petit pichet, verre, plateau, éponge"
    },
    {
      title: "Le Plateau de Découpage",
      age: "3 - 6 ans",
      description: "Découper des bandes de papier le long de lignes tracées avec des ciseaux adaptés.",
      benefits: "Motricité fine, préparation à l'écriture, concentration.",
      materials: "Ciseaux bout rond, papier coloré avec lignes, plateau"
    },
    {
      title: "Les Boîtes à Sons",
      age: "2 - 5 ans",
      description: "Associer des paires de boîtes contenant les mêmes matériaux (riz, cailloux, grelots).",
      benefits: "Développement de l'ouïe, discrimination auditive, mémoire.",
      materials: "6-8 petites boîtes opaques, divers matériaux"
    },
    {
      title: "Le Plateau de Pliage",
      age: "3 - 6 ans",
      description: "Apprendre à plier des serviettes, torchons ou vêtements de manière méthodique.",
      benefits: "Autonomie, ordre, séquençage d'étapes.",
      materials: "Petites serviettes ou mouchoirs en tissu"
    },
    {
      title: "La Marche sur la Ligne",
      age: "2 - 6 ans",
      description: "Marcher pieds nus sur une ligne tracée au sol en portant un verre d'eau ou en équilibre.",
      benefits: "Équilibre, concentration, contrôle du corps.",
      materials: "Ruban adhésif de couleur au sol, verre d'eau"
    },
    {
      title: "Le Plateau de Vissage",
      age: "2.5 - 5 ans",
      description: "Visser et dévisser des boulons et écrous de différentes tailles.",
      benefits: "Coordination, rotation du poignet, résolution de problèmes.",
      materials: "Boulons et écrous de tailles variées, plateau"
    },
    {
      title: "Les Pinces et Pompons",
      age: "2 - 4 ans",
      description: "Utiliser une pince pour transférer des pompons colorés d'un bol à un autre.",
      benefits: "Force des doigts (préparation à l'écriture), précision, patience.",
      materials: "Pince à épiler ou pince de cuisine, pompons, 2 bols"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-pink-50/20 to-blue-50/20">
      <div className="container max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/blog" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" size={18} />
          Retour au blog
        </Link>

        {/* En-tête de l'article */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full font-medium">
                Activités
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                20 octobre 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                5 min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🎨 10 Activités Montessori à Faire à la Maison
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              La pédagogie Montessori favorise l&apos;autonomie, la concentration et la confiance en soi chez l&apos;enfant. 
              Voici 10 activités simples à mettre en place chez vous avec du matériel accessible.
            </p>
          </header>

          {/* Introduction */}
          <Card className="mb-8 bg-gradient-to-br from-pink-50 to-blue-50 border-pink-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Heart className="text-pink-500" />
                Pourquoi les activités Montessori ?
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span>Respectent le rythme naturel de l&apos;enfant</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span>Développent l&apos;autonomie et la confiance</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span>Stimulent la concentration et la créativité</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span>Préparent aux apprentissages scolaires</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liste des activités */}
          <div className="space-y-6 mb-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                        <span className="text-sm text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">
                          {activity.age}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{activity.description}</p>
                      <div className="bg-green-50 border-l-4 border-green-400 p-3 mb-3">
                        <p className="text-sm font-medium text-green-800">
                          <span className="font-bold">Bénéfices :</span> {activity.benefits}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Matériel nécessaire :</span> {activity.materials}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Conseils pratiques */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Mes Conseils pour Réussir</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong>Préparez l&apos;environnement :</strong> Installez les activités sur un plateau à hauteur d&apos;enfant dans un espace calme.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">👀</span>
                  <div>
                    <strong>Montrez d&apos;abord :</strong> Présentez l&apos;activité lentement, sans parler, pour que l&apos;enfant observe les gestes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <strong>Respectez son rythme :</strong> Laissez l&apos;enfant répéter autant qu&apos;il le souhaite, c&apos;est ainsi qu&apos;il apprend.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🙌</span>
                  <div>
                    <strong>Ne corrigez pas :</strong> L&apos;erreur fait partie de l&apos;apprentissage. Laissez l&apos;enfant découvrir par lui-même.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong>Rangez ensemble :</strong> Apprenez à l&apos;enfant à ranger son activité une fois terminée.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pour Conclure</h2>
            <p className="leading-relaxed mb-4">
              Ces activités Montessori sont un excellent point de départ pour développer l&apos;autonomie 
              et la confiance de votre enfant. N&apos;oubliez pas que le plus important est de suivre 
              ses intérêts et son rythme. Certaines activités le passionneront, d&apos;autres moins : 
              c&apos;est tout à fait normal !
            </p>
            <p className="leading-relaxed">
              En tant que professionnelle de la garde d&apos;enfants formée à ces méthodes, 
              j&apos;intègre régulièrement ces activités lors de mes gardes pour stimuler 
              l&apos;éveil et l&apos;apprentissage des petits.
            </p>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Besoin d&apos;une garde experte en Montessori ?</h3>
              <p className="mb-6 opacity-90">
                Je propose des gardes éducatives avec des activités Montessori adaptées à l&apos;âge de votre enfant.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 font-semibold">
                  Me contacter
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Partage social */}
          <div className="mt-8 pt-8 border-t flex items-center justify-between">
            <p className="text-gray-600">Vous avez aimé cet article ? Partagez-le !</p>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 size={18} />
              Partager
            </Button>
          </div>
        </article>

        {/* Articles similaires */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 Lire aussi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/gerer-crises-larmes-coucher" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🌙</div>
              <h3 className="font-bold text-gray-800 mb-1">Gérer les crises au coucher</h3>
              <p className="text-sm text-gray-600">6 min de lecture</p>
            </Link>
            <Link href="/blog/gouters-sains-enfants" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-bold text-gray-800 mb-1">Goûters sains pour enfants</h3>
              <p className="text-sm text-gray-600">4 min de lecture</p>
            </Link>
            <Link href="/blog/preparer-enfant-baby-sitter" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">👋</div>
              <h3 className="font-bold text-gray-800 mb-1">Préparer son enfant</h3>
              <p className="text-sm text-gray-600">5 min de lecture</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
