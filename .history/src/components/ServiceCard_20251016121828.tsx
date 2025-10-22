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
    <Card className="hover:scale-105 transition-transform">
      <CardHeader>
        <Icon className={`${color} mb-2`} size={40} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
