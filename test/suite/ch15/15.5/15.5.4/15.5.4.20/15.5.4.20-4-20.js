// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000Babc\u000B)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u000Babc\u000B".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
