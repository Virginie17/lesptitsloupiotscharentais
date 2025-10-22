import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🧸</span>
              <span className="text-lg font-poppins font-semibold">
                Les Ptits Loupiots Charentais
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Garde d'enfants à domicile à La Rochelle et ses environs.
              Bienveillance et professionnalisme au service de vos enfants.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-rose-powder transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-gray-600 hover:text-rose-powder transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-rose-powder transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/zone" className="text-sm text-gray-600 hover:text-rose-powder transition-colors">
                  Zone d'intervention
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-rose-powder transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Contact</h3>
            <a
              href="mailto:lesptitsloupiotscharentais@gmail.com"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-rose-powder transition-colors"
            >
              <Mail size={16} />
              <span>lesptitsloupiotscharentais@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>Micro-entreprise Les Ptits Loupiots Charentais – © 2025 Camille Nuret</p>
        </div>
      </div>
    </footer>
  )
}
