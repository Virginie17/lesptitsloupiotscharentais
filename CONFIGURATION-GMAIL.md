# 📧 Configuration Gmail pour Nodemailer

## Étapes pour générer un mot de passe d'application Gmail

### 1️⃣ Activer la validation en 2 étapes (si ce n'est pas déjà fait)

1. Allez sur : https://myaccount.google.com/security
2. Dans la section **"Comment vous connecter à Google"**
3. Cliquez sur **"Validation en 2 étapes"**
4. Suivez les instructions pour l'activer (SMS ou application Google Authenticator)

### 2️⃣ Créer un mot de passe d'application

1. Une fois la validation en 2 étapes activée, retournez sur : https://myaccount.google.com/security
2. Cliquez sur **"Validation en 2 étapes"**
3. Descendez jusqu'à **"Mots de passe d'application"** (en bas de la page)
4. Cliquez dessus
5. Sélectionnez :
   - **Application** : "Autre (nom personnalisé)"
   - **Nom** : "Les Ptits Loupiots Site Web"
6. Cliquez sur **"Générer"**
7. Google vous affiche un mot de passe de 16 caractères (exemple : `abcd efgh ijkl mnop`)
8. **COPIEZ CE MOT DE PASSE** (vous ne pourrez plus le voir après)

### 3️⃣ Ajouter le mot de passe dans .env.local

Ouvrez le fichier `.env.local` et remplacez :

```bash
GMAIL_APP_PASSWORD=votre_mot_de_passe_application_ici
```

Par :

```bash
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

⚠️ **Important** : Copiez le mot de passe **SANS LES ESPACES** (enlevez les espaces entre les groupes de 4 lettres)

### 4️⃣ Ajouter sur Vercel

Pour que ça fonctionne en production :

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet **lesptitsloupiotscharentais**
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez **2 variables** :

**Variable 1 :**
- Name: `GMAIL_USER`
- Value: `lesptitsloupiotscharentais@gmail.com`
- Environments: ✅ Production ✅ Preview ✅ Development

**Variable 2 :**
- Name: `GMAIL_APP_PASSWORD`
- Value: `abcdefghijklmnop` (votre mot de passe d'application)
- Environments: ✅ Production ✅ Preview ✅ Development

5. Cliquez sur **Save**

### 5️⃣ Redéployer

Après avoir ajouté les variables sur Vercel :

```bash
git add .
git commit -m "Migration Resend vers Nodemailer avec Gmail"
git push
```

Vercel redéploiera automatiquement avec les nouvelles variables.

### 6️⃣ Tester

1. Allez sur https://lesptitsloupiotscharentais.fr/contact
2. Remplissez le formulaire
3. Envoyez
4. Vérifiez votre boîte Gmail **lesptitsloupiotscharentais@gmail.com**
5. L'email devrait arriver dans les **10 secondes**

---

## 🔧 Dépannage

### "Invalid login" ou "Authentification failed"
- Vérifiez que la validation en 2 étapes est bien activée
- Régénérez un nouveau mot de passe d'application
- Copiez-le SANS les espaces

### "Less secure app access"
- N'utilisez PAS le paramètre "Autoriser les applications moins sécurisées" (obsolète)
- Utilisez UNIQUEMENT les mots de passe d'application (c'est la méthode sécurisée)

### Les emails arrivent en spam
- Normal au début, marquez-les comme "Non spam"
- Configurez SPF/DKIM sur votre domaine (avancé, pas obligatoire)

### Limite d'envoi Gmail
- Gmail gratuit : **500 emails / jour** (largement suffisant pour votre usage)
- Si vous dépassez, Gmail bloque temporairement l'envoi

---

## ✅ Avantages de Nodemailer + Gmail

- ✅ **Gratuit** : pas de limite de domaines
- ✅ **Fiable** : délivrabilité excellente avec Gmail
- ✅ **Simple** : configuration en 5 minutes
- ✅ **Sécurisé** : authentification avec mot de passe d'application
- ✅ **Réception immédiate** : dans votre boîte Gmail habituelle

---

**Besoin d'aide ?** Contactez btovdeveloppement
