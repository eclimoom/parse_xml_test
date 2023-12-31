import { Glissando } from "../VoiceData/Glissando";
import { EngravingRules } from "./EngravingRules";
import { GraphicalLine } from "./GraphicalLine";
import { GraphicalStaffEntry } from "./GraphicalStaffEntry";
import { StaffLine } from "./StaffLine";
export declare class GraphicalGlissando {
    Glissando: Glissando;
    Line: GraphicalLine;
    staffEntries: GraphicalStaffEntry[];
    StaffLine: StaffLine;
    Width: number;
    Color: string;
    constructor(glissando: Glissando);
    calculateLine(rules: EngravingRules): void;
}
