// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.UTC property "length" has { ReadOnly, DontDelete, DontEnum }
    attributes
description: Checking ReadOnly attribute
---*/

x = Date.UTC.length;
Date.UTC.length = 1;
if (Date.UTC.length !== x) {
  $ERROR('#1: The Date.UTC.length has the attribute ReadOnly');
}
