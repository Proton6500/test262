// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.filter - thisArg is object from object template
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  function foo(){}
  var f = new foo();
  f.res = true;
  
  var srcArr = [1];
  var resArr = srcArr.filter(callbackfn,f);
  if( resArr.length === 1)
    return true;    

 }
runTestCase(testcase);
