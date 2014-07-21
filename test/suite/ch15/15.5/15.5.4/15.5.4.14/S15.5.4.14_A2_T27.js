// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. The substrings are determined by searching from left to right for occurrences of
    separator; these occurrences are not part of any substring in the returned array, but serve to divide up
    the string value. The value of separator may be a string of any length or it may be a RegExp object
description: Call split(undefined), instance is String("hello")
---*/

var __string = new String("hello");

var __split = __string.split(undefined);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("hello"); __split = __string.split(undefined); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 1) {
  $ERROR('#2: var __string = new String("hello"); __split = __string.split(undefined); __split.length === 1. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== "hello") {
  $ERROR('#3: var __string = new String("hello"); __split = __string.split(undefined); __split[0] === "hello". Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////
