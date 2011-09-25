// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property PI of the Math Object has the attribute DontDelete
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.6_PI/S15.8.1.6_A3.js
 * @description Checking if Math.PI property has the attribute DontDelete
 * @noStrict
 */

// CHECK#1
if (delete Math.PI === true) {
    $ERROR('#1: Value Property PI of the Math Object hasn\'t attribute DontDelete: \'Math.PI === true\'');
}


