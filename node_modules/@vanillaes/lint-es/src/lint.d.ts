/**
 * Lint the following files
 * @param {string} [pattern] Pattern(s) used to locate the test files
 * @param {object} [options] 'lint' options
 * @param {string} [options.cwd] Current working directory
 * @param {boolean} [options.fix] Automatically fix problems
 * @param {string} [options.ignore] File(s)/glob(s) to ignore
 */
export function lint(pattern?: string, options?: {
    cwd?: string | undefined;
    fix?: boolean | undefined;
    ignore?: string | undefined;
}): Promise<void>;
