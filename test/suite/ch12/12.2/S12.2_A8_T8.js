// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Only AssignmentExpression is admitted when variable is initialized
description: Checking if execution of "var x in __arr" fails
flags: [negative]
---*/

__arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x in __arr;
//
//////////////////////////////////////////////////////////////////////////////
