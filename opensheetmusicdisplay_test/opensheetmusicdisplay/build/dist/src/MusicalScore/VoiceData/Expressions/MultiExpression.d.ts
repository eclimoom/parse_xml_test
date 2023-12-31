import { SourceMeasure } from "../SourceMeasure";
import { Fraction } from "../../../Common/DataObjects/Fraction";
import { InstantaneousDynamicExpression } from "./InstantaneousDynamicExpression";
import { ContinuousDynamicExpression } from "./ContinuousExpressions/ContinuousDynamicExpression";
import { OctaveShift } from "./ContinuousExpressions/OctaveShift";
import { MoodExpression } from "./MoodExpression";
import { UnknownExpression } from "./UnknownExpression";
import { AbstractExpression } from "./AbstractExpression";
import { PlacementEnum } from "./AbstractExpression";
import { FontStyles } from "../../../Common/Enums/FontStyles";
import { Pedal } from "./ContinuousExpressions/Pedal";
export declare class MultiExpression {
    constructor(sourceMeasure: SourceMeasure, timestamp: Fraction);
    private sourceMeasure;
    private staffNumber;
    private timestamp;
    /** The 'number="x"' given in XML, e.g. of a wedge, used to identify similar expressions. */
    numberXml: number;
    private instantaneousDynamic;
    private endingContinuousDynamic;
    private startingContinuousDynamic;
    private unknownList;
    private moodList;
    private expressions;
    private combinedExpressionsText;
    private octaveShiftStart;
    private octaveShiftEnd;
    PedalStart: Pedal;
    PedalEnd: Pedal;
    get SourceMeasureParent(): SourceMeasure;
    set SourceMeasureParent(value: SourceMeasure);
    get StaffNumber(): number;
    set StaffNumber(value: number);
    get Timestamp(): Fraction;
    set Timestamp(value: Fraction);
    get AbsoluteTimestamp(): Fraction;
    get InstantaneousDynamic(): InstantaneousDynamicExpression;
    set InstantaneousDynamic(value: InstantaneousDynamicExpression);
    get EndingContinuousDynamic(): ContinuousDynamicExpression;
    set EndingContinuousDynamic(value: ContinuousDynamicExpression);
    get StartingContinuousDynamic(): ContinuousDynamicExpression;
    set StartingContinuousDynamic(value: ContinuousDynamicExpression);
    get MoodList(): MoodExpression[];
    get UnknownList(): UnknownExpression[];
    get EntriesList(): MultiExpressionEntry[];
    get OctaveShiftStart(): OctaveShift;
    set OctaveShiftStart(value: OctaveShift);
    get OctaveShiftEnd(): OctaveShift;
    set OctaveShiftEnd(value: OctaveShift);
    get CombinedExpressionsText(): string;
    set CombinedExpressionsText(value: string);
    getPlacementOfFirstEntry(): PlacementEnum;
    getFontstyleOfFirstEntry(): FontStyles;
    addExpression(abstractExpression: AbstractExpression, prefix: string): void;
    CompareTo(other: MultiExpression): number;
    private addExpressionToEntryList;
    private removeExpressionFromEntryList;
}
export declare class MultiExpressionEntry {
    prefix: string;
    expression: AbstractExpression;
    label: string;
}
