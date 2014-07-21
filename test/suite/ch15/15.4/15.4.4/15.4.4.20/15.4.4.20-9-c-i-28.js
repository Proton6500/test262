// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.filter - element changed by getter on previous
    iterations is observed on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var preIterVisible = false;
        var arr = [];

        function callbackfn(val, idx, obj) {
            return idx === 1 && val === 9;
        }

        Object.defineProperty(arr, "0", {
            get: function () {
                preIterVisible = true;
                return 11;
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                if (preIterVisible) {
                    return 9;
                } else {
                    return 11;
                }
            },
            configurable: true
        });
        var newArr = arr.filter(callbackfn);

        return newArr.length === 1 && newArr[0] === 9;
    }
runTestCase(testcase);
