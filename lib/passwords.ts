export const chapterPasswords = {
  "chapter-1": "MARK",
  "chapter-2": "|.|.||...|..",
  "chapter-3": "saigon",
  "chapter-4": "da-lat",
} as const;

export type ChapterSlug = keyof typeof chapterPasswords;

export const MASTER_KEY = "admin";
