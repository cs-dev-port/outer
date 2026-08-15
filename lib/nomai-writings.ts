export type NomaiWritingAction = "text" | "sound" | "video";

export type NomaiWriting = {
  content: string;
  action: NomaiWritingAction;
  soundSrc?: string;
  videoId?: string;
};

export const nomaiWritings: Record<string, NomaiWriting> = {
  example: {
    content: "Translated Nomai text goes here.",
    action: "text",
  },
};
