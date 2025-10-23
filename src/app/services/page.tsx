import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Calendar, Clock, Heart, Moon, Sun, Sparkles, Euro, CreditCard, MapPin, CalendarClock, XCircle, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
    {
        icon: Clock,
        color: "text-rose-powder",
        title: "Garde après l'école",
        description:
            "Je récupère vos enfants à la sortie de l'école et les accompagne jusqu'à votre retour à la maison.",
        details: [
            "Récupération à l'école",
            "Goûter et temps calme",
            "Aide aux devoirs si besoin",
            "Activités ludiques",
            "Sécurité et bienveillance",
        ],
    },
    {
        icon: Moon,
        color: "text-blue-sky",
        title: "Garde le soir",
        description:
            "Pour vos soirées en toute tranquillité, je m'occupe de vos enfants à votre domicile.",
        details: [
            "Dîner et routine du soir",
            "Jeux calmes",
            "Lecture d'histoires",
            "Coucher si nécessaire",
            "Présence rassurante",
        ],
    },
    {
        icon: Sun,
        color: "text-rose-powder",
        title: "Garde les mercredis",
        description:
            "Des mercredis ludiques et créatifs pour vos enfants pendant que vous travaillez.",
        details: [
            "Journée complète ou demi-journée",
            "Activités manuelles et créatives",
            "Jeux d'extérieur si possible",
            "Repas préparés ou fournis par les parents",
            "Sortie au parc",
        ],
    },
    {
        icon: Calendar,
        color: "text-blue-sky",
        title: "Garde pendant les vacances",
        description:
            "Je m'occupe de vos enfants pendant les vacances scolaires avec des activités variées.",
        details: [
            "Garde régulière ou ponctuelle",
            "Programme d'activités adapté",
            "Sorties éducatives",
            "Jeux et créativité",
            "Ambiance vacances à la maison",
        ],
    },
    {
        icon: Sparkles,
        color: "text-rose-powder",
        title: "Garde ponctuelle",
        description:
            "Besoin d'une garde en urgence ou pour une occasion spéciale ? Je suis disponible.",
        details: [
            "Weekend et jours fériés",
            "Sorties ou événements",
            "Urgences de dernière minute",
            "Adaptation à vos besoins",
            "Flexibilité maximale",
        ],
    },
    {
        icon: Baby,
        color: "text-blue-sky",
        title: "À votre domicile",
        description:
            "Tous mes services sont proposés à votre domicile, dans le respect de vos habitudes et de l'environnement familial.",
        details: [
            "Respect du rythme de l'enfant",
            "Adaptation à vos consignes",
            "Sécurité et confort",
            "Accompagnement personnalisé",
            "Bienveillance et écoute",
        ],
    },
]

