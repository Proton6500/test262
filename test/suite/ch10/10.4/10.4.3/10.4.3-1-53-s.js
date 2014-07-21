// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression with a
    strict directive prologue defined within an Anonymous
    FunctionExpression)
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
return (function () {
    return ((function () {
        "use strict";
        return typeof this;
    })()==="undefined") && (this===fnGlobalObject());
})();
}
runTestCase(testcase);
