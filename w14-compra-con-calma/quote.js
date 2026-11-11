/* Compra con Calma — rule engine. No external verification or AI claims. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.QuoteEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  const COST_FIELDS = ['delivery', 'assembly', 'other'];
  function numeric(x, label) {
    if (typeof x === 'boolean' || x === null || x === undefined || String(x).trim() === '') throw new Error(label + ' must be provided');
    const n = Number(x);
    if (!Number.isFinite(n) || n < 0) throw new Error(label + ' must be a nonnegative number');
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }
  function calculateQuote(data) {
    if (!data || typeof data !== 'object') throw new Error('Quote data required');
    const price = numeric(data.price, 'price');
    const charges = {};
    const pending = [];
    let subtotal = price;
    for (const f of COST_FIELDS) {
      const entry = data[f];
      if (!entry || entry.known !== true) {
        charges[f] = null;
        pending.push(f);
      } else {
        charges[f] = numeric(entry.amount, f);
        subtotal += charges[f];
      }
    }
    subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;
    return { price, charges, pending, knownSubtotal: subtotal,
      total: pending.length === 0 ? subtotal : null,
      completeness: pending.length === 0 ? 'complete' : 'incomplete',
      caution: pending.length === 0 ? 'All entered charges are marked known; verify with seller.' : 'Not a final total: some charges remain unknown.' };
  }
  return { calculateQuote, COST_FIELDS };
});
