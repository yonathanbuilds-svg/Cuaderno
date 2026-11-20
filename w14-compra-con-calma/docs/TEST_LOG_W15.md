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

## Browser limit and release state
The local preview server started, but the separate cloud browser could not connect to localhost:8765 (ERR_CONNECTION_REFUSED). No UI screenshot, clipboard interaction or anonymous deployed Week 15 retest was obtained. Static checks and engine tests cannot replace these.

Publication attempt: git push to origin/main was rejected by automatic approval review because new code/assets would be published to a remote main branch without explicit publication authorization. No alternative connector or indirect push was attempted. Local commits 14c1237 (spec) and 9fd6085 (implementation) exist; publication awaits authorization.

Existing project: compra-con-calma-w14, project prj_WRNxCbCw54getLS1L7S7m9JRi46W, team team_f3axDzu0EkMYagI0m4mRhIjR. Existing Vercel deployment dpl_9C7i4eqigNMpnADjsjLYmxiHH4hd was READY when inspected via connector. It is the inherited Week 14 release, not this new work. No Week 15 deployment ID exists.

After authorization: push reviewed commits, create a deployment within the existing project/team, inspect READY status, test /guia and all downloads anonymously, follow B1 to /?from=b1#quote-form, verify unknown/zero and invalid-field behavior, inspect mobile wrapping, then update this log with only observed results.
