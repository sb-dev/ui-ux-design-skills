# prepare-prototype

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Define the smallest executable prototype required to test the current hypothesis.

## Inputs

hypothesis; selected flow; fidelity decision.

## Outputs

prototype execution contract.

## Must preserve

required interactions/states/content realism plus preserved decisions.

## Must not

turning prototype work into production architecture.

## Failure routing

delegate implementation to available execution capability or produce manual/lower-fidelity validation.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
