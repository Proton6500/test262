// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.some - callbackfn that uses arguments object to
    get parameter value
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn() {
            return arguments[2][arguments[1]] === arguments[0];
        }

        return [9, 12].some(callbackfn);
    }
runTestCase(testcase);
