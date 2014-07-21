// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - 'name' is an inherited accessor property
    (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "property", {
            get: function () {
                return 11;
            },
            configurable: false
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var obj = new ConstructFun();

        Object.defineProperty(obj, "property", {
            get: function () {
                return 12;
            },
            configurable: true
        });
        return obj.hasOwnProperty("property") && obj.property === 12;
    }
runTestCase(testcase);
