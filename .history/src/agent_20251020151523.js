// 1. IMPORTER LE SDK EN HAUT DE VOTRE FICHIER
import { query, tool } from "@anthropic-ai/claude-agent-sdk";

// 2. CRÉER UNE FONCTION ASYNCHRONE POUR UTILISER LE SDK
async function main() {
  try {
    // 3. UTILISER query() POUR POSER UNE QUESTION À CLAUDE
    const result = await query({
      prompt: "Écris une fonction JavaScript qui calcule la factorielle d'un nombre",
    });

    console.log("Réponse de Claude :");
    console.log(result);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

// 4. APPELER LA FONCTION
main();

// ============================================
// EXEMPLE 2 : AVEC DES OPTIONS
// ============================================

async function exempleAvecOptions() {
  const result = await query({
    prompt: "Explique le concept de closure en JavaScript",
    options: {
      model: "claude-sonnet-4-5",
      // Vous pouvez ajouter d'autres options ici
    },
  });

  console.log(result);
}

// ============================================
// EXEMPLE 3 : CRÉER UN OUTIL PERSONNALISÉ
// ============================================

const calculerFactorielle = tool({
  name: "calculer_factorielle",
  description: "Calcule la factorielle d'un nombre",
  inputSchema: {
    type: "object",
    properties: {
      nombre: {
        type: "number",
        description: "Le nombre dont vous voulez la factorielle",
      },
    },
    required: ["nombre"],
  },
  execute: ({ nombre }) => {
    if (nombre < 0) return "La factorielle n'existe pas pour les nombres négatifs";
    if (nombre === 0 || nombre === 1) return 1;
    let resultat = 1;
    for (let i = 2; i <= nombre; i++) {
      resultat *= i;
    }
    return resultat;
  },
});

async function exempleAvecOutil() {
  const result = await query({
    prompt: "Calcule la factorielle de 5",
    tools: [calculerFactorielle],
  });

  console.log(result);
}