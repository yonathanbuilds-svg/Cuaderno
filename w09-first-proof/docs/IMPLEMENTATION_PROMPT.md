# Implementation prompt - Week 9 First-proof

Implement a free, browser-local Spanish demo. No API calls, signup, personal-data persistence, real applicant records, hiring score or opportunity claim. The AI suggestions are prerecorded, model-drafted simulation content, clearly labeled on screen and in exports. A live-LLM integration remains out of scope unless separately configured.

Build small testable features in order:
1. Present existing-evidence-first choice. Ask whether the visitor already has a work sample; use a fictional example or the fallback task. Never require uploading real files, a CV, RFC, bank account, login or paid tool.
2. Show four invented source records with carton counts, packing and expected units. Separate immutable task inputs from the user's reasoning. Validate lengths and required selections.
3. Compute inventory facts deterministically, keeping missing packing as unknown. Display explicit source references and mark simulated AI suggestions separately.
4. Ask the visitor to explain a changed constraint: DEMO-01 changes from five to four cartons. Recompute facts and keep the human explanation as recorded, not verified.
5. Export a worker-owned JSON record and printable card with all four evidence states. Artifact recorded and numbers checked never imply authorship verified, understanding confirmed or employer accepted.
6. Reset clears the in-memory session. Nothing is sent to an employer. Existing-evidence branch must preserve the distinction between cited sample and a newly performed exercise.

Acceptance: all six Blueprint conditions are visibly represented; no universal score; no fabricated reviewer; missing evidence cannot produce a negative eligibility flag; all data invented and labelled; export is optional and local. Test the complete browser flow and mobile layout. Log real defects, fix them, redeploy and retest.

Commit plan: packet first; typed data/validators; accessible Spanish interface; facts/AI separation and counterfactual; export automation; actual defect repair; test evidence and decisions. Two real deployments minimum. Preserve original Blueprint as a source, without changing team decisions.
