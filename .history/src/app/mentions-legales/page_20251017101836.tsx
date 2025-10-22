import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-soft py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-rose-powder hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Retour à l&apos;accueil
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
          <h1 className="text-4xl font-bold text-gray-dark mb-8">Mentions légales</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">1. Éditeur du site</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>Nom de l&apos;entreprise :</strong> Les Ptits Loupiots Charentais</p>
              <p><strong>Forme juridique :</strong> Micro-entreprise</p>
              <p><strong>Responsable de publication :</strong> Camille Nuret</p>
              <p><strong>SIRET :</strong> 992 571 860 00019</p>
              <p><strong>Adresse :</strong> La Rochelle et ses environs</p>
              <p><strong>Email :</strong> <a href="mailto:lesptitsloupiotscharentais@gmail.com" className="text-rose-powder hover:underline">lesptitsloupiotscharentais@gmail.com</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">2. Hébergement</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-rose-powder hover:underline">vercel.com</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">3. Propriété intellectuelle</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos, etc.) est la propriété exclusive de Les Ptits Loupiots Charentais, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord écrit de Les Ptits Loupiots Charentais.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">4. Données personnelles</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Les informations collectées via le formulaire de contact sont destinées uniquement à répondre à vos demandes.
              </p>
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.
              </p>
              <p>
                Pour plus d&apos;informations, consultez notre <Link href="/politique-confidentialite" className="text-rose-powder hover:underline">Politique de confidentialité</Link>.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">5. Cookies</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Ce site n&apos;utilise pas de cookies publicitaires ou de tracking. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">6. Conception et développement</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong>Conception et développement :</strong> <a href="https://btovdeveloppement.com" target="_blank" rel="noopener noreferrer" className="text-rose-powder hover:underline">btovdeveloppement</a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">7. Responsabilité</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Les informations fournies sur ce site le sont à titre indicatif. Les Ptits Loupiots Charentais s&apos;efforce de maintenir ces informations aussi précises que possible mais ne peut garantir l&apos;exactitude, la complétude et l&apos;actualité des informations diffusées.
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : 17 octobre 2025
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="button-hover-scale">
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
