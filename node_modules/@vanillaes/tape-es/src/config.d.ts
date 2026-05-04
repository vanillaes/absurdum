/** @typedef {import('@vanillaes/esmtk').RawPackage} RawPackage */
/**
 * @typedef {object} RawTapeConfig
 * @property {object|undefined} [tape] Tape config
 * @property {string|string[]} [tape.files] Test files config option
 * @property {string|string[]} [tape.ignore] Test ignore config option
 */
/**
 * @typedef {RawPackage & RawTapeConfig} RawTapePackage
 */
/**
 * package.json - Tape Config
 * @augments Package
 */
export class TapeConfig extends Package {
    /**
     * Lint Config
     * @type {RawTapeConfig}
     */
    get config(): RawTapeConfig;
    /**
     * Lint files config option
     * @type {string[]|undefined}
     */
    get files(): string[] | undefined;
    /**
     * Test ignore config option
     * @type {string[]|undefined}
     */
    get ignore(): string[] | undefined;
    #private;
}
export type RawPackage = import("@vanillaes/esmtk").RawPackage;
export type RawTapeConfig = {
    /**
     * Tape config
     */
    tape?: object | undefined;
    /**
     * Test files config option
     */
    files?: string | string[] | undefined;
    /**
     * Test ignore config option
     */
    ignore?: string | string[] | undefined;
};
export type RawTapePackage = RawPackage & RawTapeConfig;
import { Package } from '@vanillaes/esmtk';
