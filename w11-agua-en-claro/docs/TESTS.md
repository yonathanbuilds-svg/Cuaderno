# Mechanical test - 21 October 2026
First deployment: appgdep_6ad959c483388191998cbc7d48bcc539 (succeeded), source dc51f1adce9b597f79d94efd09c018f1acfa253f.
Actual browser reproduction: open sustained increase -> choose Equipo Verde -> fill cause and evidence note -> leave both numeric readings empty -> click Close. The UI incorrectly displayed a closed inspection with blank readings.
Cause: Number('') evaluates to zero, passing finite/nonnegative checks.
Fix: require both trimmed strings to be nonempty before numeric validation. Regression tests cover empty, whitespace, negative, infinite, missing cause and missing evidence cases.
Model review: connect review classification to count of sustained residuals above the fitted baseline, rather than the scenario name. Missing telemetry and refill context take precedence. The model and threshold remain synthetic and uncalibrated.
Node regression tests: passed. Browser retest and second deployment recorded below after execution.
Browser retest: after choosing a crew and entering cause/evidence, empty readings now leave the inspection open with a visible validation error. Entering 12 and 8 L/min permits closure and renders both readings in the closure record.
Synthetic walkthrough finding: the prominent '0 confirmed leaks' metric can be misread as reassurance when the sensor is offline. Replace it with 'Physical diagnosis: not performed' and 'Without inspection a leak is neither confirmed nor ruled out.' This is a same-session synthetic review, not a fresh-chat persona or real user study.
