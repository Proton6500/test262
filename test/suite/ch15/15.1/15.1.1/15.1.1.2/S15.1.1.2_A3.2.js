// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Infinity is DontEnum
description: Use for-in statement
---*/

// CHECK#1
for (var prop in this) {
  if (prop === "Infinity") {
	$ERROR('#1: The Infinity is DontEnum');
  }	 	
}
