// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is -Infinity, Math.cos(x) is NaN
description: Checking if Math.cos(-Infinity) is NaN
---*/

// CHECK#1
var x = -Infinity;
if (!isNaN(Math.cos(x)))
{
	$ERROR("#1: 'var x = -Infinity; isNaN(Math.cos(x)) === false'");
}
