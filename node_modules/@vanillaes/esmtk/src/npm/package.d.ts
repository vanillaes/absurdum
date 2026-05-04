export type RawPackage = {
    /**
     * Name
     */
    name?: string | undefined;
    /**
     * Version
     */
    version?: string | undefined;
    /**
     * Description
     */
    description?: string | undefined;
    /**
     * Keywords
     */
    keywords?: string[] | undefined;
    /**
     * Repository
     */
    repository?: string | undefined;
    /**
     * Author
     */
    author?: string | undefined;
    /**
     * License
     */
    license?: string | undefined;
    /**
     * Type
     */
    type?: string | undefined;
    /**
     * Binaries
     */
    bin?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Exports
     */
    exports?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Scripts
     */
    scripts?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Engines
     */
    engines?: object | undefined;
    /**
     * Dependencies
     */
    dependencies?: object | undefined;
    /**
     * DevDependencies
     */
    devDependencies?: object | undefined;
};
/**
 * @typedef {object} RawPackage
 * @property {string|undefined} [name] Name
 * @property {string|undefined} [version] Version
 * @property {string|undefined} [description] Description
 * @property {string[]|undefined} [keywords] Keywords
 * @property {string|undefined} [repository] Repository
 * @property {string|undefined} [author] Author
 * @property {string|undefined} [license] License
 * @property {string|undefined} [type] Type
 * @property {{[key: string]: {[key: string]: string}}|undefined} [bin] Binaries
 * @property {{[key: string]: {[key: string]: string}}|undefined} [exports] Exports
 * @property {{[key: string]: {[key: string]: string}}|undefined} [scripts] Scripts
 * @property {object|undefined} [engines] Engines
 * @property {object|undefined} [dependencies] Dependencies
 * @property {object|undefined} [devDependencies] DevDependencies
 */
export const RawPackage: {};
/**
 * package.json
 */
export class Package {
    /**
     * @type {Package}
     */
    static #instance: Package;
    /**
     * @param {string} [cwd] Current working directory
     */
    constructor(cwd?: string);
    /**
     * @type {RawPackage}
     */
    contents: RawPackage;
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
     * Description
     * @type {string|undefined}
     */
    get description(): string | undefined;
    /**
     * Keywords
     * @type {string[]|undefined}
     */
    get keywords(): string[] | undefined;
    /**
     * Repository
     * @type {string|undefined}
     */
    get repository(): string | undefined;
    /**
     * Author
     * @type {string|undefined}
     */
    get author(): string | undefined;
    /**
     * License
     * @type {string|undefined}
     */
    get license(): string | undefined;
    /**
     * Type
     * @type {string|undefined}
     */
    get type(): string | undefined;
    /**
     * Bin
     * @type {{[key: string]: {[key: string]: string}}|undefined}
     */
    get bin(): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
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
     * Scripts
     * @type {{[key: string]: {[key: string]: string}}|undefined}
     */
    get scripts(): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    /**
     * Engines
     * @type {object|undefined}
     */
    get engines(): object | undefined;
    /**
     * Dependencies
     * @type {object|undefined}
     */
    get dependencies(): object | undefined;
    /**
     * devDependencies
     * @type {object|undefined}
     */
    get devDependencies(): object | undefined;
    /**
     * Refresh package.json contents
     */
    refresh(): void;
    /**
     * Run a 'package.json' script
     * @param {string} name Script name
     * @returns {Promise<number>} Script exit Code
     */
    runScript(name: string): Promise<number>;
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
