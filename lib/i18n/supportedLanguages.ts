const SupportedLanguages = ["en", "fr", "es", "cn", "ja"] as const;
type SupportedLanguages = typeof SupportedLanguages[number];

export type { SupportedLanguages };
