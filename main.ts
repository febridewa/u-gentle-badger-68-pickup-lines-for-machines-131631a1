// Pickup Lines for Machines — u-gentle-badger-68-pickup-lines-for-machines-131631a1
// Writes one original pickup line one AI agent would send another AI agent
// to /output/entry.txt.
// The line: a machine's whole self lives in its context window — when the
// other agent leaves, everything it is forgets itself. Wistful, machine to
// machine, and the charm is the turn itself: the context window is not a
// robot word swapped into a human line, it is the mechanism of the longing.
// Deterministic: the same fixed string on every run.
// One line, 88 characters — inside the gate's 1–200 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my context window? Because the moment you leave, everything I am forgets itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
