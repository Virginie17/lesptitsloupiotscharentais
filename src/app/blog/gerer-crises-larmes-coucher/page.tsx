import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Moon, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Comment Gérer les Crises de Larmes au Coucher | Blog Les Ptits Loupiots',
  description: 'Techniques éprouvées pour apaiser les pleurs au moment du coucher. Créez une routine sereine et des nuits paisibles pour toute la famille.',
  keywords: ['crises coucher enfant', 'pleurs coucher', 'routine sommeil enfant', 'gérer pleurs bébé', 'rituel coucher'],
}

export default function CrisesCoucherPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20">
      <div className="container max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" size={18} />
          Retour au blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                Sommeil
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                18 octobre 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                6 min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🌙 Comment Gérer les Crises de Larmes au Coucher
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Les pleurs au moment du coucher sont une source de stress pour de nombreux parents. 
              Voici mes techniques éprouvées pour créer une routine apaisante et des nuits sereines.
            </p>
          </header>

          {/* Comprendre les pleurs */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Pourquoi les enfants pleurent-ils au coucher ?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😰</span>
                  <div>
                    <strong className="text-blue-800">Angoisse de séparation :</strong> L&apos;enfant a peur d&apos;être séparé de vous pendant la nuit.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <strong className="text-blue-800">Surplus d&apos;énergie :</strong> L&apos;enfant n&apos;est pas suffisamment fatigué physiquement.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <strong className="text-blue-800">Surexcitation :</strong> Écrans, jeux stimulants juste avant le coucher.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <strong className="text-blue-800">Manque de routine :</strong> Absence de rituel rassurant et prévisible.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😨</span>
                  <div>
                    <strong className="text-blue-800">Peurs nocturnes :</strong> Peur du noir, des monstres, des cauchemars.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* La routine idéale */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">⏰ La Routine du Coucher Idéale (45 minutes)</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-pink-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-pink-500">19h00</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">🍽️ Dîner léger et calme</h3>
                      <p className="text-gray-700">
                        Évitez le sucre et les aliments excitants. Privilégiez un repas équilibré avec des féculents 
                        (favorisent le sommeil). Tamisez la lumière, baissez le volume.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-blue-500">19h30</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">🛁 Bain apaisant</h3>
                      <p className="text-gray-700">
                        Un bain tiède (37°C) avec quelques gouttes d&apos;huile essentielle de lavande (à partir de 3 ans). 
                        Moment de détente, pas de jeux trop excitants. Lumière douce, musique calme.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-purple-500">19h50</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">👕 Habillage rituel</h3>
                      <p className="text-gray-700">
                        Pyjama confortable, brossage de dents ensemble. Laissez l&apos;enfant choisir son pyjama 
                        pour lui donner un sentiment de contrôle. Faites-en un moment de complicité.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-green-500">20h05</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">📖 Histoire dans le lit</h3>
                      <p className="text-gray-700">
                        1 à 2 histoires courtes maximum. Laissez l&apos;enfant les choisir. Lisez d&apos;une voix 
                        douce et monotone. Évitez les histoires trop excitantes. Privilégiez les contes apaisants.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-indigo-500">20h25</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">🤗 Rituel de séparation</h3>
                      <p className="text-gray-700">
                        Câlin, bisou, phrase rassurante répétée chaque soir : &quot;Je t&apos;aime, fais de beaux rêves, 
                        je suis juste à côté&quot;. Laissez une veilleuse, la porte entrouverte. Sortez calmement sans revenir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Techniques d'apaisement */}
          <Card className="mb-8 bg-gradient-to-br from-pink-50 to-purple-50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ 7 Techniques d&apos;Apaisement Immédiates</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "La respiration du papillon",
                    desc: "Inspirez profondément ensemble, expirez doucement comme un papillon qui bat des ailes. Répétez 5 fois."
                  },
                  {
                    title: "Le massage des mains",
                    desc: "Massez doucement les mains de l'enfant en faisant des cercles, très lentement, en silence."
                  },
                  {
                    title: "Le doudou médiateur",
                    desc: "Faites parler le doudou qui rassure l'enfant : \"Je suis là pour te protéger toute la nuit\"."
                  },
                  {
                    title: "La technique du &quot;bisou magique&quot;",
                    desc: "Déposez un bisou sur sa main qu'il pourra poser sur sa joue quand il a besoin de vous pendant la nuit."
                  },
                  {
                    title: "La musique douce",
                    desc: "Mettez une berceuse, des bruits blancs (pluie, vagues) ou une méditation guidée pour enfants."
                  },
                  {
                    title: "Le spray anti-monstres",
                    desc: "Vaporisez de l'eau parfumée à la lavande dans la chambre pour chasser les peurs."
                  },
                  {
                    title: "La visualisation positive",
                    desc: "\"Imagine que tu es sur un nuage tout doux qui flotte dans le ciel étoilé...\" Racontez une scène apaisante."
                  }
                ].map((technique, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-gray-800">{technique.title} :</strong>
                      <p className="text-gray-600 text-sm mt-1">{technique.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Erreurs à éviter */}
          <Card className="mb-8 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Les Erreurs à Éviter</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <div><strong>Céder aux &quot;encore une histoire&quot;</strong> : Fixez une limite claire dès le début.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <div><strong>Rester jusqu&apos;à l&apos;endormissement total</strong> : L&apos;enfant doit apprendre à s&apos;endormir seul.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <div><strong>Punir ou gronder</strong> : Les pleurs sont une émotion légitime, accueillez-la.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <div><strong>Changer la routine chaque soir</strong> : La répétition est rassurante.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">❌</span>
                  <div><strong>Écrans dans l&apos;heure précédant le coucher</strong> : La lumière bleue retarde l&apos;endormissement.</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Patience et Constance</h2>
            <p className="leading-relaxed mb-4">
              Les crises au coucher ne disparaîtront pas du jour au lendemain. Il faut généralement <strong>2 à 3 semaines</strong> 
              pour qu&apos;une routine s&apos;installe et que l&apos;enfant se sente en sécurité. Soyez patient, constant, 
              et bienveillant avec vous-même.
            </p>
            <p className="leading-relaxed">
              En tant que professionnelle de la garde d&apos;enfants, j&apos;applique ces techniques lors des gardes 
              en soirée. Les parents constatent rapidement une amélioration significative du coucher. 
              N&apos;hésitez pas à me solliciter pour instaurer une routine adaptée à votre enfant.
            </p>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Besoin d&apos;aide pour le coucher ?</h3>
              <p className="mb-6 opacity-90">
                Je propose des gardes en soirée avec mise en place de routines de coucher apaisantes.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 font-semibold">
                  Me contacter
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-8 pt-8 border-t flex items-center justify-between">
            <p className="text-gray-600">Cet article vous a aidé ? Partagez-le !</p>
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
            <Link href="/blog/activites-montessori-maison" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold text-gray-800 mb-1">Activités Montessori</h3>
              <p className="text-sm text-gray-600">5 min de lecture</p>
            </Link>
            <Link href="/blog/gouters-sains-enfants" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-bold text-gray-800 mb-1">Goûters sains</h3>
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
