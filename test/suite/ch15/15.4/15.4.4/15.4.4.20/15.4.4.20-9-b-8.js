// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.filter - deleting own property causes index
    property not to be visited on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        var obj = { length: 2 };

        function callbackfn(val, idx, o) {
            accessed = true;
            return true;
        }

        Object.defineProperty(obj, "1", {
            get: function () {
                return 6.99;
            },
            configurable: true
        });

        Object.defineProperty(obj, "0", {
            get: function () {
                delete obj[1];
                return 0;
            },
            configurable: true
        });

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === 0;
    }
runTestCase(testcase);
