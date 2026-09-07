# ingest-evidence

**Owning skill:** `uiux-research`  
**Status:** P0 contract

## Purpose

Normalise supplied evidence while preserving provenance and epistemic type.

## Inputs

source material and source context.

## Outputs

evidence records.

## Must preserve

source type, source reference, context, limitations and confidence.

## Must not

laundering synthetic/reference/expert evidence into real-user evidence.

## Failure routing

flag unsupported or unverifiable material rather than fabricating provenance.

## Evaluation hooks

At minimum, test one normal case and one boundary/forbidden-behaviour case where misuse is meaningful. Prefer deterministic assertions for structural invariants and independent semantic evaluation for judgement that cannot be made mechanically.
