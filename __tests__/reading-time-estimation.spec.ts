import { bn } from "../lib/i18n/bn.js";
import { de } from "../lib/i18n/de.js";
import { en } from "../lib/i18n/en.js";
import { es } from "../lib/i18n/es.js";
import { fr } from "../lib/i18n/fr.js";
import { it as itLocale } from "../lib/i18n/it.js";
import { ja } from "../lib/i18n/ja.js";
import { ptBr } from "../lib/i18n/pt-br.js";
import { ru } from "../lib/i18n/ru.js";
import { tr } from "../lib/i18n/tr.js";
import type { I18n } from "../lib/i18n/types.js";
import { vi as viLocale } from "../lib/i18n/vi.js";
import { zhCn } from "../lib/i18n/zh-cn.js";
import { zhTw } from "../lib/i18n/zh-tw.js";
import { readingTime } from "../lib/reading-time-estimator.js";

const map = <T extends Record<string, I18n>>(m: T) => m;

const longEnglish = "I never took the time to properly build my website even though I am a Frontend Developer.";
const french = "Reading Time Estimator a été créé pour fournir une estimation du temps de lecture d'un article.";
const chineseSimplified = "中文 多来几个字";
const chineseTraditional = "繁體中文，海上生明月，天涯共此時。";
const japanese = "どういたしまして。";
const withHtml = "<p>Hello <strong>world</strong> &nbsp; test</p>";
const bangla = "Riḍiṁ ṭā'ima ēsṭimēṭara tairi karā haẏēchila ēkaṭi ārṭikēla";

