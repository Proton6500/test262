// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
description: Instance is Boolean object
---*/

var __instance = new Boolean;

__instance.toUpperCase = String.prototype.toUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toUpperCase() !== "FALSE") {
  $ERROR('#1: __instance = new Boolean; __instance.toUpperCase = String.prototype.toUpperCase;  __instance.toUpperCase() === "FALSE". Actual: '+__instance.toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
