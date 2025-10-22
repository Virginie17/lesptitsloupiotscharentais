import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-soft py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-rose-powder hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Retour à l&apos;accueil
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
          <div className="text-center mb-8">
            <Shield className="text-rose-powder mx-auto mb-4" size={64} />
            <h1 className="text-4xl font-bold text-gray-dark mb-4">Politique de confidentialité</h1>
            <p className="text-gray-600">Conformité RGPD - Protection de vos données personnelles</p>
          </div>

          <section className="space-y-4">
            <div className="flex items-start gap-3">
              <Lock className="text-rose-powder mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-dark mb-2">1. Responsable du traitement</h2>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Responsable :</strong> Camille Nuret</p>
                  <p><strong>Entreprise :</strong> Les Ptits Loupiots Charentais</p>
                  <p><strong>SIRET :</strong> 992 571 860 00019</p>
                  <p><strong>Contact :</strong> <a href="mailto:lesptitsloupiotscharentais@gmail.com" className="text-rose-powder hover:underline">lesptitsloupiotscharentais@gmail.com</a></p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start gap-3">
              <Eye className="text-rose-powder mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-dark mb-2">2. Données collectées</h2>
                <div className="text-gray-600 space-y-2">
                  <p>Lors de l&apos;utilisation de notre formulaire de contact, nous collectons les données suivantes :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Message et informations relatives à votre demande</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">3. Finalité du traitement</h2>
            <div className="text-gray-600 space-y-2">
              <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Répondre à vos demandes de renseignements</li>
                <li>Vous contacter concernant nos services de garde d&apos;enfants</li>
                <li>Établir un devis personnalisé</li>
                <li>Gérer la relation client</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">4. Base légale</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Le traitement de vos données est basé sur votre consentement explicite lors de l&apos;envoi du formulaire de contact et sur l&apos;exécution de mesures précontractuelles prises à votre demande.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">5. Durée de conservation</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Vos données sont conservées pendant la durée nécessaire à la gestion de votre demande, puis :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>3 ans maximum pour les prospects (sans relation contractuelle)</li>
                <li>Pendant la durée de la prestation + 5 ans pour les archives légales (clients)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">6. Destinataires des données</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Vos données sont strictement confidentielles et destinées uniquement à :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Camille Nuret (responsable de Les Ptits Loupiots Charentais)</li>
                <li>Aucun tiers commercial ou publicitaire</li>
                <li>Aucune transmission à des pays hors Union Européenne</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-start gap-3">
              <UserCheck className="text-rose-powder mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-dark mb-2">7. Vos droits (RGPD)</h2>
                <div className="text-gray-600 space-y-2">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                    <li><strong>Droit à l&apos;effacement :</strong> Supprimer vos données (« droit à l&apos;oubli »)</li>
                    <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li><strong>Droit à la limitation :</strong> Limiter le traitement dans certains cas</li>
                    <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:lesptitsloupiotscharentais@gmail.com" className="text-rose-powder hover:underline">lesptitsloupiotscharentais@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">8. Sécurité des données</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Les accès non autorisés</li>
                <li>La perte ou la destruction accidentelle</li>
                <li>L&apos;utilisation frauduleuse</li>
              </ul>
              <p className="mt-2">
                Notre site utilise un protocole HTTPS sécurisé pour toutes les transmissions de données.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">9. Cookies</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés (navigation, préférences).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">10. Réclamation</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
              </p>
              <p>
                <strong>CNIL</strong> - 3 Place de Fontenoy, 75007 Paris<br />
                Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-rose-powder hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-dark">11. Modification de la politique</h2>
            <div className="text-gray-600 space-y-2">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur cette page avec sa date de mise à jour.
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
