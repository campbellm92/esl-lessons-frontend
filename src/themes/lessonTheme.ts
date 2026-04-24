export type ToneClasses = {
  border: string;
  bg: string;
  button: string;
  badge: string;
};

export type ToneName =
  | "electric-indigo"
  | "saffron"
  | "pumpkin-spice"
  | "intense-cherry"
  | "bright-ocean"
  | "jungle";

export const tones: Record<ToneName, ToneClasses> = {
  saffron: {
    border: "border-saffron",
    bg: "bg-saffron",
    button: "bg-saffron",
    badge: "bg-saffron/20",
  },
  "pumpkin-spice": {
    border: "border-pumpkin-spice",
    bg: "bg-pumpkin-spice",
    button: "bg-pumpkin-spice",
    badge: "bg-pumpkin-spice/20",
  },
  "intense-cherry": {
    border: "border-intense-cherry",
    bg: "bg-intense-cherry",
    button: "bg-intense-cherry",
    badge: "bg-intense-cherry/20",
  },
  "bright-ocean": {
    border: "border-bright-ocean",
    bg: "bg-bright-ocean",
    button: "bg-bright-ocean",
    badge: "bg-bright-ocean/20",
  },
  jungle: {
    border: "border-jungle",
    bg: "bg-jungle",
    button: "bg-jungle",
    badge: "bg-jungle/20",
  },
  "electric-indigo": {
    border: "border-electric-indigo",
    bg: "bg-electric-indigo",
    button: "bg-electric-indigo",
    badge: "bg-electric-indigo/20",
  },
};

const levelPairToTone: Record<string, ToneName> = {
  A1: "saffron",
  A2: "saffron",
  B1: "intense-cherry",
  B2: "intense-cherry",
  C1: "jungle",
  C2: "jungle",
  // transition pairs
  "A2,B1": "pumpkin-spice",
  "B2,C1": "bright-ocean",
};

export function getLessonTone(level?: string[]): ToneClasses {
  if (!level || level.length === 0) {
    return tones["electric-indigo"];
  }

  const key = Array.isArray(level) ? [...level].sort().join(",") : level;

  const toneName = levelPairToTone[key] ?? "electric-indigo";
  return tones[toneName];
}
