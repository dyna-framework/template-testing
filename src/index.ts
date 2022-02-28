import './libraries.ts';
//import '@dyna/dev/libraries';
import { Application } from '@dyna/core';

const app = new Application(__dirname);

app.runInitializers();
