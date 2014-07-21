// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "getUTCMonth"
description: The Date.prototype has the property "getUTCMonth"
---*/

if(Date.prototype.hasOwnProperty("getUTCMonth") !== true){
  $ERROR('#1: The Date.prototype has the property "getUTCMonth"');
}
