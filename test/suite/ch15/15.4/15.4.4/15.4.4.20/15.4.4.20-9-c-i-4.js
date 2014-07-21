// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.filter - element to be retrieved is own data
    property that overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return (idx === 0) && (val === 12);
        }

        try {
            Array.prototype[0] = 11;
            var newArr = [12].filter(callbackfn);

            return newArr.length === 1 && newArr[0] === 12;
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);
