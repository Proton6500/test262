// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create - 'enumerable' property of one property in
    'Properties' is an Arguments object (8.10.5 step 3.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var argObj = (function () { return arguments; })();

        var newObj = Object.create({}, {
            prop: {
                enumerable: argObj
            }
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);
