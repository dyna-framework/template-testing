import moduleAlias from 'module-alias';
import * as fs from 'fs';
import * as path from 'path';

const folder = path.join(__dirname, '..', 'libraries');
const libraries = fs.readdirSync(folder);

for (const libraryName of libraries) {
  const sourceDir = path.join(folder, libraryName, 'src');
  const pkgFile = path.join(folder, libraryName, 'package.json');
  const pkgData = require(pkgFile);

  moduleAlias.addAlias(pkgData.name, sourceDir);
}
