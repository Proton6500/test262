// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
    returns an Array object containing the results of the match, or null if the string did not match
description: RegExp is /undefined/ and call exec() without arguments
---*/

__re = /undefined/.exec()[0];
if (__re !== "undefined") {
	$ERROR('#1: /undefined/.exec()[0] === "undefined". Actual: ' + (__re));
}
