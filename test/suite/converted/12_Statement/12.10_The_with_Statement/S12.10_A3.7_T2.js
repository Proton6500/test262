// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path 12_Statement/12.10_The_with_Statement/S12.10_A3.7_T2.js
 * @description Declaring and calling a function within "with" statement, leading to normal completion by "return"
 * @noStrict
 */

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

with(myObj){
    result=(function(){
        p1 = 'x1';
        return value;
    })();
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(result !== "myObj_value"){
  $ERROR('#2: result === "myObj_value". Actual:  result ==='+ result  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 !== "x1"){
  $ERROR('#3: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



