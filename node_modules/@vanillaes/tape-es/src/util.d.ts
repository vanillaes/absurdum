/**
 * Run 'spawn' asynchronously
 * @param {string} command the command to run
 * @param {string[]} args an array of arguments
 * @param {string} cwd the current working directory
 * @returns {Promise<{code: number, stdout: string, stderr: string}>} returns a promise that spawns a test
 */
export function spawnAsync(command: string, args: string[], cwd: string): Promise<{
    code: number;
    stdout: string;
    stderr: string;
}>;
