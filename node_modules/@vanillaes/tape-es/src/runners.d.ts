/**
 * Run a single test file
 * @param {string} test path to the test file
 * @param {string} cwd the current working directory
 */
export function run(test: string, cwd: string): Promise<void>;
/**
 * Run all tests
 * @param {Array<string>} tests paths to the test files
 * @param {string} cwd the current working directory
 */
export function runAll(tests: Array<string>, cwd: string): Promise<void>;
