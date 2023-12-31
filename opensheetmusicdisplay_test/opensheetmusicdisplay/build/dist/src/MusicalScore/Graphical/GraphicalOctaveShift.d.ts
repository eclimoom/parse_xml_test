import { GraphicalObject } from "./GraphicalObject";
import { OctaveShift } from "../VoiceData/Expressions/ContinuousExpressions/OctaveShift";
import { BoundingBox } from "./BoundingBox";
import { MusicSymbol } from "./MusicSymbol";
import { PointF2D } from "../../Common/DataObjects/PointF2D";
import { GraphicalMeasure } from "./GraphicalMeasure";
/**
 * The graphical counterpart of an [[OctaveShift]]
 */
export declare class GraphicalOctaveShift extends GraphicalObject {
    constructor(octaveShift: OctaveShift, parent: BoundingBox);
    getOctaveShift: OctaveShift;
    octaveSymbol: MusicSymbol;
    dashesStart: PointF2D;
    dashesEnd: PointF2D;
    endsOnDifferentStaffLine: boolean;
    /** Whether the octave shift should be drawn until the end of the measure, instead of the current note. */
    graphicalEndAtMeasureEnd: boolean;
    /** The measure in which this OctaveShift (which can be a part/bracket of a multi-line shift) ends graphically. */
    endMeasure: GraphicalMeasure;
    isFirstPart: boolean;
    isSecondPart: boolean;
    private setSymbol;
}
