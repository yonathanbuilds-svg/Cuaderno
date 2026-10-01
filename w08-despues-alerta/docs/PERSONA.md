# Synthetic persona review — Week 8

## Who
Marta, 52, fictional micro-business owner, reads Spanish and uses WhatsApp. She reviews monthly figures with an accountant, has no cybersecurity training and may read a reassuring status as permission to ignore a problem. This persona is hypothesized from Team 6's monthly-witness design. No interview or real user research is claimed.

## Method and limits
Author-led synthetic walkthrough of the generated mockup and implemented interface copy. This was not a separate fresh-chat agent and not a browser screenshot-by-screenshot navigation session. Findings are design hypotheses, not observed speech, task completion or measured usability. The mockup is AI-generated and differs from the implementation; do not cite it as a working-site screenshot. Managed static preview has no compatible development server and the required control-browser skill is unavailable, so browser QA is not represented as completed.

## Walkthrough
| Step | Plausible confusion | Design response |
|---|---|---|
| Choose scenario | The mockup says “what you saw or lived”; Marta could mistake the practice for accepting a real case. | Implemented page says “Elige una situación inventada” and accepts no free text. |
| Select evidence | “Resultado de búsqueda ficticio” can still sound like an actual search just ran. | Changed to “Simula un resultado (no buscamos tu identidad)”. This is the highest-priority ambiguity. |
| Read no-match result | “No encontrado” could mean “safe”, especially when detached from its explanation. | Repeat the coverage disclaimer inside the action card; now it also survives print. |
| Fiscal route | Marta might send her private key to a helper or assume revocation cancels invoices. | Card explicitly keeps keys with the owner and states revocation does not resolve previous acts. |
| Request simple explanation | Marta might assume a model evaluated her actual documents. | Label every explanation “IA simulada”, prewritten, no live model call. |
| Human escalation | A button may suggest the app has a staffed recovery service. | State no funded named caseworker accepts the case; link directly to institutional orientation, with no guaranteed answer. |

## Change and evidence
Initial UI commit: c6cc2fd. Wording and print-evidence fix: 8842433. Relevant functional tests pass (six test groups, including nine case/state combinations). These tests do not establish that Marta successfully completes an institutional action.

## What remains
A fresh persona chat with sequential screenshots and a real-user pilot. C6 remains a kill condition until there is evidence of more correct completed actions than free incumbents, not merely a table of features.
