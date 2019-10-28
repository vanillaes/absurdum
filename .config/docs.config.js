import docdown from 'docdown';
import glob from 'glob';
const globAsync = promisify(glob);
import { writeFile } from 'fs';
import { basename, dirname, join } from 'path';
import { promisify } from 'util';

const srcPath = join(process.cwd(), 'src');
const docPath = join(process.cwd(), 'docs');

const baseConfig = {
  toc: 'none',
  style: 'github',
  url: `https://github.com/vanillajs2/absurdum/doc/README.md`,
  sourceLink: '',
  tocHref: '',
  tocLink: ''
}

async function match (pattern = '*.js') {
  return globAsync (pattern, { cwd: srcPath });
}

function createDoc (baseConfig, path) {
  // extract names
  const dir = dirname(path);
  const file = basename(path);
  const name = basename(path, '.js');
  const mdName = `${name}.md`;

  // build the docdown config
  const config = {
    title: `${dir}.${name}`,
    path: join(srcPath, dir, file),
  }
  Object.assign(config, baseConfig);

  // create the markdown file
  const markdown = docdown(config);
  writeFile(join(docPath, dir, `${name}.md`), markdown, { flag: 'w' }, (err) => {
    if(err) { throw Error(err); }
  });
}

(async () => {
  const files = await match('**/!(*.spec|index).js');
  files.forEach(file => createDoc(baseConfig, file));
})().catch(e => {
  console.error(e);
});
