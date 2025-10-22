import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Blog & Conseils | Les Ptits Loupiots Charentais',
  description: 'Conseils d\'expert pour les parents : activités Montessori, gestion des émotions, alimentation saine, et astuces pour la garde d\'enfants à La Rochelle.',
  keywords: ['blog garde enfants', 'conseils parents', 'activités enfants', 'Montessori', 'éducation enfants', 'baby-sitting conseils'],
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'activites-montessori-maison',
    title: '10 Activités Montessori à Faire à la Maison',
    excerpt: 'Découvrez 10 activités inspirées de la pédagogie Montessori, simples à mettre en place chez vous pour éveiller votre enfant de manière ludique et autonome.',
    category: 'Activités',
    date: '2025-10-20',
    readTime: '5 min',
    image: '🎨'
  },
  {
    slug: 'gerer-crises-larmes-coucher',
    title: 'Comment Gérer les Crises de Larmes au Coucher',
    excerpt: 'Les pleurs au moment du coucher sont fréquents. Voici mes techniques éprouvées pour instaurer une routine apaisante et des nuits sereines.',
    category: 'Sommeil',
    date: '2025-10-18',
    readTime: '6 min',
    image: '🌙'
  },
  {
    slug: 'gouters-sains-enfants',
    title: 'Idées de Goûters Sains et Gourmands pour Enfants',
    excerpt: '15 recettes de goûters équilibrés et savoureux que vos enfants vont adorer. Fini les gâteaux industriels, place au fait-maison !',
    category: 'Alimentation',
    date: '2025-10-15',
    readTime: '4 min',
    image: '🍎'
  },
  {
    slug: 'preparer-enfant-baby-sitter',
    title: 'Préparer son Enfant à l\'Arrivée d\'une Baby-Sitter',
    excerpt: 'Les premières gardes peuvent être stressantes pour l\'enfant et les parents. Mes conseils pour une transition en douceur et rassurante.',
    category: 'Conseils Parents',
    date: '2025-10-12',
    readTime: '5 min',
    image: '👋'
  }
]

const categories = ['Tous', 'Activités', 'Sommeil', 'Alimentation', 'Conseils Parents']

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-blue-50/20 to-pink-50/20">
      <div className="container max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full mb-4">
            <BookOpen className="text-pink-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog & Conseils
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conseils d&apos;expert, astuces pratiques et idées d&apos;activités pour accompagner 
            vos enfants au quotidien
          </p>
        </div>

        {/* Filtres par catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white border-2 border-pink-200 text-gray-700 font-medium hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('fr-FR', { 
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                
                <div className="text-6xl mb-4 text-center">{post.image}</div>
                
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  {post.title}
                </h2>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">⏱️ {post.readTime} de lecture</span>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-pink-500 hover:text-pink-600 group-hover:translate-x-1 transition-transform">
                      Lire l&apos;article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       

        {/* CTA Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez une question spécifique ? Je suis là pour vous aider !
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Me contacter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
