import './libraries.ts';
//import '@dyna/dev/libraries';
import { Application } from '@dyna/core';
import * as path from 'path';

const app = new Application(__dirname, path.join(__dirname, '..', 'package.json'), path.join(__dirname, '..', 'libraries'));

app.autoImport();
app.runInitializers();
