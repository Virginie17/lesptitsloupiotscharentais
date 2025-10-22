import Link from "next/link"import Link from "next/link"

import Image from "next/image"import Image from "next/image"

import { Button } from "@/components/ui/button"import { Button } from "@					<Card>

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"						<CardHeader>

import { Award, GraduationCap, Heart, Shield, Clock, Sun, Star, Baby, MapPin, Mail } from "lucide-react"							<Star className="text-blue-sky mb-2" size={40} />

							<CardTitle>Garde pendant les vacances</CardTitle>

export default function AboutPage() {							<CardDescription>

	return (								Je m&apos;occupe de vos enfants pendant les vacances scolaires avec des activités variées.

		<div className="animate-fade-in">							</CardDescription>

			{/* Hero Section */}						</CardHeader>

			<section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">					</Card>

				<div className="container mx-auto px-4">					</div>

					<div className="max-w-3xl mx-auto text-center space-y-6">				</div>

						<Image			</section>

							src="/logo.jpg"

							alt="Les Ptits Loupiots Charentais"			{/* À propos détaillé */}

							width={80}			<section className="py-12 md:py-16">

							height={80}				<div className="container mx-auto px-4 max-w-6xl">

							className="mx-auto rounded-full object-cover mb-4"					{/* Diplômes et qualifications */}

							priority					<h2 className="text-3xl font-bold text-center mb-8">Mes diplômes et qualifications</h2>ton"

						/>import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

						<h1 className="text-4xl md:text-5xl font-bold text-gray-dark">import { Award, GraduationCap, Heart, Shield, Clock, Sun, Star, Baby, MapPin, Mail } from "lucide-react"

							Les Ptits Loupiots Charentais

						</h1>export default function LandingPage() {

						<p className="text-lg md:text-xl text-gray-600">	return (

							Un accompagnement bienveillant pour vos enfants de plus de 3 ans à La Rochelle et ses environs.		<div className="animate-fade-in">

						</p>			{/* Hero Section */}

						<div className="flex flex-col sm:flex-row gap-4 justify-center">			<section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">

							<Button asChild size="lg">				<div className="container mx-auto px-4">

								<Link href="/contact">Me contacter</Link>					<div className="max-w-3xl mx-auto text-center space-y-6">

							</Button>						<Image

							<Button asChild variant="outline" size="lg">							src="/logo.jpg"

								<Link href="/services">Découvrir mes services</Link>							alt="Les Ptits Loupiots Charentais"

							</Button>							width={80}

						</div>							height={80}

					</div>							className="mx-auto rounded-full object-cover mb-4"

				</div>							priority

			</section>						/>

						<h1 className="text-4xl md:text-5xl font-bold text-gray-dark">

			{/* Présentation rapide */}							Les Ptits Loupiots Charentais

			<section className="py-12 md:py-16">						</h1>

				<div className="container mx-auto px-4">						<p className="text-lg md:text-xl text-gray-600">

					<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">							Un accompagnement bienveillant pour vos enfants de plus de 3 ans à La Rochelle et ses environs.

						<div className="flex items-center justify-center mb-6">						</p>

							<Heart className="text-rose-powder" size={48} />						<div className="flex flex-col sm:flex-row gap-4 justify-center">

						</div>							<Button asChild size="lg">

						<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>								<Link href="#contact">Me contacter</Link>

						<div className="space-y-4 text-gray-600 text-center">							</Button>

							<p className="text-lg">							<Button asChild variant="outline" size="lg">

								Je m&apos;appelle{" "}								<Link href="#services">Découvrir mes services</Link>

								<span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.							</Button>

							</p>						</div>

							<p>					</div>

								Douce, bienveillante et à l&apos;écoute, je veille sur vos enfants comme si c&apos;étaient les miens.				</div>

								Après l&apos;école, le soir, le mercredi, le week-end ou pendant les vacances, je m&apos;adapte à vos besoins pour vous offrir un service de confiance.			</section>

							</p>

							<p className="text-center italic text-xl font-medium text-rose-powder py-4">			{/* Présentation rapide */}

								&quot;Je veille au bien-être, à la sécurité et à l&apos;épanouissement des enfants que j&apos;accompagne.&quot;			<section className="py-12 md:py-16">

							</p>				<div className="container mx-auto px-4">

						</div>					<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">

					</div>						<div className="flex items-center justify-center mb-6">

				</div>							<Heart className="text-rose-powder" size={48} />

			</section>						</div>

						<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>

			{/* Services */}						<div className="space-y-4 text-gray-600 text-center">

			<section id="services" className="py-12 md:py-16 bg-gray-soft">							<p className="text-lg">

				<div className="container mx-auto px-4">								Je m'appelle{" "}

					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes services</h2>								<span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">							</p>

						<Card>							<p>

							<CardHeader>								Douce, bienveillante et à l'écoute, je veille sur vos enfants comme si c'étaient les miens.

								<Clock className="text-blue-sky mb-2" size={40} />								Après l'école, le soir, le mercredi, le week-end ou pendant les vacances, je m'adapte à vos besoins pour vous offrir un service de confiance.

								<CardTitle>Garde après l&apos;école</CardTitle>							</p>

								<CardDescription>							<p className="text-center italic text-xl font-medium text-rose-powder py-4">

									Je récupère vos enfants à la sortie de l&apos;école et les accompagne jusqu&apos;à votre retour.								"Je veille au bien-être, à la sécurité et à l'épanouissement des enfants que j'accompagne."

								</CardDescription>							</p>

							</CardHeader>						</div>

						</Card>					</div>

						<Card>				</div>

							<CardHeader>			</section>

								<Sun className="text-rose-powder mb-2" size={40} />

								<CardTitle>Garde les mercredis</CardTitle>			{/* Services */}

								<CardDescription>			<section id="services" className="py-12 md:py-16 bg-gray-soft">

									Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez.				<div className="container mx-auto px-4">

								</CardDescription>					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes services</h2>

							</CardHeader>					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

						</Card>						<Card>

						<Card>							<CardHeader>

							<CardHeader>								<Clock className="text-blue-sky mb-2" size={40} />

								<Star className="text-blue-sky mb-2" size={40} />								<CardTitle>Garde après l'école</CardTitle>

								<CardTitle>Garde pendant les vacances</CardTitle>								<CardDescription>

								<CardDescription>									Je récupère vos enfants à la sortie de l'école et les accompagne jusqu'à votre retour.

									Je m&apos;occupe de vos enfants pendant les vacances scolaires avec des activités variées.								</CardDescription>

								</CardDescription>							</CardHeader>

							</CardHeader>						</Card>

						</Card>						<Card>

					</div>							<CardHeader>

				</div>								<Sun className="text-rose-powder mb-2" size={40} />

			</section>								<CardTitle>Garde les mercredis</CardTitle>

								<CardDescription>

			{/* À propos détaillé */}									Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez.

			<section className="py-12 md:py-16">								</CardDescription>

				<div className="container mx-auto px-4 max-w-6xl">							</CardHeader>

					{/* Diplômes et qualifications */}						</Card>

					<h2 className="text-3xl font-bold text-center mb-8">Mes diplômes et qualifications</h2>						<Card>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">							<CardHeader>

						<Card className="border-2 border-rose-powder">								<Star className="text-blue-sky mb-2" size={40} />

							<CardHeader>								<CardTitle>Garde pendant les vacances</CardTitle>

								<GraduationCap className="text-rose-powder mb-2" size={48} />								<CardDescription>

								<CardTitle className="text-2xl">BAFA</CardTitle>									Je m&apos;occupe de vos enfants pendant les vacances scolaires avec des activités variées.

							</CardHeader>								</CardDescription>

							<CardContent>							</CardHeader>

								<p className="text-gray-600">						</Card>

									Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs et colonies de vacances.                <p>

								</p>                  Mon objectif est simple : offrir aux parents une solution de garde fiable et rassurante, tout en permettant aux enfants de vivre des moments joyeux et enrichissants.

							</CardContent>                </p>

						</Card>              </div>

            </div>

						<Card className="border-2 border-blue-sky">        </div>

							<CardHeader>

								<Award className="text-blue-sky mb-2" size={48} />            {/* Diplômes et qualifications */}

								<CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>            <h2 className="text-3xl font-bold text-center mb-8">Mes diplômes et qualifications</h2>

							</CardHeader>            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

							<CardContent>              <Card className="border-2 border-rose-powder">

								<p className="text-gray-600">                <CardHeader>

									Formation spécialisée dans l&apos;accueil et la garde des jeunes enfants, garantissant des compétences professionnelles reconnues.                  <GraduationCap className="text-rose-powder mb-2" size={48} />

								</p>                  <CardTitle className="text-2xl">BAFA</CardTitle>

							</CardContent>                </CardHeader>

						</Card>                <CardContent>

					</div>                  <p className="text-gray-600">

                    Diplôme d'animation permettant d'encadrer des enfants et adolescents en centres de loisirs et colonies de vacances.

					{/* Agrément */}                  </p>

					<Card className="bg-gradient-to-br from-rose-powder/20 to-blue-sky/20 border-2 border-rose-powder mb-12">                </CardContent>

						<CardHeader>              </Card>

							<Shield className="text-rose-powder mb-2 mx-auto" size={56} />

							<CardTitle className="text-2xl text-center">Agrément Assistante Maternelle</CardTitle>              <Card className="border-2 border-blue-sky">

						</CardHeader>                <CardHeader>

						<CardContent className="text-center">                  <Award className="text-blue-sky mb-2" size={48} />

							<p className="text-lg text-gray-600 mb-4">                  <CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>

								Mon agrément d&apos;assistante maternelle est{" "}                </CardHeader>

								<span className="font-semibold text-gray-dark">prévu pour 2027</span>.                <CardContent>

							</p>                  <p className="text-gray-600">

							<p className="text-gray-600">                    Formation spécialisée dans l'accueil et la garde des jeunes enfants, garantissant des compétences professionnelles reconnues.

								En attendant, je propose des services de garde d&apos;enfants à domicile pour les enfants de plus de 3 ans, avec toute la rigueur et la bienveillance que requiert ce métier.                  </p>

							</p>                </CardContent>

						</CardContent>              </Card>

					</Card>            </div>



					{/* Valeurs */}            {/* Agrément */}

					<h2 className="text-3xl font-bold text-center mb-8">Mes valeurs</h2>            <Card className="bg-gradient-to-br from-rose-powder/20 to-blue-sky/20 border-2 border-rose-powder mb-12">

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">              <CardHeader>

						<Card className="text-center hover:shadow-lg transition-shadow">                <Shield className="text-rose-powder mb-2 mx-auto" size={56} />

							<CardHeader>                <CardTitle className="text-2xl text-center">Agrément Assistante Maternelle</CardTitle>

								<Heart className="text-rose-powder mx-auto mb-2" size={40} />              </CardHeader>

								<CardTitle>Bienveillance</CardTitle>              <CardContent className="text-center">

							</CardHeader>                <p className="text-lg text-gray-600 mb-4">

							<CardContent>                  Mon agrément d'assistante maternelle est{" "}

								<p className="text-gray-600">                  <span className="font-semibold text-gray-dark">prévu pour 2027</span>.

									Chaque enfant est unique. J&apos;adapte mon accompagnement à ses besoins et à sa personnalité.                </p>

								</p>                <p className="text-gray-600">

							</CardContent>                  En attendant, je propose des services de garde d'enfants à domicile pour les enfants de plus de 3 ans, avec toute la rigueur et la bienveillance que requiert ce métier.

						</Card>                </p>

              </CardContent>

						<Card className="text-center hover:shadow-lg transition-shadow">            </Card>

							<CardHeader>

								<Shield className="text-blue-sky mx-auto mb-2" size={40} />            {/* Valeurs */}

								<CardTitle>Sécurité</CardTitle>            <h2 className="text-3xl font-bold text-center mb-8">Mes valeurs</h2>

							</CardHeader>            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

							<CardContent>              <Card className="text-center hover:shadow-lg transition-shadow">

								<p className="text-gray-600">                <CardHeader>

									La sécurité des enfants est ma priorité absolue, tant physique qu&apos;émotionnelle.                  <Heart className="text-rose-powder mx-auto mb-2" size={40} />

								</p>                  <CardTitle>Bienveillance</CardTitle>

							</CardContent>                </CardHeader>

						</Card>                <CardContent>

                  <p className="text-gray-600">

						<Card className="text-center hover:shadow-lg transition-shadow">                    Chaque enfant est unique. J'adapte mon accompagnement à ses besoins et à sa personnalité.

							<CardHeader>                  </p>

								<Award className="text-rose-powder mx-auto mb-2" size={40} />                </CardContent>

								<CardTitle>Professionnalisme</CardTitle>              </Card>

							</CardHeader>

							<CardContent>              <Card className="text-center hover:shadow-lg transition-shadow">

								<p className="text-gray-600">                <CardHeader>

									Formée et passionnée, j&apos;apporte sérieux et engagement dans chaque mission.                  <Shield className="text-blue-sky mx-auto mb-2" size={40} />

								</p>                  <CardTitle>Sécurité</CardTitle>

							</CardContent>                </CardHeader>

						</Card>                <CardContent>

					</div>                  <p className="text-gray-600">

                    La sécurité des enfants est ma priorité absolue, tant physique qu'émotionnelle.

					{/* CTA */}                  </p>

					<div className="text-center bg-white rounded-3xl shadow-lg p-8">                </CardContent>

						<h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>              </Card>

						<p className="text-gray-600 mb-6">

							N&apos;hésitez pas à me contacter pour échanger sur vos besoins !              <Card className="text-center hover:shadow-lg transition-shadow">

						</p>                <CardHeader>

						<Button asChild size="lg">                  <Award className="text-rose-powder mx-auto mb-2" size={40} />

							<Link href="/contact">Me contacter</Link>                  <CardTitle>Professionnalisme</CardTitle>

						</Button>                </CardHeader>

					</div>                <CardContent>

				</div>                  <p className="text-gray-600">

			</section>                    Formée et passionnée, j'apporte sérieux et engagement dans chaque mission.

		</div>                  </p>

	)                </CardContent>

}              </Card>

            </div>

            {/* CTA */}
            <div className="text-center bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>
              <p className="text-gray-600 mb-6">
                N&apos;hésitez pas à me contacter pour échanger sur vos besoins !
              </p>
            </div>
        </section>
  </section>
    </div>