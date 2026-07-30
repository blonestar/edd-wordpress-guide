import { be } from "./be";
import { en } from "./en";
import { ru } from "./ru";
import { srCyrl } from "./sr-cyrl";
import { srLatn } from "./sr-latn";
import type { GuideCopy, LocaleCode } from "./types";

export { be, en, ru, srCyrl, srLatn };
export type { GuideCopy, LocaleCode } from "./types";

export const allLocales = [en, srLatn, srCyrl, be, ru] as const satisfies readonly GuideCopy[];

export const localesByCode = {
  en,
  "sr-latn": srLatn,
  "sr-cyrl": srCyrl,
  be,
  ru,
} satisfies Record<LocaleCode, GuideCopy>;

export const localePaths: Record<LocaleCode, string> = {
  en: "/",
  "sr-latn": "/sr-latn/",
  "sr-cyrl": "/sr-cyrl/",
  be: "/be/",
  ru: "/ru/",
};

export function getLocale(code: string | undefined): GuideCopy {
  if (code && code in localesByCode) {
    return localesByCode[code as LocaleCode];
  }

  return en;
}

export function getLocalePath(code: LocaleCode): string {
  return localePaths[code];
}
