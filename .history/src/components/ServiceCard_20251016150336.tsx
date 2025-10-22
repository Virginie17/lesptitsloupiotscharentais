import { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

export function ServiceCard({ icon: Icon, title, description, color = "text-rose-powder" }: ServiceCardProps) {
  return (
    <Card className="card-hover-lift group">
      <CardHeader>
        <Icon className={`${color} mb-2 group-hover:animate-bounce-gentle transition-all`} size={40} />
        <CardTitle className="group-hover:text-rose-powder transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
