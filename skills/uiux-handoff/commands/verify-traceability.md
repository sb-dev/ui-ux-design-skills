# verify-traceability

**Owning skill:** `uiux-handoff`  
**Status:** P0 contract

## Purpose

Verify material handoff requirements can trace to approved UX intent and evidence chain.

## Inputs

handoff; approved design; evaluation; requirements; evidence references.

## Outputs

traceability result.

## Must preserve

resolved links from acceptance criteria to interaction contract/design/requirement and upstream evidence where applicable.

## Must not

inventing missing links or accepting orphan criteria.

## Failure routing

block handoff until broken links are repaired or explicitly waived.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
