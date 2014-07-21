// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.substring (start, end) returns a string value(not object)
description: start is tested_string.length+1, end is 0
---*/

var __string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.substring(__string.length+1, 0) !== "this is a string object") {
  $ERROR('#1: __string = new String("this is a string object"); __string.substring(__string.length+1, 0) === "this is a string object". Actual: '+__string.substring(__string.length+1, 0) );
}
//
//////////////////////////////////////////////////////////////////////////////
