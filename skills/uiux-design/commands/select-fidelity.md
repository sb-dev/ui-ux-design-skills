# select-fidelity

**Owning skill:** `uiux-design`  
**Status:** P0 contract

## Purpose

Choose the cheapest representation capable of resolving the current UX uncertainty.

## Inputs

current uncertainty; approved decisions; required evidence.

## Outputs

fidelity decision / representation contract.

## Must preserve

required realism, deliberately omitted realism and exit criteria.

## Must not

automatic escalation to high fidelity.

## Failure routing

downgrade or stop when a cheaper representation can answer the question.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
