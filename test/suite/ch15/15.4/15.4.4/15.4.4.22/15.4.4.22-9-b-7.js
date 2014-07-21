// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduceRight - properties added to prototype in
    step 8 visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(preVal, curVal, idx, obj) {
            if (idx === 1 && curVal === 6.99) {
                testResult = true;
            }
        }

        var arr = [0, , 2];

        Object.defineProperty(arr, "2", {
            get: function () {
                Object.defineProperty(Array.prototype, "1", {
                    get: function () {
                        return 6.99;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

        try {
            arr.reduceRight(callbackfn);
            return testResult;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
