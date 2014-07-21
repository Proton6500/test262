// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.toString.length property has the attribute ReadOnly
description: >
    Checking if varying the RegExp.prototype.toString.length property
    fails
includes: [$FAIL.js]
---*/

//CHECK#1
if (RegExp.prototype.toString.hasOwnProperty('length') !== true) {
	$FAIL('#1: RegExp.prototype.toString.hasOwnProperty(\'length\') === true');
}

__obj = RegExp.prototype.toString.length;

RegExp.prototype.toString.length = function(){return "shifted";};

//CHECK#2
if (RegExp.prototype.toString.length !== __obj) {
	$ERROR('#2: __obj = RegExp.prototype.toString.length; RegExp.prototype.toString.length = function(){return "shifted";}; RegExp.prototype.toString.length === __obj. Actual: ' + (RegExp.prototype.toString.length));
}
