// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setMinutes" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setMinutes  === false) {
  $ERROR('#1: The Date.prototype.setMinutes property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setMinutes')) {
  $FAIL('#2: The Date.prototype.setMinutes property has not the attributes DontDelete');
}
