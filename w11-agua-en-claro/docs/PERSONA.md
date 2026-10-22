# Synthetic operator walkthrough - Week 11
Method: same-session, screenshot-based synthetic review. No real person was interviewed. A separate fresh-chat walkthrough requested by the rubric is still pending.
Persona: fictional building caretaker, 54, comfortable with simple WhatsApp messages but unfamiliar with flow modeling. Wants the next action without accidentally cutting water to residents.
Task: review missing telemetry, open a simulated inspection, select a suitable fictional crew, and close with evidence.

1. Dashboard screenshot (qa-persona-before.jpg): 'Sin señal' is visible, but the adjacent '0 confirmed leaks' is a competing reassurance cue. A caretaker could infer that nothing is leaking. This is a design-risk inference from the screenshot, not a recorded human quote.
2. Inspection form: crew fees and arrival windows are labeled assumptions. Choosing a crew creates no contact or dispatch. The next action is clear; long evidence requirements may need a future guided mobile flow.
3. Closure screenshot (qa-closed.jpg): the record preserves before/after readings and explicitly refuses to equate the change with saved liters. Earlier mechanical testing found blank readings could pass; this was fixed and retested in-browser.
4. Worst confusion fixed: replace '0 confirmed leaks' with 'Physical diagnosis: not performed' and explain that absence of physical inspection neither confirms nor rules out a leak.
5. Retest: inspect updated missing-data screen, then verify that the warning and neutral diagnosis remain visible together. The same-session nature limits independence and does not establish real-world comprehension.
