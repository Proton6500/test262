// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: A property can have attribute DontEnum like all properties of Number
description: Try to enumerate properties of Number
---*/

//CHECK#1
var count=0;
for (p in Number) count++;
if (count > 0){
  $ERROR('#1: count=0; for (p in Number) count++; count > 0. Actual: ' + (count));
}
