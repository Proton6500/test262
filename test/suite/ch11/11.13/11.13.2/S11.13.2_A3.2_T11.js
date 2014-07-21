// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x @= y returns x @ y
description: Checking Expression and Variable statements for x |= y
---*/

//CHECK#1
var x = 0;
var x1 = (x |= 1);
if (x1 !== 1) {
  $ERROR('#1: var x = 0; var x1 = (x |= 1); x1 === 1. Actual: ' + (x1));
}

//CHECK#2
y = 1;
y1 = (y |= 0);
if (y1 !== 1) {
  $ERROR('#2: y = 1; y1 = (y |= 0); y1 === 1. Actual: ' + (y1));
}
