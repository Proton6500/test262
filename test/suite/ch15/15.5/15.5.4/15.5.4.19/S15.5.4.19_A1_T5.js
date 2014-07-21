// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLocaleUpperCase()
description: Call toLocaleUpperCase() function of function call
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLocaleUpperCase() !== "GNULLUNA") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLocaleUpperCase() === "GNULLUNA". Actual: '+function(){return "GnulLuNa"}().toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////
