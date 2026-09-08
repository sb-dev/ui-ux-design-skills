---
name: uiux-pack-create
description: Inspect, design, demonstrate, evaluate and validate coherent UI/UX Extension Packs without duplicating core UX responsibilities. Use when a reusable specialist UX production grammar is needed across projects.
---

# uiux-pack-create

Create or revise reusable UI/UX Extension Packs that specialise the four core UI/UX skills without replacing their evidence-to-validation lifecycle.

## Activate when

- a specialist UX production grammar recurs across projects;
- an existing catalogue pack does not already cover the behaviour cleanly;
- the specialisation materially changes production and evaluation behaviour;
- a pack needs a showcase, evals or contract revision.

## Core rules

- Inspect the existing catalogue before creating a new pack.
- Prefer adapting an existing coherent profile over adding low-level taxonomy.
- Keep evidence provenance, accessibility, approval, preservation and bounded refinement authoritative.
- Define production behaviour, not labels.
- Every pack needs a realistic showcase with a complete copyable prompt.
- Every implemented pack needs negative/boundary and core-vs-pack evaluation.
- Do not create a universal pack runtime, dependency solver or inheritance system.

## Commands

- [`pack:inspect`](commands/pack-inspect.md)
- [`pack:create`](commands/pack-create.md)
- [`pack:example`](commands/pack-example.md)
- [`pack:evals`](commands/pack-evals.md)
- [`pack:validate`](commands/pack-validate.md)

## Artifact discipline

The pack contract belongs in `docs/05-ui-ux-design-customisation-packs-spec.md`. The curated catalogue belongs in `docs/06-ui-ux-design-extension-pack-catalogue.md`. Implemented public showcases belong under `extension-packs/<pack>/` and installable pack skills belong under `skills/<pack>/`.

Do not duplicate the whole core UX lifecycle inside a pack.

## Boundaries

This is a support/authoring skill, not a fifth core UI/UX production skill. It does not own product-specific UX decisions, provider execution, software implementation, research infrastructure or Pactwright lifecycle semantics.

## Evaluation

A pack is ready only when its specialist behaviour is observable, its boundaries are explicit, its showcase is convincing, and its evaluation proves that core invariants survive the specialisation.
