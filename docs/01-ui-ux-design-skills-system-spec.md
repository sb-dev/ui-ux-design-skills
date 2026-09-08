# UI/UX Design Skills — System Specification

**File:** `01-ui-ux-design-skills-system-spec.md`  
**Status:** Canonical  
**Version:** 1.2

## 1. Purpose

`ui-ux-design-skills` is an open-source Agent Skills repository for evidence-grounded UI/UX production.

It helps AI agents move from a human or product problem to an implementation-ready UX handoff through this lifecycle:

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
12. remain installable as a small, agent-neutral open-source skills product.

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
- AI coding agents and Agent Skills-compatible runtimes.

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

Specialist production grammars belong in Extension Packs only when they materially change reusable production behaviour.

---

## 6. Governing Principles

### 6.1 Human problem before interface problem

Observed friction must not automatically be diagnosed as a UI defect.

### 6.2 Evidence before design folklore

The system distinguishes empirical product evidence, scientific evidence, product observation, synthetic evidence, reference evidence, design hypotheses and expert judgement.

These are not interchangeable.

### 6.3 Observation is not explanation

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

Evaluation identifies the smallest owning failure layer rather than only scoring output quality.

### 6.8 Accessibility is continuous

Accessibility participates in requirements, design, evaluation and handoff. It is not an optional pack or late review stage.

### 6.9 Human science remains core

Human-science reasoning, competing mechanisms, context applicability and human-performance evaluation remain core behaviour whether or not an Extension Pack is active.

### 6.10 Synthetic research remains supporting evidence

Synthetic subjects may help explore hypotheses, edge cases and research questions, but synthetic responses cannot be represented as observed human evidence.

### 6.11 Tooling is subordinate to design intent

The project owns what work should happen and why. Existing tools execute specialised operations.

### 6.12 Extract only after repeated need

Shared abstractions remain project-local until at least two production domains demonstrate substantially the same operational need.

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

Core-skill mapping:

```text
uiux-research
→ uiux-design
→ uiux-evaluate
→ uiux-handoff
```

Evaluation may reopen research or design only when evidence shows an upstream assumption is wrong.

---

## 8. Core Skills

### 8.1 `uiux-research`

**Mission:** Convert product context and available evidence into a defensible human-problem model and interaction requirements.

Owns:

- human-problem framing;
- evidence intake, classification and provenance;
- research synthesis and conflicting evidence;
- confidence and evidence gaps;
- candidate human mechanisms;
- human-science translation;
- interaction implications and requirements;
- research planning.

**P0 commands:**

```text
frame-problem
ingest-evidence
identify-mechanisms
define-interaction-requirements
```

### 8.2 `uiux-design`

**Mission:** Turn interaction requirements into explicit, testable UX alternatives at the lowest useful fidelity.

Owns:

- interaction hypotheses;
- task models;
- information architecture;
- flows;
- structural alternatives;
- fidelity selection;
- interaction behaviour and states;
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

A separate `uiux-prototype` core skill is intentionally omitted. The project owns prototype intent and contract; execution is delegated.

### 8.3 `uiux-evaluate`

**Mission:** Determine whether a design satisfies requirements and hypotheses, diagnose failure at the correct layer and direct the smallest sufficient revision.

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

### 8.4 `uiux-handoff`

**Mission:** Convert approved UX into an explicit implementation contract while preserving evidence and decision rationale.

Owns:

- interaction contracts and states;
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

---

## 9. Support Skill

### `uiux-pack-create`

`uiux-pack-create` is an installable support/authoring skill, not a fifth core UI/UX production skill.

It owns:

```text
pack:inspect
pack:create
pack:example
pack:evals
pack:validate
```

It creates or revises coherent Extension Packs while protecting core UX responsibilities.

---

## 10. Skill Independence

Each core skill remains independently useful.

Examples:

- `uiux-evaluate` can review an existing product without `uiux-research`;
- `uiux-handoff` can consume an externally approved design;
- `uiux-design` can consume externally supplied requirements.

Missing upstream artifacts reduce certainty but must not make a skill unusable where meaningful work remains possible.

Skills communicate through stable artifacts and identifiers, not internal service APIs.

---

## 11. Execution Architecture

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

A skill decides what needs testing, why, at what fidelity, which states matter, what counts as failure and which owning layer should reopen.

External tools execute the operation and return evidence.

---

## 12. External Execution Policy

The base skill package must not require Playwright, Storybook, Figma, Maestro, Appium or a specific frontend framework.

Where present or justified:

