(()=>{'use strict';
const questions=['¿Cuánto cuesta el envío hasta mi domicilio?','¿El armado está incluido? Si no, ¿cuánto cuesta?','¿Falta algún cargo obligatorio y hasta cuándo es válida la cotización?'];
document.getElementById('copy-questions').addEventListener('click',async()=>{
 const status=document.getElementById('question-status');
 try{await navigator.clipboard.writeText(questions.map((q,i)=>(i+1)+'. '+q).join('\n'));status.textContent='Preguntas copiadas. Pide a la tienda que confirme su oferta por escrito.'}
 catch{status.textContent='No se pudo copiar. Puedes seleccionar las tres preguntas de la tarjeta.'}
});})();
