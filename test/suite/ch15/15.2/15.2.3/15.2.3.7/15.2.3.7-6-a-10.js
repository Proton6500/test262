// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'P' is own accessor property without a
    get function that overrides an inherited accessor property (8.12.9
    step 1 )
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "prop", {
            get: function () {
                return 11;
            },
            set: function () { },
            configurable: true
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();
        Object.defineProperty(obj, "prop", {
            set: function () { },
            configurable: false
        });

        try {
            Object.defineProperties(obj, {
                prop: {
                    value: 12,
                    configurable: true
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
