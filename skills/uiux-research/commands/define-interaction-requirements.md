# define-interaction-requirements

**Owning skill:** `uiux-research`  
**Status:** P0 contract

## Purpose

Translate evidence and plausible mechanisms into testable interaction properties without prescribing implementation.

## Inputs

human problem; candidate mechanisms; evidence.

## Outputs

interaction requirements.

## Must preserve

traceability to evidence/problem and measurable human or interaction outcome.

## Must not

turning a requirement into a specific screen/component solution.

## Failure routing

reopen mechanism/problem when no defensible requirement follows.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
