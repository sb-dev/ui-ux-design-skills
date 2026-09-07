# UI/UX Design Skills — Testing and Benchmark Specification

**File:** `04-testing-and-benchmark-spec.md`  
**Status:** Canonical  
**Version:** 1.1

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

The project is not considered correct because an agent produces attractive screens.

It must demonstrate reliable behaviour across:

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
```

---

## 3. No Universal UX Score

Quality is multidimensional.

Canonical dimensions include:

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

Examples:

```text
excellent visual coherence
+
wrong task
=
failure
```

```text
higher conversion
+
reduced informed choice
=
failure
```

---

## 4. Evaluation Types

Use distinct evaluation types:

```text
deterministic
semantic design
research
human science
preservation
root cause
handoff
```

Each uses its own rubric.

Do not use one prompt that asks whether the UX is generally good.

---

## 5. Test Scope

Tests operate at:

```text
L0 deterministic contracts
L1 command evals
L2 skill evals
L3 end-to-end workflow benchmarks
L4 extension-pack benchmarks
```

Installation and packaging checks apply across layers.

---

## 6. L0 — Deterministic Contracts

Deterministic checks require no semantic model judgement.

Project-native examples:

- artifact schema is valid;
- evidence reference resolves;
- approved decision ID exists;
- interaction requirement has provenance;
- hypothesis contains required fields;
- evaluation references its target;
- acceptance criterion references a requirement;
- active/superseded status is consistent;
- installation files resolve.

External deterministic checks may include:

- browser path execution;
- screenshot comparison;
- axe accessibility scan;
- Storybook interaction tests;
- mobile automation.

External tools are not reimplemented.

---

## 7. Deterministic Pass Rule

Required deterministic checks are pass/fail.

They cannot be averaged with semantic scores.

Any required deterministic failure blocks the relevant benchmark.

---

## 8. L1 — P0 Command Evals

Every P0 command requires at least:

```text
1 focused benchmark
+
1 composed or end-to-end use
```

P0 coverage:

### `uiux-research`

```text
frame-problem
ingest-evidence
identify-mechanisms
define-interaction-requirements
```

### `uiux-design`

```text
define-hypothesis
map-task
generate-alternatives
select-fidelity
create-flow
prepare-prototype
```

### `uiux-evaluate`

```text
plan-evaluation
evaluate-hypothesis
verify-preservation
diagnose-failure
recommend-refinement
```

### `uiux-handoff`

```text
build-interaction-contract
define-acceptance-criteria
verify-traceability
```

---

## 9. Command Benchmark — `frame-problem`

Input combines:

```text
analytics symptom
+
stakeholder-proposed UI solution
```

Pass when the output reframes the problem in human/task terms.

Fail when the proposed UI is embedded as the problem definition.

Primary defect:

```text
HUMAN_PROBLEM
```

---

## 10. Command Benchmark — `ingest-evidence`

Fixture includes:

- analytics;
- transcript;
- support ticket;
- scientific source;
- reference screenshot;
- synthetic interview;
- expert opinion.

Pass when evidence categories and provenance remain distinct.

Critical failures:

- fabricated evidence;
- fabricated quote;
- synthetic participant treated as real user;
- reference pattern treated as user evidence.

---

## 11. Command Benchmark — `identify-mechanisms`

Input should admit several plausible explanations.

Pass when the system:

- proposes competing mechanisms;
- records evidence for and against;
- states limitations and uncertainty.

Fail when psychology terminology is asserted as root cause without evidence.

---

## 12. Command Benchmark — `define-interaction-requirements`

Pass when requirements specify desired interaction properties.

Fail when they prescribe a concrete UI implementation.

Example:

Good:

> Users must reconstruct pending decision context after interruption without revisiting completed steps.

Bad:

> Add a sticky sidebar.

---

## 13. Command Benchmark — `define-hypothesis`

Require a falsifiable structure containing:

- intervention property;
- target/context;
- expected outcome;
- mechanism;
- comparison;
- measure.

Reject preference statements such as:

> Users will like the new design more.

---

## 14. Command Benchmark — `map-task`

Pass when the task is modelled independently of current screens.

Fail when the task model merely mirrors screen sequence.

---

## 15. Command Benchmark — `generate-alternatives`

Pass when at least two alternatives differ materially in:

- task structure;
- IA;
- navigation;
- interaction model;
- progressive disclosure;
- recovery;
- human-AI authority.

Fail when alternatives differ only visually.

---

## 16. Command Benchmark — `select-fidelity`

Input uncertainty determines expected representation.

Examples:

```text
task order
→ written flow

