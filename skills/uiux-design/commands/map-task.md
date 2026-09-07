# map-task

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Model the user goal, task stages, decisions, responsibilities, completion and recovery independently of screens.

## Inputs

interaction requirements; product context.

## Outputs

task model.

## Must preserve

user goal, entry, stages, decisions, user/system responsibility, completion and recovery.

## Must not

copying an existing screen sequence as the task model.

## Failure routing

reopen requirements when the required task itself is unclear.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
