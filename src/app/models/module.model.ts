import { Lesson } from "./lesson.model";
export class Module {
    id?: any;
    title?: string;
    course?: any;
    lessons?: Lesson[];
    collapsed: boolean = true;
}
