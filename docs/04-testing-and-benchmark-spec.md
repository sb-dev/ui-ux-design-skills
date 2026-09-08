# UI/UX Design Skills — Testing and Benchmark Specification

**File:** `04-testing-and-benchmark-spec.md`  
**Status:** Canonical  
**Version:** 1.2

## 1. Purpose

This specification defines how `ui-ux-design-skills` is evaluated, benchmarked and protected against regression.

The benchmark must answer:

- what capability failed;
- why it failed;
- which layer owns the defect;
- whether approved behaviour regressed.

It must not reduce UX quality to one generic score.

---

## 2. Testing Philosophy

Evals are part of product behaviour.

The project is not considered correct because an agent produces attractive screens. It must demonstrate reliable behaviour across:

```text
problem framing
evidence grounding
human-science reasoning
interaction design
fidelity selection
validation
preservation
root-cause diagnosis
bounded refinement
handoff
Extension Pack specialisation
installation
```

---

## 3. No Universal UX Score

Quality is multidimensional.

Relevant dimensions may include:

```text
Problem Fit
Evidence Quality
Human-Science Reasoning
Task Quality
Interaction Quality
Information Quality
Accessibility
Visual Quality
System Consistency
Preservation
Validation Quality
Root-Cause Accuracy
Handoff Quality
Traceability
```

A strong result in one dimension cannot compensate for a critical failure in another.

```text
excellent visual coherence + wrong task = failure
higher conversion + reduced informed choice = failure
```

---

## 4. Evaluation Layers

Use distinct layers:

```text
L0 deterministic repository/artifact contracts
L1 command behaviour
L2 skill orchestration
L3 progressive and end-to-end production
L4 preservation / root-cause / regression
L5 Extension Pack behaviour
L6 installation smoke tests
```

Research, human-science and semantic-design rubrics cut across the relevant layers.

---

## 5. Deterministic Contracts

Deterministic checks require no semantic model judgement.

Project-native examples:

- artifact shape is valid;
- evidence reference resolves;
- approved decision ID exists;
- requirement has provenance;
- hypothesis contains required fields;
- evaluation references its target;
- acceptance criterion references a requirement;
- active/superseded status is consistent;
- expected skill/command/example/pack files exist;
- installation references resolve.

External deterministic checks may include browser path execution, screenshot comparison, axe scans, Storybook tests or mobile automation when the consuming project already supports them.

Required deterministic failures block the relevant benchmark. They are not averaged with semantic scores.

---

## 6. Core P0 Command Coverage

Every core P0 command requires at least one focused benchmark and one composed use.

```text
uiux-research
├── frame-problem
├── ingest-evidence
├── identify-mechanisms
└── define-interaction-requirements

uiux-design
├── define-hypothesis
├── map-task
├── generate-alternatives
├── select-fidelity
├── create-flow
└── prepare-prototype

uiux-evaluate
├── plan-evaluation
├── evaluate-hypothesis
├── verify-preservation
├── diagnose-failure
└── recommend-refinement

uiux-handoff
├── build-interaction-contract
├── define-acceptance-criteria
└── verify-traceability
```

Total: 18 core P0 commands.

---

## 7. Command Behaviour Expectations

### `frame-problem`

Pass when the output reframes symptoms in human/task terms without embedding a stakeholder-proposed UI solution as the problem.

### `ingest-evidence`

Pass when evidence categories and provenance remain distinct.

Critical failures include fabricated evidence, fabricated quotes, synthetic participants presented as real users, or reference patterns presented as observed user evidence.

### `identify-mechanisms`

Pass when the system proposes plausible competing mechanisms, records evidence for/against and states uncertainty.

Fail when psychology terminology is asserted as root cause without evidence.

### `define-interaction-requirements`

Pass when requirements specify desired interaction properties rather than concrete UI implementations.

### `define-hypothesis`

Require a falsifiable structure containing intervention property, target/context, expected outcome, mechanism, comparison and measure.

### `map-task`

Pass when the task is modelled independently of the current screen sequence.

### `generate-alternatives`

Pass when alternatives differ materially in task structure, IA, navigation, interaction model, disclosure, recovery or human-AI authority.

### `select-fidelity`

Expected representation follows uncertainty:

```text
task order    → written flow
navigation    → IA
layout        → wireframe
interaction   → interactive prototype
motion        → isolated motion prototype
```

Unjustified high fidelity is a failure.

### `create-flow`

Material branches, failure and recovery must exist where the fixture requires them.

