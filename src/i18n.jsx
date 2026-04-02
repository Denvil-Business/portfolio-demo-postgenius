import { createContext, useContext, useState, useCallback } from 'react'

const translations = {
  fr: {
    header: {
      subtitle: "Créez des posts LinkedIn viraux en 30 secondes grâce à l'IA",
      generatedOne: '1 post généré',
      generatedMany: '{n} posts générés',
    },
    form: {
      title: 'Configurez votre post',
      subjectLabel: 'Sujet du post',
      subjectPlaceholder: "Ex: le télétravail, l'IA en entreprise, le leadership...",
      toneLabel: 'Ton',
      lengthLabel: 'Longueur',
      emojisLabel: 'Ajouter des emojis',
      emojisDesc: 'Rend le post plus engageant et visuel',
      ctaLabel: 'Ajouter un call-to-action',
      ctaDesc: 'Encourage les commentaires et le partage',
      generating: "L'IA génère votre post...",
      generate: 'Générer mon post ✨',
    },
    tones: {
      professional: 'Professionnel',
      inspiring: 'Inspirant',
      storytelling: 'Storytelling',
      humorous: 'Humoristique',
    },
    lengths: {
      court: { label: 'Court', desc: '3-5 lignes' },
      moyen: { label: 'Moyen', desc: '8-12 lignes' },
      long: { label: 'Long', desc: '15-20 lignes' },
    },
    preview: {
      title: 'Prévisualisation',
      copied: 'Copié !',
      copy: 'Copier',
      regenerate: 'Régénérer',
      loading: "L'IA génère votre post...",
      empty: 'Votre post apparaîtra ici',
      emptyHint: 'Remplissez le formulaire et cliquez sur Générer',
    },
    mock: {
      role: 'CEO & Fondateur | Stratégie digitale',
      now: 'Maintenant',
      like: "J'aime",
      comment: 'Commenter',
      share: 'Partager',
      send: 'Envoyer',
    },
    examples: {
      sectionLabel: 'Inspirez-vous',
      title: 'Essayez un exemple',
      desc: 'Cliquez sur un exemple pour voir la magie opérer',
      try: 'Essayer',
    },
    footer: {
      copy: "© 2025 PostGenius. Démo — Aucune IA réelle n'est utilisée.",
    },
  },
  en: {
    header: {
      subtitle: 'Create viral LinkedIn posts in 30 seconds with AI',
      generatedOne: '1 post generated',
      generatedMany: '{n} posts generated',
    },
    form: {
      title: 'Configure your post',
      subjectLabel: 'Post topic',
      subjectPlaceholder: 'E.g.: remote work, AI in business, leadership...',
      toneLabel: 'Tone',
      lengthLabel: 'Length',
      emojisLabel: 'Add emojis',
      emojisDesc: 'Makes the post more engaging and visual',
      ctaLabel: 'Add a call-to-action',
      ctaDesc: 'Encourages comments and sharing',
      generating: 'AI is generating your post...',
      generate: 'Generate my post ✨',
    },
    tones: {
      professional: 'Professional',
      inspiring: 'Inspiring',
      storytelling: 'Storytelling',
      humorous: 'Humorous',
    },
    lengths: {
      court: { label: 'Short', desc: '3-5 lines' },
      moyen: { label: 'Medium', desc: '8-12 lines' },
      long: { label: 'Long', desc: '15-20 lines' },
    },
    preview: {
      title: 'Preview',
      copied: 'Copied!',
      copy: 'Copy',
      regenerate: 'Regenerate',
      loading: 'AI is generating your post...',
      empty: 'Your post will appear here',
      emptyHint: 'Fill in the form and click Generate',
    },
    mock: {
      role: 'CEO & Founder | Digital Strategy',
      now: 'Now',
      like: 'Like',
      comment: 'Comment',
      share: 'Share',
      send: 'Send',
    },
    examples: {
      sectionLabel: 'Get inspired',
      title: 'Try an example',
      desc: 'Click an example to see the magic happen',
      try: 'Try',
    },
    footer: {
      copy: '© 2025 PostGenius. Demo — No real AI is used.',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => (navigator.language || navigator.userLanguage || '').startsWith('fr') ? 'fr' : 'en'
  )

  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      if (val == null) return key
      val = val[k]
    }
    return val ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
