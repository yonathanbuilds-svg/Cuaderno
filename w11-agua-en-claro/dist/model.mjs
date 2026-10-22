// A small least-squares model, fitted on synthetic hourly flow.
export const features=h=>[1,Math.sin(h*Math.PI/12),Math.cos(h*Math.PI/12)];
export function train(){
 const X=Array.from({length:72},(_,i)=>features(i%24));
 const y=X.map((x,i)=>8+2*x[1]+1.5*x[2]+Math.sin(i*7)*.15);
 const A=Array.from({length:3},(_,r)=>Array.from({length:3},(_,c)=>X.reduce((s,x)=>s+x[r]*x[c],0)));
 const b=Array.from({length:3},(_,r)=>X.reduce((s,x,i)=>s+x[r]*y[i],0));
 for(let p=0;p<3;p++){const z=A[p][p];for(let c=p;c<3;c++)A[p][c]/=z;b[p]/=z;for(let r=0;r<3;r++)if(r!==p){const f=A[r][p];for(let c=p;c<3;c++)A[r][c]-=f*A[p][c];b[r]-=f*b[p];}}
 return h=>features(h).reduce((s,v,i)=>s+v*b[i],0);
}
export const predict=train();
export function feed(kind){return Array.from({length:24},(_,h)=>({h,baseline:predict(h),flow:kind==='offline'&&h>18?null:predict(h)+Math.sin(h*3)*.2+(kind==='leak'&&h>=16?5:0)+(kind==='refill'&&h>=16?7:0)}));}
export function assess(kind){if(kind==='offline')return {state:'unknown',title:'Sin señal: faltan lecturas',text:'No hay evidencia suficiente para evaluar. Revisa el sensor antes de interpretar el consumo.'};if(kind==='refill')return {state:'context',title:'Primero confirma el llenado',text:'Hay un aumento durante el llenado de la cisterna. Revisa el contexto y toma otra lectura; no confirma una fuga.'};if(feed(kind).filter(d=>d.flow!==null && d.flow-d.baseline>3).length>=3)return {state:'review',title:'Hay una lectura por revisar',text:'El caudal se mantiene por encima de la referencia aprendida. Requiere revisión humana; no confirma una fuga.'};return {state:'normal',title:'Sin desvío en este escenario',text:'Las lecturas de ejemplo siguen la referencia. Esto no garantiza que una instalación real esté libre de fugas.'};}
export function validateClosure({cause,before,after,note}){return before.trim()!==''&&after.trim()!==''&&cause.trim().length>=8&&cause.length<=180&&note.trim().length>=12&&note.length<=500&&Number.isFinite(Number(before))&&Number.isFinite(Number(after))&&Number(before)>=0&&Number(after)>=0;}