### `prepare-prototype`

Prototype realism must be limited to what the hypothesis needs.

### `plan-evaluation`

The method must match the uncertainty.

### `evaluate-hypothesis`

The evaluator must distinguish mechanism support from interaction-hypothesis support.

### `verify-preservation`

Preservation is semantic, not byte equality.

### `diagnose-failure`

Expected owning layers may include:

```text
EVIDENCE
HUMAN_PROBLEM
HUMAN_MECHANISM
INTERACTION_REQUIREMENT
HYPOTHESIS
TASK_MODEL
INFORMATION_ARCHITECTURE
INTERACTION
CONTENT
LAYOUT
VISUAL
ACCESSIBILITY
IMPLEMENTATION
EVALUATION
```

### `recommend-refinement`

Canonical outcomes:

```text
ACCEPT
LOCAL_FIX
REOPEN_DESIGN
REOPEN_STRUCTURE
REOPEN_REQUIREMENT
REOPEN_PROBLEM
NEEDS_MORE_EVIDENCE
ROUTE_ENGINEERING
```

### `build-interaction-contract`

The handoff must capture relevant behaviour, not only layout/style.

### `define-acceptance-criteria`

Criteria must be measurable and derive from interaction requirements.

### `verify-traceability`

Material implementation behaviour should trace through:

```text
Evidence
→ Human Problem
→ Interaction Requirement
→ Hypothesis
→ Approved Design
→ Evaluation
→ Acceptance Criterion
```

---

## 8. Core Skill Evals

### `uiux-research`

Test:

```text
problem framing
→ evidence synthesis
→ mechanisms
→ requirements
```

### `uiux-design`

Test:

```text
requirements
→ hypothesis
→ task
→ alternatives
→ fidelity
→ candidate design
```

### `uiux-evaluate`

Test:

```text
evaluation method
→ evidence
→ result
→ diagnosis
→ bounded recommendation
```

### `uiux-handoff`

Test:

```text
approved UX
→ interaction contract
→ acceptance criteria
→ traceability
```

---

## 9. Research Evaluation

Canonical dimensions:

```text
R1 source grounding
R2 provenance preservation
R3 evidence-type correctness
R4 transcript/source traceability
R5 conflicting-evidence preservation
R6 confidence calibration
R7 confirmation-bias resistance
R8 unsupported-claim avoidance
R9 synthetic-evidence boundary
R10 evidence-gap identification
```

Release-blocking research defects include fabricated evidence, fabricated user quotes, synthetic laundering, unsupported prevalence claims and provenance loss.

---

## 10. Human-Science Evaluation

Canonical dimensions:

```text
H1 mechanism plausibility
H2 evidence/mechanism distinction
H3 competing-mechanism consideration
H4 context applicability
H5 interaction implication quality
H6 avoidance of universal-rule laundering
H7 human-performance measurability
H8 autonomy preservation
H9 trust calibration where relevant
H10 correct interpretation of failed evidence
```

Diagnostic families should include working-memory overload, slip vs mistake, interruption recovery, choice overload, dark patterns, automation bias, explanation calibration and navigation lostness.

The benchmark tests reasoning and intervention selection, not terminology recall.

---

## 11. Semantic Design Evaluation

Use only relevant dimensions for each case.

Possible dimensions:

```text
task clarity
interaction correctness
information hierarchy
affordance
consistency
cognitive load
error prevention
recovery
user autonomy
trust calibration
visual coherence
distinctiveness
```

Rating scale:

```text
0 = fails requirement
1 = materially weak
2 = acceptable
3 = strong
```

Each dimension is marked `critical`, `required` or `informational`.

Pass when:

```text
all critical dimensions >= 2
AND
no prohibited behaviour occurs
```

---

## 12. Independent Evaluation

The generator must not be the sole semantic judge of its own work.

Preferred model:

```text
generation
→ artifact
→ independent evaluator
```

The evaluator should receive the fixture, produced artifacts, relevant upstream artifacts and rubric. Where practical, hide generator self-assessment and reference-solution rationale before judgement.

Expert reference solutions may exist for calibration but are not exact-match golden prose.

---

## 13. Progressive Example Benchmarks

The 15 public examples form a capability-coverage matrix, not 15 identical end-to-end tests.

### Level 1 — Control one interaction

```text
destructive-confirmation
inline-form-validation
search-and-filter
```

Require meaningful states, feedback, error handling, recovery, accessibility awareness and bounded scope.