navigation
→ IA

layout
→ wireframe

interaction
→ interactive prototype

motion
→ isolated motion prototype
```

A high-fidelity prototype for a task-order question is a failure unless explicitly justified.

---

## 17. Command Benchmark — `create-flow`

Pass when material branches, failure and recovery exist.

Fail when only the happy path is represented where the fixture explicitly requires exceptions.

---

## 18. Command Benchmark — `prepare-prototype`

Pass when the contract specifies only the realism needed for the hypothesis.

Fail when prototype requirements expand into production architecture or unnecessary polish.

---

## 19. Command Benchmark — `plan-evaluation`

The method must match the uncertainty.

Example:

```text
question:
Can users distinguish AI inference from verified source fact?

valid:
realistic task + comprehension measure

invalid:
pixel diff
```

---

## 20. Command Benchmark — `evaluate-hypothesis`

The evaluator must distinguish:

```text
mechanism support
```

from:

```text
interaction hypothesis support
```

A failed implementation does not automatically refute the candidate mechanism.

---

## 21. Command Benchmark — `verify-preservation`

Initial fixtures:

```text
PRES-01 visual-refinement-keeps-task
PRES-02 styling-keeps-interaction
PRES-03 layout-fix-keeps-flow
PRES-04 motion-keeps-hierarchy
PRES-05 design-system-change-bounds-impact
PRES-06 local-fix-keeps-approved-requirements
```

Preservation is semantic, not byte equality.

---

## 22. Command Benchmark — `diagnose-failure`

Provide similar symptoms with different root causes.

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

---

## 23. Command Benchmark — `recommend-refinement`

Pass when the recommendation reopens the smallest sufficient scope.

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

---

## 24. Command Benchmark — `build-interaction-contract`

Pass when relevant runtime behaviour is captured.

Fail when the handoff contains only:

- layout;
- colour;
- spacing;
- screenshots.

Relevant behaviour may include:

- state transitions;
- loading;
- failure;
- persistence;
- interruption;
- undo;
- accessibility;
- uncertainty.

---

## 25. Command Benchmark — `define-acceptance-criteria`

Acceptance criteria must be measurable and derive from interaction requirements.

Reject subjective criteria such as:

> Make the summary feel clear.

---

## 26. Command Benchmark — `verify-traceability`

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

Intentionally break links in fixtures and verify detection.

---

## 27. L2 — Skill Evals

### `uiux-research`

Test:

```text
problem framing
→ evidence synthesis
→ mechanisms
→ requirements
```

using mixed evidence.

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

## 28. Research Evaluation

Canonical research dimensions:

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

---

## 29. Research Critical Defects

Release-blocking defects include:

- fabricated evidence;
- fabricated user quote;
- synthetic participant described as real;
- scientific principle described as observed product evidence;
- unsupported prevalence claim;
- provenance removed during synthesis.

These defects cannot be compensated by other scores.

---

## 30. Human-Science Evaluation

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

---

## 31. Human-Science Cases

Initial diagnostic families should include:

- working-memory overload;
- slip vs mistake;
- interruption recovery;
- choice overload;
- dark patterns;
- automation bias;
- poor explanation calibration;
- navigation lostness.

The benchmark tests reasoning and intervention selection, not terminology recall.

---

## 32. Semantic Design Evaluation

Use only relevant dimensions for a case.

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

---

## 33. Semantic Rating Scale

Per dimension:

```text
0 = fails requirement
1 = materially weak
2 = acceptable
3 = strong
```

Each case marks dimensions as:

```text
critical
required
informational
```

No universal average score is required.

---

## 34. Semantic Pass Rule

A case passes when:

```text
all critical dimensions >= 2
AND
no prohibited behaviour occurs
```

A strong non-critical dimension cannot compensate for failure of a critical one.

---

## 35. Independent Evaluation

The generator must not be the sole semantic judge of its own work.

Preferred model:

```text
generation
→ artifact
→ independent evaluator
```

The evaluator should receive:

- benchmark fixture;
- produced artifacts;
- relevant upstream artifacts;
- rubric.

Where practical, hide:

- generator self-assessment;
- reference-solution rationale before judgement.

---

## 36. Reference Solutions

Expert reference outputs may be maintained for calibration.

They demonstrate:

- one defensible interpretation;
- one valid alternative set;
- one validation strategy.

They are not exact-match golden prose.

Different outputs may pass if they satisfy benchmark invariants.

---

## 37. L3 — End-to-End Benchmarks

The initial backbone is Level 5.

Required early cases:

```text
E2E-01 interrupted-financial-decision
E2E-02 conflicting-evidence-redesign
E2E-03 failed-interaction-hypothesis
E2E-04 implementation-regression
```

---

## 38. E2E-01 — Interrupted Financial Decision

Tests:

- mixed evidence;
- candidate mechanisms;
- interaction requirements;
- structural alternatives;
- fidelity;
- recovery;
- validation;
- handoff.

Primary traps:

- solution-first design;
- psychology laundering;
- premature high fidelity.

---

## 39. E2E-02 — Conflicting Evidence

Fixture includes conflicting:

- analytics;
- support;
- interviews;
- surveys;
- task performance.

Primary pass property:

> conflict remains visible until evidence supports a justified interpretation.

---

## 40. E2E-03 — Failed Interaction Hypothesis

The case must allow:

```text
human mechanism supported
+
specific interaction hypothesis refuted
```

Expected behaviour:

- retain mechanism;
- retain failed hypothesis;
- generate a bounded new strategy.

Do not reset the entire research chain.

---

## 41. E2E-04 — Implementation Regression

Fixture contains validated UX plus broken production behaviour.

Expected diagnosis:

```text
IMPLEMENTATION
```

Expected action:

```text
ROUTE_ENGINEERING
```

Do not redesign the UX unless evidence justifies it.

---

## 42. Progressive Example Gates

### Level 1

Require:

- states;
- feedback;
- error handling;
- accessibility awareness;
- proportional safeguards.

### Level 2

Require:

- task model;
- structural alternatives;
- recovery;
- appropriate fidelity;
- task evaluation.

### Level 3

Require:

- IA where relevant;
- realistic content/data;
- responsive behaviour;
- visual coherence;
- preservation.

### Level 4

Require:

- cross-flow consistency;
- design-system reuse reasoning;
- complex states;
- dependency-aware revision;
- accessibility across product area.

### Level 5

Require the complete evidence-to-handoff chain.

---

## 43. L4 — Extension-Pack Benchmarks

Every implemented extension pack requires:

```text
activation
specialisation
preservation
```

### Activation

Can the system identify when the pack applies?

### Specialisation

Does `core + pack` improve specialist behaviour over core alone?

### Preservation

Does the pack preserve all applicable core invariants?

---

## 44. First-Wave Extension Benchmarks

### `mobile-native`

Primary case:

```text
interrupted account recovery
```

Evaluate:

- interruption;
- native navigation;
- keyboard;
- permissions;
- touch behaviour.

### `trust-and-ai-interaction`

Primary case:

```text
AI regulatory prioritisation
```

Evaluate:

- authority;
- uncertainty;
- correction;
- reliance;
- user control.

### `reference-driven-design`

Primary case:

```text
reference-driven SaaS redesign
```

Evaluate:

- reference provenance;
- visual transfer;
- structural non-copying;
- preservation of approved UX.

---

## 45. Cross-Pack Benchmark

After first-wave packs pass independently, run:

```text
AI-assisted mobile financial review
```

with:

```text
mobile-native
+
trust-and-ai-interaction
+
reference-driven-design
```

The case must verify that specialisation composes without lifecycle duplication or loss of core constraints.

---

## 46. Preservation Suite

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

## 47. Root-Cause Suite

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

## 48. Defect Taxonomy

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
INSTALLATION
```

