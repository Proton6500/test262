// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If Type(Primitive(x)) is String or Type(Primitive(y)) is String, then
    operator x + y returns the result of concatenating ToString(x) followed
    by ToString(y)
description: >
    Type(Primitive(x)) is different from Type(Primitive(y)) and both
    types vary between String (primitive or object) and Boolean
    (primitive and object)
---*/

//CHECK#1
if (true + "1" !== "true1") {
  $ERROR('#1: true + "1" === "true1". Actual: ' + (true + "1"));
}

//CHECK#2
if ("1" + true !== "1true") {
  $ERROR('#2: "1" + true === "1true". Actual: ' + ("1" + true));
}

//CHECK#3
if (new Boolean(true) + "1" !== "true1") {
  $ERROR('#3: new Boolean(true) + "1" === "true1". Actual: ' + (new Boolean(true) + "1"));
}

//CHECK#4
if ("1" + new Boolean(true) !== "1true") {
  $ERROR('#4: "1" + new Boolean(true) === "1true". Actual: ' + ("1" + new Boolean(true)));
}

//CHECK#5
if (true + new String("1") !== "true1") {
  $ERROR('#5: true + new String("1") === "true1". Actual: ' + (true + new String("1")));
}

//CHECK#6
if (new String("1") + true !== "1true") {
  $ERROR('#6: new String("1") + true === "1true". Actual: ' + (new String("1") + true));
}

//CHECK#7
if (new Boolean(true) + new String("1") !== "true1") {
  $ERROR('#7: new Boolean(true) + new String("1") === "true1". Actual: ' + (new Boolean(true) + new String("1")));
}

//CHECK#8
if (new String("1") + new Boolean(true) !== "1true") {
  $ERROR('#8: new String("1") + new Boolean(true) === "1true". Actual: ' + (new String("1") + new Boolean(true)));
}
