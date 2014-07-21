// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: replace with regexp /(uid=)(\d+)/ returns
description: replaceValue is "$11" + 'A15'
---*/

var __str = 'uid=31';
var __re = /(uid=)(\d+)/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, "$11" + 'A15')!=='uid=1A15' ) {
  $ERROR('#1: var __str = \'uid=31\'; var __re = /(uid=)(\d+)/; __str.replace(__re, "$11" + \'A15\')===\'uid=1A15\' . Actual: '+__str.replace(__re, "$11" + 'A15'));
}
//
//////////////////////////////////////////////////////////////////////////////
