// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is NaN, Math.log(x) is NaN
description: Checking if Math.log(NaN) is NaN
---*/

// CHECK#1
var x = NaN;
if (!isNaN(Math.log(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.log(x)) === false'");
}