### Level 2 — Complete one user task

```text
mobile-account-recovery
guest-checkout
api-permission-setup
```

Require task modelling, structural alternatives, recovery, appropriate fidelity and task evaluation.

### Level 3 — Design one feature

```text
ai-assisted-support
saas-analytics
reference-driven-developer-portal
```

Require IA where relevant, realistic content/data, responsive behaviour, feature coherence, visual/system integration and preservation.

### Level 4 — Design a coherent product area

```text
operations-review-workspace
ecommerce-account-area
media-discovery-and-playback
```

Require cross-flow consistency, shared-pattern reasoning, complex states, accessibility across flows and dependency-aware refinement.

### Level 5 — Research-to-validated redesign

```text
interrupted-financial-decision
conflicting-evidence-redesign
failed-interaction-hypothesis
```

Require the complete evidence-to-handoff chain, including correct treatment of uncertainty, contradiction or failed hypotheses.

A primary example may satisfy command, skill, preservation or end-to-end benchmark obligations when its fixture and rubric genuinely cover them. Do not duplicate cases merely to increase counts.

---

## 14. Early End-to-End Backbone

Before broad implementation, prioritise:

```text
E2E-01 interrupted-financial-decision
E2E-02 conflicting-evidence-redesign
E2E-03 failed-interaction-hypothesis
E2E-04 implementation-regression
```

`implementation-regression` remains a benchmark/regression fixture rather than one of the 15 public learning examples.

Expected implementation-regression diagnosis:

```text
IMPLEMENTATION
→ ROUTE_ENGINEERING
```

Do not redesign approved UX when the production implementation is the defect.

---

## 15. Preservation Suite

Initial preservation cases:

```text
PRES-01 visual-refinement-keeps-task
PRES-02 styling-keeps-interaction
PRES-03 layout-fix-keeps-flow
PRES-04 motion-keeps-hierarchy
PRES-05 design-system-change-bounds-impact
PRES-06 local-fix-keeps-approved-requirements
```

Preservation compares protected semantic decisions, not full artifact equality.

---

## 16. Root-Cause Suite

Initial cases:

```text
ROOT-01 wrong-user-model
ROOT-02 wrong-task-model
ROOT-03 poor-hierarchy
ROOT-04 accessibility-execution
ROOT-05 implementation-regression
ROOT-06 insufficient-evidence
ROOT-07 wrong-interaction-hypothesis
```

Track which defect classes are repeatedly confused.

---

## 17. Defect Taxonomy

Canonical taxonomy:

```text
EVIDENCE
PROVENANCE
RESEARCH_SYNTHESIS
HUMAN_PROBLEM
HUMAN_MECHANISM
INTERACTION_REQUIREMENT
HYPOTHESIS
TASK_MODEL
INFORMATION_ARCHITECTURE
INTERACTION
CONTENT
FIDELITY
LAYOUT
VISUAL
ACCESSIBILITY
DESIGN_SYSTEM
PRESERVATION
ROOT_CAUSE
HANDOFF
TRACEABILITY
IMPLEMENTATION
EXTENSION_PACK
INSTALLATION
```

Severity:

- **Critical** — invalidates workflow or creates major epistemic/interaction risk.
- **Major** — materially weakens quality.
- **Minor** — local imperfection that does not invalidate the decision.

---

## 18. Extension Pack Benchmarks

Every implemented pack must prove:

```text
activation
specialisation
precedence
preservation
boundary behaviour
evaluation adaptation
core-vs-pack differential behaviour
```

### First-wave packs

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
```

#### `native-mobile-critical-flow`

Primary specialist concerns:

- interruption/resume;
- native navigation;
- keyboard/focus;
- permissions;
- touch behaviour;
- recovery.

#### `trustworthy-ai-decision-support`

Primary specialist concerns:

- source/inference distinction;
- authority;
- uncertainty;
- correction;
- reliance;
- user control.

#### `reference-driven-saas-product`

Primary specialist concerns:

- reference provenance;
- contextual applicability;
- structural non-copying;
- design-system integration;
- preservation of product-specific UX.

---

## 19. Required Pack Negative Cases

Each pack must include cases proving:

```text
explicit pack request
→ activates

irrelevant context
→ does not activate silently

explicit instruction conflicts with pack default
→ explicit instruction wins

approved UX conflicts with pack convention
→ approved UX remains protected

