"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/zone", label: "Zone d'intervention" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.jpg"
              alt="Les Ptits Loupiots Charentais"
              width={50}
              height={50}
              className="rounded-full object-cover animate-float group-hover:animate-bounce-gentle"
              priority
            />
            <span className="text-lg md:text-xl font-poppins font-semibold text-gray-dark group-hover:text-rose-600 transition-colors duration-300">
              Les Ptits Loupiots
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${index * 100}ms` }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in-up hover:scale-105",
                  pathname === link.href
                    ? "bg-rose-powder text-gray-dark shadow-md"
                    : "text-gray-600 hover:bg-rose-powder/20 hover:text-gray-dark"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} className="animate-wiggle" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in-left">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 animate-fade-in-up hover:scale-105",
                  pathname === link.href
                    ? "bg-rose-powder text-gray-dark shadow-md"
                    : "text-gray-600 hover:bg-rose-powder/20"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
