// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf - 'length' is own data property that
    overrides an inherited data property on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = {length: 0};

        var Con = function () {};
        Con.prototype = proto;

        var child = new Con();
        child.length = 2;
        child[1] = child;

        return Array.prototype.lastIndexOf.call(child, child) === 1;
    }
runTestCase(testcase);
