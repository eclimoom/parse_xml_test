import { MusicPartManagerIterator } from "../MusicalScore/MusicParts/MusicPartManagerIterator";
import { MusicPartManager } from "../MusicalScore/MusicParts/MusicPartManager";
import { VoiceEntry } from "../MusicalScore/VoiceData/VoiceEntry";
import { OpenSheetMusicDisplay } from "./OpenSheetMusicDisplay";
import { GraphicalMusicSheet } from "../MusicalScore/Graphical/GraphicalMusicSheet";
import { Instrument } from "../MusicalScore/Instrument";
import { Note } from "../MusicalScore/VoiceData/Note";
import { CursorOptions } from "./OSMDOptions";
import { BoundingBox } from "../MusicalScore/Graphical/BoundingBox";
import { GraphicalNote } from "../MusicalScore/Graphical/GraphicalNote";
/**
 * A cursor which can iterate through the music sheet.
 */
export declare class Cursor {
    constructor(container: HTMLElement, openSheetMusicDisplay: OpenSheetMusicDisplay, cursorOptions: CursorOptions);
    adjustToBackgroundColor(): void;
    private container;
    cursorElement: HTMLImageElement;
    /** a unique id of the cursor's HTMLElement in the document.
     * Should be constant between re-renders and backend changes,
     * but different between different OSMD objects on the same page.
     */
    cursorElementId: string;
    /** The desired zIndex (layer) of the cursor when no background color is set.
     *  When a background color is set, using a negative zIndex would make the cursor invisible.
     */
    wantedZIndex: string;
    private openSheetMusicDisplay;
    private rules;
    private manager;
    iterator: MusicPartManagerIterator;
    private graphic;
    hidden: boolean;
    currentPageNumber: number;
    private cursorOptions;
    private skipInvisibleNotes;
    /** Initialize the cursor. Necessary before using functions like show() and next(). */
    init(manager: MusicPartManager, graphic: GraphicalMusicSheet): void;
    /**
     * Make the cursor visible
     */
    show(): void;
    resetIterator(): void;
    private getStaffEntryFromVoiceEntry;
    update(): void;
    private findVisibleGraphicalMeasure;
    updateWidthAndStyle(measurePositionAndShape: BoundingBox, x: number, y: number, height: number): void;
    /**
     * Hide the cursor
     */
    hide(): void;
    /**
     * Go to previous entry
     */
    previous(): void;
    /**
     * Go to next entry
     */
    next(): void;
    /**
     * reset cursor to start
     */
    reset(): void;
    private updateStyle;
    get Iterator(): MusicPartManagerIterator;
    get Hidden(): boolean;
    /** returns voices under the current Cursor position. Without instrument argument, all voices are returned. */
    VoicesUnderCursor(instrument?: Instrument): VoiceEntry[];
    NotesUnderCursor(instrument?: Instrument): Note[];
    GNotesUnderCursor(instrument?: Instrument): GraphicalNote[];
    /** Check if there was a change in current page, and attach cursor element to the corresponding HTMLElement (div).
     *  This is only necessary if using PageFormat (multiple pages).
     */
    updateCurrentPage(): number;
    get SkipInvisibleNotes(): boolean;
    set SkipInvisibleNotes(value: boolean);
    get CursorOptions(): CursorOptions;
    set CursorOptions(value: CursorOptions);
}
