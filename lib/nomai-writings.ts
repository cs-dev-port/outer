export type NomaiWritingAction = "text" | "sound" | "video";

export type NomaiWriting = {
  title: string;
  content: string;
  action: NomaiWritingAction;
  soundSrc?: string;
  videoId?: string;
};

export const nomaiWritings: Record<string, NomaiWriting> = {
  example: {
    title: "Nomai Fragment",
    content: "Translated Nomai text goes here.",
    action: "text",
  },
};
