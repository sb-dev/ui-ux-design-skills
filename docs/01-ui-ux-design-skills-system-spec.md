# UI/UX Design Skills — System Specification

**File:** `01-ui-ux-design-skills-system-spec.md`  
**Status:** Canonical  
**Version:** 1.1

## 1. Purpose

`ui-ux-design-skills` is an open-source Agent Skills repository for evidence-grounded UI/UX production.

It helps AI agents move from a human or product problem to an implementation-ready UX handoff through a disciplined lifecycle:

```text
human / product problem
→ evidence
→ interaction requirements
→ interaction hypotheses
→ structural alternatives
→ lowest useful fidelity
→ validation
→ diagnosis
→ bounded refinement
→ approved UX
→ implementation-ready handoff
```

The project is not a screen generator. It is a UI/UX production-intelligence layer.

Its defining capability is maintaining a traceable chain from evidence to interaction decisions while preserving approved work and changing only the layer that evidence shows is wrong.

---

## 2. Goals

The system must help agents:

1. frame human problems without prematurely assuming a UI defect;
2. preserve evidence provenance and uncertainty;
3. distinguish observation, interpretation, mechanism, implication, hypothesis, design and validation;
4. translate evidence and human science into interaction requirements;
5. generate structurally meaningful alternatives;
6. choose the lowest-fidelity representation capable of resolving current UX uncertainty;
7. validate designs against explicit hypotheses, requirements and human-performance criteria;
8. diagnose failures at the correct owning layer;
9. preserve approved decisions during downstream refinement;
10. produce implementation-ready interaction contracts and acceptance criteria;
11. delegate specialised execution to existing tools rather than rebuilding them;
12. remain installable as a small, agent-neutral open-source skills package.

---

## 3. Non-Goals

The core project does not aim to become:

- a Figma replacement;
- a frontend framework;
- a browser automation framework;
- a visual-regression engine;
- an accessibility rules engine;
- a user-research SaaS platform;
- a synthetic-user laboratory;
- a universal psychometrics platform;
- a production application runtime;
- an analytics platform;
- a general web-research system;
- a graph database or workflow engine;
- a multi-agent organisation simulator.

Prototype code is allowed when executable fidelity is the cheapest credible way to test an interaction hypothesis. Production software engineering remains outside core ownership.

---

## 4. Intended Users

The repository is designed for:

- UX and UI designers;
- product designers;
- design engineers;
- software engineers working without dedicated designers;
- user researchers;
- product managers;
- accessibility specialists;
- QA engineers;
- human-science specialists;
- AI coding agents and other Agent Skills-compatible runtimes.

---

## 5. Supported Product Classes

The core lifecycle is product-neutral and may be applied to:

- web applications;
- native and cross-platform mobile applications;
- desktop-style applications;
- SaaS and enterprise systems;
- dashboards and operational tools;
- developer tools;
- ecommerce;
- content and media products;
- onboarding and transactional flows;
- decision-support systems;
- AI-assisted interfaces;
- landing pages and acquisition surfaces.

Product-specific design grammar belongs in extension packs rather than the universal core.

---

## 6. Governing Principles

### 6.1 Human problem before interface problem

Observed friction must not automatically be diagnosed as a UI defect.

### 6.2 Evidence before design folklore

The system must distinguish:

- empirical product evidence;
- established scientific evidence;
- product-specific observation;
- synthetic evidence;
- reference evidence;
- design hypothesis;
- expert judgement.

These are not interchangeable.

### 6.3 Observation is not explanation

The lifecycle preserves the distinctions:

```text
observe
≠ explain
≠ assume
≠ design
≠ validate
```

### 6.4 Alternatives must differ structurally

Multiple styled variants of one interaction do not constitute meaningful exploration.

### 6.5 Lowest useful fidelity

Use the lowest-fidelity representation capable of resolving the current UX uncertainty.

### 6.6 Approval creates constraints

Downstream refinement inherits approved upstream decisions unless the owning layer is explicitly reopened.

### 6.7 Evaluation is diagnostic

The system evaluates against explicit requirements and hypotheses and identifies the smallest owning failure layer.

### 6.8 Accessibility is continuous

Accessibility is not a late review step. It participates in requirements, design, evaluation and handoff.

### 6.9 Synthetic research remains supporting evidence

Synthetic subjects may help explore hypotheses, edge cases and research questions, but synthetic responses cannot be represented as observed human evidence.

### 6.10 Tooling is subordinate to design intent

The project owns what work should happen and why. Existing tools execute specialised operations.

### 6.11 Extract only after repeated need

Shared abstractions remain project-local until at least two production domains demonstrate the same operational need.

---

## 7. Canonical Lifecycle

```text
OBSERVE
  ↓
UNDERSTAND
  ↓
HYPOTHESISE
  ↓
EXPLORE CHEAPLY
  ↓
SELECT
  ↓
APPROVE
  ↓
INCREASE FIDELITY
  ↓
VALIDATE
  ↓
DIAGNOSE
  ↓
REFINE THE SMALLEST SUFFICIENT SCOPE
  ↓
HAND OFF
```

