/**
 * Run a script from package.json, like `npm run <name>`
 * @param {string} name Script name
 * @param {object} options 'runScript' options
 * @param {string} [options.cwd] Current working directory
 * @param {NodeJS.ProcessEnv} [options.env] Current environment
 * @returns {Promise<number>} Exit code of the script
 */
export function runScript(name: string, options?: {
    cwd?: string | undefined;
    env?: NodeJS.ProcessEnv | undefined;
}): Promise<number>;
