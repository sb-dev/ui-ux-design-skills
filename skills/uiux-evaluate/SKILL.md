---
name: uiux-evaluate
description: Evaluate UX against explicit requirements and hypotheses, orchestrate appropriate deterministic or human checks, verify preservation, diagnose the owning failure layer, and recommend the smallest sufficient refinement. Use for flows, designs, prototypes, implementations and regressions.
---

# uiux-evaluate

Validate the design, diagnose the correct owning layer, and direct bounded correction rather than generic regeneration.

## Activate when

- a flow/design/prototype/implementation needs validation.
- a hypothesis has evidence to interpret.
- a refinement must prove preservation.
- a defect must be routed to the correct owner.

## Core rules

- Evaluation diagnoses before revision.
- Tool output is evidence, not automatically root cause.
- Deterministic checks and semantic/human judgement remain distinct.
- Approved unaffected decisions are regression targets.
- Implementation defects route to engineering when UX intent is sound.

## P0 commands

- [`plan-evaluation`](commands/plan-evaluation.md)
- [`evaluate-hypothesis`](commands/evaluate-hypothesis.md)
- [`verify-preservation`](commands/verify-preservation.md)
- [`diagnose-failure`](commands/diagnose-failure.md)
- [`recommend-refinement`](commands/recommend-refinement.md)

## Artifact discipline

Use available project artifacts as durable state. Do not treat conversation context as the sole authority for approved decisions. When upstream artifacts are absent, state what is unknown and continue only where the task remains defensible.

## External execution

Use existing consumer-project tools when execution is required. Missing optional tools reduce automation rather than invalidating the skill. Do not silently install or replace browser, accessibility, design-tool, mobile or engineering infrastructure.

## Boundaries

This skill owns reusable UI/UX production intelligence for its stated responsibility. Actual product evidence and decisions belong to the consuming project. Production implementation, other Production Skills domains and Pactwright lifecycle semantics remain externally owned.

## Evaluation

The skill is not proven by self-assessment. Its commands and composed behaviour must be independently benchmarkable against `docs/04-testing-and-benchmark-spec.md`.
