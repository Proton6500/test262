// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    ES5 Attributes - all attributes in Object.defineProperty are
    correct
includes: [runTestCase.js]
---*/

function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "defineProperty");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);
        var temp = Object.defineProperty;
        try {
            Object.defineProperty = "2010";

            var isWritable = (Object.defineProperty === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "defineProperty") {
                    isEnumerable = true;
                }
            }

            delete Object.defineProperty;

            var isConfigurable = !Object.hasOwnProperty("defineProperty");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty = temp;
            Object.defineProperty(Object, "defineProperty", {
                enumerable: false
            });
        }
    }
runTestCase(testcase);
