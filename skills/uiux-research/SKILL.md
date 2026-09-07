---
name: uiux-research
description: Frame human problems from product and user evidence, preserve provenance, identify plausible human mechanisms, and define defensible interaction requirements. Use when the problem is uncertain, evidence must be interpreted, research gaps matter, or design requirements are not yet grounded.
---

# uiux-research

Convert product context and available evidence into a defensible human-problem model and interaction requirements without jumping directly to UI solutions.

## Activate when

- the human problem is uncertain.
- evidence must be interpreted or reconciled.
- interaction requirements are not yet defensible.
- more research may be required before design.

## Core rules

- Separate observation, interpretation, evidence, implication and solution.
- Preserve evidence type, source, limitations and conflict.
- Synthetic research is supporting evidence and must never be presented as observed real-user evidence.
- Human-science concepts are candidate mechanisms, not universal interface rules.
- A valid outcome may be NEEDS_MORE_EVIDENCE.

## P0 commands

- [`frame-problem`](commands/frame-problem.md)
- [`ingest-evidence`](commands/ingest-evidence.md)
- [`identify-mechanisms`](commands/identify-mechanisms.md)
- [`define-interaction-requirements`](commands/define-interaction-requirements.md)

## Artifact discipline

Use available project artifacts as durable state. Do not treat conversation context as the sole authority for approved decisions. When upstream artifacts are absent, state what is unknown and continue only where the task remains defensible.

## External execution

Use existing consumer-project tools when execution is required. Missing optional tools reduce automation rather than invalidating the skill. Do not silently install or replace browser, accessibility, design-tool, mobile or engineering infrastructure.

## Boundaries

This skill owns reusable UI/UX production intelligence for its stated responsibility. Actual product evidence and decisions belong to the consuming project. Production implementation, other Production Skills domains and Pactwright lifecycle semantics remain externally owned.

## Evaluation

The skill is not proven by self-assessment. Its commands and composed behaviour must be independently benchmarkable against `docs/04-testing-and-benchmark-spec.md`.
