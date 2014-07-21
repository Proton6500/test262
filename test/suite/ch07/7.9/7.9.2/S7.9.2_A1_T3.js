// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check examples for automatic semicolon insertion from the Standart
description: for( a ; b \n ) is not a valid sentence in the ECMAScript grammar
flags: [negative]
---*/

//CHECK#1
for( a ; b
)
