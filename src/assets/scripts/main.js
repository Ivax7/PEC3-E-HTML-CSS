/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap'

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



// LIKE / DISLIKE FUNCIONALIDAD
import { likesSystem } from './partials/likes';
likesSystem();

// ALERT FUNCIONALIDAD

import { alertMessage } from './partials/alert';
setTimeout(() => {
  alertMessage();
}, 2500);

// NAV FUNCIONALIDAD
import { navLinks } from './partials/nav';
navLinks();

