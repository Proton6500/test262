// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator --x returns ToNumber(x) - 1
description: Type(x) is Object object or Function object
---*/

//CHECK#1
var x = {}; 
if (isNaN(--x) !== true) {
  $ERROR('#1: var x = {}; --x === Not-a-Number. Actual: ' + (--x));
}

//CHECK#2
var x = function(){return 1}; 
if (isNaN(--x) !== true) {
  $ERROR('#2: var x = function(){return 1}; --x === Not-a-Number. Actual: ' + (--x));
}