```text
browser interaction / screenshots  → Playwright
web accessibility                  → axe
component/state workbench          → existing Storybook
mobile interaction                 → Maestro / existing Appium
design-tool integration            → optional Figma
analytics                          → consuming project
literature / web research          → dedicated research capability
production implementation          → Software Engineering
```

Preferred selection order:

```text
existing project tooling
→ local open tooling
→ optional persistent integration
→ hosted service
```

Missing tools reduce automation. They do not invalidate the UX workflow.

---

## 13. Native Deterministic Tooling

Native scripts are justified only when:

1. the operation encodes a project-specific invariant;
2. the result can be evaluated deterministically;
3. no strong external tool already owns the operation.

Likely checks include artifact validation, provenance/reference validation, approval-preservation checks, required-state completeness, hypothesis-contract validation and handoff completeness.

Do not implement native browser, screenshot, pixel-diff or WCAG engines.

---

## 14. Extension Pack Architecture

Extension Packs specialise the core lifecycle through coherent reusable UX production profiles.

The normative pack contract is owned by:

- `05-ui-ux-design-customisation-packs-spec.md`

The curated catalogue is owned by:

- `06-ui-ux-design-extension-pack-catalogue.md`

Core remains fully usable without a pack.

Initial catalogue:

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
dense-operations-workspace
developer-tool-configuration
conversion-safe-ecommerce
```

First-wave implemented profiles:

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
```

Packs must not turn human science, accessibility, UX measurement or design-system reasoning into optional concerns.

### Precedence

```text
1. explicit project / user instructions
2. approved UX artifacts and decisions
3. selected Extension Pack
4. core UI/UX defaults
```

### Composition

The initial model prefers one coherent pack plus explicit project requirements. Low-level pack composition, dependency solving and inheritance are deferred until repeated use proves a stable need.

---

## 15. Progressive Example Model

The public learning surface uses five levels with three complementary primary examples each:

```text
Level 1 — control one interaction
Level 2 — complete one user task
Level 3 — design one feature
Level 4 — design a coherent product area
Level 5 — research-to-validated redesign
```

Each primary example contains a complete copyable generation prompt.

The 15 examples are selected for combined capability coverage rather than aesthetic variety alone.

Level 5 exercises the complete thesis:

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

---

## 16. Build Order

Recommended implementation sequence:

```text
1. prove core skill and P0 command contracts
2. implement minimum artifact contracts
3. build focused command evals
4. prove one complete Level 5 vertical
5. add preservation and root-cause benchmarks
6. implement progressive example coverage
7. implement first-wave coherent Extension Packs
8. prove pack authoring and core-vs-pack evaluation
9. validate local and clean consumer-project installation
10. expand packs/examples only from demonstrated need
```

---

## 17. Deferred Architecture

Deferred until repeated operational evidence justifies them:

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
- low-level Extension Pack composition;
- nested pack inheritance;
- cross-project abstraction framework.

---

## 18. System Acceptance Criteria

The system is implementation-ready when:

- all four core skills are installable independently;
- all 18 P0 commands are executable and benchmarkable;
- evidence provenance survives the lifecycle;
- synthetic evidence is never silently upgraded;
- interaction requirements remain solution-independent;
- structural alternatives are genuinely distinct;
- fidelity is selected by uncertainty rather than polish;
- evaluation can identify the owning failure layer;
- approved upstream decisions survive downstream refinement;
- handoff acceptance criteria trace back to UX requirements;
- browser/accessibility/mobile execution can be delegated without becoming core dependencies;
- at least one Level 5 end-to-end workflow succeeds;
- 15 primary examples define progressive coverage;
- first-wave Extension Packs can specialise the lifecycle without redefining it;
- `uiux-pack-create` can author and validate packs without duplicating core behaviour;
- clean consumer-project installation succeeds.

---

## 19. Production Skills Family Boundaries

The reusable skill repository owns UI/UX production semantics. Instantiated product evidence, decisions, approvals and UX artifacts belong to the consuming project.

When Pactwright is used:

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

UI/UX skills must not define Pactwright lifecycle topology, Project Graph semantics or project-governance states. Cross-domain composition remains artifact/contract-first.

---

## 20. Governing Rule

The project should be judged by whether an AI agent can:

> maintain a traceable chain from human evidence to interaction decisions, choose the cheapest useful design representation, validate those decisions, identify the layer that failed, preserve what has already been approved and hand engineering an explicit behavioural contract.

Everything else is subordinate to that goal.

---

*UI/UX Design Skills — System Specification v1.2*
