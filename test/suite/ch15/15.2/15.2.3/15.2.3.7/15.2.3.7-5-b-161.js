// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'descObj' is the Arguments object which
    implements its own [[Get]] method to get 'writable' property
    (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var func = function (a, b) {
            arguments.writable = false;

            Object.defineProperties(obj, {
                property: arguments
            });

            obj.property = "isWritable";

            return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
        };

        return func();
    }
runTestCase(testcase);
