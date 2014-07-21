// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When the Object constructor is called with one argument value and
    the value is a native ECMAScript object, do not create a new object but simply return value
description: The value is Object
---*/

var obj = {prop:1};

var n_obj = new Object(obj);

//CHECK#1
if (n_obj !== obj) {
  $ERROR('#1: When the Object constructor is called and if the value is an Object simply value returns.');
}

//CHECK#2
if (n_obj['prop'] !== 1) {
  $ERROR('#2: When the Object constructor is called and if the value is an Object simply value returns.');
}
