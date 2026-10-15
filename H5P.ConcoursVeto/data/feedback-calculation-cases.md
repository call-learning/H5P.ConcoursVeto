# Feedback calculation cases

`feedback-calculation-cases.json` is a readable transcription of the scoring
examples and feedback thresholds in `Feedback.xlsx`.

The workbook contains `GEN`, `STAV`, and `STL` sheets. It does not contain a
Hemi-Sud sheet, so the Hemi-Sud cases use the shared GEN aptitude and
representation feedback configuration from the deployed Hemi-Sud content.

Feedback ranges use the runtime convention: ranges are ordered by ascending
`max`, and the first range where `score <= max` is selected. This means an
exact threshold belongs to that threshold's range. The fixture is deliberately
static; tests do not read the XLSX file.
