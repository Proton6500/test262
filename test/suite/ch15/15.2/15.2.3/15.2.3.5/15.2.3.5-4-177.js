// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create - one property in 'Properties' is the global object
    that uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        try {
            fnGlobalObject().value = "GlobalValue";

            var newObj = Object.create({}, {
                prop: fnGlobalObject()
            });

            return newObj.prop === "GlobalValue";
        } finally {
            delete fnGlobalObject().value;
        }
    }
runTestCase(testcase);