describe("readingTime (tree-shakable + options)", () => {
  test("english default (no options => uses defaults, falls back to en)", () => {
    const result = readingTime(longEnglish);
    expect("language" in result).toBe(false);

    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.text.endsWith(en.less) || result.text.endsWith(en.default)).toBe(true);
  });

  test("english explicit wordsPerMinute small -> forces > 1 minute string", () => {
    const r = readingTime(longEnglish, {
      wordsPerMinute: 5,
      language: "en",
      translations: map({ en }),
    });
    expect(r.minutes).toBeGreaterThanOrEqual(1);
    expect(r.text.endsWith(en.default)).toBe(true);
  });

  test("english fast WPM -> less than a minute string", () => {
    const r = readingTime(longEnglish, {
      wordsPerMinute: 1000,
      language: "en",
      translations: map({ en }),
    });
    expect(r.minutes).toBe(0);
    expect(r.text).toBe(en.less);
  });

  test("french locale present in map", () => {
    const r = readingTime(french, {
      language: "fr",
      translations: map({ fr }),
    });
    expect(r.text.endsWith(fr.less) || r.text.endsWith(fr.default)).toBe(true);
  });

  test("french locale missing from map -> falls back to english", () => {
    const r = readingTime(french, {
      language: "fr",
      translations: map({ en }),
    });
    expect(r.text.endsWith(en.less) || r.text.endsWith(en.default)).toBe(true);
  });

  test("simplified chinese segmentation + custom map", () => {
    const r = readingTime(chineseSimplified, {
      language: "zh-cn",
      wordsPerMinute: 2,
      translations: map({ "zh-cn": zhCn }),
    });
    expect(r.words).toBeGreaterThan(0);
    expect(r.text.endsWith(zhCn.default) || r.text.endsWith(zhCn.less)).toBe(true);
  });

  test("traditional chinese segmentation", () => {
    const r = readingTime(chineseTraditional, {
      language: "zh-tw",
      wordsPerMinute: 3,
      translations: map({ "zh-tw": zhTw }),
    });
    expect(r.text.endsWith(zhTw.default) || r.text.endsWith(zhTw.less)).toBe(true);
  });

  test("alias cn -> zh-cn fallback behavior when alias not provided but zh-cn is", () => {
    const r = readingTime(chineseSimplified, {
      // biome-ignore lint/suspicious/noExplicitAny: Testing invalid language code behavior
      language: "cn" as any,
      translations: map({ "zh-cn": zhCn }),
    });
    // Because 'cn' not found, falls back to en (as per current resolve logic)
    expect(r.text.endsWith(en.less) || r.text.endsWith(en.default)).toBe(true);
  });

  test("japanese segmentation minimal", () => {
    const r = readingTime(japanese, {
      language: "ja",
      translations: map({ ja }),
    });
    expect(r.words).toBeGreaterThan(0);
    expect(r.text.endsWith(ja.less) || r.text.endsWith(ja.default)).toBe(true);
  });

  test("bangla script handling", () => {
    const r = readingTime(bangla, {
      language: "bn",
      translations: map({ bn }),
    });
    expect(r.words).toBeGreaterThan(0);
    expect(r.text.endsWith(bn.less) || r.text.endsWith(bn.default)).toBe(true);
  });

  test("multiple locales in one map (fr + es)", () => {
    const rEs = readingTime(french, {
      language: "es",
      translations: map({ es, fr }), // order doesn’t matter
    });
    expect(rEs.text.endsWith(es.less) || rEs.text.endsWith(es.default)).toBe(true);
  });

  test("html stripping removes tags and counts words only", () => {
    const r = readingTime(withHtml, {
      language: "en",
      wordsPerMinute: 10,
      translations: map({ en }),
    });
    // biome-ignore lint/style/noMagicNumbers: Test assertion comparing expected word count
    expect(r.words).toBe(3); // "Hello world test"
    expect(r.text.endsWith(en.less) || r.text.endsWith(en.default)).toBe(true);
  });

  test("empty input yields 0 minutes + less message", () => {
    const r = readingTime("", {
      language: "en",
      translations: map({ en }),
    });
    expect(r.minutes).toBe(0);
    expect(r.words).toBe(0);
    expect(r.text).toBe(en.less);
  });

  test("rounding behavior (forces rounding up/down)", () => {
    const short = "one two three four five six seven eight nine ten eleven";
    const rSlow = readingTime(short, {
      wordsPerMinute: 1,
      language: "en",
      translations: map({ en }),
    });
    // With WPM=1, minutes = number_of_words rounded
    expect(rSlow.minutes).toBe(rSlow.words); // since words / 1 rounded
  });

  test("fallback when translations map omitted entirely (just english baseline)", () => {
    const r = readingTime(french, {
      language: "fr",
      wordsPerMinute: 500,
    });
    // Lacking fr in map, falls back to english strings
    expect(r.text.endsWith(en.less) || r.text.endsWith(en.default)).toBe(true);
  });

  test("large translation map does not break resolution", () => {
    const r = readingTime(longEnglish, {
      language: "pt-br",
      wordsPerMinute: 5,
      translations: map({ en, fr, es, "pt-br": ptBr, ja, ru, de, tr }),
    });
    expect(r.text.endsWith(ptBr.default) || r.text.endsWith(ptBr.less)).toBe(true);
  });

  test("russian Cyrillic script", () => {
    const r = readingTime("Привет мир пример текста", {
      language: "ru",
      translations: map({ ru }),
    });
    // biome-ignore lint/style/noMagicNumbers: Test assertion for minimum word count
    expect(r.words).toBeGreaterThanOrEqual(3);
    expect(r.text.endsWith(ru.less) || r.text.endsWith(ru.default)).toBe(true);
  });

  test("turkish locale", () => {
    const r = readingTime("Merhaba dünya örnek metin", {
      language: "tr",
      translations: map({ tr }),
    });
    expect(r.text.endsWith(tr.less) || r.text.endsWith(tr.default)).toBe(true);
  });

  test("italian locale", () => {
    const r = readingTime("Ciao mondo testo di esempio", {
      language: "it",
      translations: map({ it: itLocale }),
    });
    expect(r.text.endsWith(itLocale.less) || r.text.endsWith(itLocale.default)).toBe(true);
  });

  test("portuguese (brazil) locale", () => {
    const r = readingTime("Olá mundo texto simples", {
      language: "pt-br",
      translations: map({ "pt-br": ptBr }),
    });
    expect(r.text.endsWith(ptBr.less) || r.text.endsWith(ptBr.default)).toBe(true);
  });

  test("vietnamese locale", () => {
    const r = readingTime("Đây là một đoạn văn bản ví dụ", {
      language: "vi",
      translations: map({ vi: viLocale }),
    });
    expect(r.text.endsWith(viLocale.less) || r.text.endsWith(viLocale.default)).toBe(true);
  });

  test("german locale", () => {
    const r = readingTime("Dies ist ein deutscher Beispielsatz", {
      language: "de",
      translations: map({ de }),
    });
    expect(r.text.endsWith(de.less) || r.text.endsWith(de.default)).toBe(true);
  });

  test("markdown", () => {
    const r = readingTime("# Hello World\nThis is a **bold** statement.", {
      language: "en",
      translations: map({ en }),
    });
    // biome-ignore lint/style/noMagicNumbers: Test assertion comparing expected word count
    expect(r.words).toBe(7);
    expect(r.text.endsWith(en.less) || r.text.endsWith(en.default)).toBe(true);
  });
});
