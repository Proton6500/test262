// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The toString function is not generic; it throws a TypeError exception if
    its this value is not a Function object.
description: >
    The String constructor, given an object, should invoke that
    object's toString method as a method, i.e., with its this value
    bound to that object.
negative: TypeError
---*/

var obj = {toString: Function.prototype.toString};

String(obj);
