export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export function sendEmailViaMailto(data: ContactFormData): void {
  const subject = encodeURIComponent("Demande de contact - Les Ptits Loupiots Charentais")
  const body = encodeURIComponent(
    `Nom: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Téléphone: ${data.phone || "Non renseigné"}\n\n` +
    `Message:\n${data.message}`
  )
  
  window.location.href = `mailto:lesptitsloupiotscharentais@gmail.com?subject=${subject}&body=${body}`
}

// Pour une future intégration avec EmailJS
export async function sendEmailWithEmailJS(data: ContactFormData): Promise<boolean> {
  // À implémenter avec EmailJS
  // import emailjs from '@emailjs/browser'
  // emailjs.init("YOUR_PUBLIC_KEY")
  
  try {
    // const response = await emailjs.send(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   {
    //     from_name: data.name,
    //     from_email: data.email,
    //     phone: data.phone,
    //     message: data.message,
    //   }
    // )
    // return response.status === 200
    return true
  } catch (error) {
    console.error("Erreur d'envoi:", error)
    return false
  }
}
