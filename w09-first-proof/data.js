export const records = Object.freeze([
 {id:'DEMO-01',item:'Sabón',cartons:5,packing:12,requested:48},
 {id:'DEMO-02',item:'Cobertor',cartons:3,packing:8,requested:32},
 {id:'DEMO-03',item:'Funda',cartons:2,packing:10,requested:20},
 {id:'DEMO-04',item:'Relleno',cartons:2,packing:null,requested:20}
].map(Object.freeze));
export function check(r) {
 for (const k of ['cartons','requested']) if (!Number.isInteger(r[k]) || r[k]<0) throw new Error('Conteo inválido');
 if (r.packing === null) return {id:r.id,units:null,difference:null,status:'Falta evidencia: unidades por caja'};
 if (!Number.isInteger(r.packing) || r.packing<=0) throw new Error('Empaque inválido');
 const units=r.cartons*r.packing, difference=units-r.requested;
 return {id:r.id,units,difference,status:difference===0?'Coincide':difference>0?'Exceso':'Faltante'};
}
export function validReason(value) {return typeof value==='string' && value.trim().length>=30 && value.length<=1200;}
export const simulatedSuggestions = Object.freeze([
 'DEMO-01: explica por qué 5 × 12 = 60 y contrasta con las 48 unidades solicitadas.',
 'DEMO-02: hay 24 unidades calculadas y 32 solicitadas. Propón verificar el conteo antes de ajustar el registro.',
 'DEMO-04: dos cajas no permiten concluir cuántas unidades hay. Pide la ficha de empaque; no inventes el dato.'
]);
