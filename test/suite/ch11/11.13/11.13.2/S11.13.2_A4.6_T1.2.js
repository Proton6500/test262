// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x <<= y is the same as x = x << y
description: Type(x) and Type(y) vary between primitive number and Number object
---*/

//CHECK#1
x = 1;
x <<= 1;
if (x !== 2) {
  $ERROR('#1: x = 1; x <<= 1; x === 2. Actual: ' + (x));
}

//CHECK#2
x = new Number(1);
x <<= 1;
if (x !== 2) {
  $ERROR('#2: x = new Number(1); x <<= 1; x === 2. Actual: ' + (x));
}

//CHECK#3
x = 1;
x <<= new Number(1);
if (x !== 2) {
  $ERROR('#3: x = 1; x <<= new Number(1); x === 2. Actual: ' + (x));
}

//CHECK#4
x = new Number(1);
x <<= new Number(1);
if (x !== 2) {
  $ERROR('#4: x = new Number(1); x <<= new Number(1); x === 2. Actual: ' + (x));
}
