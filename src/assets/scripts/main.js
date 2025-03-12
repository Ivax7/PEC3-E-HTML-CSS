/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// NAV FUNCIONALIDAD
import { navFunction } from './partials/nav';
navFunction();


// LIKE / DISLIKE FUNCIONALIDAD
import { likesSystem } from './partials/likes';
likesSystem();

// ALERT FUNCIONALIDAD

import { alertMessage } from './partials/alert';
setTimeout(() => {
  alertMessage();
}, 2500);

