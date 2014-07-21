// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Function.prototype.bind - The [[Enumerable]] attribute of 'caller'
    property in  'F' is false
includes: [runTestCase.js]
---*/

function testcase() {

        var canEnumerable = false;
        var hasProperty = false;
        function foo() { }
        var obj = foo.bind({});
        hasProperty = obj.hasOwnProperty("caller");
        for (var prop in obj) {
            if (prop === "caller") {
                canEnumerable = true;
            }
        }
        return hasProperty && !canEnumerable;
    }
runTestCase(testcase);
