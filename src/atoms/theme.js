import { atomWithStorage } from "jotai/utils";

const skin = atomWithStorage("theme", "skin1");
const background = atomWithStorage("background", "bg2");
const language = atomWithStorage("language", "bg1");


export { skin, background, language };
