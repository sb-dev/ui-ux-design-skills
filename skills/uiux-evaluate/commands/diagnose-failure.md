# diagnose-failure

**Owning skill:** `uiux-evaluate`  
**Status:** P0 contract

## Purpose

Identify the production layer that most plausibly owns an observed defect.

## Inputs

artifact; evaluation evidence; upstream contracts.

## Outputs

diagnosis and owning layer.

## Must preserve

evidence-based distinction among research, requirement, task, IA, interaction, visual, accessibility, implementation or evaluation defects.

## Must not

symptom-only diagnosis or automatic redesign.

## Failure routing

route to the owning layer, including ROUTE_ENGINEERING when applicable.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
