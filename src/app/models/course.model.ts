import { Module } from "./module.model";

export class Course {
    id?: any;
    title?: string;
    description?: string;
    duration?: Number;
    url?: string;
    instructor?: any;
    category?: any;
    tags?:[];
    published?: Boolean;
    modules?: Module[];
}
