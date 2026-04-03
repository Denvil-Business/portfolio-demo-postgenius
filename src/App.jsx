import { useState, useRef, useEffect, useCallback } from 'react'
import { LanguageProvider, useLanguage } from './i18n'
import { generatePost, examples } from './templates'

const TONE_KEYS = ['professional', 'inspiring', 'storytelling', 'humorous']
const TONE_EMOJIS = ['💼', '✨', '📖', '😄']
const LENGTH_KEYS = ['court', 'moyen', 'long']
const EXAMPLE_ICONS = ['💼', '🧠', '😂']

function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center rounded-md border border-linkedin/30 overflow-hidden text-xs font-semibold">
      <button
        onClick={() => setLang('fr')}
        className={`px-2.5 py-1 transition-colors ${lang === 'fr' ? 'bg-linkedin text-white' : 'text-text-secondary hover:text-linkedin'}`}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-linkedin text-white' : 'text-text-secondary hover:text-linkedin'}`}
      >
        EN
      </button>
    </div>
  )
}

function AppContent() {
  const { t, lang } = useLanguage()
  const [sujet, setSujet] = useState('')
  const [ton, setTon] = useState('professional')
  const [longueur, setLongueur] = useState('court')
  const [emojis, setEmojis] = useState(false)
  const [cta, setCta] = useState(true)
  const [post, setPost] = useState('')
  const [displayedPost, setDisplayedPost] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [generated, setGenerated] = useState(0)
  const typewriterRef = useRef(null)
  const previewRef = useRef(null)

  const typewrite = useCallback((fullText) => {
    if (typewriterRef.current) clearInterval(typewriterRef.current)
    let i = 0
    setDisplayedPost('')
    typewriterRef.current = setInterval(() => {
      i += 2
      if (i >= fullText.length) {
        setDisplayedPost(fullText)
        clearInterval(typewriterRef.current)
      } else {
        setDisplayedPost(fullText.slice(0, i))
      }
    }, 12)
  }, [])

  useEffect(() => {
    return () => { if (typewriterRef.current) clearInterval(typewriterRef.current) }
  }, [])

  function handleGenerate() {
    if (!sujet.trim()) return
    setLoading(true)
    setDisplayedPost('')
    setPost('')
    setCopied(false)

    setTimeout(() => {
      const g = generatePost({ lang, sujet: sujet.trim(), ton, longueur, emojis, cta })
      setPost(g)
      setLoading(false)
      setGenerated((c) => c + 1)
      typewrite(g)
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 1500 + Math.random() * 1000)
  }

  function handleCopy() {
    navigator.clipboard.writeText(post)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleExample(ex) {
    setSujet(ex.config.sujet)
    setTon(ex.config.ton)
    setLongueur(ex.config.longueur)
    setEmojis(ex.config.emojis)
    setCta(ex.config.cta)
    setLoading(true)
    setDisplayedPost('')
    setPost('')
    setCopied(false)

    setTimeout(() => {
      const g = generatePost({ lang, ...ex.config })
      setPost(g)
      setLoading(false)
      setGenerated((c) => c + 1)
      typewrite(g)
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 1500 + Math.random() * 1000)
  }

  const currentExamples = examples[lang] || examples.fr
  const generatedLabel = generated === 1
    ? t('header.generatedOne')
    : t('header.generatedMany').replace('{n}', generated)

  const mockActions = [
    { icon: '👍', label: t('mock.like'), count: '42' },
    { icon: '💬', label: t('mock.comment'), count: '12' },
    { icon: '🔄', label: t('mock.share'), count: '8' },
    { icon: '📤', label: t('mock.send'), count: '' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-linkedin/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Header */}
      <header className="relative bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 text-center relative">
          <div className="absolute top-4 right-6">
            <LangSwitcher />
          </div>
          <div className="flex items-center justify-center mb-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-text">Post</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-linkedin-light">Genius</span>
            </h1>
          </div>
          <p className="text-text-secondary text-sm md:text-base font-light max-w-md mx-auto">
            {t('header.subtitle')}
          </p>
          {generated > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-linkedin/10 border border-linkedin/20 text-linkedin text-xs font-medium px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-linkedin animate-pulse" />
              {generatedLabel}
            </div>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-6 md:p-8 h-fit shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-linkedin to-linkedin-dark rounded-full" />
              <h2 className="text-lg font-semibold text-text">{t('form.title')}</h2>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-secondary mb-2">{t('form.subjectLabel')}</label>
              <input
                type="text"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
                placeholder={t('form.subjectPlaceholder')}
                className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder-text-muted outline-none focus:border-linkedin focus:ring-2 focus:ring-linkedin/15 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
            </div>

            {/* Tone */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-secondary mb-2">{t('form.toneLabel')}</label>
              <div className="grid grid-cols-2 gap-2">
                {TONE_KEYS.map((key, i) => (
                  <button
                    key={key}
                    onClick={() => setTon(key)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 flex items-center justify-center gap-2 ${
                      ton === key
                        ? 'border-linkedin bg-linkedin/10 text-linkedin shadow-sm'
                        : 'border-border text-text-secondary hover:border-linkedin/30 hover:text-text hover:bg-surface'
                    }`}
                  >
                    <span>{TONE_EMOJIS[i]}</span>
                    {t(`tones.${key}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Length */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-secondary mb-2">{t('form.lengthLabel')}</label>
              <div className="grid grid-cols-3 gap-2">
                {LENGTH_KEYS.map((key) => (
                  <button
                    key={key}
                    onClick={() => setLongueur(key)}
                    className={`px-3 py-3 rounded-xl text-center border transition-all duration-200 ${
                      longueur === key
                        ? 'border-linkedin bg-linkedin/10 text-linkedin shadow-sm'
                        : 'border-border text-text-secondary hover:border-linkedin/30 hover:text-text hover:bg-surface'
                    }`}
                  >
                    <span className="text-sm font-medium block">{t(`lengths.${key}.label`)}</span>
                    <span className="text-xs opacity-60">{t(`lengths.${key}.desc`)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mb-8 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group bg-surface hover:bg-surface/80 rounded-xl px-4 py-3 border border-transparent hover:border-border transition-all">
                <input
                  type="checkbox"
                  checked={emojis}
                  onChange={(e) => setEmojis(e.target.checked)}
                  className="w-5 h-5 rounded border-border text-linkedin focus:ring-linkedin/20 accent-linkedin"
                />
                <div>
                  <span className="text-sm text-text font-medium block">{t('form.emojisLabel')}</span>
                  <span className="text-xs text-text-secondary">{t('form.emojisDesc')}</span>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group bg-surface hover:bg-surface/80 rounded-xl px-4 py-3 border border-transparent hover:border-border transition-all">
                <input
                  type="checkbox"
                  checked={cta}
                  onChange={(e) => setCta(e.target.checked)}
                  className="w-5 h-5 rounded border-border text-linkedin focus:ring-linkedin/20 accent-linkedin"
                />
                <div>
                  <span className="text-sm text-text font-medium block">{t('form.ctaLabel')}</span>
                  <span className="text-xs text-text-secondary">{t('form.ctaDesc')}</span>
                </div>
              </label>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={!sujet.trim() || loading}
              className="w-full bg-linkedin hover:bg-linkedin-dark text-white py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-linkedin/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none relative overflow-hidden group"
            >
              <span className="relative z-10">{loading ? t('form.generating') : t('form.generate')}</span>
              <div className="absolute inset-0 bg-linkedin-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Preview */}
          <div ref={previewRef} className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-linkedin to-linkedin-dark rounded-full" />
                  <h2 className="text-lg font-semibold text-text">{t('preview.title')}</h2>
                </div>
                {post && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                        copied
                          ? 'border-green-500/30 bg-green-50 text-green-600'
                          : 'border-border text-text-secondary hover:bg-surface hover:border-linkedin/30'
                      }`}
                    >
                      {copied ? (
                        <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>{t('preview.copied')}</>
                      ) : (
                        <><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/></svg>{t('preview.copy')}</>
                      )}
                    </button>
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border border-border text-text-secondary hover:bg-surface hover:border-linkedin/30 transition-all disabled:opacity-30"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg>
                      {t('preview.regenerate')}
                    </button>
                  </div>
                )}
              </div>

              {/* LinkedIn post mockup */}
              <div className="bg-white rounded-xl overflow-hidden border border-border shadow-md">
                {/* Post header */}
                <div className="p-4 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-surface"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text">Thomas Lefèvre</p>
                    <p className="text-xs text-text-secondary">{t('mock.role')}</p>
                    <p className="text-xs text-text-muted">{t('mock.now')} • 🌐</p>
                  </div>
                </div>

                {/* Post content */}
                <div className="px-4 pb-4">
                  {loading ? (
                    <div className="flex flex-col items-center gap-4 py-16">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-linkedin/20 border-t-linkedin animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-5 h-5 text-linkedin" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-text-secondary font-medium">{t('preview.loading')}</span>
                    </div>
                  ) : displayedPost ? (
                    <p className="text-sm text-text leading-relaxed whitespace-pre-line">
                      {displayedPost}
                      <span className="inline-block w-0.5 h-4 bg-linkedin animate-pulse ml-0.5 align-text-bottom" />
                    </p>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#e8f0fe] to-[#d0e1f9] rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
                        <svg className="w-10 h-10 text-linkedin/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </div>
                      <p className="text-text-secondary text-sm font-medium">{t('preview.empty')}</p>
                      <p className="text-text-muted text-xs mt-1">{t('preview.emptyHint')}</p>
                    </div>
                  )}
                </div>

                {/* Post actions (LinkedIn style) */}
                {displayedPost && !loading && (
                  <div className="border-t border-border px-2 py-1.5 flex justify-around">
                    {mockActions.map((action) => (
                      <button key={action.label} className="text-xs text-text-secondary font-medium py-2.5 px-3 rounded-lg hover:bg-surface transition-colors flex items-center gap-1">
                        {action.icon} {action.label}
                        {action.count && <span className="text-text-muted">({action.count})</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <section className="mt-16 md:mt-20">
          <div className="text-center mb-10">
            <span className="text-linkedin text-xs font-semibold tracking-widest uppercase">{t('examples.sectionLabel')}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text mt-2 mb-3">{t('examples.title')}</h2>
            <p className="text-text-secondary text-sm">{t('examples.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentExamples.map((ex, i) => (
              <button
                key={ex.label}
                onClick={() => handleExample(ex)}
                disabled={loading}
                className="relative bg-card border border-border rounded-xl p-6 text-left hover:border-linkedin/40 hover:shadow-md transition-all duration-300 group disabled:opacity-50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-linkedin/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-linkedin/10 text-linkedin flex items-center justify-center group-hover:bg-linkedin group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-linkedin/20 text-lg">
                      {EXAMPLE_ICONS[i]}
                    </span>
                    <div>
                      <h3 className="font-semibold text-text text-sm group-hover:text-linkedin transition-colors">{ex.label}</h3>
                      <p className="text-text-secondary text-xs mt-0.5">
                        {t(`tones.${ex.config.ton}`)} • {t(`lengths.${ex.config.longueur}.label`)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {ex.config.emojis && <span className="text-xs bg-surface text-text-secondary px-2 py-0.5 rounded-md">{t('form.emojisLabel')}</span>}
                    {ex.config.cta && <span className="text-xs bg-surface text-text-secondary px-2 py-0.5 rounded-md">CTA</span>}
                    <span className="ml-auto text-transparent group-hover:text-linkedin text-xs font-medium transition-colors flex items-center gap-1">
                      {t('examples.try')}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pb-10 text-center border-t border-border pt-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            <span className="text-text-secondary text-sm font-semibold">Post</span><span className="text-linkedin text-sm font-semibold">Genius</span>
          </div>
          <p className="text-text-muted text-xs">{t('footer.copy')}</p>
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
