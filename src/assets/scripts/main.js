/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import "../styles/main.scss"

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


// MODAL
import { modal } from './partials/modal';
modal();

// FORM VALIDATION
import { formValidation } from './partials/form-validation';
formValidation();