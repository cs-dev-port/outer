export const chapterPasswords = {
  "chapter-1": "MARK",
  "chapter-2": "OUTER02",
  "chapter-3": "OUTER03",
  "chapter-4": "OUTER04",
} as const;

export type ChapterSlug = keyof typeof chapterPasswords;