The default core-skill mapping is:

```text
uiux-research
→ uiux-design
→ uiux-evaluate
→ uiux-handoff
```

Evaluation may reopen research or design when evidence shows an upstream assumption is wrong.

---

## 8. Core Skills

### 8.1 `uiux-research`

**Mission:** Convert product context and available evidence into a defensible human-problem model and interaction requirements.

Owns:

- human-problem framing;
- evidence intake and classification;
- provenance;
- research synthesis;
- conflicting evidence;
- confidence;
- evidence gaps;
- candidate human mechanisms;
- human-science translation;
- interaction implications;
- interaction requirements;
- research planning.

**P0 commands:**

```text
frame-problem
ingest-evidence
identify-mechanisms
define-interaction-requirements
```

Later commands may include:

```text
synthesize-evidence
identify-evidence-gaps
plan-research
```

---

### 8.2 `uiux-design`

**Mission:** Turn interaction requirements into explicit, testable UX alternatives at the lowest useful fidelity.

Owns:

- interaction hypotheses;
- task models;
- information architecture;
- flows;
- structural alternatives;
- fidelity selection;
- wireframe strategy;
- interaction behaviour;
- state definition;
- visual-direction integration;
- prototype strategy;
- selection rationale;
- preservation of approved upstream decisions.

**P0 commands:**

```text
define-hypothesis
map-task
generate-alternatives
select-fidelity
create-flow
prepare-prototype
```

Later commands may include:

```text
model-information-architecture
create-wireframe
define-interaction
specify-states
define-visual-direction
```

A separate `uiux-prototype` core skill is intentionally omitted. The project owns prototype intent and contract, while execution is delegated.

---

### 8.3 `uiux-evaluate`

**Mission:** Determine whether a design satisfies its requirements and hypotheses, diagnose failure at the correct layer and direct the smallest sufficient revision.

Owns:

- evaluation planning;
- deterministic-check orchestration;
- task-flow evaluation;
- hierarchy;
- accessibility;
- human-performance criteria;
- error and recovery;
- trust and autonomy;
- design-system consistency;
- hypothesis outcomes;
- preservation;
- root-cause diagnosis;
- bounded refinement recommendations.

**P0 commands:**

```text
plan-evaluation
evaluate-hypothesis
verify-preservation
diagnose-failure
recommend-refinement
```

Later commands may include:

```text
run-checks
evaluate-task-flow
evaluate-hierarchy
evaluate-accessibility
evaluate-human-performance
evaluate-error-recovery
evaluate-trust
evaluate-design-consistency
```

---

### 8.4 `uiux-handoff`

**Mission:** Convert an approved UX into an explicit implementation contract while preserving evidence and decision rationale.

Owns:

- interaction contracts;
- states;
- responsive behaviour;
- accessibility requirements;
- content behaviour where relevant;
- motion semantics;
- design-system mapping;
- acceptance criteria;
- traceability;
- unresolved implementation risks.

**P0 commands:**

```text
build-interaction-contract
define-acceptance-criteria
verify-traceability
```

Later commands may include:

```text
specify-responsive-behaviour
map-design-system
prepare-handoff
```

---

## 9. Skill Independence

Each installable skill must remain useful independently.

Examples:

- `uiux-evaluate` can review an existing product without `uiux-research`;
- `uiux-handoff` can consume an externally approved design;
- `uiux-design` can consume externally supplied requirements.

Missing upstream artifacts reduce certainty but must not make the skill unusable.

Skills communicate through stable artifacts and identifiers, not internal service APIs.

---

## 10. Execution Architecture

The system uses five conceptual layers:

```text
1. UX intelligence
   Agent Skills

2. Persistent UX state
   repository artifacts

3. Deterministic operations
   small project-specific validators/calculators

4. Execution adapters
   existing project/tool integrations

5. External execution environments
   browser, mobile, design tools, analytics, research
```

### Core rule

A skill decides:

- what needs testing;
- why;
- at what fidelity;
- which states matter;
- what counts as failure;
- which owning layer should reopen.

External tools execute the operation and return evidence.

---

## 11. External Execution Policy

The base skill package must not require Playwright, Storybook, Figma, Maestro, Appium or a specific frontend framework.

Where present or justified:

- browser interaction and screenshots: Playwright;
- visual regression: Playwright or existing project provider;
- deterministic web accessibility: axe;
- component/state workbench: existing Storybook;
- mobile interaction: Maestro or existing Appium;
- design-tool integration: optional Figma;
- external analytics: consumer project infrastructure;
- external literature/web research: dedicated research capability;
- production implementation: software engineering.

The preferred selection order is:

```text
existing project tooling
→ local open tooling
→ optional MCP/persistent integration
→ hosted service
```

CLI execution is preferred to MCP when capabilities are equivalent and persistent application state is unnecessary.

---

## 12. Native Deterministic Tooling

Native scripts are justified only when all three conditions hold:

1. the operation encodes a project-specific invariant;
2. the result can be evaluated deterministically;
3. no strong external tool already owns the operation.

Likely native checks include:

