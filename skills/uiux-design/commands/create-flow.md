# create-flow

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Represent entry, actions, system responses, branching, failures, recovery and completion for a candidate/selected interaction.

## Inputs

task model; requirements; selected alternative.

## Outputs

flow artifact.

## Must preserve

approved task/requirement semantics and meaningful failure paths.

## Must not

happy-path-only flow or silent task-model changes.

## Failure routing

reopen task/alternative when the flow exposes a structural defect.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
