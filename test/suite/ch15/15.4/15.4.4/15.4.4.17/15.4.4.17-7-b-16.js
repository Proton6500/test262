// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.some - decreasing length of array does not delete
    non-configurable properties
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 2 && val === "unconfigurable") {
                return true;
            } else {
                return false;
            }
        }
        
        var arr = [0, 1, 2];

        Object.defineProperty(arr, "2", {
            get: function () {
                return "unconfigurable";
            },
            configurable: false
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                arr.length = 2;
                return 1;
            },
            configurable: true
        });

        return arr.some(callbackfn);
    }
runTestCase(testcase);
