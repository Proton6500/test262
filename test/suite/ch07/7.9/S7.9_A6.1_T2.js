// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check For Statement for automatic semicolon insertion
description: for (semicolon \n semicolon \n)
---*/

//CHECK#1
for(;
  ;
) {
  break;
}
