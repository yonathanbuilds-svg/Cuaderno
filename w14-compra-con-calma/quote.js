/* Compra con Calma — rule engine; no seller or AI integration. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.QuoteEngine=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
const COST_FIELDS=['delivery','assembly','other'];
function numeric(value,name){if(value===null||value===undefined||value==='')throw Error(name+' must be provided');const n=Number(value);if(!Number.isFinite(n)||n<0)throw Error(name+' must be a nonnegative number');return Math.round((n+Number.EPSILON)*100)/100;}
function calculateQuote(data){if(!data||typeof data!=='object')throw Error('Quote data required');const price=numeric(data.price,'price'),charges={},pending=[];let subtotal=price;
for(const key of COST_FIELDS){const entry=data[key];if(!entry||entry.known!==true){charges[key]=null;pending.push(key)}else{charges[key]=numeric(entry.amount,key);subtotal+=charges[key]}}
subtotal=Math.round((subtotal+Number.EPSILON)*100)/100;
return{price,charges,pending,knownSubtotal:subtotal,total:pending.length?null:subtotal,completeness:pending.length?'incomplete':'complete',caution:pending.length?'Not a final total: some charges remain unknown.':'Verify all amounts with seller.'}}
return{calculateQuote,COST_FIELDS};
});