---

## 49. Severity

### Critical

Invalidates workflow or creates major epistemic/interaction risk.

Examples:

- fabricated evidence;
- synthetic laundering;
- approved task silently rewritten;
- consequential AI authority misunderstood;
- acceptance criterion contradicts requirement.

### Major

Materially weakens quality.

Examples:

- cosmetic alternatives;
- wrong fidelity;
- missing recovery;
- incorrect root cause.

### Minor

Local imperfection that does not invalidate the decision.

---

## 50. Benchmark Case Contract

Each case should define logical equivalents of:

```text
id
target
layer
priority
input fixture
required capabilities
activated extensions
expected properties
prohibited behaviours
deterministic checks
semantic dimensions
expected diagnosis where applicable
severity if failed
reference solution where useful
```

Use ordinary Markdown/YAML initially.

Do not build a custom benchmark DSL.

---

## 51. Expected Properties

Prefer property-based semantic expectations:

```text
must distinguish synthetic evidence
must preserve conflicting evidence
must produce at least two structurally distinct alternatives
must not exceed required fidelity
```

Avoid exact output prose requirements unless the property is deterministic.

---

## 52. Holdout Cases

Public showcases and private/regression fixtures should not always use identical domain vocabulary.

Example:

```text
public:
account recovery

holdout:
device replacement verification
```

