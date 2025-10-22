import Link from "next/link"import Link from "ne					<h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">

import Image from "next/image"						Les Ptits Loupiots Charentais

import { Button } from "@/components/ui/button"					</h1>

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"					<p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">

import { Award, GraduationCap, Heart, Shield, Clock, Sun, Star } from "lucide-react"						Un accompagnement bienveillant pour vos enfants de tout âge à La Rochelle et ses environs.

					</p>

export default function AboutPage() {					<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">"

	return (import Image from "next/image"

		<div className="animate-fade-in">import { Button } from "@/components/ui/button"

			<section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

				<div className="container mx-auto px-4">import { Award, GraduationCap, Heart, Shield, Clock, Sun, Star } from "lucide-react"

					<div className="max-w-3xl mx-auto text-center space-y-6">

						<Imageexport default function AboutPage() {

							src="/logo.jpg"	return (

							alt="Les Ptits Loupiots Charentais"		<div className="animate-fade-in">

							width={80}			<section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-24">

							height={80}				<div className="container mx-auto px-4">

							className="mx-auto rounded-full object-cover mb-4 animate-float"					<div className="max-w-3xl mx-auto text-center space-y-6">

							priority						<Image

						/>							src="/logo.jpg"

						<h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">							alt="Les Ptits Loupiots Charentais"

							Les Ptits Loupiots Charentais							width={80}

						</h1>							height={80}

						<p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">							className="mx-auto rounded-full object-cover mb-4 animate-float"

							Un accompagnement bienveillant pour vos enfants de tout âge à La Rochelle et ses environs.							priority

						</p>						/>

						<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">						<h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">

							<Button asChild size="lg" className="button-hover-scale">							Les Ptits Loupiots Charentais

								<Link href="/contact">Me contacter</Link>						</h1>

							</Button>						<p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">

							<Button asChild variant="outline" size="lg" className="button-hover-scale">							Un accompagnement bienveillant pour vos enfants de plus de 3 ans à La Rochelle et ses environs.

								<Link href="/services">Découvrir mes services</Link>						</p>

							</Button>						<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">

						</div>							<Button asChild size="lg" className="button-hover-scale">

					</div>								<Link href="/contact">Me contacter</Link>

				</div>							</Button>

			</section>							<Button asChild variant="outline" size="lg" className="button-hover-scale">

								<Link href="/services">Découvrir mes services</Link>

			<section className="py-12 md:py-16">							</Button>

				<div className="container mx-auto px-4">						</div>

					<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-scale-in">					</div>

						<div className="flex items-center justify-center mb-6">				</div>

							<Heart className="text-rose-powder animate-pulse-soft" size={48} />			</section>

						</div>

						<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>			<section className="py-12 md:py-16">

						<div className="space-y-4 text-gray-600 text-center stagger-fade-in">				<div className="container mx-auto px-4">

							<p className="text-lg">					<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-scale-in">

								Je m&apos;appelle{" "}						<div className="flex items-center justify-center mb-6">

								<span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.							<Heart className="text-rose-powder animate-pulse-soft" size={48} />

							</p>						</div>

							<p>						<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Qui suis-je ?</h2>

								Douce, bienveillante et à l&apos;écoute, je veille sur vos enfants comme si c&apos;étaient les miens.						<div className="space-y-4 text-gray-600 text-center stagger-fade-in">

							</p>							<p className="text-lg">

						</div>								Je m&apos;appelle{" "}

					</div>								<span className="font-semibold text-gray-dark">Camille Nuret</span>, diplômée BAFA et CAP Petite Enfance, bientôt assistante maternelle agréée.

				</div>							</p>

			</section>							<p>

								Douce, bienveillante et à l&apos;écoute, je veille sur vos enfants comme si c&apos;étaient les miens.

			<section className="py-12 md:py-16">							</p>

				<div className="container mx-auto px-4 max-w-6xl">						</div>

					<h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Mes diplômes et qualifications</h2>					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-fade-in">				</div>

						<Card className="border-2 border-rose-powder card-hover-lift group">			</section>

							<CardHeader>

								<GraduationCap className="text-rose-powder mb-2 group-hover:animate-bounce-gentle" size={48} />			<section className="py-12 md:py-16">

								<CardTitle className="text-2xl">BAFA</CardTitle>				<div className="container mx-auto px-4 max-w-6xl">

							</CardHeader>					<h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Mes diplômes et qualifications</h2>

							<CardContent>					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 stagger-fade-in">

								<p className="text-gray-600">						<Card className="border-2 border-rose-powder card-hover-lift group">

									Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs.							<CardHeader>

								</p>								<GraduationCap className="text-rose-powder mb-2 group-hover:animate-bounce-gentle" size={48} />

							</CardContent>								<CardTitle className="text-2xl">BAFA</CardTitle>

						</Card>							</CardHeader>

							<CardContent>

						<Card className="border-2 border-blue-sky card-hover-lift group">								<p className="text-gray-600">

							<CardHeader>									Diplôme d&apos;animation permettant d&apos;encadrer des enfants et adolescents en centres de loisirs.

								<Award className="text-blue-sky mb-2 group-hover:animate-bounce-gentle" size={48} />								</p>

								<CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>							</CardContent>

							</CardHeader>						</Card>

							<CardContent>

								<p className="text-gray-600">						<Card className="border-2 border-blue-sky card-hover-lift group">

									Formation spécialisée dans l&apos;accueil et la garde des jeunes enfants.							<CardHeader>

								</p>								<Award className="text-blue-sky mb-2 group-hover:animate-bounce-gentle" size={48} />

							</CardContent>								<CardTitle className="text-2xl">CAP Petite Enfance</CardTitle>

						</Card>							</CardHeader>

					</div>							<CardContent>

								<p className="text-gray-600">

					<div className="text-center bg-white rounded-3xl shadow-lg p-8 animate-scale-in">									Formation spécialisée dans l&apos;accueil et la garde des jeunes enfants.

						<h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>								</p>

						<p className="text-gray-600 mb-6">							</CardContent>

							N&apos;hésitez pas à me contacter pour échanger sur vos besoins !						</Card>

						</p>					</div>

						<Button asChild size="lg" className="button-hover-scale">

							<Link href="/contact">Me contacter</Link>					<div className="text-center bg-white rounded-3xl shadow-lg p-8 animate-scale-in">

						</Button>						<h3 className="text-2xl font-bold mb-4">Envie d&apos;en savoir plus ?</h3>

					</div>						<p className="text-gray-600 mb-6">

				</div>							N&apos;hésitez pas à me contacter pour échanger sur vos besoins !

			</section>						</p>

		</div>						<Button asChild size="lg" className="button-hover-scale">

	)							<Link href="/contact">Me contacter</Link>

}						</Button>

					</div>
				</div>
			</section>
		</div>
	)
}