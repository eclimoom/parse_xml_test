import Vex from "vexflow";
import { BoundingBox } from "../BoundingBox";
import { GraphicalStaffEntry } from "../GraphicalStaffEntry";
import { VexFlowVoiceEntry } from "./VexFlowVoiceEntry";
import { GraphicalPedal } from "../GraphicalPedal";
import { Pedal } from "../../VoiceData/Expressions/ContinuousExpressions/Pedal";
import { GraphicalMeasure } from "../GraphicalMeasure";
import { Fraction } from "../../../Common/DataObjects/Fraction";
/**
 * The vexflow adaptation of a pedal marking
 */
export declare class VexFlowPedal extends GraphicalPedal {
    /** Defines the note where the pedal starts */
    startNote: Vex.Flow.StemmableNote;
    /** Defines the note where the pedal ends.
     *  (for pedal lines, visually, the pedal end is BEFORE the note, as in Vexflow,
     *  UNLESS pedal.EndsStave is set, in which case it ends at the end (furthest x) of the stave.
     */
    endNote: Vex.Flow.StemmableNote;
    private vfStyle;
    DepressText: string;
    ReleaseText: string;
    startVfVoiceEntry: VexFlowVoiceEntry;
    endVfVoiceEntry: VexFlowVoiceEntry;
    endMeasure: GraphicalMeasure;
    ChangeBegin: boolean;
    ChangeEnd: boolean;
    private line;
    EndSymbolPositionAndShape: BoundingBox;
    /**
     * Create a new vexflow pedal marking
     * @param pedal the object read by the ExpressionReader
     * @param parent the bounding box of the parent
     */
    constructor(pedal: Pedal, parent: BoundingBox, openBegin?: boolean, openEnd?: boolean);
    /**
     * Set a start note using a staff entry
     * @param graphicalStaffEntry the staff entry that holds the start note
     */
    setStartNote(graphicalStaffEntry: GraphicalStaffEntry): boolean;
    /**
     * Set an end note using a staff entry
     * @param graphicalStaffEntry the staff entry that holds the end note
     */
    setEndNote(graphicalStaffEntry: GraphicalStaffEntry): boolean;
    setEndMeasure(graphicalMeasure: GraphicalMeasure): void;
    CalculateBoundingBox(): void;
    setLine(line: number): void;
    /**
     * Get the actual vexflow Pedal Marking used for drawing
     */
    getPedalMarking(): Vex.Flow.PedalMarking;
    setEndsStave(endMeasure: GraphicalMeasure, endTimeStamp: Fraction): void;
    setBeginsStave(isRest: boolean, startTimeStamp: Fraction): void;
}
