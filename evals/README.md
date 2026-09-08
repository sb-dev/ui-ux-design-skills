# Evals

This directory contains or will contain focused command, skill, end-to-end and Extension Pack evaluations.

Core rule: every P0 command needs focused normal and meaningful boundary/forbidden-behaviour coverage. Self-evaluation is not benchmark evidence.

Implemented Extension Packs additionally require:

```text
activation
specialisation
precedence
preservation
boundary behaviour
evaluation adaptation
core-vs-pack differential behaviour
```

`uiux-pack-create` requires authoring evals that prove it can reject duplicate/core-owned pack proposals, create a coherent production profile, produce a complete showcase prompt, define behavioural evals and validate pack packaging.

The exact quality contract is [`docs/04-testing-and-benchmark-spec.md`](../docs/04-testing-and-benchmark-spec.md).
