# build-interaction-contract

**Owning skill:** `uiux-handoff`  
**Status:** P0 contract

## Purpose

Describe the runtime interaction behaviour engineering must preserve.

## Inputs

approved UX; flow; states; requirements.

## Outputs

interaction contract.

## Must preserve

actions, transitions, persistence, errors, recovery, accessibility and user-control semantics as applicable.

## Must not

screen-only handoff or production architecture prescription.

## Failure routing

return to design when important behaviour is unresolved.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
