// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    String.prototype.trim - 'S' is a string that starts with null
    character
includes: [runTestCase.js]
---*/

function testcase() {
        return "\0\u0000abc".trim() === "\0\u0000abc";
    }
runTestCase(testcase);
