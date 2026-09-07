# UI/UX Design Skills

Evidence-grounded Agent Skills for taking digital product UX from a human problem to an implementation-ready interaction contract.

The project is built around four independently installable skills:

- **`uiux-research`** — frame the human problem, preserve evidence provenance, identify plausible mechanisms and define interaction requirements.
- **`uiux-design`** — create falsifiable interaction hypotheses, task models, structural alternatives and the lowest useful design representation.
- **`uiux-evaluate`** — validate requirements and hypotheses, verify preservation, diagnose the owning failure layer and recommend bounded refinement.
- **`uiux-handoff`** — turn approved UX into explicit behavioural contracts, acceptance criteria and traceable engineering handoff.

## Governing workflow

```text
OBSERVE
→ UNDERSTAND
→ HYPOTHESISE
→ EXPLORE CHEAPLY
→ SELECT
→ APPROVE
→ INCREASE FIDELITY ONLY WHEN NEEDED
→ VALIDATE
→ DIAGNOSE
→ REFINE THE SMALLEST SUFFICIENT SCOPE
→ HAND OFF
```

Two rules dominate the system:

> Use the lowest-fidelity representation capable of resolving the current UX uncertainty.

> Treat human behaviour as an engineering concern requiring evidence, explicit hypotheses and measurable validation, not design folklore.

## Installation

The repository is designed for the Agent Skills CLI. Stage 16 will validate the exact commands against a clean consumer project.

List available skills after publication:

```bash
npx skills add sb-dev/ui-ux-design-skills --list
```

Selective installation:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-design \
  --skill uiux-evaluate \
  --agent claude-code
```

Project-local installation is the default. Playwright, axe, Storybook, Maestro, Appium and Figma are optional execution capabilities and are not installed by the core skills.

## Repository map

```text
skills/           installable core skills and their command contracts
docs/             canonical project specifications
examples/         progressive examples and public production proofs
evals/            command, skill and end-to-end evaluation surface
benchmarks/       domain benchmark surface
tools/            small deterministic repository utilities
extension-packs/  catalogue and future bounded specialisations
```

Commands live under their owning skill so installed skills remain self-contained.

## Current scaffold status

Implemented at scaffold stage:

- four canonical specs;
- four discoverable `SKILL.md` packages;
- eighteen P0 command contracts;
- five initial progressive example definitions;
- Extension Pack catalogue/activation contract;
- zero-dependency repository validation;
- CI shell.

Not yet claimed:

- complete command behaviour;
- benchmark baselines;
- first-wave Extension Pack implementations;
- production-grade tool integrations;
- external installation smoke tests.

## Canonical specifications

1. `docs/01-ui-ux-design-skills-system-spec.md`
2. `docs/02-ui-ux-design-skills-workflows-and-artifacts-spec.md`
3. `docs/03-ui-ux-design-skills-repository-and-contracts-spec.md`
4. `docs/04-testing-and-benchmark-spec.md`

## Validate the scaffold

```bash
npm test
```

The validator checks the four skill packages, all 18 P0 command contracts, canonical docs and scaffold surfaces. It does not claim semantic UX quality.

## Production Skills family boundary

This repository owns reusable UI/UX production expertise. Actual product research, evidence, decisions, approvals and UX artifacts belong to the consuming project.

Pactwright, when used, owns delivery/governance lifecycle semantics rather than the UI/UX production workflow.

## Licence

MIT.
