# frame-problem

**Owning skill:** `uiux-research`  
**Status:** P0 contract

## Purpose

Turn observations and product context into a solution-neutral human-problem statement.

## Inputs

product context; observations; available evidence.

## Outputs

human-problem artifact or update.

## Must preserve

observed behaviour, affected context, consequence and uncertainty.

## Must not

embedding a UI solution in the problem statement.

## Failure routing

route to evidence gathering when the problem cannot yet be framed defensibly.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
