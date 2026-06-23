// Registers the asset stub loader using the stable Node.js 22+ API
// Used with: node --import=./node-loader-register.js prerender.js
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
register('./node-loader.js', pathToFileURL('./'));
