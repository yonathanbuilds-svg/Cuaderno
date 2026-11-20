# Week 15 actual verification
20 November 2026. Observations below are engineering evidence, not a real buyer test.

## Passed locally
- node --test tests/*.test.js: 17 passed, 0 failed. Includes inherited pricing/quote cases and two campaign cases.
- B1's fixed sample calculates 15,300 known, with assembly/other pending and no final total.
- Unknown or hostile source IDs cannot supply custom numbers; only the exact 'b1' selector yields the fixed example.
- node --check: campaign.js, quote-ui.js and guia/guide.js parse successfully.
- HTML local link check: guide/root links, scripts and campaign files resolve to existing local files.
- git diff --check: no whitespace errors.

## No new failing calculation manufactured
The engine tests passed on the first Week 15 run. The inherited Week 14 observed parser/stale-result defects, fixes and deployments remain recorded in docs/SESSION_CLOSE.md; they are not relabeled as new observations. Week 15's campaign sample is a functional addition, not an invented failure/retest narrative.

## Initial browser limit and publication gate (subsequently resolved)
The local preview server started, but the separate cloud browser could not connect to localhost:8765 (ERR_CONNECTION_REFUSED). No UI screenshot, clipboard interaction or anonymous deployed Week 15 retest was obtained. Static checks and engine tests cannot replace these.

Publication attempt: git push to origin/main was rejected by automatic approval review because new code/assets would be published to a remote main branch without explicit publication authorization. No alternative connector or indirect push was attempted. Local commits 14c1237 (spec) and 9fd6085 (implementation) exist; publication initially awaited authorization; the final record below supersedes that state.

Existing project: compra-con-calma-w14, project prj_WRNxCbCw54getLS1L7S7m9JRi46W, team team_f3axDzu0EkMYagI0m4mRhIjR. Existing Vercel deployment dpl_9C7i4eqigNMpnADjsjLYmxiHH4hd was READY when inspected via connector. It is the inherited Week 14 release, not this new work. At that inspection no Week 15 deployment ID existed; see the final record below.

After authorization: push reviewed commits, create a deployment within the existing project/team, inspect READY status, test /guia and all downloads anonymously, follow B1 to /?from=b1#quote-form, verify unknown/zero and invalid-field behavior, inspect mobile wrapping, then update this log with only observed results.


## Final publication and observed browser checks
User explicitly authorized publication in this conversation on 20 November 2026. The shell push lacked Git credentials. The connected GitHub app published the reviewed blobs/trees and three corresponding commits, preserving the existing history. Each remote tree hash exactly matched its local reviewed tree; main was advanced with an expected-head check and no force push.

Remote commits:
- 3e9d8eeddee34eb986d5650b626d54e96b673e52: specification before implementation.
- e52c5b3f03b831878367172d132ba1e74e675011: guide, assets, campaign sample and tests.
- e82efaaf9c6a76eda646ebd9c26b0813a01da8cd: brief, recording preparation and initial evidence boundaries.

Vercel production deployment dpl_FQAWQuW5ajY6j7iduEJecGdadj9R reached READY. Release source commit: e82efaaf9c6a76eda646ebd9c26b0813a01da8cd. Production alias: https://compra-con-calma-w14.vercel.app/guia. Existing project/team and public audience were preserved. No credentials, payment settings or domain ownership changed.

Actual anonymous browser observations:
1. /guia loaded without a sign-in wall and displayed the three pieces and fictional-data limitations.
2. 'Copiar las tres preguntas' returned its success message.
3. B1's example link opened /?from=b1#quote-form, with price 14,600, delivery 700 confirmed, subtotal 15,300, assembly/other pending and the explicit not-final warning.
4. Checking assembly as confirmed with a blank value removed the subtotal, displayed a validation message and disabled Copy.
5. Entering explicit 0 restored the 15,300 subtotal, kept Other pending and reenabled Copy.
6. Reset returned 14,600 with all three charge types unconfirmed.
7. The desktop hero and all three content cards were visually inspected; no text cropping was seen after the page finished rendering. No mobile-device or screen-reader test is claimed.
8. Direct HTTP asset checks returned 200 for A1 PNG, B1 PDF, C1 PDF, guide.js and campaign.js. All response bytes exactly matched reviewed local files.

No newly failing calculation was invented and no new mechanical failure required a code fix. The earlier Week 14 actual defect/fix history remains the continuing evidence. This release does not establish real audience reach, demand, willingness to pay or comprehension. The persona fresh-chat procedure, actual audience experiment, original full conversation exports, team recording and student videos remain outstanding.
