# verify-preservation

**Owning skill:** `uiux-evaluate`  
**Status:** P0 contract

## Purpose

Check that downstream refinement preserved protected upstream decisions.

## Inputs

approved-before state; candidate-after state; preserve set.

## Outputs

preservation result.

## Must preserve

semantic preservation of requirements, task, flow, authority and hierarchy as applicable.

## Must not

byte-equality as universal preservation test or ignoring protected drift.

## Failure routing

block refinement or reopen the owning upstream decision explicitly.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
