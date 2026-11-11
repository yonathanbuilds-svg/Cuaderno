# Screenshot-based synthetic review - Week 14
Synthetic persona: Mari,54, a Mexico-based household furniture buyer who uses WhatsApp, reads forms slowly and dislikes subscriptions. This persona is a design hypothesis; no direct interview establishing it is available. Review performed by the assistant in this work session using actual rendered screens. It was not run as a separate fresh-chat session, so that procedural requirement remains incomplete. No real-user behavior or demand is claimed.

## Task1: choose the free review
Screen: tiers.png, the deployed /pricing page. In Mari's perspective: the0price and household description identify a plausible starting point. The49plan clearly says one-time project, while149says monthly. Both advanced offers say proposal. Potential confusion: the pale 'Hipótesis principal' pill on a dark card inherited white text, making its label hard to read. Fix: explicitly set dark-green text on the pale pill. No change to pricing or scope.

## Task2: interpret the simulator
Screens: pricing-before.png and simulator.png. In Mari's perspective: the words 'households' and a revenue figure could be mistaken for the cost of her own project if she entered the section directly. The previous subtitle said only that it was an income scenario. Fix: the subtitle now explicitly says these are Compra con Calma business revenues, not the price of her furniture. Invalid input errors exposed internal field names such as householdConversion. Fix: map every field name to a Spanish label. This is a modeled comprehension risk, not an observed human statement.

## Task3: correct an incomplete quote
Actual mechanical browser action: delete the14600base price. Before fix, the old14600subtotal remained visible, even though an error appeared. A cautious synthetic buyer might copy or rely on the still-visible amount. Fix: remove the entire old result and disable copying whenever validation fails. Regression tests also found that whitespace and booleans could be coerced to numbers in the inherited quote parser; the parser now rejects them.

## Retest evidence
Pure Node model suite:8passed,0failed after the parser fix. Browser retest of the redeployed quote checker must show the cleared result and disabled Copy button. Browser save/reload/restore/delete and zero-conversion checks passed in the live session; invalid101% cleared the simulator and disabled Save. The final screen and clarity retest will be logged in TEST_LOG.md. These checks establish deterministic/UI behavior only. Human understanding, price acceptance and a40-minute personal debate remain separate evidence gaps.
