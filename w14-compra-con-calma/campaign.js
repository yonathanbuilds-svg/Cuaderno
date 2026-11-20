(function(root){'use strict';
 function sampleFor(source){if(source!=='b1')return null;return {price:14600,delivery:700};}
 const api={sampleFor};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Campaign=api;
})(typeof window==='undefined'?globalThis:window);
