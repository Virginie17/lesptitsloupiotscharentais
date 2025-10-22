import Link from "next/link"
import Image from "next/image"
import { Mail, ExternalLink, Facebook, Instagram } from "lucide-react"

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
                  href="/tarifs"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FAQ
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
            <div className="space-y-3">
              <a
                href="mailto:lesptitsloupiotscharentais@gmail.com"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 group"
              >
                <Mail size={16} className="group-hover:animate-pulse-soft" />
                <span>lesptitsloupiotscharentais@gmail.com</span>
              </a>
              
              {/* Réseaux sociaux */}
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Suivez-nous</p>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full bg-gray-100 hover:bg-rose-powder transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full bg-gray-100 hover:bg-rose-powder transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full bg-gray-100 hover:bg-rose-powder transition-all duration-300 hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-gray-600 group-hover:text-white transition-colors"
                    >
                      <path 
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Informations légales</p>
                <div className="space-y-1">
                  <Link
                    href="/mentions-legales"
                    className="text-xs text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Mentions légales
                  </Link>
                  <br />
                  <Link
                    href="/politique-confidentialite"
                    className="text-xs text-gray-600 hover:text-rose-powder transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Politique de confidentialité (RGPD)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600 space-y-2">
          <p>
            Micro-entreprise Les Ptits Loupiots Charentais – © 2025 Camille Nuret
          </p>
          <p className="text-xs">
            SIRET : 992 571 860 00019
          </p>
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            Site créé par{" "}
            <a 
              href="https://btovdeveloppement.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-powder hover:text-rose-600 font-semibold transition-colors inline-flex items-center gap-1"
            >
              btovdeveloppement
              <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
