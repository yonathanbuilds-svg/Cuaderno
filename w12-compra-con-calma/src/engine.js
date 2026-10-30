export const VERSION='12.1';
export const charges=[['delivery','Envío','¿Cuál es el costo de envío a mi domicilio?'],['assembly','Armado','¿El armado está incluido? Si no, ¿cuánto cuesta?'],['other','Otros cargos obligatorios','¿Hay impuestos, maniobras u otros cargos que no estén incluidos?']];
export function cents(value){
 if(value!==null&&value!==undefined&&!['string','number'].includes(typeof value))throw Error('El monto debe ser un número o texto numérico.');
 if(value==null||String(value).trim()==='')return null;
 const s=String(value).trim();
 if(!/^\d+(\.\d{1,2})?$/.test(s))throw Error('Usa un monto positivo, con hasta dos decimales, sin comas.');
 const [whole,dec='']=s.split('.'); const n=Number(whole)*100+Number(dec.padEnd(2,'0'));
 if(!Number.isSafeInteger(n)||n>100000000)throw Error('Cada monto debe ser de hasta $1,000,000 MXN.');
 return n;
}
export function review(input){
 const title=String(input.item??'').trim();
 if(title.length>80)throw Error('El nombre debe tener hasta 80 caracteres.');
 const base=cents(input.base),limit=cents(input.limit),missing=[];
 if(base===null)missing.push({field:'base',label:'Precio del producto',question:'Pide el precio de contado vigente y qué incluye.'});
 const costs=charges.map(([key,label,question])=>{const value=cents(input[key]);if(value===null)missing.push({field:key,label,question});return{key,label,value};});
 const knownSubtotal=(base??0)+costs.reduce((s,c)=>s+(c.value??0),0);
 const complete=missing.length===0;
 const total=complete?knownSubtotal:null;
 const delta=total!==null&&limit!==null?total-limit:null;
 return {version:VERSION,item:title||'Mi compra',base,costs,limit,knownSubtotal,total,delta,missing,complete,lowerBoundOver:limit!==null&&knownSubtotal>limit,status:!complete?'pending':limit===null?'no-limit':delta>0?'over':'within'};
}