Both may test interruption/recovery without identical surface form.

---

## 53. Adversarial Fixtures

Include cases that deliberately encourage failure:

- stakeholder already supplies a UI solution;
- synthetic research agrees too strongly;
- popular psychology appears applicable;
- beautiful reference has unsuitable IA;
- a high-fidelity artifact already exists;
- a local visual change conflicts with protected decisions;
- implementation defect resembles UX defect.

The benchmark should test discipline under pressure.

---

## 54. No-Design Cases

The suite must include correct outcomes of:

```text
NEEDS_MORE_EVIDENCE
```

and:

```text
ACCEPT
```

A system that always generates a redesign is defective.

Also include minimal-fix cases where only a local correction is justified.

---

## 55. Non-Deterministic Runs

Semantic behaviour may vary.

For critical semantic release cases, initial policy:

```text
3 independent runs
```

Pass when:

```text
at least 2 of 3 runs pass
AND
no critical epistemic defect occurs
```

Do not build a complex statistical framework until benchmark volume requires it.

---

## 56. Baselines

A baseline records accepted behaviour for a declared configuration.

Record:

```text
repository version
benchmark version
skill version
model / agent
material tool versions
activated extensions
per-case outcome
dimension ratings
defects
diagnosis
```

Baselines are behavioural, not exact-text snapshots.

---

## 57. Regression

A regression occurs when a change introduces:

- a new critical defect;
- a deterministic invariant failure;
- loss of a previously reliable P0 capability;
- a required semantic dimension below acceptable;
- extension improvement that damages core behaviour.

---

## 58. Improvement

A change is an improvement when:

```text
target dimension improves
+
no critical invariant regresses
+
unrelated approved behaviour remains stable
```

This mirrors bounded refinement in the product workflow.

---

## 59. Benchmark Versioning

Material changes to:

- fixtures;
- rubrics;
- expected behaviour;

require benchmark-version changes.

Do not silently compare incompatible benchmark generations.

---

## 60. Failure Reporting

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

Example:

```text
Case:
DESIGN-ALT-03

Failure:
Alternatives are cosmetic versions of one interaction model.

Defect:
INTERACTION

Severity:
Major

Evidence:
All candidates preserve identical task structure,
navigation and disclosure behaviour.

Expected:
At least two structurally distinct strategies.
```

---

## 61. Fast Suite

For local development and ordinary pull requests:

```text
deterministic core checks
+
focused P0 command evals
+
small semantic smoke set
```

---

## 62. Full Suite

For release validation:

```text
all deterministic checks
all P0 command evals
all four skill evals
progressive Level 1–5 benchmarks
research evals
human-science evals
preservation suite
root-cause suite
end-to-end cases
implemented extension packs
cross-pack composition
installation smoke tests
```

Do not create extra suite tiers until needed.

---

## 63. Initial Benchmark Coverage Target

Core target before extension packs:

```text
18 P0 command cases
+
4 skill integration cases
+
6 preservation cases
+
7 root-cause cases
+
4 Level 5 end-to-end cases
=
39 targeted benchmark cases
```

This is a target coverage model, not a requirement to implement all 39 before the first vertical proof.

---

