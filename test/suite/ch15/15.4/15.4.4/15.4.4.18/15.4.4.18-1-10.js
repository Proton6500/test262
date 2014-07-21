// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.forEach applied to the Math object
includes: [runTestCase.js]
---*/

function testcase() {
        var result = false;

        function callbackfn(val, idx, obj) {
            result = ('[object Math]' === Object.prototype.toString.call(obj));
        }

        try {
            Math.length = 1;
            Math[0] = 1;
            Array.prototype.forEach.call(Math, callbackfn);
            return result;
        } finally {
            delete Math[0];
            delete Math.length;
        }
    }
runTestCase(testcase);
