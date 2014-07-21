// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Only AssignmentExpression is admitted when variable is initialized
description: Checking if execution of "var x | true" fails
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x | true;
//
//////////////////////////////////////////////////////////////////////////////
