// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseInt has the attribute ReadOnly
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
x = parseInt.length;
parseInt.length = Infinity;
if (parseInt.length !== x) {
  $ERROR('#1: x = parseInt.length; parseInt.length = Infinity; parseInt.length === x. Actual: ' + (parseInt.length));
}
