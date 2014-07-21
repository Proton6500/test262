// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.indexOf - element to be retrieved is own accessor
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [, , , ];
        Object.defineProperty(arr, "0", {
            get: function () {
                return 0;
            },
            configurable: true
        });

        Object.defineProperty(arr, "1", {
            get: function () {
                return 1;
            },
            configurable: true
        });
        
        Object.defineProperty(arr, "2", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        return arr.indexOf(0) === 0 && arr.indexOf(1) === 1 && arr.indexOf(2) === 2;
    }
runTestCase(testcase);
