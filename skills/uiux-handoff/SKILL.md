---
name: uiux-handoff
description: Convert approved UX into an implementation-ready behavioural contract with explicit states, accessibility, acceptance criteria and traceability. Use when UX ownership is ready to transition to software engineering without prescribing unnecessary production architecture.
---

# uiux-handoff

Preserve approved UX intent at the engineering boundary through explicit behaviour, acceptance criteria and upstream traceability.

## Activate when

- a selected/approved UX needs engineering-ready behaviour.
- acceptance criteria must trace to interaction requirements.
- an implementation contract must cover states, recovery or accessibility.

## Core rules

- Handoff is an ownership transition, not a waterfall wall.
- Specify behaviour and constraints rather than unrelated production architecture.
- Acceptance criteria derive from interaction requirements.
- Material states, recovery and accessibility must not be hidden in screenshots.
- Traceability must reach upstream UX intent.

## P0 commands

- [`build-interaction-contract`](commands/build-interaction-contract.md)
- [`define-acceptance-criteria`](commands/define-acceptance-criteria.md)
- [`verify-traceability`](commands/verify-traceability.md)

## Artifact discipline

Use available project artifacts as durable state. Do not treat conversation context as the sole authority for approved decisions. When upstream artifacts are absent, state what is unknown and continue only where the task remains defensible.

## External execution

Use existing consumer-project tools when execution is required. Missing optional tools reduce automation rather than invalidating the skill. Do not silently install or replace browser, accessibility, design-tool, mobile or engineering infrastructure.

## Boundaries

This skill owns reusable UI/UX production intelligence for its stated responsibility. Actual product evidence and decisions belong to the consuming project. Production implementation, other Production Skills domains and Pactwright lifecycle semantics remain externally owned.

## Evaluation

The skill is not proven by self-assessment. Its commands and composed behaviour must be independently benchmarkable against `docs/04-testing-and-benchmark-spec.md`.
