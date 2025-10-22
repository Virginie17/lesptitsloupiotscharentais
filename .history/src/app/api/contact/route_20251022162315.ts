import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Envoi de l'email
    const data = await resend.emails.send({
      from: 'Les Ptits Loupiots Charentais <contact@lesptitsloupiotscharentais.fr>',
      to: ['lesptitsloupiotscharentais@gmail.com'],
      replyTo: email,
      subject: `Nouveau message : ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #FADADD 0%, #CDE7F0 100%);
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .header h1 {
                margin: 0;
                color: #333;
                font-size: 24px;
              }
              .content {
                background: #fff;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: #f9f9f9;
                border-left: 4px solid #FADADD;
                border-radius: 5px;
              }
              .field strong {
                display: block;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .field p {
                margin: 0;
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: #fff;
                padding: 20px;
                border: 1px solid #e0e0e0;
                border-radius: 5px;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 14px;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background: #FADADD;
                color: #333;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 15px;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🌸 Nouvelle demande de contact</h1>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-bottom: 25px;">
                Vous avez reçu un nouveau message via le formulaire de contact de votre site web.
              </p>
              
              <div class="field">
                <strong>Nom complet</strong>
                <p>${name}</p>
              </div>
              
              <div class="field">
                <strong>Adresse email</strong>
                <p><a href="mailto:${email}" style="color: #FADADD; text-decoration: none;">${email}</a></p>
              </div>
              
              ${phone ? `
              <div class="field">
                <strong>Téléphone</strong>
                <p><a href="tel:${phone}" style="color: #FADADD; text-decoration: none;">${phone}</a></p>
              </div>
              ` : ''}
              
              <div class="field">
                <strong>Sujet</strong>
                <p>${subject}</p>
              </div>
              
              <div class="field">
                <strong>Message</strong>
                <div class="message-box">${message}</div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="button">Répondre directement</a>
              </div>
            </div>
            
            <div class="footer">
              <p>
                <strong>Les Ptits Loupiots Charentais</strong><br>
                Garde d'enfants à domicile à La Rochelle<br>
                <a href="https://lesptitsloupiotscharentais.fr" style="color: #FADADD; text-decoration: none;">
                  lesptitsloupiotscharentais.fr
                </a>
              </p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email envoyé avec succès',
        id: data.id 
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
