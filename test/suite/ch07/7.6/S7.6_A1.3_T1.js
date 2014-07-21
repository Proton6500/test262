// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierStart :: _"
description: Create variable _
---*/

//CHECK#1
var _ = 1;
if (_ !== 1) {
  $ERROR('#1: var _ = 1; _ === 1. Actual: ' + (_));
}
