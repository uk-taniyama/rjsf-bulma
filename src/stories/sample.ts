import { samples } from "./samples";

export const sampleNames = Object.keys(samples);

export function getSample(name: string) {
  const entry = Object.entries(samples).find(([n, v]) => n === name);
  if (entry == null) {
    return null;
  }
  return entry[1];
}