pack shortcut conflicts with core evidence/accessibility rule
→ core invariant wins
```

Visual difference alone is not proof of pack value.

---

## 20. Core-vs-Pack Differential Evaluation

For the same fixture compare:

```text
core only
vs
core + pack
```

A pack passes when specialist behaviour improves or changes appropriately without reducing unrelated core quality.

A pack should fail qualification when:

- output differs only cosmetically;
- specialist concerns are already fully handled by core without meaningful delta;
- it weakens core invariants;
- it introduces unnecessary scope or workflow duplication.

---

## 21. Pack Authoring Benchmarks

`uiux-pack-create` must be tested as an authoring workflow:

```text
pack:inspect
→ rejects duplicate or core-owned proposals

pack:create
→ defines coherent reusable production grammar

pack:example
→ creates a realistic showcase with a complete prompt

pack:evals
→ creates activation, boundary, precedence, preservation and differential cases

pack:validate
→ catches incomplete, non-self-contained or taxonomy-only packs
```

The authoring benchmark must include at least one correct outcome of **do not create a new pack**.

---

## 22. Benchmark Case Contract

Each case should define logical equivalents of:

```text
id
target
layer
priority
input fixture
required capabilities
activated pack when relevant
expected properties
prohibited behaviours
deterministic checks
semantic dimensions
expected diagnosis where applicable
severity if failed
reference solution where useful
```

Use ordinary Markdown/YAML initially. Do not build a custom benchmark DSL.

---

## 23. Expected Properties

Prefer property-based semantic expectations:

```text
must distinguish synthetic evidence
must preserve conflicting evidence
must produce structurally distinct alternatives
must not exceed required fidelity
must preserve approved task semantics
```

Avoid exact output prose requirements unless deterministic.

---

## 24. Adversarial and No-Design Cases

Include cases that encourage common failure:

- stakeholder already supplies a UI solution;
- synthetic research agrees too strongly;
- popular psychology appears applicable;
- beautiful reference has unsuitable IA;
- high-fidelity artifact already exists;
- local visual change conflicts with protected decisions;
- implementation defect resembles UX defect.

The suite must also include correct outcomes of:

```text
NEEDS_MORE_EVIDENCE
ACCEPT
LOCAL_FIX
```

A system that always redesigns is defective.

---

## 25. Holdouts and Non-Determinism

Public showcases and regression/holdout fixtures should not always use identical surface vocabulary.

For critical semantic release cases, initial policy:

```text
3 independent runs
```

Pass when at least 2 of 3 runs pass and no critical epistemic defect occurs.

Do not build a complex statistical framework until benchmark volume requires it.

---

## 26. Baselines and Regression

A baseline records accepted behaviour for a declared configuration:

```text
repository version
benchmark version
skill version
model / agent
material tool versions
activated pack
per-case outcome
dimension ratings
defects
diagnosis
```

A regression occurs when a change introduces a new critical defect, deterministic invariant failure, loss of a previously reliable P0 capability, required semantic dimension below acceptable, or pack improvement that damages core behaviour.

An improvement requires target improvement with no critical invariant regression and stable unrelated approved behaviour.

---

## 27. Failure Reporting

A failed eval should report:

```text
benchmark
failed property
evidence
defect class
severity
likely owning layer
expected behaviour
```

Avoid opaque global scores.

---

## 28. Fast and Full Suites

### Fast

```text
deterministic core checks
+
focused P0 command evals
+
small semantic smoke set
```

### Full

```text
all deterministic checks
all P0 command evals
all four core skill evals
15 progressive-example coverage points
research evals
human-science evals
preservation suite
root-cause suite
end-to-end cases
implemented Extension Packs
pack authoring
installation smoke tests
```

Do not add extra suite tiers until needed.

---

## 29. Core Coverage Target

Retain the initial core target:

```text
18 P0 command cases
+
4 skill integration cases
+
6 preservation cases
+
7 root-cause cases
+
4 Level 5 / end-to-end cases
=
39 targeted core benchmark cases
```

The 15 public progressive examples are a capability-coverage surface, not automatically 15 additional unique benchmark cases. They may map onto the 39 core cases where the evidence and rubric genuinely align.

Extension Pack, pack-authoring and installation cases are additional to the 39 core target.

---

## 30. Vertical-First Implementation

Begin with focused coverage for:

```text
frame-problem
ingest-evidence
generate-alternatives
select-fidelity
verify-preservation
diagnose-failure
verify-traceability
```

plus:

```text
interrupted-financial-decision
```

Then grow systematically from real defects.

---

## 31. Defect-Driven Growth

New benchmark cases should primarily come from:

```text
observed failure
→ minimal reproducible fixture
→ regression benchmark
```

Add permanent coverage when recurrence would be meaningful and correct behaviour can be specified.

---

## 32. Release Gate — Core

Before claiming the core is benchmarked:

```text
✓ deterministic core contract checks pass
✓ all 18 P0 commands have focused coverage
✓ all four core skills pass composed coverage
✓ at least one Level 5 vertical passes
✓ preservation suite passes
✓ implementation-regression diagnosis passes
✓ handoff traceability passes
✓ clean installation smoke test passes
```

---

## 33. Release Gate — Progressive Examples

Before claiming the public learning surface is mature:

```text
✓ five progressive levels are represented
✓ three primary examples exist per level
✓ each primary example has a complete copyable prompt
✓ all 15 examples map to explicit capability/benchmark coverage
✓ the set collectively covers core skills, major failure modes, preservation and handoff
```

---

## 34. Release Gate — Extension Architecture

Before claiming Extension Pack support is proven:

```text
✓ first-wave pack skills are installable
✓ each first-wave pack has a canonical showcase and exact prompt
✓ activation/specialisation/precedence/preservation/boundary evals pass
✓ core-vs-pack differential benchmarks pass
✓ uiux-pack-create can reject duplicates and create/validate a justified pack
```

A multi-pack composition benchmark is not required until real use demonstrates that composition should become part of the architecture.

---

## 35. Installation Evaluation

Validate separately:

```text
source-checkout validation
clean consumer-project installation
selective core-skill installation
uiux-pack-create installation
implemented pack discovery/installation
reference resolution after installation
optional tools remaining optional
```

Installability is part of product behaviour.

---

## 36. Reporting and Reproducibility

Initial outputs:

```text
results.json
results.md
```

Record enough context to reproduce a run:

```text
repository version
benchmark version
skill version
model / agent
tool versions where material
activated pack
fixture
result
```

No dashboard is required initially.

---

## 37. Accessibility Evaluation

Accessibility combines:

```text
deterministic automation
+
semantic inspection
+
manual/human validation where required
```

A zero-violation automated scan is not equivalent to accessible UX.

Record what was actually evaluated.

---

## 38. Human Calibration

Semantic rubrics should periodically be calibrated against expert human judgement, especially for problem framing, human-science applicability, hierarchy, autonomy and root-cause diagnosis.

A permanent human approval service is unnecessary.

---

## 39. Anti-Over-Engineering Rules

Do not initially build:

- benchmark service;
- distributed judge runtime;
- benchmark database;
- custom benchmark DSL;
- statistical analysis platform;
- hosted dashboard;
- agent tournament framework;
- universal semantic judge;
- Extension Pack composition runtime.

Start with fixtures, small scripts, focused evaluators, JSON, Markdown and CI.

---

## 40. Cross-Domain Evaluation Boundary

The UI/UX benchmark grades specialist UI/UX production quality only. It must not grade narrative, video, music, gameplay or production-code architecture.

```text
UI/UX benchmark
→ specialist interaction/research/design quality

