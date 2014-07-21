// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' property doesn't exist in 'O', test
    [[Enumerable]] of 'P' property in 'Attributes' is set as false
    value if [[Enumerable]] is absent in data descriptor 'desc'
    (15.4.5.1 step 4.c)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];
        var isOwnProperty = false;
        var canEnumerable = false;

        Object.defineProperties(arr, {
            "0": {
                value: 1001,
                writable: true,
                configurable: true
            }
        });

        isOwnProperty = arr.hasOwnProperty("0");
        for (var i in arr) {
            if (i === "0") {
                canEnumerable = true;
            }
        }
        return isOwnProperty && !canEnumerable && arr[0] === 1001;
    }
runTestCase(testcase);
