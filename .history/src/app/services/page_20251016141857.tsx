import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Calendar, Clock, Heart, Moon, Sun, Sparkles } from "lucide-react"
import Link from "next/link"

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Calendar, Clock, Heart, Moon, Sun, Sparkles } from "lucide-react"
import Link from "next/link"

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
			"Tous mes services sont proposés