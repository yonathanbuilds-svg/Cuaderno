'use strict';
const form=document.getElementById('reviewForm'), area=document.getElementById('resultArea'), download=document.getElementById('download');
const currency=c=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(c/100);
let last=null;
function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
function inputs(){return Object.fromEntries(new FormData(form).entries());}
function list(title,items){if(!items.length)return;area.append(el('h3',title));const ul=el('ul');items.forEach(t=>ul.append(el('li',t)));area.append(ul);}
function show(x,r){
 area.replaceChildren();const state={conflict:['HAY UN CONFLICTO','Revisa estos límites.'],missing:['FALTA COMPROBAR','Todavía faltan datos.'],clear:['COSTO Y ANCHO REVISADOS','Sin conflicto en estas comprobaciones.']}[r.status];
 area.append(el('span',state[0],'status '+r.status));const h=el('h2',state[1]);h.id='resulttitle';area.append(h);
 if(x.product.trim())area.append(el('p',x.product));
 if(r.total!==null){area.append(el('div',currency(r.total),'cost'),el('div',r.financed?'Total de pagos + envío y cargos':'Contado + envío y cargos','cost-label'));}
 else area.append(el('p','Total desconocido: completa el precio o los pagos y los cargos.'));
 if(r.premium!==null)area.append(el('p',(r.premium>=0?'Diferencia frente a contado: +':'Diferencia frente a contado: ')+currency(r.premium),'delta'));
 list('Conflictos con tus datos',r.conflicts.map(c=>c.kind==='budget'?c.text+' Diferencia: '+currency(c.value):c.text+' Diferencia: '+c.value+' cm.'));
 list('Falta comprobar',r.missing);list('Lo que sí se comparó',r.checks);
 area.append(el('p',r.verdict,'caution'));
 area.append(el('p','Esto no recomienda comprar ni certifica capacidad de pago. Solo compara los datos introducidos. Revisa fondo, altura, acceso, cargos completos y condiciones directamente en la fuente.','caution'));
}
form.addEventListener('submit',e=>{e.preventDefault();const error=document.getElementById('formError');error.hidden=true;last=null;download.disabled=true;try{
 if(!form.checkValidity())throw new Error('Revisa los valores marcados: usa cantidades válidas dentro de los límites del campo.');
 const x=inputs(),r=Compra.review(x);show(x,r);last={input:x,result:r};download.disabled=false;
 }catch(err){error.textContent=err.message;error.hidden=false;error.focus();}});
function stale(){last=null;download.disabled=true;area.replaceChildren(el('h2','Los datos cambiaron.'),el('p','Pulsa “Revisar mi compra” para actualizar el resultado. No uses una revisión anterior.','stale'));area.firstChild.id='resulttitle';document.getElementById('formError').hidden=true;document.getElementById('leaveMessage').hidden=true;}
function mode(){const active=form.elements.mode.value==='installments';document.getElementById('financing').hidden=!active;form.elements.count.disabled=!active;form.elements.payment.disabled=!active;}
form.addEventListener('input',()=>{mode();stale();});form.addEventListener('change',()=>{mode();stale();});
document.querySelectorAll('[data-example]').forEach(b=>b.addEventListener('click',()=>{
 form.reset();form.elements.consent.checked=true;const x=b.dataset.example==='sofa'?{product:'Sofá de ejemplo',cash:'2800',delivery:'350',mode:'installments',count:'6',payment:'500',budget:'3000',width:'160',space:'150',terms:'checked'}:{product:'Escritorio de ejemplo',cash:'1800',delivery:'',mode:'cash',budget:'2400',width:'110',space:'120',terms:'unknown'};
 for(const [k,v]of Object.entries(x))form.elements[k].value=v;mode();stale();const s=document.getElementById('sample');s.textContent='Datos ficticios cargados. No son una cotización ni un testimonio real.';s.hidden=false;form.requestSubmit();
}));
document.getElementById('reset').addEventListener('click',()=>{form.reset();mode();last=null;download.disabled=true;document.getElementById('sample').hidden=true;document.getElementById('leaveMessage').hidden=true;document.getElementById('formError').hidden=true;area.replaceChildren(el('h2','Datos borrados.'),el('p','Puedes empezar otra revisión.'));area.firstChild.id='resulttitle';form.elements.product.focus();});
document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{const m=document.getElementById('leaveMessage');m.textContent={buy:'Elegiste comprar por tu cuenta. Esta app no realiza compras ni aprueba tu decisión.',change:'Elegiste cambiar la compra. Puedes corregir los datos y revisar otra vez.',wait:'Elegiste esperar o no comprar. No se realizó ninguna compra.'}[b.dataset.choice];m.hidden=false;if(b.dataset.choice==='change')form.elements.product.focus();}));
download.addEventListener('click',()=>{if(!last)return;const {input:x,result:r}=last;const text=['COMPRA CON CALMA - REVISION LOCAL',new Date().toISOString(),'Datos introducidos por el usuario; sin verificación externa.',...Object.entries(x).map(([k,v])=>k+': '+v),'','Resultado: '+r.status,'Total: '+(r.total===null?'desconocido':currency(r.total)),'Falta: '+r.missing.join('; '),'Conflictos: '+r.conflicts.map(c=>c.kind+': '+c.value+(c.kind==='budget'?' centavos':' cm')).join('; '),'','No es una recomendación de compra, una cotización ni una evaluación de capacidad de pago. Solo se comparó el ancho. No se verificaron precios ni condiciones. No hay información bancaria ni una vista completa de deudas.'].join('\n');const u=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=el('a');a.href=u;a.download='revision-compra-con-calma.txt';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);});
mode();
