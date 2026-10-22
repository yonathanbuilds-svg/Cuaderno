import assert from 'node:assert/strict';
import {predict,feed,assess,validateClosure} from '../dist/model.mjs';
for(let h=0;h<24;h++)assert.ok(Math.abs(predict(h)-(8+2*Math.sin(h*Math.PI/12)+1.5*Math.cos(h*Math.PI/12)))<.05);
assert.equal(assess('normal').state,'normal');assert.equal(assess('leak').state,'review');assert.equal(assess('offline').state,'unknown');assert.equal(assess('refill').state,'context');assert.equal(feed('offline').filter(x=>x.flow===null).length,5);
const valid={cause:'Conexión floja',before:'12',after:'8',note:'Mismo horario y suministro de ejemplo'};
assert.equal(validateClosure(valid),true);
for(const bad of [{before:''},{after:''},{before:' '},{before:'-1'},{after:'Infinity'},{cause:''},{note:''}])assert.equal(validateClosure({...valid,...bad}),false,JSON.stringify(bad));
console.log('PASS: synthetic baseline, four scenario states, missing data, valid closure and seven invalid closure cases');
