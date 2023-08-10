import { works } from "./work";
import { projects } from "./project";
import { cloneCoding } from "./clone-coding";
import { education } from "./education";
import { study } from "./study";

export const data = [...works, ...projects, ...cloneCoding, ...study, ...education];
