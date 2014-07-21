// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.match (regexp)
description: Call match (regexp) function with null argument of function object
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "gnulluna"}().match(null)[0] !== "null") {
  $ERROR('#1: function(){return "gnulluna"}().match(null)[0] === "null". Actual: '+function(){return "gnulluna"}().match(null)[0] );
}
//
//////////////////////////////////////////////////////////////////////////////
