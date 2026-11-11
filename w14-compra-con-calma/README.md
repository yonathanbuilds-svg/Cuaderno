# Compra con Calma — Week 14

Source and test evidence for a proposed Week 14 prototype. This is preparation, **not a complete Brightspace submission**.

**Deployed prototype:** https://compra-con-calma-w14.vercel.app

**Scope:** static, browser-local review of furniture quotes in MXN. Missing delivery, assembly and other charges are kept unknown rather than set to zero. Even completed user inputs are not independent verification of seller prices. No login, backend, payments, collection of user data or AI API.

**Tests:** run `node --test tests/quote.test.js` with Node 18+. Seven unit tests exercise monetary arithmetic, unknown charges and invalid inputs.

**Evidence still required:** official Week 14 instructions/role, real end-user work and any team meeting or videos the syllabus requires, official domain if required, and an actual Brightspace upload receipt. No such evidence is claimed here.

**Source note:** the Vercel page was deployed through the Vercel API. This folder includes its calculation engine and a test suite; the archived ZIP provided in the conversation contains the stand-alone full UI and coursework drafts.
