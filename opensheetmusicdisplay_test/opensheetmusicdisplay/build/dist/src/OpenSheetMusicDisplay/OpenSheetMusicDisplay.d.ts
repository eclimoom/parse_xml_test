import { VexFlowBackend } from "./../MusicalScore/Graphical/VexFlow/VexFlowBackend";
import { GraphicalMusicSheet } from "./../MusicalScore/Graphical/GraphicalMusicSheet";
import { VexFlowMusicSheetDrawer } from "./../MusicalScore/Graphical/VexFlow/VexFlowMusicSheetDrawer";
import { MusicSheet } from "./../MusicalScore/MusicSheet";
import { Cursor } from "./Cursor";
import { DrawingParameters } from "../MusicalScore/Graphical/DrawingParameters";
import { IOSMDOptions, BackendType } from "./OSMDOptions";
import { EngravingRules, PageFormat } from "../MusicalScore/Graphical/EngravingRules";
import { GraphicalMusicPage } from "../MusicalScore/Graphical/GraphicalMusicPage";
import { ITransposeCalculator } from "../MusicalScore/Interfaces/ITransposeCalculator";
/**
 * The main class and control point of OpenSheetMusicDisplay.<br>
 * It can display MusicXML sheet music files in an HTML element container.<br>
 * After the constructor, use load() and render() to load and render a MusicXML file.
 */
export declare class OpenSheetMusicDisplay {
    protected version: string;
    /**
     * Creates and attaches an OpenSheetMusicDisplay object to an HTML element container.<br>
     * After the constructor, use load() and render() to load and render a MusicXML file.
     * @param container The container element OSMD will be rendered into.<br>
     *                  Either a string specifying the ID of an HTML container element,<br>
     *                  or a reference to the HTML element itself (e.g. div)
     * @param options An object for rendering options like the backend (svg/canvas) or autoResize.<br>
     *                For defaults see the OSMDOptionsStandard method in the [[OSMDOptions]] class.
     */
    constructor(container: string | HTMLElement, options?: IOSMDOptions);
    private cursorsOptions;
    cursors: Cursor[];
    get cursor(): Cursor;
    zoom: number;
    protected zoomUpdated: boolean;
    /** Timeout in milliseconds used in osmd.load(string) when string is a URL. */
    loadUrlTimeout: number;
    protected container: HTMLElement;
    protected backendType: BackendType;
    protected needBackendUpdate: boolean;
    protected sheet: MusicSheet;
    protected drawer: VexFlowMusicSheetDrawer;
    protected drawBoundingBox: string;
    protected drawSkyLine: boolean;
    protected drawBottomLine: boolean;
    protected graphic: GraphicalMusicSheet;
    protected drawingParameters: DrawingParameters;
    protected rules: EngravingRules;
    protected autoResizeEnabled: boolean;
    protected resizeHandlerAttached: boolean;
    protected followCursor: boolean;
    protected OnXMLRead: Function;
    /**
     * Load a MusicXML file
     * @param content is either the url of a file, or the root node of a MusicXML document, or the string content of a .xml/.mxl file
     * @param tempTitle is used as the title for the piece if there is no title in the XML.
     */
    load(content: string | Document, tempTitle?: string): Promise<{}>;
    /**
     * (Re-)creates the graphic sheet from the music sheet
     */
    updateGraphic(): void;
    /**
     * Render the music sheet in the container
     */
    render(): void;
    protected createOrRefreshRenderBackend(): void;
    exportSVG(): void;
    /** States whether the render() function can be safely called. */
    IsReadyToRender(): boolean;
    /** Clears what OSMD has drawn on its canvas. */
    clear(): void;
    /** Set OSMD rendering options using an IOSMDOptions object.
     *  Can be called during runtime. Also called by constructor.
     *  For example, setOptions({autoResize: false}) will disable autoResize even during runtime.
     */
    setOptions(options: IOSMDOptions): void;
    setColoringMode(options: IOSMDOptions): void;
    /**
     * Sets the logging level for this OSMD instance. By default, this is set to `warn`.
     *
     * @param: content can be `trace`, `debug`, `info`, `warn` or `error`.
     */
    setLogLevel(level: string): void;
    getLogLevel(): number;
    /**
     * Initialize this object to default values
     * FIXME: Probably unnecessary
     */
    protected reset(): void;
    /**
     * Attach the appropriate handler to the window.onResize event
     */
    protected autoResize(): void;
    /**
     * Helper function for managing window's onResize events
     * @param startCallback is the function called when resizing starts
     * @param endCallback is the function called when resizing (kind-of) ends
     */
    protected handleResize(startCallback: () => void, endCallback: () => void): void;
    /** Enable or disable (hide) the cursor.
     * @param enable whether to enable (true) or disable (false) the cursor
     */
    enableOrDisableCursors(enable: boolean): void;
    createBackend(type: BackendType, page: GraphicalMusicPage): VexFlowBackend;
    /** Standard page format options like A4 or Letter, in portrait and landscape. E.g. PageFormatStandards["A4_P"] or PageFormatStandards["Letter_L"]. */
    static PageFormatStandards: {
        [type: string]: PageFormat;
    };
    static StringToPageFormat(pageFormatString: string): PageFormat;
    /** Sets page format by string. Used by setOptions({pageFormat: "A4_P"}) for example. */
    setPageFormat(formatId: string): void;
    setCustomPageFormat(width: number, height: number): void;
    set DrawSkyLine(value: boolean);
    get DrawSkyLine(): boolean;
    set DrawBottomLine(value: boolean);
    get DrawBottomLine(): boolean;
    set DrawBoundingBox(value: string);
    get DrawBoundingBox(): string;
    setDrawBoundingBox(value: string, render?: boolean): void;
    get AutoResizeEnabled(): boolean;
    set AutoResizeEnabled(value: boolean);
    get Zoom(): number;
    set Zoom(value: number);
    set FollowCursor(value: boolean);
    get FollowCursor(): boolean;
    set TransposeCalculator(calculator: ITransposeCalculator);
    get TransposeCalculator(): ITransposeCalculator;
    get Sheet(): MusicSheet;
    get Drawer(): VexFlowMusicSheetDrawer;
    get GraphicSheet(): GraphicalMusicSheet;
    get DrawingParameters(): DrawingParameters;
    get EngravingRules(): EngravingRules;
    /** Returns the version of OSMD this object is built from (the version you are using). */
    get Version(): string;
}
