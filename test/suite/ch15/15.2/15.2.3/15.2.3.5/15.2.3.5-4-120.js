// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create - one property in 'Properties' is the JSON object
    that uses Object's [[Get]] method to access the 'configurable'
    property (8.10.5 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            JSON.configurable = true;

            var newObj = Object.create({}, {
                prop: JSON 
            });

            var result1 = newObj.hasOwnProperty("prop");
            delete newObj.prop;
            var result2 = newObj.hasOwnProperty("prop");

            return result1 === true && result2 === false;
        } finally {
            delete JSON.configurable;
        }
    }
runTestCase(testcase);
