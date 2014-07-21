// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a String object
includes: [runTestCase.js]
---*/

function testcase() {
        var strObj = new String();
        var preCheck = Object.isExtensible(strObj);
        Object.preventExtensions(strObj);
        try {
            Object.defineProperty(strObj, "0", { value: "c" });
            return false;
        } catch (e) {
            return e instanceof TypeError && preCheck &&
                !strObj.hasOwnProperty("0") && typeof strObj[0] === "undefined";
        }
    }
runTestCase(testcase);
