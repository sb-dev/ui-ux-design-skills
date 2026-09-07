# evaluate-hypothesis

**Owning skill:** `uiux-evaluate`  
**Status:** P0 contract

## Purpose

Interpret validation evidence against the hypothesis and, where possible, the underlying mechanism separately.

## Inputs

hypothesis; evaluation evidence.

## Outputs

evaluation result.

## Must preserve

supported / partially-supported / inconclusive / refuted / not-tested with evidence.

## Must not

treating a failed design as proof the human mechanism is false.

## Failure routing

retain failed hypotheses and route next investigation appropriately.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
