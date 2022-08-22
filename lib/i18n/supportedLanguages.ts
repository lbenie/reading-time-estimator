const SupportedLanguages = ['en', 'fr', 'es', 'cn', 'ja', 'de'] as const
type SupportedLanguages = typeof SupportedLanguages[number]

export type { SupportedLanguages }
