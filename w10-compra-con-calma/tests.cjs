const assert=require('node:assert/strict');const {review}=require('./dist/engine.js');
const base={cash:'2800',delivery:'350',budget:'3000',width:'160',space:'150',terms:'checked',debts:'checked',fit:'checked',mode:'cash'};
let n=0;function test(name,fn){try{fn();console.log('PASS '+name);n++;}catch(e){console.error('FAIL '+name+': '+e.message);process.exitCode=1;}}
test('T01 cash totals include delivery',()=>{const r=review(base);assert.equal(r.total,315000);assert.equal(r.conflicts[0].value,15000);});
test('T02 blank delivery is unknown',()=>{const r=review({...base,delivery:''});assert.equal(r.total,null);assert(r.missing.includes('Envío y cargos adicionales'));});
test('T03 installment total and cash difference',()=>{const r=review({...base,mode:'installments',count:'6',payment:'500'});assert.equal(r.total,335000);assert.equal(r.premium,20000);});
test('T04 explicit zero differs from blank',()=>{assert.equal(review({...base,delivery:'0'}).total,280000);});
test('T05 width conflict and equality',()=>{assert.equal(review(base).conflicts.find(c=>c.kind==='width').value,10);assert(!review({...base,width:'150'}).conflicts.some(c=>c.kind==='width'));});
test('T06 negative and nonfinite rejected',()=>{for(const cash of ['-1','Infinity','NaN','1000001'])assert.throws(()=>review({...base,cash}));});
test('T07 fractional installment count rejected',()=>assert.throws(()=>review({...base,count:'2.5',mode:'installments',payment:'500'})));
test('T08 missing terms does not clear',()=>assert.equal(review({...base,budget:'4000',space:'200',terms:'unknown'}).status,'missing'));
test('T09 cents arithmetic',()=>assert.equal(review({...base,cash:'0.10',delivery:'0.20'}).total,30));
test('T10 complete limited checks',()=>assert.equal(review({...base,budget:'4000',space:'200'}).status,'clear'));
test('T11 reject nondecimal and fractional cents',()=>{for(const cash of ['0x10','1e3','1.001'])assert.throws(()=>review({...base,cash}));});
test('T12 reject unsupported payment mode',()=>assert.throws(()=>review({...base,mode:'unknown'})));
test('T13 unknown other debts never clears',()=>{const r=review({...base,budget:'4000',space:'200',debts:'unknown'});assert.equal(r.status,'missing');assert.match(r.verdict,/No puedo determinarlo/);});
test('T14 width alone does not establish full fit',()=>assert.equal(review({...base,budget:'4000',space:'200',fit:'unknown'}).status,'missing'));
test('T15 known conflict preserves independent unknowns',()=>{const r=review({...base,debts:'unknown'});assert.equal(r.status,'conflict');assert(r.missing.length>0);assert.match(r.verdict,/No puedo determinarlo/);});
console.log(n+' checks passed.');
