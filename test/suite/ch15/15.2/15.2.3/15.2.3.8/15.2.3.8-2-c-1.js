// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Object.seal - 'O' is a Function object
includes: [runTestCase.js]
---*/

function testcase() {

        var fun = function () { };
        var preCheck = Object.isExtensible(fun);
        Object.seal(fun);

        return preCheck && Object.isSealed(fun);

    }
runTestCase(testcase);