- artifact-schema validation;
- provenance/reference validation;
- decision dependency checks;
- approval-preservation checks;
- required-state completeness;
- hypothesis-contract validation;
- handoff completeness;
- small UX metric calculators when a benchmark requires them.

Do not implement native browser, screenshot, pixel-diff or WCAG engines.

---

## 13. Extension-Pack Architecture

Extension packs specialise the core lifecycle.

Classes:

```text
product-interaction
human-science
design-specialisation
```

Initial catalogue:

### Product / Interaction

```text
mobile-native
saas-dashboard
developer-tools
ecommerce
content-media
landing-page
```

### Human Science

```text
cognitive-science
human-factors
behavioural-science
trust-and-ai-interaction
ux-measurement
```

### Design Specialisation

```text
motion-design
design-system
reference-driven-design
immersive-web
conversion-design
```

First-wave implementation candidates:

```text
mobile-native
trust-and-ai-interaction
reference-driven-design
```

One from each class is sufficient to prove the extension architecture.

---

## 14. Extension Invariants

Packs may add:

- research questions;
- evidence requirements;
- mechanisms;
- interaction constraints;
- task patterns;
- fidelity guidance;
- platform conventions;
- evaluation criteria;
- specialist metrics;
- references;
- tool preferences.

Packs may not:

- replace the four core skills;
- remove provenance;
- weaken accessibility;
- bypass approval;
- redefine synthetic evidence as observed evidence;
- silently override another pack;
- replace bounded refinement;
- take ownership of production engineering.

All packs extend core directly. Nested pack inheritance and dependency solvers are deferred.

---

## 15. Progressive Example Model

The repository uses five example levels:

```text
Level 1 — control one interaction
Level 2 — complete one user task
Level 3 — design one feature
Level 4 — design a coherent product area
Level 5 — research-to-validated redesign
```

Level 5 tests the complete project thesis:

```text
evidence
→ human problem
→ mechanism
→ requirement
→ hypothesis
→ alternatives
→ fidelity
→ validation
→ diagnosis
→ bounded redesign
→ handoff
```

An early Level 5 proof should be built before broadening the example catalogue.

---

## 16. Build Order

Recommended implementation sequence:

```text
1. Implement four core skill contracts.

2. Implement the P0 command set.

3. Implement the minimum artifact contracts.

4. Build focused command evals.

5. Prove one complete Level 5 workflow.

6. Add preservation and root-cause benchmarks.

7. Add Level 1–4 examples.

8. Implement first-wave extension packs.

9. Test pack composition.

10. Expand catalogue only where evidence justifies it.
```

---

## 17. Deferred Architecture

The following are explicitly deferred until repeated operational evidence justifies them:

- UX graph database;
- universal execution adapter framework;
- multi-agent UX organisation;
- formal human-science ontology;
- universal interaction knowledge base;
- automatic pattern promotion;
- numeric evidence-confidence engine;
- automatic fidelity optimiser;
- universal UX-measurement engine;
- synthetic-user laboratory;
- Figma synchronisation layer;
- mandatory Storybook runtime;
- hosted evaluation dashboard;
- continuous autonomous UX monitoring;
- nested extension packs;
- cross-project abstraction framework.

These are follow-up opportunities, not first-release requirements.

---

## 18. System Acceptance Criteria

The system is implementation-ready when:

- all four skills are installable independently;
- the P0 commands are executable and benchmarkable;
- evidence provenance survives the lifecycle;
- synthetic evidence is never silently upgraded;
- interaction requirements remain solution-independent;
- structural alternatives are genuinely distinct;
- fidelity is selected by uncertainty rather than polish;
- evaluation can identify the owning failure layer;
- approved upstream decisions survive downstream refinement;
- handoff acceptance criteria trace back to UX requirements;
- browser/accessibility/mobile execution can be delegated without becoming core dependencies;
- at least one Level 5 end-to-end example succeeds;
- extension packs can specialise the lifecycle without redefining it;
- clean consumer-project installation succeeds.

---

## 19. Governing Rule

The project should be judged by whether an AI agent can:

> maintain a traceable chain from human evidence to interaction decisions, choose the cheapest useful design representation, validate those decisions, identify the layer that failed, preserve what has already been approved and hand engineering an explicit behavioural contract.

Everything else is subordinate to that goal.


## 20. Production Skills Family Boundaries

The reusable skill repository owns UI/UX production semantics. Instantiated product evidence, decisions, approvals and UX artifacts belong to the consuming project or its project-knowledge system.

When Pactwright is used, keep the semantics distinct:

```text
UI/UX Evidence
→ domain evidence informing interaction decisions

Pactwright Evidence
→ delivery/governance evidence demonstrating responsibility fulfilment

UI/UX approval
→ downstream UX work may rely on this domain decision

Pactwright lifecycle authority
→ consuming-project delivery/governance state
```

UI/UX skills must not define Pactwright lifecycle topology, Project Graph semantics, or project-governance states. Cross-domain composition remains artifact/contract-first.

---

*UI/UX Design Skills — System Specification v1.1*
