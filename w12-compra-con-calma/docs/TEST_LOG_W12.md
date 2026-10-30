# Week 12 verification record

## Engine
Initial run: 9 of 10 Node tests passed. The input-type test failed because arrays were coerced into numeric strings or blanks. Added an explicit scalar-type check. Rerun: all 10 tests passed. This is an observed failure and fix, not an invented bug.

## Browser walkthrough
- Opened the application through the managed preview. Vite initially rejected terminal.local. Added that exact preview hostname to allowedHosts; the page then loaded.
- Loaded the invented MXN 8,900 example with MXN 500 assembly, 0 other charges and unknown delivery. Result: MXN 9,400 known subtotal, no final total, and an explicit delivery question.
- Changed delivery to 800. The prior result disappeared immediately. Recalculation returned MXN 10,200, or MXN 200 above the invented limit of 10,000.
- Initial local save failed in HTTP preview because crypto.randomUUID was unavailable. Added a non-security local identifier fallback; the save then returned a success message.
- Reload initially hid saved records: Supabase's initial null-session event overwrote the local history state. The callback now reloads local records when there is no signed-in user. Reload then displayed the saved MXN 10,200 record.
- Deleted the synthetic record; UI confirmed deletion.

## Persona screenshot review
Persona: Mariana, 32, explicitly synthetic. The role-based review inspected actual screenshots, not Carlos's behavior. The worst interpretation risk was that saving an incomplete review could look like completing the purchase check. The button now says "Guardar borrador incompleto". The repeat screenshot preserves "Este subtotal todavía no es el total" and the missing-charge question. No real customer test, separate human interview or independent fresh-chat persona session is claimed.

## Supabase
Existing semestre project was paused. Restore requested; status changed through COMING_UP and the database became accessible. Inspected existing public.Notas, then created a separate public.compra_reviews table. RLS is enabled; SELECT and DELETE are restricted to auth.uid()=owner_id; INSERT has the same WITH CHECK. Anonymous role has no table grants. Authenticated users have only SELECT/INSERT/DELETE. SQL catalog checks confirmed these definitions. Google provider is currently disabled. Therefore Google sign-in and cloud save have not passed an end-to-end browser test, and the UI does not advertise them as live.

An attempted transactional synthetic-account isolation test was rejected by automatic review before execution. No test identities were created; catalog checks were used instead. Cross-account runtime isolation remains unverified.

## Publication
Vercel first attempt failed: the project inherited an npm build command while receiving already compiled files. Corrected the project to static prebuilt assets. Deployment dpl_J3EwoajRwjdB1UfdB9pyNxkR8eDR reached READY. Later deployments carry the browser fixes. The project's Vercel authentication protection remains configured; the public Sites publication is a temporary review route, not the required owned-domain URL.

## Open requirements
Owned domain purchased under the venture's account and connected to Vercel; Google OAuth enabled and redirect URLs configured; authenticated cloud save tested with real permitted accounts; Week 12 team Blueprint and video; measured 10:1 case; student DEMO and REFLECT; complete raw chat exports. No submission receipt is claimed.
