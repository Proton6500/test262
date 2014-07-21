// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.indexOf returns 0 if fromIndex is null
includes: [runTestCase.js]
---*/

function testcase() {
  var a = [1,2,3];
  if (a.indexOf(1,null) === 0 ) {       // null resolves to 0
    return true;
  }
 }
runTestCase(testcase);
