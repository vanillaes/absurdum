/** @typedef {import('@vanillaes/esmtk').RawPackage} RawPackage */
/**
 * @typedef {object} RawLintConfig
 * @property {object|undefined} [lint] Lint config
 * @property {string|string[]} [lint.files] Lint files config option
 * @property {boolean} [lint.fix] Lint fix config option
 * @property {string|string[]} [lint.ignore] Lint ignore config option
 */
/**
 * @typedef {RawPackage & RawLintConfig} RawLintPackage
 */
/**
 * package.json - Lint Config
 * @augments Package
 */
export class LintConfig extends Package {
    /**
     * Lint Config
     * @type {RawLintConfig}
     */
    get config(): RawLintConfig;
    /**
     * Lint files config option
     * @type {string[]|undefined}
     */
    get files(): string[] | undefined;
    /**
     * Lint fix config option
     * @type {boolean|undefined}
     */
    get fix(): boolean | undefined;
    /**
     * Lint ignore config option
     * @type {string[]|undefined}
     */
    get ignore(): string[] | undefined;
    #private;
}
export type RawPackage = import("@vanillaes/esmtk").RawPackage;
export type RawLintConfig = {
    /**
     * Lint config
     */
    lint?: object | undefined;
    /**
     * Lint files config option
     */
    files?: string | string[] | undefined;
    /**
     * Lint fix config option
     */
    fix?: boolean | undefined;
    /**
     * Lint ignore config option
     */
    ignore?: string | string[] | undefined;
};
export type RawLintPackage = RawPackage & RawLintConfig;
import { Package } from '@vanillaes/esmtk';
