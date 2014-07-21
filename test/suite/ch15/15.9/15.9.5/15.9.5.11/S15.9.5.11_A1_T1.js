// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCFullYear" has { DontEnum } attributes
description: Checking absence of ReadOnly attribute
---*/

x = Date.prototype.getUTCFullYear;
if(x === 1)
  Date.prototype.getUTCFullYear = 2;
else
  Date.prototype.getUTCFullYear = 1;
if (Date.prototype.getUTCFullYear === x) {
  $ERROR('#1: The Date.prototype.getUTCFullYear has not the attribute ReadOnly');
}
