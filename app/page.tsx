import { Fragment } from "react";

type Step = {
  title: string;
  description: string;
  hints: string[];
};

const steps: Step[] = [
  {
    title: "Décris ton objectif",
    description:
      "Explique ce que tu veux obtenir et ajoute le contexte important (public ciblé, ton, contraintes techniques).",
    hints: [
      "Commence par le résultat attendu : « Je veux un plan marketing en 5 étapes… »",
      "Précise le niveau de détail souhaité (ex. : résumé, tutoriel, script).",
      "Mentionne les outils ou formats imposés (Next.js, Markdown, Tableau, etc.)."
    ]
  },
  {
    title: "Affûte la réponse",
    description:
      "Une fois la première réponse générée, dirige l’assistant en posant des questions ciblées.",
    hints: [
      "Demande des exemples concrets ou des cas limites.",
      "Exige un format utilisable (code exécutable, checklist, présentation).",
      "Fais réviser : « Peux-tu relire et signaler les pièges ? »"
    ]
  },
  {
    title: "Intègre et itère",
    description:
      "Teste la proposition, partage le résultat et redemande une version améliorée.",
    hints: [
      "Indique ce qui fonctionne et ce qui bloque pour recevoir des correctifs ciblés.",
      "Combine plusieurs prompts courts plutôt qu’un seul message énorme.",
      "Termine par une synthèse pour garder une trace claire."
    ]
  }
];

const samplePrompts = [
  {
    title: "Prototype d’interface",
    prompt:
      "Tu es un expert en UX. Conçois une page d’accueil pour une appli de coaching sportif avec une mise en page en sections et le contenu de chaque bloc."
  },
  {
    title: "Assistance développeur",
    prompt:
      "Agis comme un senior Next.js. Prouve la solution à ce bug d’API (logs ci-dessous) et propose un test d’intégration pour éviter la régression."
  },
  {
    title: "Formation rapide",
    prompt:
      "Explique-moi en 5 minutes comment fonctionne l’authentification Supabase, avec un plan clair et un exemple de flux React."
  }
];

const badges = [
  "Planifie → Construis → Valide",
  "Sois précis mais pragmatique",
  "Itère sans hésiter"
];

export default function Page() {
  return (
    <main>
      <header className="grid" style={{ gap: "1rem" }}>
        <div className="badge-row">
          {badges.map((badge) => (
            <span className="badge" key={badge}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {badge}
            </span>
          ))}
        </div>
        <h1>Comment te servir de Codex efficacement</h1>
        <p>
          Ton assistant IA peut t&apos;aider à prototyper, rédiger, coder et
          brainstormer. Voici une méthode claire pour transformer tes idées en
          résultats concrets, rapidement.
        </p>
      </header>

      <section className="grid">
        {steps.map((step, index) => (
          <article className="section-card" key={step.title}>
            <h2>
              Étape {index + 1} · {step.title}
            </h2>
            <p>{step.description}</p>
            <ul>
              {step.hints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-card">
        <h2>Prompts prêts à l’emploi</h2>
        <div className="grid">
          {samplePrompts.map(({ title, prompt }) => (
            <article className="section-card" key={title}>
              <strong>{title}</strong>
              <p>{prompt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>Structure d’un bon message</h2>
        <p>
          Suis la structure <strong>Contexte → Objectif → Contraintes → Livrable</strong> pour guider
          l’assistant.
        </p>
        <ul>
          <li>
            <strong>Contexte :</strong> qui es-tu, dans quel cadre travailles-tu ?
          </li>
          <li>
            <strong>Objectif :</strong> quel résultat veux-tu obtenir ?
          </li>
          <li>
            <strong>Contraintes :</strong> limites de temps, de ton, d’outils ?
          </li>
          <li>
            <strong>Livrable :</strong> format final attendu (code, liste, texte marketing…).
          </li>
        </ul>
        <p>
          Exemple :{" "}
          <code>
            Je suis PM. Crée un brief Notion en français pour lancer une appli
            météo personnalisée, avec objectifs, public, MVP et métriques.
          </code>
        </p>
      </section>

      <footer className="cta">
        <a href="https://platform.openai.com/" target="_blank" rel="noreferrer">
          Explorer toutes les capacités
        </a>
        <a
          href="https://platform.openai.com/docs/guides/prompt-engineering"
          target="_blank"
          rel="noreferrer"
          className="secondary"
        >
          Apprendre le prompt engineering
        </a>
      </footer>
    </main>
  );
}
