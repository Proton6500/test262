// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path 13_Function_Definition/13.2_Creating_Function_Objects/S13.2_A8_T2.js
 * @description check if "arguments" poisoning poisons
 * "in" too
 * @onlyStrict
 */

"use strict";
'arguments' in function() {};