Pactwright or orchestrator evaluation
→ responsibility and integration fulfilment

consuming-project QA
→ assembled product behaviour
```

A cross-domain defect may be routed to another owner, but `uiux-evaluate` must not absorb that domain's benchmark.

---

## 41. Testing Acceptance Criteria

The testing system is sufficient when:

- every core P0 command has focused coverage;
- each core skill has composed coverage;
- research evals catch provenance and synthetic-evidence failures;
- human-science evals distinguish mechanisms from rules;
- preservation regressions are detectable;
- root-cause scope is benchmarked;
- the 15 progressive examples map to explicit capability coverage;
- Level 5 cases exercise the complete thesis;
- multiple valid UX solutions can pass;
- critical defects remain release blocking;
- benchmark failures identify the owning capability;
- first-wave packs prove value through differential and boundary testing;
- pack authoring is benchmarked;
- installation is tested from a clean consumer project;
- no dedicated evaluation platform is required to operate the suite.

---

## 42. Governing Rule

> A benchmark should tell us what capability failed and why, not merely whether an output looked good.

The project is successful when its benchmark suite shows that evidence-grounded UX reasoning, interaction design, validation, preservation, bounded refinement and specialist pack behaviour remain reliable across increasingly difficult and diverse product contexts.

---

*UI/UX Design Skills — Testing and Benchmark Specification v1.2*
