import { Note } from "./Note";
import { Fraction } from "../../Common/DataObjects/Fraction";
import { PlacementEnum } from "./Expressions/AbstractExpression";
/**
 * Tuplets create irregular rhythms; e.g. triplets, quadruplets, quintuplets, etc.
 */
export declare class Tuplet {
    constructor(tupletLabelNumber: number, bracket?: boolean);
    private tupletLabelNumber;
    PlacementFromXml: boolean;
    tupletLabelNumberPlacement: PlacementEnum;
    RenderTupletNumber: boolean;
    /** Notes contained in the tuplet, per VoiceEntry (list of VoiceEntries, which has a list of notes). */
    private notes;
    private fractions;
    /** Whether this tuplet has a bracket. (e.g. showing |--3--| or just 3 for a triplet) */
    private bracket;
    /** Boolean if 'bracket="no"' or "yes" was explicitly requested in the XML, otherwise undefined. */
    BracketedXmlValue: boolean;
    /** Determines whether the tuplet should be bracketed (arguments are EngravingRules). */
    shouldBeBracketed(useXmlValue: boolean, tupletsBracketed: boolean, tripletsBracketed: boolean): boolean;
    get TupletLabelNumber(): number;
    set TupletLabelNumber(value: number);
    get Notes(): Note[][];
    set Notes(value: Note[][]);
    get Fractions(): Fraction[];
    set Fractions(value: Fraction[]);
    get Bracket(): boolean;
    set Bracket(value: boolean);
    /**
     * Returns the index of the given Note in the Tuplet List (notes[0], notes[1],...).
     * @param note
     * @returns {number}
     */
    getNoteIndex(note: Note): number;
}
