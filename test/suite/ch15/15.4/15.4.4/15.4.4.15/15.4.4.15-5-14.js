// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is NaN)
includes: [runTestCase.js]
---*/

function testcase() {

        return [0, true].lastIndexOf(true, NaN) === -1 && // from Index will be convert to +0
            [true, 0].lastIndexOf(true, NaN) === 0 &&
            [0, true].lastIndexOf(true, -NaN) === -1 &&
            [true, 0].lastIndexOf(true, -NaN) === 0;
    }
runTestCase(testcase);
