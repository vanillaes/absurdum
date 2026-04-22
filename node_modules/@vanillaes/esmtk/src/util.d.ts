/**
 * Check if a file/folder exists
 * @param {string} path Path to the file/folder
 * @returns {Promise<boolean>} True if the file/folder exists, false otherwise
 */
export function exists(path: string): Promise<boolean>;
/**
 * Check if a file/folder exists
 * @deprecated
 * @param {string} path Path to the file/folder
 * @returns {Promise<boolean>} True if the file/folder exists, false otherwise
 */
export function fileExists(path: string): Promise<boolean>;
/**
 * Check to see if a NPM package is installed globally
 * @param {string} pkg Package name
 * @returns {Promise<boolean>} True if the package is installed, false otherwise
 */
export function installed(pkg: string): Promise<boolean>;
/**
 * Match glob(s)
 * @param {string} pattern Glob pattern(s) to match
 * @param {string} [cwd] Current working directory
 * @param {string} [ignore] Glob of pattern(s) to ignore
 * @param {boolean} [unsafe] Allow file access outside of CWD
 * @returns {Promise<string[]>} An array of paths
 */
export function match(pattern: string, cwd?: string, ignore?: string, unsafe?: boolean): Promise<string[]>;
/**
 * Read .gitignore
 * @param {string} [cwd] Current working directory
 * @returns {Promise<string[]>} Comma-deliminated list of ignore globs
 */
export function readGitIgnore(cwd?: string): Promise<string[]>;
/**
 * Read .npmignore
 * @param {string} [cwd] Current working directory
 * @returns {Promise<string>} Comma-deliminated list of ignore globs
 */
export function readNPMIgnore(cwd?: string): Promise<string>;
/**
 * Check to see if an application is installed globally
 * @param {string} program Name of the application
 * @returns {Promise<boolean>} True if the application is installed, false otherwise
 */
export function which(program: string): Promise<boolean>;