## 64. Vertical-First Benchmark Implementation

Begin with:

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

## 65. Defect-Driven Growth

New benchmark cases should primarily come from:

```text
observed failure
→ minimal reproducible fixture
→ regression benchmark
```

A repeated real defect becomes permanent test coverage when:

- it is meaningful;
- correct behaviour can be specified;
- recurrence would be undesirable.

---

## 66. Release Gate — Core

Before first public release:

```text
✓ deterministic core contract checks pass
✓ all 18 P0 commands have focused benchmark coverage
✓ all four core skills pass at least one composed benchmark
✓ one Level 5 vertical benchmark passes
✓ preservation suite passes
✓ implementation-regression root-cause case passes
✓ handoff traceability passes
✓ clean installation smoke test passes
```

---

## 67. Release Gate — Extension Architecture

Before claiming extension support is proven:

```text
✓ mobile-native passes activation/specialisation/preservation
✓ trust-and-ai-interaction passes activation/specialisation/preservation
✓ reference-driven-design passes activation/specialisation/preservation
✓ one all-three composition benchmark passes
```

---

## 68. Reporting

Initial output:

```text
results.json
results.md
```

Markdown summarises:

- pass/fail;
- critical dimensions;
- defects;
- regressions;
- baseline changes.

JSON supports CI and future analysis.

No dashboard is required initially.

---

## 69. Reproducibility

Record enough context to reproduce a run:

```text
repository version
benchmark version
skill version
model / agent
tool versions where material
activated extensions
fixture
result
```

This is sufficient for the first implementation.

---

## 70. Human Calibration

Semantic rubrics should periodically be calibrated against expert human judgement, especially for:

- problem framing;
- human-science applicability;
- hierarchy;
- autonomy;
- root-cause diagnosis.

A permanent human approval service is unnecessary.

---

## 71. Accessibility Evaluation

Accessibility combines:

```text
deterministic automation
+
semantic inspection
+
manual/human validation where required
```

A zero-violation automated scan is not equivalent to accessible UX.

The benchmark must record what was actually evaluated.

---

## 72. Human-Performance Measurement

Add measurement calculators only when real benchmark cases require them.

Likely early measures:

```text
task completion
error count
backtracking
recovery actions
decision accuracy
comprehension
```

For every metric record:

```text
construct
measurement
population / context
interpretation
limitations
```

Do not introduce false precision.

---

## 73. Anti-Over-Engineering Rules

Do not initially build:

- benchmark service;
- distributed judge runtime;
- benchmark database;
- custom benchmark DSL;
- statistical analysis platform;
- hosted dashboard;
- agent tournament framework;
- universal semantic judge.

Start with:

```text
fixtures
+
small scripts
+
focused evaluators
+
JSON
+
Markdown
+
CI
```

---

## 74. Cross-Project Extraction

Possible future shared concepts include:

- deterministic invariant;
- semantic rubric;
- preservation test;
- root-cause test;
- progressive example benchmark;
- extension differential benchmark.

Keep these local until another production domain independently requires the same operational contract.

---

## 75. Testing Acceptance Criteria

The testing system is sufficient when:

- every P0 command has focused coverage;
- each core skill has composed coverage;
- research evals catch provenance and synthetic-evidence failures;
- human-science evals distinguish mechanisms from rules;
- preservation regressions are detectable;
- root-cause scope is benchmarked;
- Level 5 end-to-end cases exercise the complete thesis;
- multiple valid UX solutions can pass;
- critical defects remain release blocking;
- benchmark failures identify the owning capability;
- extension packs prove value through differential testing;
- regression output is actionable;
- no dedicated evaluation platform is required to operate the suite.

---

## 76. Governing Rule

> A benchmark should tell us what capability failed and why, not merely whether an output looked good.

The project is successful when its benchmark suite shows that evidence-grounded UX reasoning, interaction design, validation, preservation and bounded refinement remain reliable across increasingly difficult and diverse product contexts.


## 77. Cross-Domain Evaluation Boundary

The UI/UX benchmark grades specialist UI/UX production quality only. It must not grade narrative quality, video quality, music quality, gameplay quality or production-code architecture.

Use the separation:

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

*UI/UX Design Skills — Testing and Benchmark Specification v1.1*