export default function ServicesPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-gradient-to-b from-rose-powder/30 to-beige-light py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4 text-center lg:text-left">
                                <Heart className="text-rose-powder mx-auto lg:mx-0 animate-pulse-soft" size={64} />
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-dark animate-fade-in-up">Mes services</h1>
                                <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animate-delay-100">
                                    Des solutions de garde adaptées à vos besoins et à votre emploi du temps
                                </p>
                            </div>
                            <div className="relative animate-scale-in">
                                {/* Collage de photos d'activités */}
                                <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                                    {/* Photo 1 - Forme arrondie */}
                                    <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up">
                                        <Image
                                            src="/images/IMG-20251016-WA0006.jpg"
                                            alt="Activité créative"
                                            width={250}
                                            height={250}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>

                                    {/* Photo 2 - Forme hexagonale */}
                                    <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-100" 
                                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                                        <Image
                                            src="/images/IMG-20251016-WA0012.jpg"
                                            alt="Activité ludique"
                                            width={250}
                                            height={250}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>

                                    {/* Photo 3 - Forme blob */}
                                    <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-200" 
                                         style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                                        <Image
                                            src="/images/IMG-20251016-WA0013.jpg"
                                            alt="Activité manuelle"
                                            width={250}
                                            height={250}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>

                                    {/* Photo 4 - Forme arrondie différente */}
                                    <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-300" 
                                         style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                                        <Image
                                            src="/images/IMG-20251016-WA0015.jpg"
                                            alt="Activité éducative"
                                            width={250}
                                            height={250}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Décorations autour du collage */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-powder/20 rounded-full blur-xl animate-pulse-soft"></div>
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-sky/20 rounded-full blur-xl animate-pulse-soft animate-delay-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services détaillés */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-8 stagger-fade-in">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <Card key={index} className="overflow-hidden card-hover-lift group">
                                    <CardHeader className="bg-gradient-to-r from-rose-powder/20 to-blue-sky/20">
                                        <div className="flex items-start gap-4">
                                            <Icon className={`${service.color} group-hover:animate-bounce-gentle transition-all`} size={48} />
                                            <div className="flex-1">
                                                <CardTitle className="text-2xl mb-2 group-hover:text-rose-powder transition-colors">{service.title}</CardTitle>
                                                <CardDescription className="text-base">{service.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold text-gray-dark mb-3">Mes prestations :</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {service.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-2 animate-slide-in-left" style={{ animationDelay: `${i * 0.05}s` }}>
                                                    <span className="text-rose-powder mt-1">✓</span>
                                                    <span className="text-gray-600">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Section Tarifs */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <Euro className="text-rose-powder mx-auto mb-4 animate-pulse-soft" size={64} />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 animate-fade-in-up">Mes tarifs</h2>
                            <p className="text-lg text-gray-600 animate-fade-in-up animate-delay-100">
                                Des tarifs transparents et adaptés à vos besoins
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Tarif horaire standard */}
                            <Card className="border-2 border-rose-powder card-hover-lift group animate-scale-in">
                                <CardHeader className="text-center bg-gradient-to-br from-rose-powder/10 to-transparent pb-8">
                                    <Clock className="text-rose-powder mx-auto mb-3 group-hover:animate-bounce-gentle" size={48} />
                                    <CardTitle className="text-2xl mb-2">Tarif horaire</CardTitle>
                                    <div className="text-4xl font-bold text-rose-powder mt-4">
                                        15€<span className="text-lg text-gray-600">/heure</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Garde occasionnelle</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Soirées et week-ends</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Disponibilité flexible</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Forfait hebdomadaire */}
                            <Card className="border-2 border-blue-sky card-hover-lift group animate-scale-in animate-delay-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-rose-powder text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                                    Populaire
                                </div>
                                <CardHeader className="text-center bg-gradient-to-br from-blue-sky/10 to-transparent pb-8">
                                    <Calendar className="text-blue-sky mx-auto mb-3 group-hover:animate-bounce-gentle" size={48} />
                                    <CardTitle className="text-2xl mb-2">Forfait régulier</CardTitle>
                                    <div className="text-4xl font-bold text-blue-sky mt-4">
                                        Sur devis
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-sky mt-1">✓</span>
                                            <span>Garde régulière hebdomadaire</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-sky mt-1">✓</span>
                                            <span>Tarif préférentiel</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-sky mt-1">✓</span>
                                            <span>Planning personnalisé</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Journée complète */}
                            <Card className="border-2 border-rose-powder card-hover-lift group animate-scale-in animate-delay-200">
                                <CardHeader className="text-center bg-gradient-to-br from-rose-powder/10 to-transparent pb-8">
                                    <Sun className="text-rose-powder mx-auto mb-3 group-hover:animate-bounce-gentle" size={48} />
                                    <CardTitle className="text-2xl mb-2">Journée complète</CardTitle>
                                    <div className="text-4xl font-bold text-rose-powder mt-4">
                                        Sur devis
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Mercredis et vacances scolaires</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Activités incluses</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-rose-powder mt-1">✓</span>
                                            <span>Repas selon accord</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Informations complémentaires */}
                        <div className="space-y-6 animate-fade-in-up animate-delay-300">
                            <div className="text-center mb-8">
                                <Sparkles className="text-rose-powder mx-auto mb-3 animate-pulse-soft" size={48} />
                                <h3 className="text-2xl font-bold text-gray-dark">Informations importantes</h3>
                                <p className="text-gray-600 mt-2">Tout ce que vous devez savoir</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Avantages financiers */}
                                <Card className="border-2 border-rose-powder/30 hover:border-rose-powder transition-all duration-300 card-hover-lift group">
                                    <CardHeader className="bg-gradient-to-br from-rose-powder/5 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-3 bg-rose-powder/10 rounded-xl group-hover:bg-rose-powder/20 transition-colors">
                                                <CreditCard className="text-rose-powder" size={28} />
                                            </div>
                                            <CardTitle className="text-lg">Avantages financiers</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 pt-4">
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-rose-powder/5 transition-colors">
                                            <Euro className="text-rose-powder mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Crédit d&apos;impôt 50%</p>
                                                <p className="text-sm text-gray-600">Bénéficiez de 50% de crédit d&apos;impôt sur les sommes versées</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-rose-powder/5 transition-colors">
                                            <CreditCard className="text-rose-powder mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Paiement CESU</p>
                                                <p className="text-sm text-gray-600">Chèque Emploi Service Universel accepté</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Modalités pratiques */}
                                <Card className="border-2 border-blue-sky/30 hover:border-blue-sky transition-all duration-300 card-hover-lift group">
                                    <CardHeader className="bg-gradient-to-br from-blue-sky/5 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-3 bg-blue-sky/10 rounded-xl group-hover:bg-blue-sky/20 transition-colors">
                                                <CalendarClock className="text-blue-sky" size={28} />
                                            </div>
                                            <CardTitle className="text-lg">Modalités pratiques</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 pt-4">
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-blue-sky/5 transition-colors">
                                            <Clock className="text-blue-sky mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Réservation</p>
                                                <p className="text-sm text-gray-600">Prévoir 48h à l&apos;avance pour les gardes occasionnelles</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-blue-sky/5 transition-colors">
                                            <XCircle className="text-blue-sky mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Annulation gratuite</p>
                                                <p className="text-sm text-gray-600">Jusqu&apos;à 24h avant la prestation</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Déplacements */}
                                <Card className="border-2 border-rose-powder/30 hover:border-rose-powder transition-all duration-300 card-hover-lift group">
                                    <CardHeader className="bg-gradient-to-br from-rose-powder/5 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-3 bg-rose-powder/10 rounded-xl group-hover:bg-rose-powder/20 transition-colors">
                                                <MapPin className="text-rose-powder" size={28} />
                                            </div>
                                            <CardTitle className="text-lg">Zone d&apos;intervention</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-rose-powder/5 transition-colors">
                                            <MapPin className="text-rose-powder mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Déplacements</p>
                                                <p className="text-sm text-gray-600">La Rochelle et ses environs - Voir la carte de la zone</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Devis personnalisé */}
                                <Card className="border-2 border-blue-sky/30 hover:border-blue-sky transition-all duration-300 card-hover-lift group">
                                    <CardHeader className="bg-gradient-to-br from-blue-sky/5 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-3 bg-blue-sky/10 rounded-xl group-hover:bg-blue-sky/20 transition-colors">
                                                <FileText className="text-blue-sky" size={28} />
                                            </div>
                                            <CardTitle className="text-lg">Devis sur mesure</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-blue-sky/5 transition-colors">
                                            <FileText className="text-blue-sky mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <p className="font-semibold text-gray-dark text-sm">Gratuit et sans engagement</p>
                                                <p className="text-sm text-gray-600">Demandez votre devis personnalisé par email ou téléphone</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 bg-gray-soft">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center animate-scale-in">
                        <h2 className="text-3xl font-bold mb-4">Besoin d&apos;une garde pour vos enfants ?</h2>
                        <p className="text-gray-600 mb-6">
                            N&apos;hésitez pas à me contacter pour discuter de vos besoins. Je serai ravie de vous accompagner !
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