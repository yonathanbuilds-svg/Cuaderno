import assert from 'node:assert/strict';
class Element { constructor(){this.value='';this.disabled=true;this.handlers={};this.hidden=true;} addEventListener(name,fn){this.handlers[name]=fn;} replaceChildren(...children){this.children=children;} }
const elements=Object.fromEntries(['records','reason','assistance','followup','download','print','artifact-state','arithmetic-state','export-status','form','reason-error','assistance-error','facts','suggestions','results','changed-result','followup-error','record-followup','reset','route-note'].map(k=>[k,new Element()]));
const route={value:'existing',addEventListener(){}};
globalThis.document={getElementById:id=>elements[id],querySelector:()=>route,querySelectorAll:()=>[route],createElement:()=>new Element()};
await import('./app.js');
elements.reason.value='DEMO-01 tiene exceso de 12; DEMO-02 faltan 8. Verificaría el empaque de DEMO-04.';elements.assistance.value='Sin IA';
elements.form.handlers.submit({preventDefault(){}});
elements.followup.value='Con cuatro cajas ahora hay 48 unidades. Coincide el cálculo; falta revisión humana.';
elements.followup.handlers.input();
elements['record-followup'].handlers.click();
assert.equal(elements.download.disabled,false,'Typing a valid changed-scenario answer should allow export');
console.log('PASS: check → type changed explanation → save → export enabled');
