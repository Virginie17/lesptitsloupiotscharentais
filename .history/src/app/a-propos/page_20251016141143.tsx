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

			{/* Présentation */}
			<section className="py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
							<div className="flex justify-center mb-8">
								<div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-powder to-blue-sky flex items-center justify-center text-6xl">
									👧
								</div>
							</div>
							<h2 className="text-3xl font-bold text-center mb-6">Camille Nuret</h2>
							<div className="space-y-4 text-gray-600 text-lg">
								<p>
									Bonjour ! Je m'appelle{" "}
									<span className="font-semibold text-gray-dark">Camille</span>, j'ai 21 ans et je suis passionnée par le monde de la petite enfance depuis toujours.
								</p>
								<p>
									J'ai créé ma micro-entreprise{" "}
									<span className="font-semibold text-gray-dark">Les Ptits Loupiots Charentais</span> pour proposer des services de garde d'enfants à domicile de qualité, dans un cadre bienveillant et sécurisant.
								</p>
								<p className="text-center italic text-xl font-medium text-rose-powder py-4">
									"Je veille au bien-être, à la sécurité et à l'épanouissement des enfants que j'accompagne."
								</p>
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
								<p className="textimport { Button } from "@/components/ui/button"
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

			{/* Présentation */}
			<section className="py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
							<div className="flex justify-center mb-8">
								<div className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-powder to-blue-sky flex items-center justify-center text-6xl">
									👧
								</div>
							</div>
							<h2 className="text-3xl font-bold text-center mb-6">Camille Nuret</h2>
							<div className="space-y-4 text-gray-600 text-lg">
								<p>
									Bonjour ! Je m'appelle{" "}
									<span className="font-semibold text-gray-dark">Camille</span>, j'ai 21 ans et je suis passionnée par le monde de la petite enfance depuis toujours.
								</p>
								<p>
									J'ai créé ma micro-entreprise{" "}
									<span className="font-semibold text-gray-dark">Les Ptits Loupiots Charentais</span> pour proposer des services de garde d'enfants à domicile de qualité, dans un cadre bienveillant et sécurisant.
								</p>
								<p className="text-center italic text-xl font-medium text-rose-powder py-4">
									"Je veille au bien-être, à la sécurité et à l'épanouissement des enfants que j'accompagne."
								</p>
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
								<p className="text
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Bonjour ! Je m'appelle{" "}
                  <span className="font-semibold text-gray-dark">Camille</span>, j'ai 21 ans et je suis passionnée par le monde de la petite enfance depuis toujours.
                </p>
                <p>
                  J'ai créé ma micro-entreprise{" "}
                  <span className="font-semibold text-gray-dark">Les Ptits Loupiots Charentais</span> pour proposer des services de garde d'enfants à domicile de qualité, dans un cadre bienveillant et sécurisant.
                </p>
                <p className="text-center italic text-xl font-medium text-rose-powder py-4">
                  "Je veille au bien-être, à la sécurité et à l'épanouissement des enfants que j'accompagne."
                </p>
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
              <h3 className="text-2xl font-bold mb-4">Envie d'en savoir plus ?</h3>
              <p className="text-gray-600 mb-6">
                N'hésitez pas à me contacter pour échanger sur vos