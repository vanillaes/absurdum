/**
 * @typedef {object} RawPackage
 * @property {string|undefined} [name] Name
 * @property {string|undefined} [version] Version
 * @property {{[key: string]: {[key: string]: string}}|undefined} [packages] Packages
 */
/**
 * package-lock.json
 */
export class PackageLock {
    /**
     * @type {PackageLock}
     */
    static #instance: PackageLock;
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
     * Packages
     * @type {{[key: string]: {[key: string]: string}|undefined}|undefined}
     */
    get packages(): {
        [key: string]: {
            [key: string]: string;
        } | undefined;
    } | undefined;
    /**
     * Refresh package.json contents
     */
    refresh(): void;
    /**
     * Save package-lock.json contents
     */
    save(): void;
    #private;
}
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
     * Packages
     */
    packages?: {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
};
