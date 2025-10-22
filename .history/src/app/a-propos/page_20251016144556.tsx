import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Shield, Clock, Sun, Star, Baby, MapPin, Mail } from "lucide-react"

export default function LandingPage() {
	return (
		<div className="animate-fade-in">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<Image
							src="/logo.jpg"
							alt="Les Ptits Loupiots Charentais"
							width={80}
							height={80}
							className="mx-auto rounded-full object-cover mb-4"
							priority
						/>
						<h1 className="text-4xl md:text-5xl font-bold text-gray-dark">
							Les Ptits Loupiots Charentais
						</h1>
						<p className="text-lg md:text-xl text-gray-600">
							Un accompagnement bienveillant pour vos enfants de plus de 3 ans à La Rochelle et ses environs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg">
								<Link href="#contact">Me contacter</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="#services">Découvrir mes services</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Présentation rapide */}
			<section className="py-12 md:py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
						<div className="flex items-center justify-center mb-6">
							<Heart className="text-rose-powder" size={48} />
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>
						<div className="space-y-4 text-gray-600 text-center">
							<p className="text-lg">
								Je m'appelle{" "}
								<span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.
							</p>
							<p>
								Douce, bienveillante et à l'écoute, je veille sur vos enfants comme si c'étaient les miens.
								Après l'école, le soir, le mercredi, le week-end ou pendant les vacances, je m'adapte à vos besoins pour vous offrir un service de confiance.
							</p>
							<p className="text-center italic text-xl font-medium text-rose-powder py-4">
								"Je veille au bien-être, à la sécurité et à l'épanouissement des enfants que j'accompagne."
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section id="services" className="py-12 md:py-16 bg-gray-soft">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						<Card>
							<CardHeader>
								<Clock className="text-blue-sky mb-2" size={40} />
								<CardTitle>Garde après l'école</CardTitle>
								<CardDescription>
									Je récupère vos enfants à la sortie de l'école et les accompagne jusqu'à votre retour.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<Sun className="text-rose-powder mb-2" size={40} />
								<CardTitle>Garde les mercredis</CardTitle>
								<CardDescription>
									Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<Star className="text-blue-sky mb-2" size={40} />
								<CardTitle>Garde pendant les vacances</CardTitle>
								<CardDescription>
									Je m&apos;occupe de vos enfants pendant les vacances scolaires avec des activités variées.
								</CardDescription>
							</CardHeader>
						</Card>
                <p>
                  Mon objectif est simple : offrir aux parents une solution de garde fiable et rassurante, tout en permettant aux enfants de vivre des moments joyeux et enrichissants.
                </p>
              </div>
            </div>

            {/* Diplômes et qualifications */}
            <h2 className="text-3xl font-bold text-center mb-8">Mes diplômes et qualifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-rose-powder">
                <CardHeader>
                  <GraduationCap className="text-rose-powder mb-2" size={48} />
                  <CardTitle className="text-2xl">BAFA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Diplôme d'animation permettant d'encadrer des enfants et adolescents en centres de loisirs et colonies de vacances.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-sky">
                <CardHeader>
                  <Award className="text-blue-sky mb-2" size={48} />
                  <CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Formation spécialisée dans l'accueil et la garde des jeunes enfants, garantissant des compétences professionnelles reconnues.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Agrément */}
            <Card className="bg-gradient-to-br from-rose-powder/20 to-blue-sky/20 border-2 border-rose-powder mb-12">
              <CardHeader>
                <Shield className="text-rose-powder mb-2 mx-auto" size={56} />
                <CardTitle className="text-2xl text-center">Agrément Assistante Maternelle</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 mb-4">
                  Mon agrément d'assistante maternelle est{" "}
                  <span className="font-semibold text-gray-dark">prévu pour 2027</span>.
                </p>
                <p className="text-gray-600">
                  En attendant, je propose des services de garde d'enfants à domicile pour les enfants de plus de 3 ans, avec toute la rigueur et la bienveillance que requiert ce métier.
                </p>
              </CardContent>
            </Card>

            {/* Valeurs */}
            <h2 className="text-3xl font-bold text-center mb-8">Mes valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="text-rose-powder mx-auto mb-2" size={40} />
                  <CardTitle>Bienveillance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Chaque enfant est unique. J'adapte mon accompagnement à ses besoins et à sa personnalité.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="text-blue-sky mx-auto mb-2" size={40} />
                  <CardTitle>Sécurité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    La sécurité des enfants est ma priorité absolue, tant physique qu'émotionnelle.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="text-rose-powder mx-auto mb-2" size={40} />
                  <CardTitle>Professionnalisme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Formée et passionnée, j'apporte sérieux et engagement dans chaque mission.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>
              <p className="text-gray-600 mb-6">
                N&apos;hésitez pas à me contacter pour échanger sur vos besoins !
              </p>
            </div>
        </section>
            </div>