import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Image
              src="/logo.jpg"
              alt="Les Ptits Loupiots Charentais"
              width={80}
              height={80}
              className="mx-auto rounded-full object-cover mb-4 animate-float"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">
              Les Ptits Loupiots Charentais
            </h1>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">
              Un accompagnement bienveillant pour vos enfants de tout âge à La Rochelle et ses environs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
              <Button asChild size="lg" className="button-hover-scale">
                <Link href="/contact">Me contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-hover-scale">
                <Link href="/services">Découvrir mes services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-scale-in">
                <div className="flex items-center justify-center mb-6">
                  <Heart className="text-rose-powder animate-pulse-soft" size={48} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>
                <div className="space-y-4 text-gray-600 text-center stagger-fade-in">
                  <p className="text-lg">
                    Je m&apos;appelle{" "}
                    <span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.
                  </p>
                  <p>
                    Douce, bienveillante et à l&apos;écoute, je veille sur vos enfants comme si c&apos;étaient les miens.
                  </p>
                </div>
              </div>
              <div className="flex justify-center animate-slide-in-right">
                <Image
                  src="/illustrations/baby-care.svg"
                  alt="Garde bienveillante"
                  width={300}
                  height={250}
                  className="w-full max-w-sm animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Mes diplômes et qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-fade-in">
            <Card className="border-2 border-rose-powder card-hover-lift group">
              <CardHeader>
                <GraduationCap className="text-rose-powder mb-2 group-hover:animate-bounce-gentle" size={48} />
                <CardTitle className="text-2xl">BAFA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-sky card-hover-lift group">
              <CardHeader>
                <Award className="text-blue-sky mb-2 group-hover:animate-bounce-gentle" size={48} />
                <CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formation spécialisée dans l&apos;accueil et la garde des jeunes enfants.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white rounded-3xl shadow-lg p-8 animate-scale-in">
            <h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à me contacter pour échanger sur vos besoins !
            </p>
            <Button asChild size="lg" className="button-hover-scale">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
