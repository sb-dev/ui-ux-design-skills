# identify-mechanisms

**Owning skill:** `uiux-research`  
**Status:** P0 contract

## Purpose

Propose plausible human mechanisms that could explain observed behaviour.

## Inputs

human problem; evidence records.

## Outputs

candidate mechanism records.

## Must preserve

competing explanations and evidence for/against each candidate.

## Must not

asserting psychology vocabulary as proven root cause.

## Failure routing

request more evidence when discrimination between mechanisms matters.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
