# Compra con calma - Product Charter v1
Yonathan Zeitoune Mattout | Week 12 | 29 October 2026

## VISION
In three years, Compra con calma becomes an independent, Spanish-first purchase review that makes the delivered cost of a purchase inspectable before a buyer commits. It turns an incomplete quote into a clear evidence checklist and a reproducible comparison with the buyer's own limit. Expansion follows observed buyer benefit, rather than the number of recommendations or sales generated.

## USERS
Adults in Mexico considering furniture who know the advertised price but lack a complete cost quote. Initial evidence: a real buyer case reported privately by Yonathan concerns uncertainty about the total cost of a sofa. Identifying details stay outside the public repository. This is a second-hand case, not a direct interview or a measured outcome. No Carlos name, age or identifying data is included in public demo seeds.

## PRINCIPLES
1. Unknown costs stay unknown: blank is never zero.
2. Buyers choose their own limits and can correct every input or leave.
3. Every comparison exposes its inputs, exclusions and next checks.
4. Revenue must not depend on a particular purchase or credit decision.
5. Data belongs to the buyer; saving is deliberate and deletion remains available.

## NON-GOALS
No checkout, loans, product ranking, affordability certification, credit scoring, bank access, scraping, visual quote extraction, fit guarantee, happiness score or automatic messages. Week 12 cuts the Week 10 dimension comparison and financing planner to ship one cost-review feature.

## NORTH STAR
Share of reviews in which the buyer resolves at least one initially unknown charge using an actual quote before deciding. Numerator: reviews with a charge changed from unknown to confirmed; denominator: reviews that started with an unknown charge. This measures evidence completion, not money saved or reduced regret. No real-user measurement yet.

## CORE CONCEPTS
- Purchase: the item under consideration, described without identity information.
- Base price: the quoted cash price in MXN.
- Charge: delivery, assembly or other required cost, confirmed or unknown.
- Evidence state: a declared known value or an explicit unknown; user entry is not external verification.
- Limit: the maximum total the buyer chooses for this purchase.
- Review: versioned inputs and reproducible arithmetic at one moment.
- Next action: a specific question to resolve an unknown charge.
- Saved record: a buyer-controlled snapshot, with its date and engine version.

## COMMERCIAL BET
Start free while testing utility. A future transparent flat fee paid by buyers is a hypothesis, not demonstrated willingness to pay. No commissions or retailer sponsorship. Compare against a manual checklist before adding any paid automation.

## EVIDENCE / OPEN GATES
Week 10 is available according to Yonathan. Week 9 was rejected because another teammate claimed it. The Week 12 Blueprint and live advisory risks/strengths are not yet supplied. The 10:1 case is a benchmark target, not an achieved result. Custom domain, Supabase connection and final student videos remain release dependencies.
