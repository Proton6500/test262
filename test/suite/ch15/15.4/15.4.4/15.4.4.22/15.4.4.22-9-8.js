// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduceRight - no observable effects occur if 'len'
    is 0
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn() {
            accessed = true;
        }

        var obj = { length: 0 };

        Object.defineProperty(obj, "5", {
            get: function () {
                accessed = true;
                return 10;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, function () { }, "initialValue");
        return !accessed;
    }
runTestCase(testcase);
