# Development record — actual actions, not a fabricated dialogue

This is a structured implementation log for the visible assistant-led work. It is not the complete raw ChatGPT export required by the course and does not claim a forty-minute user debate. The user's actual instruction was “Haz la semana 8 igual”; the user selected ADVERSARY in the role question and later supplied BLUEPRINT_WEEK8_TEAM6.pdf. No additional student replies are invented.

## 29 September research session
- Read all six Week 8 Brightspace pages after secure sign-in.
- User chose ADVERSARY.
- Checked current LFPDPPP arts. 18–19; corrected the course brief's overbroad no-notification premise.
- Reviewed HIBP API documentation, FTC recovery-plan mechanism, INCIBE human-support mechanism and CONDUSEF guidance.
- Authored two-page research brief, explicitly not claiming chapter reading, interview, team participation or lengthy debate.

## 30 September implementation session
- User supplied the two-page Team 6 Blueprint. Parsed its conditions and Yonathan's declaration.
- Checked official SAT revocation source and CONDUSEF routes. The detailed current CONDUSEF filing page failed retrieval; chose official institutional guidance instead of claiming a direct filing form was current.
- Wrote PACKET.md before product code; first commit cf8af6a.
- Started one image generation for the required packet mockup; no personal data supplied.
- Implemented constrained route rules, qualified evidence states and source staleness; commit 5a64421.
- Implemented accessible static UI, session-only checklists, print card, labeled simulated AI and optional real public HIBP metadata; commit c6cc2fd.
- Published version 1 from c6cc2fd98eb9cb817b3847517f2af24341fb2754. Native deployment succeeded.
- Test run: five groups passed, print-disclaimer regression failed. Detailed coverage sentence was in the choices panel hidden during printing.
- Fixed by placing the coverage sentence inside the result card. Clarified the simulation label and removed an unused stylesheet import. Six test groups then passed; commit 8842433.
- Conducted an author-led synthetic copy review; documented its limits and lack of fresh-chat/browser walkthrough. No synthetic quotes were attributed to a real person.
- Compared fictional task coverage with free tools. No claim of completed user actions or payer commitment.

## Honesty of the stack
Runtime AI explanation is prewritten and visibly labeled “IA simulada”. The optional HIBP request is real public metadata, not a victim identity search. No API key, credential, account number, CURP or personal file is collected. No auth/RLS is claimed because no personal data is stored. Browser usability, runtime network success and supported WebMCP context remain unverified.

## Missing course evidence
Raw Brain Bending debate export, full raw development chat export, personal and team videos, fresh-chat persona screenshot walkthrough and real-user benchmark are not present. This record preserves genuine work without replacing those requirements with invented evidence.
