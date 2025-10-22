import type { Metadata } from "next"
import { Poppins, Quicksand } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
  title: "Les Ptits Loupiots Charentais | Garde d'enfants à La Rochelle",
  description: "Service de garde d'enfants à domicile à La Rochelle et ses environs. Camille Nuret, assistante maternelle agréée BAFA et CAP Petite Enfance.",
  keywords: "garde d'enfants, La Rochelle, assistante maternelle, baby-sitting, BAFA, CAP Petite Enfance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
