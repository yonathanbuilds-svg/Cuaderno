# Week14 - observed engineering evidence
10 November2026, local user date.

## Initial defects
- Existing quote numeric parser accepted whitespace and boolean amounts by Number coercion. A new regression case failed with 'Missing expected exception'. It is now rejected explicitly.
- Live first pricing release: clear base price14600. Error appeared, but old subtotal14600and Copy remained visible. Screenshot inspected in browser. The next release clears old results and disables copying on validation failure.
- Initial test expectation for default post-fixed-cost balance was wrong:1483.175. Correct hand calculation is3195 -111.825 -600 -500 =1983.175. Corrected the test expectation; the engine calculation did not change.

## Node suite after correction
Command:node --test tests/pricing.test.js.8passed,0failed. Cases:default separate-segment revenue; zero conversion; zero price; invalid assumptions; unknown quote fees; confirmed zero fees; confirmed blank fee; whitespace/boolean rejection.

## Actual first browser checks
- Anonymous public production page loaded at https://compra-con-calma-w14.vercel.app/ and /pricing without signing into Vercel.
- Default gross3195/month and38340annual; contribution2483.18and post-fixed-cost balance1983.18displayed.
- Save default scenario. Set both conversions to0: revenue0, balance-500.
- Save zero-conversion scenario. Reload:both saved scenarios still listed.
- Restore scenario2:both conversion inputs become0and revenue0.
- Delete scenario2:only default scenario remains.
- Restore default, set household conversion101:Spanish validation pending cleanup; projection cleared and Save disabled.
- Screenshot review revealed poor contrast in featured-card pill and possible audience confusion in simulator. Explicit pill color and simulator-business-context subtitle added; field errors translated into readable Spanish.

## Deployment record
First pricing UI:dpl_6CyeCTicGgY7DVPV9tHMYwkaQPoq, READY. This source snapshot contained the UI before its separate UI commit; metadata referenced the immediately prior engine commit. Do not treat that metadata as proof of an exact clean-source snapshot.
Parser and stale-output fix:dpl_EtXyEGjMMAFkpxRV4mYuBWXUYi3R. Source commitfc4968e07acd8e3fd6a2b467cc10708ae4640f84. Final clarity release and browser retest are recorded in SESSION_CLOSE.md.

## Verification boundary
No direct mobile-device or screen-reader test; no real payer conversation; no measured task times, payment, customer demand or10:1field result. Numeric localStorage only; no personal quote persistence, no backend or accounts, no credentials. Code review found no external APIs or keys. Real-domain requirement remains unmet because the published address is a Vercel subdomain.
