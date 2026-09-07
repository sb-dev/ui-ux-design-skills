# recommend-refinement

**Owning skill:** `uiux-evaluate`  
**Status:** P0 contract

## Purpose

Recommend the smallest sufficient corrective scope after diagnosis.

## Inputs

diagnosis; affected artifacts; approved decisions.

## Outputs

refinement route.

## Must preserve

preserve unaffected decisions and true dependency impact.

## Must not

whole-design regeneration by default.

## Failure routing

ACCEPT, LOCAL_FIX, REOPEN_DESIGN/STRUCTURE/REQUIREMENT/PROBLEM, NEEDS_MORE_EVIDENCE or ROUTE_ENGINEERING.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
