/**
 * Run a single test file
 * @param {string} test Path to the test file
 * @param {string} cwd Current working directory
 */
export function run(test: string, cwd: string): Promise<void>;
/**
 * Run all tests
 * @param {Array<string>} tests Path(s) to the test file(s)
 * @param {string} cwd Current working directory
 */
export function runAll(tests: Array<string>, cwd: string): Promise<void>;
export { TapeConfig } from "./config.js";
