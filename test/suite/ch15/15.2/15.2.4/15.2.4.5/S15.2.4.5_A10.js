// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.hasOwnProperty.length property has the attribute
    ReadOnly
description: >
    Checking if varying the Object.prototype.hasOwnProperty.length
    property fails
includes: [$FAIL.js]
---*/

//CHECK#1
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.hasOwnProperty has length property.');
}

var obj = Object.prototype.hasOwnProperty.length;

Object.prototype.hasOwnProperty.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.hasOwnProperty.length !== obj) {
  $ERROR('#2: the Object.prototype.hasOwnProperty length property has the attributes ReadOnly.');
}
