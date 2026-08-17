export type NomaiWritingAction = "text" | "sound" | "video";

export type NomaiWriting = {
  content: string;
  action: NomaiWritingAction;
  soundSrc?: string;
  videoId?: string;
};

export const nomaiWritings: Record<string, NomaiWriting> = {
  "Start-Devin1": {
    content: "Devin: Happy Birthday Buddy ٩(◕‿◕｡)۶.",
    action: "text",
  },
  "Start-Bell": {
    content: "HAPPY BIRTHDAY MARK! you're the coolest white boy i know. 💯  thank you for being such a wonderful friend through all the ups and downs and long car ride debates. I hope you have an incredible adventure this year! please dont die 🫡",
    action: "text",
  },
  "Start-Lucas": {
    content: "Lucas: waiting",
    action: "text",
  },
  "Start-Emma": {
    content:
      "Emma: MARK!!! Happy happy birthday!!! Thank you for always being so wonderful and for being such a great friend to Devin. I feel so lucky to have you in our lives! I hope this year brings you so much happiness and lots of new adventures (and more rock wall climbing trips). I hope all your wishes come true and you have the best birthday!! - Emma",
    action: "text",
  },
  "Start-Mookie": {
    content: "Mookie: WOOF! Bark, bark! Grrr... woof! ARF ARF ARF ARF ARF ARF!",
    action: "text",
  },
  "Start-Devin2": {
    content:
      "Devin: If we are to reach the Eye, our present technology will not suffice. We cannot even reliably chart a course to the research station on Giant's Deep. I was conducting research with Bell on this problem at Mark's dwelling. I believe my notes are still there, near the place where he stores what he wears. They may contain something useful.....",
    action: "text",
  },
  "Marks-D1": {
    content:
      "Devin: It would seem the journey ahead will expose us to both moisture and intense heat. It may be wise to acquire clothing something suited to both.",
    action: "text",
  },
  "Marks-B1": {
    content:
      "Bell: A heated concern, certainly, but there's no time to dwell on it. This area is destabilizing. Leave the particulars behind.",
    action: "text",
  },
  "Marks-D2": {
    content:
      "Devin:Right... Just Pack the following into a bag: Phone - Wallet\n7 pairs of underwear\n4 pairs of short socks\n4 short sleeve shirts (maybe a nice one)\n2 pairs of shorts\n1 thin pajama bottom\n1 sweater\n1 belt",
    action: "text",
  },
  "Marks-D3": {
    content:
      "Devin: There is still more research to be done on Giant's Deep, but I doubt our current vessel would survive the journey.",
    action: "text",
  },
  "Marks-B2": {
    content: "Bell: Then we will need another ship.",
    action: "text",
  },
  "Marks-D4": {
    content:
      "Devin: Agreed. I remember last having the launch codes for our strongest ship at my dwelling... I think i last had them while doing research in my small artificial sea.",
    action: "text",
  },
  "Small-Sea": {
    content:
      "Bell: I came in search of the launch codes at Devin's request, but it appears our paths have crossed without meeting. I recall him mentioning preparing for launch at a research station. Perhaps I should continue my search there... (40.656103° N; -74.006437° W)",
    action: "text",
  },
  "The-Village": {
    content:
      "Devin: Mmmmmmm, yummy Japanese food... Now then, I should really return my attention to reaching Giant's Deep. I'll gather the remaining ship supplies from my secret place, the patch of green near Bell's dwelling—the one to the right as you face outward from her home, where the stream vanishes beneath the earth through a hollow passage.",
    action: "text",
  },
  "The-Pipe": {
    content:
      "Devin: It appears I've gathered the necessary coordinates and supplies. I'll rest at Bell's dwelling tonight and prepare for launch at first light.",
    action: "text",
  },
  "Launch-Codes": {
    content:
      "Go to the Chapters menu, select Chapter 2, and enter the launch codes: |.|.||...|..",
    action: "text",
  },
};
