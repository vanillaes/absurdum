/**
 * @typedef {object} RawJSR
 * @property {string|undefined} [name] Name
 * @property {string|undefined} [version] Version
 * @property {string|undefined} [license] License
 * @property {{[key: string]: {[key: string]: string}}|undefined} [exports] Exports
 * @property {{[key: string]: {[key: string]: string}}|undefined} [publish] Publish
 */
/**
 * jsr.json
 */
export class JSR {
    /**
     * @type {JSR}
     */
    static #instance: JSR;
    /**
     * @param {string} [cwd] Current working directory
     */
    constructor(cwd?: string);
    /**
     * Name
     * @param {string} name Name
     */
    set name(name: string);
    /**
     * Name
     * @type {string|undefined}
     */
    get name(): string | undefined;
    /**
     * Version
     * @param {string} version Version
     */
    set version(version: string);
    /**
     * Version
     * @type {string|undefined}
     */
    get version(): string | undefined;
    /**
     * License
     * @type {string|undefined}
     */
    get license(): string | undefined;
    /**
     * Exports
     * @type {{[key: string]: {[key: string]: string}}|undefined}
     */
    get exports(): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Publish
     * @type {{[key: string]: {[key: string]: string}}|undefined}
     */
    get publish(): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Refresh package.json contents
     */
    refresh(): void;
    /**
     * Resolve the 'exports' field
     * @returns {string} Default entry-point
     */
    resolve(): string;
    /**
     * Save package.json contents
     */
    save(): void;
    #private;
}
export type RawJSR = {
    /**
     * Name
     */
    name?: string | undefined;
    /**
     * Version
     */
    version?: string | undefined;
    /**
     * License
     */
    license?: string | undefined;
    /**
     * Exports
     */
    exports?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Publish
     */
    publish?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
};
