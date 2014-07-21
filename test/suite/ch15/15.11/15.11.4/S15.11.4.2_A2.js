// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The initial value of Error.prototype.name is "Error"
description: Checking value of Error.prototype.name
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (Error.prototype.name!=="Error") {
	$ERROR('#1: Error.prototype.name==="Error". Actual: '+Error.prototype.name);
}
//
//////////////////////////////////////////////////////////////////////////////
