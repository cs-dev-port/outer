export type NomaiWritingAction = "text" | "sound" | "video";

export type NomaiWriting = {
  content: string;
  action: NomaiWritingAction;
  soundSrc?: string;
  videoId?: string;
};

export const nomaiWritings: Record<string, NomaiWriting> = {
    oneasdsad: {
    content: "this message was scrambled now its not.",
    action: "text",
  },
  two: {
    content: "two.",
    action: "text",
  },
  three: {
    content: "three.",
    action: "text",
  },

};
