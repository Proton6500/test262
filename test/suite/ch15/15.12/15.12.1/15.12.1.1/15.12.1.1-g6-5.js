// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    The JSON lexical grammer allows 'n' as a JSONEscapeCharacter after
    '' in a JSONString
includes: [runTestCase.js]
---*/

function testcase() {
    return JSON.parse('"\\n"')==='\n'; 
  }
runTestCase(testcase);
