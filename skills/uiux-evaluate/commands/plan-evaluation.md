# plan-evaluation

**Owning skill:** `uiux-evaluate`  
**Status:** P0 contract

## Purpose

Select evaluation methods appropriate to the hypothesis, requirements, fidelity and consequence.

## Inputs

hypothesis; requirements; artifact; risk/context.

## Outputs

evaluation plan.

## Must preserve

method-question fit and explicit limits of what can be verified.

## Must not

using convenient tools that cannot observe the target uncertainty.

## Failure routing

request higher/other fidelity or human evidence when required.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
