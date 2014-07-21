// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x-- returns ToNumber(x)
description: Type(x) is boolean primitive or Boolean object
---*/

//CHECK#1
var x = true;
var y = x--; 
if (y !== 1) {
  $ERROR('#1: var x = true; var y = x--; y === 1. Actual: ' + (y));
}

//CHECK#2
var x = new Boolean(false);
var y = x--;
if (y !== 0) {
  $ERROR('#2: var x = new Boolean(false); var y = x--; y === 0. Actual: ' + (y));
}
