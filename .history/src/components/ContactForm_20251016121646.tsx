"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import { sendEmailViaMailto, type ContactFormData } from "@/lib/email"

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    sendEmailViaMailto(formData)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1000)
  }

  return (
    <Card className="border-2 border-rose-powder">
      <CardHeader>
        <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
        <CardDescription>
          Remplissez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Votre nom <span className="text-rose-powder">*</span>
            </label>
            <Input
              id="name"
              type="text"
              required
              placeholder="Prénom et nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Votre email <span className="text-rose-powder">*</span>
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="votre.email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Votre téléphone
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Votre message <span className="text-rose-powder">*</span>
            </label>
            <Textarea
              id="message"
              required
              placeholder="Décrivez votre besoin, vos disponibilités, l'âge de vos enfants..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="mr-2" size={18} />
            {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
