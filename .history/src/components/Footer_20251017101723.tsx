import Link from "next/link"
import Image from "next/image"
import { Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <Image
                src="/logo.jpg"
                alt="Les Ptits Loupiots Charentais"
                width={40}
                height={40}
                className="rounded-full object-cover animate-float group-hover:animate-bounce-gentle"
              />
              <span className="text-lg font-poppins font-semibold group-hover:text-rose-600 transition-colors duration-300">
                Les Ptits Loupiots Charentais
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Garde d&apos;enfants à domicile à La Rochelle et ses environs.
              Bienveillance et professionnalisme au service de vos enfants.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/zone"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Zone d&apos;intervention
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
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
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 group"
            >
              <Mail size={16} className="group-hover:animate-pulse-soft" />
              <span>lesptitsloupiotscharentais@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600 space-y-2">
          <p>
            Micro-entreprise Les Ptits Loupiots Charentais – © 2025 Camille Nuret
          </p>
          <p className="text-xs">
            SIRET : 992 571 860 00019
          </p>
        </div>
      </div>
    </footer>
  )
}
