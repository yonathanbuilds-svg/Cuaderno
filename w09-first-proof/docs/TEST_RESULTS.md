# Week 9 actual verification - 8 October 2026

## Mechanical evidence
Assistant-run Node v24 tests, not a human capability assessment.
`node test.mjs`: PASS four discrepancies + changed constraint + eight invalid count types + text bounds.
Expected differences: DEMO-01 +12, DEMO-02 -8, DEMO-03 0, DEMO-04 unknown. Changed DEMO-01: 4 x 12 = 48, difference 0.

## Real defect and repair
After Sites version 1 was published, an event-handler test ran the actual app module with a minimal DOM test double. Sequence: submit valid original reasoning and assistance, type valid changed-scenario reasoning, click save. Expected: export enabled. Observed: disabled; assertion failed true !== false. The follow-up input listener called invalidate(), deleting the checked snapshot.
Fix: editing the follow-up deletes only its previous saved scenario and disables export until saved; original checked facts remain. Editing the original answer or route still invalidates the whole snapshot.
Retest `node flow-test.mjs`: PASS. Arithmetic tests: PASS unchanged.
This is an executed handler-level test. It is not a browser screenshot, deployed UI test or persona walkthrough. No deployed-browser defect claim is made.

## Publication
Public source: https://github.com/yonathanbuilds-svg/Cuaderno/tree/main/w09-first-proof
Packet first commit: d89c5b21946cd3cee81104a4ea817e9a87680f98.
Implementation prompt: e636b1f22920a27c9d2028fbcddc57a9df18b7a8.
Six application/test commits: cdbad1b0de0ce347e54c69f8f1506498efee5b1a; a179c85ac7eea74c830d1a5327d5d25843553242; fe7917609f51f1c6ec5e09ddbec35690612489e5; b2ff85811a924b1820d6b669b5fcbcda4d7c08f3; 1d62f17ec70212c4c8d61323bea90f5b60d87dfe; e9d03c0157cb6b8115b96893e404e7f81c50ed8c.
Fix commit: a2a03f925ca79dbc5356a8f6f400af5cafc02a63.
Vercel create-deployment request: 403 forbidden for yonathan-builds; no CLI installed. No Vercel deployment occurred.
Sites v1 successful: appgdep_6ac81d212b948191bb2868b46662ad1a, source 8bbb6ad6ddf34c22da18c72c68cb03c5f30f38f7.
Sites v2 successful: appgdep_6ac81d895cf48191aaaf171b8e0ca037, source e020c85aeedecdb0b7403e96d899df022f05694d.
Sites URL: https://primera-prueba-semana9.yonazet.chatgpt.site
Audience: owner-private. This does NOT satisfy a publicly accessible teacher URL. No browser QA: permitted managed preview tooling was unavailable.

## Persona status
No actual User brief or interview was supplied. Blueprint gives a worker archetype and first-hand Fatima context, not a validated inventory persona. No fresh persona chat or actual screenshot walkthrough was performed. A concept mockup is not evidence of UI use.

## Evidence still required
Public access / teacher-accessible hosting, real browser walkthrough and screenshot retest, full raw development chat, personal 40+ minute Brain argument, Chapter 8 direct reading, DEMO recording, Fusion recording and personal reflection recording. These have not been fabricated.
