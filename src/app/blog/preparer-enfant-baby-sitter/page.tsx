import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Heart, CheckCircle, XCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Préparer son Enfant à l\'Arrivée d\'une Baby-Sitter | Blog Les Ptits Loupiots',
  description: 'Guide complet pour une première garde réussie. Rassurez votre enfant et vivez sereinement la séparation avec ces conseils d\'expert.',
  keywords: ['première garde enfant', 'préparer baby-sitting', 'séparation enfant', 'angoisse séparation', 'baby-sitter première fois'],
}

export default function PreparerEnfantPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20">
      <div className="container max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" size={18} />
          Retour au blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-medium">
                Conseils Parents
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                12 octobre 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                5 min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              👋 Préparer son Enfant à l&apos;Arrivée d&apos;une Baby-Sitter
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              La première garde peut être source d&apos;anxiété pour l&apos;enfant et les parents. 
              Voici mon guide complet pour une transition en douceur et rassurante.
            </p>
          </header>

          {/* Avant la première garde */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">📅 Avant la Première Garde (1 semaine avant)</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-pink-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">1. Parlez-en positivement</h3>
                  <p className="text-gray-700 mb-3">
                    Annoncez la venue de la baby-sitter comme une <strong>bonne nouvelle</strong>, pas comme une obligation. 
                    Utilisez un ton joyeux et enthousiaste.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-2">
                    <p className="text-sm font-medium text-green-800">
                      <CheckCircle className="inline mr-2" size={16} />
                      <strong>À dire :</strong> &quot;Samedi, Camille va venir jouer avec toi ! Elle connaît plein de jeux rigolos !&quot;
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm font-medium text-red-800">
                      <XCircle className="inline mr-2" size={16} />
                      <strong>À éviter :</strong> &quot;Papa et maman doivent sortir, tu vas rester avec une dame...&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">2. Organisez une rencontre préalable</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Essentiel :</strong> Invitez la baby-sitter 30 minutes avant la vraie garde, en votre présence.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span>L&apos;enfant découvre la baby-sitter dans un contexte sécurisant (avec vous)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span>Proposez une activité ensemble : dessin, puzzle, lecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span>Montrez que VOUS faites confiance à cette personne (attitude clé)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-400">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">3. Lisez des livres sur le sujet</h3>
                  <p className="text-gray-700 mb-3">
                    Les histoires aident les enfants à se projeter et à verbaliser leurs émotions.
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                    <p>📚 <strong>&quot;Non, non et non !&quot;</strong> de Mireille d&apos;Allancé</p>
                    <p>📚 <strong>&quot;La baby-sitter&quot;</strong> de Stephanie Blake</p>
                    <p>📚 <strong>&quot;Maman travaille&quot;</strong> de Nathalie Bélineau</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Le jour J */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 Le Jour J : Les Étapes Clés</h2>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 mb-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Chronologie d&apos;une séparation réussie</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <strong>Arrivée de la baby-sitter (10 min avant votre départ)</strong>
                      <p className="text-sm text-gray-700 mt-1">
                        Accueillez-la chaleureusement devant l&apos;enfant. Montrez que vous la connaissez et l&apos;appréciez.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <strong>Tour de la maison et infos pratiques</strong>
                      <p className="text-sm text-gray-700 mt-1">
                        Montrez les jouets préférés, le doudou, la chambre. L&apos;enfant se sent rassuré que vous partagiez ses repères.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <strong>Lancez une activité ensemble</strong>
                      <p className="text-sm text-gray-700 mt-1">
                        Commencez un jeu, un puzzle, un dessin à trois. L&apos;enfant entre dans l&apos;activité avant votre départ.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <strong>Au revoir court et confiant</strong>
                      <p className="text-sm text-gray-700 mt-1">
                        Câlin, bisou, phrase rassurante : &quot;Je reviens dans 2 heures, amuse-toi bien !&quot; 
                        Puis <strong>partez sans revenir</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ce qu'il faut éviter */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">❌ Les Erreurs Fréquentes à Éviter</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Partir en cachette :</strong> L&apos;enfant se sent trahi et angoisse encore plus la prochaine fois
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Prolonger les adieux :</strong> Plus vous restez, plus c&apos;est difficile. Soyez bref et confiant
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Revenir si l&apos;enfant pleure :</strong> Cela valide sa stratégie et amplifie les pleurs la fois suivante
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Transmettre votre angoisse :</strong> Les enfants ressentent votre stress. Restez détendu et positif
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong>Culpabiliser :</strong> &quot;Sois sage, ne fais pas de bêtises...&quot; crée une pression négative
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Gestion des pleurs */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">😢 &quot;Mon enfant pleure quand je pars&quot;</h2>
              <p className="text-gray-700 mb-4">
                <strong>C&apos;est normal et temporaire !</strong> Voici ce qui se passe réellement :
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-bold text-blue-800 mb-1">⏱️ Dans 90% des cas</p>
                  <p className="text-sm text-gray-700">
                    L&apos;enfant se calme dans les <strong>2 à 5 minutes</strong> après votre départ. 
                    Les pleurs sont une réaction à la séparation, pas un signe de détresse durable.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-bold text-blue-800 mb-1">📞 Astuce pro</p>
                  <p className="text-sm text-gray-700">
                    Demandez à la baby-sitter de vous envoyer une photo 10 minutes après votre départ. 
                    Vous verrez que votre enfant joue et sourit !
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="font-bold text-blue-800 mb-1">🔄 Ça s&apos;améliore</p>
                  <p className="text-sm text-gray-700">
                    Plus les gardes se répètent avec la même personne, moins il y a de pleurs. 
                    La confiance s&apos;installe progressivement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist pour les parents */}
          <Card className="mb-8 bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Checklist : Infos à Laisser à la Baby-Sitter</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Numéros d\'urgence (parents, médecin, voisins)',
                  'Routine habituelle (repas, sieste, coucher)',
                  'Doudou et jouets préférés',
                  'Allergies ou traitements médicaux',
                  'Activités autorisées / interdites',
                  'Règles de la maison',
                  'Repas et goûter préparés',
                  'Heure prévue de votre retour'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💝 Mon Conseil de Pro</h2>
            <p className="leading-relaxed mb-4">
              Après 5 ans d&apos;expérience en garde d&apos;enfants, je peux vous assurer qu&apos;une première garde 
              bien préparée transforme complètement l&apos;expérience. Les enfants qui ont été rassurés en amont 
              sont <strong>beaucoup plus détendus</strong> et s&apos;amusent réellement.
            </p>
            <p className="leading-relaxed mb-4">
              N&apos;hésitez pas à communiquer avec votre baby-sitter : partagez les habitudes, les préférences, 
              les petites astuces qui fonctionnent avec votre enfant. Une bonne communication = une garde réussie.
            </p>
            <p className="leading-relaxed font-medium text-pink-600">
              Et rappelez-vous : prendre du temps pour vous en tant que parent n&apos;est pas égoïste, 
              c&apos;est nécessaire ! Un parent reposé est un meilleur parent. 🌟
            </p>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Prête pour une première garde réussie ?</h3>
              <p className="mb-6 opacity-90">
                Je vous accompagne pour préparer au mieux cette transition avec votre enfant. 
                Contactez-moi pour discuter de vos besoins.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 font-semibold">
                  Me contacter
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-8 pt-8 border-t flex items-center justify-between">
            <p className="text-gray-600">Cet article vous aide ? Partagez-le !</p>
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
            <Link href="/blog/gerer-crises-larmes-coucher" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🌙</div>
              <h3 className="font-bold text-gray-800 mb-1">Crises au coucher</h3>
              <p className="text-sm text-gray-600">6 min de lecture</p>
            </Link>
            <Link href="/blog/gouters-sains-enfants" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-bold text-gray-800 mb-1">Goûters sains</h3>
              <p className="text-sm text-gray-600">4 min de lecture</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
