import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Shield } from "lucide-react"
import Link from "next/link"

export default function AProposPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-sky/30 to-beige-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">À propos de moi</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Camille Nuret, 21 ans, passionnée par la petite enfance
            </p>
          </div>
        </div>
      </section>

      {/* ...existing code from previous response... */}
    </div>
  )
}
