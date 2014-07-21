// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    the function body of a Function constructor contains a Strict
    Directive
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            var _13_0_14_fun = new Function(" ", "'use strict'; eval = 42; ");
            _13_0_14_fun();
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
