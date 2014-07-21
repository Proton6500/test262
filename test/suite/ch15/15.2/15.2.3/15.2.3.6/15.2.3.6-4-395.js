// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: ES5 Attributes - [[Value]] attribute of data property is null
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: null
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === null && desc.value === null;
    }
runTestCase(testcase);
