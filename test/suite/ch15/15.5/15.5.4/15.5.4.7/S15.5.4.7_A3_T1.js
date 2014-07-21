// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0
    indexOf(searchString,0) returns
description: Call "$$abcdabcd".indexOf("ab",NaN) and check result
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("$$abcdabcd".indexOf("ab",NaN)!==2) {
  $ERROR('#1: "$$abcdabcd".indexOf("ab",NaN)===2. Actual: '+("$$abcdabcd".indexOf("ab",NaN))); 
}
//
//////////////////////////////////////////////////////////////////////////////
