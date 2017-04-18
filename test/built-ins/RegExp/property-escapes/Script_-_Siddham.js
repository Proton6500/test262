// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Siddham`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011580, 0x0115B5],
    [0x0115B8, 0x0115DD]
  ]
});
testPropertyEscapes(
  /^\p{Script=Siddham}+$/u,
  matchSymbols,
  "\\p{Script=Siddham}"
);
testPropertyEscapes(
  /^\p{Script=Sidd}+$/u,
  matchSymbols,
  "\\p{Script=Sidd}"
);
testPropertyEscapes(
  /^\p{sc=Siddham}+$/u,
  matchSymbols,
  "\\p{sc=Siddham}"
);
testPropertyEscapes(
  /^\p{sc=Sidd}+$/u,
  matchSymbols,
  "\\p{sc=Sidd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01157F],
    [0x0115B6, 0x0115B7],
    [0x0115DE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Siddham}+$/u,
  nonMatchSymbols,
  "\\P{Script=Siddham}"
);
testPropertyEscapes(
  /^\P{Script=Sidd}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sidd}"
);
testPropertyEscapes(
  /^\P{sc=Siddham}+$/u,
  nonMatchSymbols,
  "\\P{sc=Siddham}"
);
testPropertyEscapes(
  /^\P{sc=Sidd}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sidd}"
);
