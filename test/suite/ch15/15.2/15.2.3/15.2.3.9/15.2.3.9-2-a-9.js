// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.freeze - 'P' is own property of the Function object that
    uses Object's [[GetOwnProperty]]
includes: [runTestCase.js]
---*/

function testcase() {
        var funObj = function () { };

        funObj.foo = 10; // default [[Configurable]] attribute value of foo: true

        Object.freeze(funObj);

        var desc = Object.getOwnPropertyDescriptor(funObj, "foo");

        delete funObj.foo;
        return funObj.foo === 10 && desc.configurable === false && desc.writable === false;
    }
runTestCase(testcase);
