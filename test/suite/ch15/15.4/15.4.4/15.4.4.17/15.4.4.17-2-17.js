// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.some applied to the Arguments object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var func = function (a, b) {
            arguments[2] = 12;
            return Array.prototype.some.call(arguments, callbackfn1) &&
                !Array.prototype.some.call(arguments, callbackfn2);
        };

        return func(9, 11);
    }
runTestCase(testcase);
