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

document.addEventListener('DOMContentLoaded', function() {
  navFunction();
  likesSystem();
  
  setTimeout(() => {
    alertMessage();
  }, 2500);
});

// NAV FUNCIONALIDAD
import { navFunction } from './partials/nav';



// LIKE / DISLIKE FUNCIONALIDAD
import { likesSystem } from './partials/likes';


// ALERT FUNCIONALIDAD

import { alertMessage } from './partials/alert';

