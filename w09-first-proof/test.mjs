import assert from 'node:assert/strict';
import {records,check,validReason} from './data.js';
assert.deepEqual(records.map(r=>check(r).difference),[12,-8,0,null]);
assert.equal(check({...records[0],cartons:4}).difference,0);
for(const cartons of [-1,1.5,'5',true])assert.throws(()=>check({...records[0],cartons}));
for(const packing of [0,-1,1.5,'12'])assert.throws(()=>check({...records[0],packing}));
assert.equal(validReason(''),false);assert.equal(validReason('a'.repeat(30)),true);assert.equal(validReason('a'.repeat(1201)),false);
console.log('PASS: four discrepancies, changed constraint, 8 invalid counts, reasoning bounds');
