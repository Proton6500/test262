// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is a string
    containing an leading zero number (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];

        Object.defineProperties(arr, {
            length: {
                value: "0002.0"
            }
        });
        return arr.length === 2;
    }
runTestCase(testcase);
