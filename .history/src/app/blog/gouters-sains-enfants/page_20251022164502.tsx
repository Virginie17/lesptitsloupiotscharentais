import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Apple } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '15 Idées de Goûters Sains pour Enfants | Blog Les Ptits Loupiots',
  description: 'Recettes faciles et rapides de goûters équilibrés pour enfants. Fini les gâteaux industriels, place au fait-maison nutritif et gourmand !',
  keywords: ['goûter sain enfant', 'recette goûter maison', 'collation enfant', 'goûter équilibré', 'nutrition enfant'],
}

export default function GoutersSainsPage() {
  const gouters = [
    { emoji: '🍌', title: 'Banana bread maison', desc: 'Pain moelleux aux bananes et noix, sans sucre ajouté' },
    { emoji: '🥄', title: 'Yaourt grec + fruits rouges', desc: 'Protéines + antioxydants, peut ajouter un filet de miel' },
    { emoji: '🍎', title: 'Pomme au beurre de cacahuète', desc: 'Tranches de pomme à tremper, riche en fibres' },
    { emoji: '🥕', title: 'Bâtonnets de légumes + houmous', desc: 'Carottes, concombre, poivrons avec sauce protéinée' },
    { emoji: '🍪', title: 'Cookies maison avoine-banane', desc: 'Seulement 2 ingrédients, cuisson 15 min' },
    { emoji: '🥤', title: 'Smoothie fruits-épinards', desc: 'Banane, fraise, épinards, lait végétal - invisible et vitaminé' },
    { emoji: '🧀', title: 'Fromage + crackers complets', desc: 'Calcium + céréales complètes pour énergie durable' },
    { emoji: '🥜', title: 'Energy balls dattes-amandes', desc: 'Boulettes énergétiques sans cuisson, se conservent 1 semaine' },
    { emoji: '🍞', title: 'Toast avocat-banane', desc: 'Pain complet grillé avec purée d\'avocat et rondelles de banane' },
    { emoji: '🥧', title: 'Mini muffins courgette-chocolat', desc: 'Légume caché dans le chocolat, les enfants adorent' },
    { emoji: '🍇', title: 'Brochettes de fruits', desc: 'Raisin, melon, fraise sur pique - ludique et coloré' },
    { emoji: '🥨', title: 'Galettes de riz + purée d\'amande', desc: 'Sans gluten, riche en protéines végétales' },
    { emoji: '🥛', title: 'Chia pudding vanille', desc: 'Graines de chia + lait + vanille - préparé la veille' },
    { emoji: '🍊', title: 'Orange pressée + amandes', desc: 'Vitamine C fraîche + bonnes graisses' },
    { emoji: '🥐', title: 'Mini pancakes banane-œuf', desc: '2 ingrédients, cuisson rapide, se congèlent' }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-green-50/20 to-yellow-50/20">
      <div className="container max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8">
          <ArrowLeft className="mr-2" size={18} />
          Retour au blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full font-medium">
                Alimentation
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                15 octobre 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                4 min de lecture
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              🍎 15 Idées de Goûters Sains et Gourmands
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Fini les gâteaux industriels bourrés de sucre ! Voici 15 recettes faciles de goûters 
              équilibrés que vos enfants vont adorer.
            </p>
          </header>

          {/* Pourquoi éviter l'industriel */}
          <Card className="mb-8 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">⚠️ Pourquoi éviter les goûters industriels ?</h2>
              <ul className="space-y-2 text-gray-700">
                <li>🍬 <strong>Trop de sucre :</strong> Un paquet de gâteaux = 4-5 morceaux de sucre</li>
                <li>🧪 <strong>Additifs et conservateurs :</strong> Colorants, arômes artificiels</li>
                <li>🌾 <strong>Farines raffinées :</strong> Pic de glycémie puis coup de fatigue</li>
                <li>🌴 <strong>Huile de palme :</strong> Mauvaises graisses saturées</li>
                <li>💸 <strong>Plus cher :</strong> Le fait-maison revient moins cher</li>
              </ul>
            </CardContent>
          </Card>

          {/* Les 15 goûters */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Mes 15 Idées de Goûters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {gouters.map((gouter, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{gouter.emoji}</span>
                      <div>
                        <h3 className="font-bold text-gray-800">{gouter.title}</h3>
                        <p className="text-sm text-gray-600">{gouter.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recette détaillée energy balls */}
          <Card className="mb-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">👩‍🍳 Recette Star : Energy Balls Dattes-Amandes</h2>
              
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Ingrédients (12 boulettes)</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• 200g de dattes dénoyautées</li>
                  <li>• 100g d&apos;amandes</li>
                  <li>• 2 cuillères à soupe de cacao en poudre</li>
                  <li>• 1 cuillère à café de vanille</li>
                  <li>• Noix de coco râpée pour rouler (optionnel)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Préparation (5 minutes)</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Mixer les dattes et amandes ensemble jusqu&apos;à obtenir une pâte collante</li>
                  <li>2. Ajouter le cacao et la vanille, mixer encore 10 secondes</li>
                  <li>3. Former des boules de la taille d&apos;une noix avec les mains</li>
                  <li>4. Rouler dans la noix de coco râpée (facultatif)</li>
                  <li>5. Conserver au frigo dans une boîte hermétique (1 semaine)</li>
                </ol>
              </div>

              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm font-medium text-green-800">
                  💚 <strong>Astuce :</strong> Vous pouvez varier avec des noisettes, des noix de cajou, 
                  ou ajouter des pépites de chocolat noir !
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Principes d'un bon goûter */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Les 4 Piliers d&apos;un Bon Goûter</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">1. Un fruit ou légume</h3>
                  <p className="text-gray-700 text-sm">Pour les vitamines, minéraux et fibres</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">2. Une source de protéines</h3>
                  <p className="text-gray-700 text-sm">Yaourt, fromage, oléagineux pour la satiété</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">3. Des glucides complexes</h3>
                  <p className="text-gray-700 text-sm">Pain complet, flocons d&apos;avoine pour l&apos;énergie durable</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">4. Une boisson</h3>
                  <p className="text-gray-700 text-sm">Eau, lait, smoothie maison (pas de jus de fruits du commerce)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mes astuces pratiques */}
          <div className="mb-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Mes Astuces de Pro</h2>
            <ul className="space-y-3 text-gray-700">
              <li>🥞 <strong>Batch cooking du dimanche :</strong> Préparez muffins et energy balls pour la semaine</li>
              <li>❄️ <strong>Congélation :</strong> Pancakes et muffins se congèlent parfaitement</li>
              <li>🎨 <strong>Présentation ludique :</strong> Brochettes, formes rigolotes = plus d&apos;envie de manger</li>
              <li>👧 <strong>Impliquez les enfants :</strong> Ils mangent mieux ce qu&apos;ils ont préparé</li>
              <li>📦 <strong>Portions individuelles :</strong> Préparez des boîtes pour la semaine (gain de temps)</li>
            </ul>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500 to-yellow-500 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Des goûters sains pendant mes gardes</h3>
              <p className="mb-6 opacity-90">
                Je propose systématiquement des goûters équilibrés et faits maison lors de mes gardes d&apos;enfants.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                  Me contacter
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-8 pt-8 border-t flex items-center justify-between">
            <p className="text-gray-600">Partagez ces idées avec d&apos;autres parents !</p>
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
