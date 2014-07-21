// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 0.000001)
includes: [runTestCase.js]
---*/

function testcase() {
        return String.prototype.trim.call(0.000001) === "0.000001";
    }
runTestCase(testcase);
