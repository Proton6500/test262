// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' makes no change if every field in 'desc' is
    absent(name is accessor property) (15.4.5.1 step 4.c)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var arrObj = [];

        function getFunc() {
            return 11;
        }
        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }

        Object.defineProperty(arrObj, "0", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(arrObj, "0", {});
        return accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc, setFunc, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);
