// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - 'O' is an Arguments object, 'name' is own
    accessor property of 'O', test TypeError is thrown when updating
    the [[Set]] attribute value of 'name' which is defined as
    non-configurable (10.6 [[DefineOwnProperty]] step 4)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        return (function () {
            function getFunc() {
                return 10;
            }
            Object.defineProperty(arguments, "0", {
                get: getFunc,
                set: undefined,
                enumerable: false,
                configurable: false
            });
            function setFunc(value) {
                this.setVerifyHelpProp = value;
            }
            try {
                Object.defineProperty(arguments, "0", {
                    set: setFunc
                });
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, "0", getFunc, undefined, undefined, false, false);
            }
            return false;
        }(0, 1, 2));
    }
runTestCase(testcase);
