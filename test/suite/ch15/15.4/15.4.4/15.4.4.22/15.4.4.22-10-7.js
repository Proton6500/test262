// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduceRight - subclassed array when length to 1
    and initialvalue provided
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = [1];
  function foo() {}
  var f = new foo();
  
  function cb(prevVal, curVal, idx, obj){return prevVal + curVal;}
  if(f.reduceRight(cb,"4") === "41")
    return true;
 }
runTestCase(testcase);
