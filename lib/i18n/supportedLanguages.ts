export const supportedLanguages = ['en', 'fr', 'es', 'cn', 'ja', 'de'] as const

export type SupportedLanguages = typeof supportedLanguages[number]
