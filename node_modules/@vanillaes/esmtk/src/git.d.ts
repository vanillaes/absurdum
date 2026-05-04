/**
 * Git add/stage the following files
 * @param {string[]} files Files to add
 * @param {string} [cwd] Current Working Directory
 * @returns {string} Returns stdout/stderr output
 */
export function gitAdd(files: string[], cwd?: string): string;
/**
 * Git commit
 * @param {string} message Commit message
 * @param {string} [cwd] Current working directory
 * @returns {string} Returns stdout/stderr output
 */
export function gitCommit(message: string, cwd?: string): string;
/**
 * Git latest release tag
 * @param {string} [cwd] Current working directory
 * @returns {string} Latest release tag (default v0.0.0)
 */
export function gitLatestRelease(cwd?: string): string;
/**
 * Git tag
 * @param {string} release Release version
 * @param {string} message Commit message
 * @param {string} cwd Current working directory
 * @returns {string} Returns stdout/stderr output
 */
export function gitTag(release: string, message: string, cwd?: string): string;
/**
 * Is this a git repository?
 * @private
 * @param {string} [cwd] Current working directory
 * @returns {boolean} Returns true if this package is a git repo, otherwise false.
 */
export function isGitRepo(cwd?: string): boolean;
/**
 * Is the git working tree clean of uncommitted changes?
 * @param {string} [cwd] Current working directory
 * @returns {boolean} Returns true if the working tree is clean, otherwise false
 */
export function isGitWorkingTreeClean(cwd?: string): boolean;
