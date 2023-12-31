import { Note } from "./Note";
import { Fraction } from "../../Common/DataObjects/Fraction";
import { Pitch } from "../../Common/DataObjects/Pitch";
import { ColDirEnum } from "../Graphical/BoundingBox";
export declare class Glissando {
    constructor(note: Note);
    private notes;
    StartNote: Note;
    EndNote: Note;
    XMLNumber: number;
    Direction: ColDirEnum;
    get Notes(): Note[];
    get Duration(): Fraction;
    get Pitch(): Pitch;
    AddNote(note: Note): void;
}
