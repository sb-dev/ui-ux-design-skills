# define-acceptance-criteria

**Owning skill:** `uiux-handoff`  
**Status:** P0 contract

## Purpose

Translate approved interaction requirements into observable engineering acceptance criteria.

## Inputs

interaction requirements; interaction contract.

## Outputs

acceptance criteria.

## Must preserve

testable behaviour and traceability to requirement IDs.

## Must not

subjective visual wording presented as acceptance criteria.

## Failure routing

reopen requirement/handoff when behaviour cannot be tested.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
