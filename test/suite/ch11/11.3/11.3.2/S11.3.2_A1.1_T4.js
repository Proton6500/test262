// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Line Terminator between LeftHandSideExpression and "--" is not allowed
description: Checking Line separator
flags: [negative]
---*/

//CHECK#1
eval("var x = 1; x\u2029--");
