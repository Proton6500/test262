// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create - 'set' property of one property in 'Properties' is
    an inherited accessor property without a get function (8.10.5 step
    8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "set", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();

        var newObj = Object.create({}, {
            prop: child
        });

        var desc = Object.getOwnPropertyDescriptor(newObj, "prop");

        return newObj.hasOwnProperty("prop") && typeof desc.set === "undefined";
    }
runTestCase(testcase);
