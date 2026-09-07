# generate-alternatives

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Generate 2–4 meaningfully different interaction strategies when structural uncertainty exists.

## Inputs

task model; requirements; hypothesis; constraints.

## Outputs

candidate alternatives.

## Must preserve

hypothesis-relevant structural diversity.

## Must not

cosmetic variants presented as different interaction strategies.

## Failure routing

reduce scope or revisit the hypothesis if alternatives cannot differ meaningfully.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
