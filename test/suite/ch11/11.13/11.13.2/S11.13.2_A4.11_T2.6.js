// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x |= y is the same as x = x | y
description: >
    Type(x) is different from Type(y) and both types vary between
    String (primitive or object) and Undefined
---*/

//CHECK#1
x = "1";
x |= undefined;
if (x !== 1) {
  $ERROR('#1: x = "1"; x |= undefined; x === 1. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x |= "1";
if (x !== 1) {
  $ERROR('#2: x = undefined; x |= "1"; x === 1. Actual: ' + (x));
}

//CHECK#3
x = new String("1");
x |= undefined;
if (x !== 1) {
  $ERROR('#3: x = new String("1"); x |= undefined; x === 1. Actual: ' + (x));
}

//CHECK#4
x = undefined;
x |= new String("1");
if (x !== 1) {
  $ERROR('#4: x = undefined; x |= new String("1"); x === 1. Actual: ' + (x));
}
