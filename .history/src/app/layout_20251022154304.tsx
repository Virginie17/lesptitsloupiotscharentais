import type { Metadata } from "next"
import { Poppins, Quicksand } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lesptitsloupiotscharentais.fr'),
  title: {
    default: "Les Ptits Loupiots Charentais | Garde d'enfants à domicile La Rochelle 17",
    template: "%s | Les Ptits Loupiots Charentais"
  },
  description: "Garde d'enfants à domicile à La Rochelle (17). Baby-sitter qualifiée BAFA & CAP Petite Enfance. Garde après l'école, mercredis, vacances scolaires. Zone CDA La Rochelle.",
  keywords: [
    "garde d'enfants La Rochelle",
    "baby-sitter La Rochelle",
    "nounou La Rochelle", 
    "assistante maternelle La Rochelle",
    "garde à domicile Charente-Maritime",
    "baby-sitting 17",
    "garde après l'école La Rochelle",
    "garde d'enfants Aytré",
    "garde d'enfants Périgny",
    "BAFA",
    "CAP Petite Enfance",
    "garde mercredis La Rochelle",
    "garde vacances scolaires",
    "nounou agréée La Rochelle",
    "Camille Nuret"
  ],
  authors: [{ name: "Camille Nuret - Les Ptits Loupiots Charentais" }],
  creator: "Les Ptits Loupiots Charentais",
  publisher: "Les Ptits Loupiots Charentais",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lesptitsloupiotscharentais.fr',
    siteName: 'Les Ptits Loupiots Charentais',
    title: "Garde d'enfants à domicile La Rochelle | Baby-sitter qualifiée",
    description: "Service professionnel de garde d'enfants à La Rochelle et ses environs. Diplômée BAFA et CAP Petite Enfance. Activités créatives, bienveillance et sécurité.",
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Les Ptits Loupiots Charentais - Garde d\'enfants La Rochelle',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Garde d'enfants à domicile La Rochelle | Baby-sitter qualifiée",
    description: "Service professionnel de garde d'enfants à La Rochelle. BAFA & CAP Petite Enfance.",
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lesptitsloupiotscharentais.fr',
  },
  category: 'Services de garde d\'enfants',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
