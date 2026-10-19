(function(root){
'use strict';
function numeric(value,limit=1000000){
 if(value===undefined||value===null||String(value).trim()==='') return null;
 if(!/^\d+(\.\d{1,2})?$/.test(String(value).trim())) throw new Error('Usa decimales normales con máximo dos cifras después del punto.');
 const n=Number(value);
 if(!Number.isFinite(n)||n<0||n>limit) throw new Error('Usa números entre 0 y '+limit+'.');
 return n;
}
function money(value){const n=numeric(value);return n===null?null:Math.round(n*100);}
function review(x){
 if(!['cash','installments'].includes(x.mode)) throw new Error('Selecciona contado o pagos.');
 const cash=money(x.cash),delivery=money(x.delivery),budget=money(x.budget);
 const width=numeric(x.width,10000),space=numeric(x.space,10000);
 const count=numeric(x.count,120),payment=money(x.payment);
 if(count!==null&&(!Number.isInteger(count)||count<1)) throw new Error('El número de pagos debe ser entero, de 1 a 120.');
 const missing=[],conflicts=[],checks=[];
 const financed=x.mode==='installments';
 if(cash===null) missing.push('Precio de contado');
 if(delivery===null) missing.push('Envío y cargos adicionales');
 if(budget===null) missing.push('Tu límite para esta compra');
 if(width===null||width===0) missing.push('Ancho medido del producto');
 if(space===null||space===0) missing.push('Ancho disponible');
 if(financed&&count===null) missing.push('Número de pagos');
 if(financed&&payment===null) missing.push('Importe de cada pago');
 if(x.terms!=='checked') missing.push('Revisión de condiciones de devolución');
 if(x.debts!=='checked') missing.push('Otras deudas y compromisos de la próxima quincena');
 if(x.fit!=='checked') missing.push('Fondo, altura y acceso: solo se comparó el ancho');
 const cashTotal=cash!==null&&delivery!==null?cash+delivery:null;
 const total=financed?(count!==null&&payment!==null&&delivery!==null?count*payment+delivery:null):cashTotal;
 if(total!==null&&budget!==null){if(total>budget)conflicts.push({kind:'budget',value:total-budget,text:'El total supera tu límite.'});else checks.push('El total está dentro del límite que declaraste.');}
 if(width>0&&space>0){if(width>space)conflicts.push({kind:'width',value:Math.round((width-space)*100)/100,text:'El producto supera el ancho disponible.'});else checks.push('El ancho cabe en el espacio declarado.');}
 if(x.terms==='checked')checks.push('Marcaste que revisaste las condiciones de devolución.');
 return {status:conflicts.length?'conflict':missing.length?'missing':'clear',verdict:missing.length?'No puedo determinarlo: falta información.':'Solo se revisaron los datos que declaraste. No es una aprobación.',total,cashTotal,premium:financed&&total!==null&&cashTotal!==null?total-cashTotal:null,missing,conflicts,checks,financed};
}
const api={numeric,review};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Compra=api;
})(globalThis);
