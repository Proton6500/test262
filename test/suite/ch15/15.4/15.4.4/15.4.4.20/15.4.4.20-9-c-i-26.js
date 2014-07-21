// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.filter - This object is the Arguments object which
    implements its own property get method (number of arguments equals
    number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 11;
            } else if (idx === 1) {
                return val === 9;
            } else {
                return false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.filter.call(arguments, callbackfn);
        };
        var newArr = func(11, 9);

        return newArr.length === 2 && newArr[0] === 11 &&
            newArr[1] === 9;
    }
runTestCase(testcase);
