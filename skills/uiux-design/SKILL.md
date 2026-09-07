---
name: uiux-design
description: Turn interaction requirements into falsifiable hypotheses, task models, structurally distinct design alternatives, flows, fidelity decisions and prototype contracts. Use when the problem is sufficiently understood to explore interaction solutions.
---

# uiux-design

Turn interaction requirements into explicit, testable UX alternatives at the lowest useful fidelity while preserving approved upstream decisions.

## Activate when

- interaction requirements exist or can be inferred defensibly.
- the task/IA/interaction needs exploration.
- a prototype or higher-fidelity representation must be scoped.

## Core rules

- Model user tasks before assigning screens.
- Generate structural alternatives when material uncertainty remains.
- Choose fidelity from uncertainty, not aesthetics or tool capability.
- Higher-fidelity work inherits approved upstream constraints.
- Prototype strategy belongs here; production implementation does not.

## P0 commands

- [`define-hypothesis`](commands/define-hypothesis.md)
- [`map-task`](commands/map-task.md)
- [`generate-alternatives`](commands/generate-alternatives.md)
- [`select-fidelity`](commands/select-fidelity.md)
- [`create-flow`](commands/create-flow.md)
- [`prepare-prototype`](commands/prepare-prototype.md)

## Artifact discipline

Use available project artifacts as durable state. Do not treat conversation context as the sole authority for approved decisions. When upstream artifacts are absent, state what is unknown and continue only where the task remains defensible.

## External execution

Use existing consumer-project tools when execution is required. Missing optional tools reduce automation rather than invalidating the skill. Do not silently install or replace browser, accessibility, design-tool, mobile or engineering infrastructure.

## Boundaries

This skill owns reusable UI/UX production intelligence for its stated responsibility. Actual product evidence and decisions belong to the consuming project. Production implementation, other Production Skills domains and Pactwright lifecycle semantics remain externally owned.

## Evaluation

The skill is not proven by self-assessment. Its commands and composed behaviour must be independently benchmarkable against `docs/04-testing-and-benchmark-spec.md`.
