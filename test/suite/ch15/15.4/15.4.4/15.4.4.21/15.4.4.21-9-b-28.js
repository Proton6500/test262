// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduce - decreasing length of array with prototype
    property causes prototype index property to be visited
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(accum, val, idx, obj) {
            if (idx === 2 && val === "prototype") {
                testResult = true;
            }
        }
        var arr = [0, 1, 2, 3];

        try {
            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return "prototype";
                },
                configurable: true
            });

            Object.defineProperty(arr, "0", {
                get: function () {
                    arr.length = 2;
                    return 1;
                },
                configurable: true
            });

            arr.reduce(callbackfn, "initialValue");

            return testResult;
        } finally {
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);
