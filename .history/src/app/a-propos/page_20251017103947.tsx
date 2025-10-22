import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Download } from "lucide-react"

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
                <div className="relative group">
                  {/* Forme hexagonale professionnelle */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute inset-0 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
                      <Image
                        src="/images/IMG-20251016-WA0017.jpg"
                        alt="Camille Nuret - Les Ptits Loupiots Charentais"
                        width={450}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay dégradé sophistiqué */}
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-powder/10 via-transparent to-blue-sky/10"></div>
                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Bordure décorative hexagonale */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-rose-powder/40 via-blue-sky/40 to-rose-powder/40 -z-10 blur-xl animate-pulse-soft" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                    {/* Cadre géométrique décoratif */}
                    <div className="absolute -inset-4 border-2 border-rose-powder/20 -z-20" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-soft">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in-up">Mes diplômes et qualifications</h2>
          <div className="flex justify-center mb-8 animate-scale-in">
            <Image
              src="/illustrations/creative-activities.svg"
              alt="Activités créatives"
              width={250}
              height={200}
              className="w-full max-w-xs"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-fade-in">
            <Card className="border-2 border-rose-powder card-hover-lift group">
              <CardHeader>
                <GraduationCap className="text-rose-powder mb-2 group-hover:animate-bounce-gentle" size={48} />
                <CardTitle className="text-2xl">BAFA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs.
                </p>
                <a
                  href="/bafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-rose-powder text-gray-dark rounded-lg hover:bg-rose-600 hover:text-white transition-all duration-300 button-hover-scale font-medium text-sm"
                >
                  <Download size={18} />
                  Voir mon diplôme BAFA
                </a>
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

          {/* Mes activités au quotidien */}
          <div className="mt-16 animate-fade-in-up">
            <div className="text-center mb-10">
              <Heart className="text-rose-powder mx-auto mb-4 animate-pulse-soft" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes activités au quotidien</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez en images les moments de partage, de créativité et de complicité avec les enfants
              </p>
            </div>

            {/* Collage de photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
              {/* Photo 1 - Grande à gauche */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up group">
                <Image
                  src="/images/IMG-20251016-WA0020.jpg"
                  alt="Activité créative avec les enfants"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-powder/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">Activités créatives</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 - Petite en haut à droite */}
              <div className="col-span-1 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-100 group"
                   style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                <Image
                  src="/images/IMG-20251016-WA0021.jpg"
                  alt="Jeux éducatifs"
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-sky/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Photo 3 - Petite à côté */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-200 group"
                   style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                <Image
                  src="/images/IMG-20251016-WA0022.jpg"
                  alt="Moments de complicité"
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-rose-powder/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Photo 4 - En bas à droite */}
              <div className="col-span-1 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-300 group"
                   style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                <Image
                  src="/images/IMG-20251016-WA0023.jpg"
                  alt="Activités ludiques"
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-sky/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Photo 5 - En bas à droite */}
              <div className="col-span-1 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-delay-400 group">
                <Image
                  src="/images/IMG-20251016-WA0024.jpg"
                  alt="Activités de plein air"
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-rose-powder/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="text-center text-gray-600 max-w-3xl mx-auto">
              <p className="italic">
                Chaque moment passé avec les enfants est unique et précieux. 
                À travers des activités variées et adaptées, je veille à leur épanouissement 
                dans un environnement sécurisé et bienveillant.
              </p>
            </div>
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
