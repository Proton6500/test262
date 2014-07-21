// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Catching objects with try/catch/finally statement
description: Catching null
---*/

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception ===null. Actual: '+e);
}
