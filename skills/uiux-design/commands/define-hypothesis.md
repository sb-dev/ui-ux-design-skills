# define-hypothesis

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Create a falsifiable interaction hypothesis linking a design property to an expected human outcome.

## Inputs

interaction requirement; context; mechanism; baseline/alternative.

## Outputs

interaction hypothesis.

## Must preserve

target users/context, intervention property, outcome, mechanism, comparison and measure.

## Must not

vague preference claims or unmeasurable success.

## Failure routing

return to requirements when the intended outcome is not testable.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
