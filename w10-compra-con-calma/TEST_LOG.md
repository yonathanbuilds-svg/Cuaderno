# Actual mechanical and synthetic inspection log

14 October 2026. Fixed-rule Node checks, no claim of browser interaction or screenshot test.

Version 1 passed T01-T10. Deployed commit 50a4dea43c7d5b5070013a93e14af6d403e27020 at https://compra-con-calma-semana10.yonazet.chatgpt.site . Deployment appgdep_6ad005452b088191b2b52dae7484d5df succeeded. Owner-private audience, not yet confirmed accessible to the professor.

Adversarial tests T11 and T12 then failed: numeric parsing accepted hexadecimal/exponent notation or rounded fractional cents, and an unknown payment mode silently fell back to cash. These are real engine failures found by execution, although normal HTML field constraints already reject some of those inputs. Fix: strict decimal parsing with at most two fractional digits; explicit payment-mode allowlist. Retest: all 12 checks passed. A new deploy is required after this correction.

Synthetic persona inspection: adult CDMX renter, desk purchase, self-set total budget of MXN 2,400, price 1,800, delivery unknown, 110 cm desk / 120 cm space, returns not checked. The actual engine returns missing delivery/return checks and no total. No interview, real-user observation, click timing, screenshot walkthrough or human validation was performed.

Worst wording risk found by inspecting the output copy: 'REVISIÓN PARCIAL COMPLETA' could be read as a broader approval. Replaced with 'COSTO Y ANCHO REVISADOS'. Reinspection confirms title names the narrow checks and adjacent text explicitly says it does not recommend buying. Repeat complete-data case returns clear only within the declared checks; removing delivery returns missing. This is a synthetic text/code inspection and engine retest, not browser persona QA.

Remaining verification: actual browser interactions, mobile screenshot walkthrough, download/reset UX, a new vision feature if required, team Blueprint conditions, public access and the student's DEMO/reflection.
