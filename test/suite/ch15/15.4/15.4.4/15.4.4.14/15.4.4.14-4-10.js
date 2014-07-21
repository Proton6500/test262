// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.indexOf - 'length' is a number of value -6e-1
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = [];
        var obj = { 0: targetObj, 100: targetObj, length: -6e-1 };
        return Array.prototype.indexOf.call(obj, targetObj) === -1;
    }
runTestCase(testcase);
