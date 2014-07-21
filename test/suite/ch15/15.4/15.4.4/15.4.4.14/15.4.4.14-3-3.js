// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    0)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: true, length: 0 };

        return Array.prototype.indexOf.call(obj, true) === -1;
    }
runTestCase(testcase);
