// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.indexOf - 'fromIndex' is a positive non-integer,
    verify truncation occurs in the proper direction
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, targetObj, 2].indexOf(targetObj, 2.5) === -1 &&
            [0, 1, targetObj].indexOf(targetObj, 2.5) === 2;
    }
runTestCase(testcase);
