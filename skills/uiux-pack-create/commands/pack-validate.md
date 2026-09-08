# pack:validate

**Owning skill:** `uiux-pack-create`  
**Status:** Authoring contract

## Purpose

Validate that an Extension Pack is coherent, self-contained, catalogue-ready and does not duplicate core UI/UX responsibility.

## Inputs

pack skill; production profile; showcase; evals; catalogue entry.

## Outputs

pass/fail findings with required corrections.

## Must preserve

core-vs-pack boundary; installability; exact showcase prompt; declared precedence and evaluation behaviour.

## Must not

approve incomplete taxonomy-only packs, hidden dependencies or packs without negative/boundary evaluation.

## Failure routing

Return the smallest corrective scope: pack contract, showcase, evals, packaging or catalogue entry.

## Evaluation hooks

Check identity, activation, affected core skills, stable core invariants, precedence, showcase prompt, behavioural evals, self-containment and catalogue consistency.
