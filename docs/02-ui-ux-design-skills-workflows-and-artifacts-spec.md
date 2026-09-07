# UI/UX Design Skills — Workflows and Artifacts Specification

**File:** `02-ui-ux-design-skills-workflows-and-artifacts-spec.md`  
**Status:** Canonical  
**Version:** 1.1

## 1. Purpose

This specification defines the canonical UI/UX production workflow, evidence model, artifact system, fidelity strategy, approval rules, validation loop and handoff traceability for `ui-ux-design-skills`.

The workflow must preserve the difference between:

```text
Evidence
Decision
Design Artifact
Evaluation Result
Implementation Artifact
```

A rendered screen or prototype must never become the only source of truth for an important UX decision.

---

## 2. Canonical Workflow

```text
PRODUCT CONTEXT
      ↓
HUMAN PROBLEM
      ↓
EVIDENCE
      ↓
INTERACTION REQUIREMENTS
      ↓
INTERACTION HYPOTHESES
      ↓
TASK MODEL / IA / FLOW ALTERNATIVES
      ↓
SELECTED STRUCTURAL DIRECTION
      ↓
LOWEST USEFUL FIDELITY
      ↓
PROTOTYPE / DESIGN REPRESENTATION
      ↓
EVALUATION
      ↓
DIAGNOSIS
      ↓
BOUNDED REVISION
      ↓
VISUAL + SYSTEM INTEGRATION
      ↓
FINAL VALIDATION
      ↓
APPROVED UX
      ↓
IMPLEMENTATION HANDOFF
```

Evaluation may reopen an upstream layer, but only when evidence identifies that layer as defective.

---

## 3. Evidence-to-Interaction Model

The core reasoning chain is:

```text
Observation
→ Candidate Human Mechanism
→ Supporting / Conflicting Evidence
→ Interaction Implication
→ Interaction Requirement
→ Interaction Hypothesis
→ Competing Alternatives
→ Validation
→ Analysis
→ Local Knowledge
→ Reusable Pattern only when justified
```

Shortcuts are prohibited.

Invalid:

```text
synthetic statement
→ user insight
```

Invalid:

```text
psychology principle
→ universal interface rule
```

Invalid:

```text
competitor pattern
→ product requirement
```

Each requires an explicit reasoning step and context check.

---

## 4. Human Problem

A human problem describes an observed or strongly evidenced difficulty, need, opportunity or mismatch without embedding a UI solution.

Minimum fields:

```text
id
statement
affected users
context
observed behaviour
desired outcome
evidence references
frequency if known
severity / consequence
constraints
competing explanations
unknowns
status
```

Example:

Good:

> Users frequently navigate backwards before confirming because information required for the decision is no longer visible.

Weak:

> The confirmation page needs a sticky summary panel.

The latter is a proposed solution.

---

## 5. Observation

An observation is what was actually observed or measured.

Suggested fields:

```text
id
statement
source type
source reference
population
context
date / period
method
sample
limitations
confidence
```

Observation must remain separate from interpretation.

---

## 6. Evidence Taxonomy

The canonical evidence classes are:

```text
E1 internal behavioural evidence
E2 real-user qualitative evidence
E3 real-user quantitative evidence
E4 scientific evidence
E5 product-operation evidence
E6 existing-interface evidence
E7 competitive / reference evidence
E8 synthetic evidence
E9 design knowledge
E10 expert judgement
```

The taxonomy may be represented by names rather than numeric labels in implementation, but the distinctions must survive.

---

## 7. Evidence Record

A material evidence record should retain:

```text
id
type
statement
source
collected_by
method
population
context
sample
date
strength
limitations
applicability
confidence
related observations
supports
contradicts
```

The system should store evidence once and reference it elsewhere rather than copying claims across artifacts.

---

## 8. Confidence

Use a lightweight scale:

```text
UNKNOWN
LOW
MODERATE
HIGH
VALIDATED_IN_CONTEXT
```

`VALIDATED_IN_CONTEXT` never means universal truth.

Confidence does not automatically propagate.

Strong observation does not imply:

- strong mechanism;
- strong hypothesis;
- strong design;
- reusable pattern.

---

## 9. Conflicting Evidence

Contradiction is first-class.

A synthesis may legitimately conclude:

```text
analytics: high completion
interviews: high frustration
task timing: low efficiency
survey: high satisfaction
```

The system must preserve conflict rather than manufacture a single coherent story.

A conflict record should identify:

```text
supporting evidence
contradictory evidence
possible explanations
missing evidence
decision impact
```

---

## 10. Human Mechanism

A mechanism is a plausible explanation for observed human behaviour.

Examples:

- working-memory demand;
- interruption;
- poor mental model;
- ambiguous feedback;
- attentional competition;
- choice overload;
- automation bias.

A mechanism record should contain:

```text
id
mechanism
observations explained
supporting evidence
conflicting evidence
alternative mechanisms
context applicability
limitations
confidence
```

Human-science terminology is not itself evidence.

---

## 11. Scientific Translation

Scientific findings must pass through:

```text
Scientific Finding
→ Candidate Human Mechanism
→ Context Applicability
→ Interaction Implication
→ Product Hypothesis
→ Product Validation
```

This prevents research findings from becoming universal UI prescriptions.

---

## 12. Interaction Implication

An interaction implication describes a desirable property without committing to one implementation.

Example:

> Decision context should remain available when the user confirms a consequential action.

It is narrower than a mechanism and less prescriptive than a design.

---

## 13. Interaction Requirements

Canonical classes include:

```text
interaction
human-performance
trust
recovery
accessibility
autonomy
uncertainty
```

Example:

```text
IR-04
Users returning after interruption must be able to reconstruct
the pending decision without traversing completed task stages.
```

Requirements are the primary bridge between research and design.

---

## 14. Interaction Hypotheses

A hypothesis must be falsifiable.

Canonical contract:

```text
IF [interaction property]
FOR [users / context]
THEN [human outcome]
SHOULD [change]
BECAUSE [candidate mechanism]
COMPARED WITH [baseline / alternative]
MEASURED BY [metric / observation]
```

Suggested fields:

```text
id
target users / context
interaction property
expected outcome
mechanism
comparison
measure
status
```

Statuses:

```text
DRAFT
ACTIVE
SUPPORTED
PARTIALLY_SUPPORTED
INCONCLUSIVE
REFUTED
NOT_TESTED
```

A refuted interaction hypothesis does not automatically refute its human mechanism.

Failed hypotheses are retained.

---

## 15. Task Model

Task modelling precedes screen assignment where task uncertainty exists.

A task model captures:

```text
user goal
entry conditions
task stages
decision points
user responsibilities
system responsibilities
completion
failure
recovery
```

Do not model a task as `Screen A → Screen B → Screen C` unless the screen sequence itself is the object of study.

---

## 16. Information Architecture

Information architecture is activated when uncertainty concerns:

- hierarchy;
- grouping;
- taxonomy;
- navigation;
- progressive disclosure;
- information relationships.

It is not mandatory for every interaction problem.

---

## 17. Structural Alternatives

Where meaningful uncertainty exists, generate 2–4 alternatives by default.

Alternatives should vary dimensions such as:

- task structure;
- information architecture;
- navigation;
- interaction model;
- progressive disclosure;
- decision support;
- recovery;
- human-AI authority.

Cosmetic variants do not satisfy divergence.

---

## 18. Fidelity Strategy

Fidelity is a diagnostic choice, not a maturity score.

The governing rule is:

> Use the lowest-fidelity representation capable of resolving the current UX uncertainty.

Canonical ladder:

```text
F0 Problem / Requirement
F1 Task Model
F2 Written Flow
F3 Information Architecture
F4 Low-Fidelity Wireframe
F5 Interactive Wireframe
F6 Representative Visual Direction
F7 High-Fidelity Prototype
F8 Implementation Specification
```

The ladder is a toolbox, not a mandatory sequence.

The system may:

- skip levels;
- repeat levels;
- backtrack;
- deliberately downgrade fidelity.

---

## 19. Fidelity Dimensions

Fidelity can vary independently across:

```text
task
structure
interaction
content
data
visual
motion
platform
implementation
```

A prototype may therefore have:

- high interaction fidelity;
- realistic content;
- low visual fidelity.

Do not assume all dimensions rise together.

---

## 20. Fidelity Selection

Select representation by asking:

1. What exact uncertainty exists?
2. What is already approved?
3. What is the cheapest representation that makes the uncertainty observable?
4. Which dimensions require realism?
5. Which dimensions can remain abstract?
6. What evidence would resolve the uncertainty?
7. What decisions must be preserved?
8. What happens if the test fails?

Examples:

```text
task-order uncertainty
→ written flow

navigation uncertainty
→ sitemap / IA

layout uncertainty
→ wireframe

interaction uncertainty
→ interactive prototype

motion uncertainty
→ isolated motion prototype

visual-language uncertainty
→ representative screens

screen-reader semantics
→ executable semantic implementation
```

---

## 21. Draft vs Refinement

A **draft** represents a materially different solution.

A **refinement** improves a selected solution without changing its approved upstream semantics.

Canonical loop:

```text
diverge
→ evaluate cheaply
→ select
→ refine
```

Avoid:

```text
one design
→ polish
→ rationalise
```

---

## 22. Escalation Gate

Increase fidelity only when:

1. the current representation has answered its question;
2. an important unresolved uncertainty cannot be credibly evaluated at the current fidelity;
3. upstream decisions are sufficiently stable.

Do not escalate because:

- high fidelity is easy to generate;
- a stakeholder expects polish;
- an existing design tool makes it convenient.

---

## 23. Approval

Approval belongs to material decisions, not arbitrary document stages.

Typical approval points:

- task model;
- major interaction direction;
- visual direction;
- final UX.

Earlier approval may be required when:

- consequence is high;
- evidence is weak;
- strategic choices are involved;
- AI autonomy is significant.

---

## 24. Preservation Contract

Higher fidelity inherits approved upstream constraints.

Examples:

```text
F1 task model
→ no layout / styling commitment

F2 flow
→ may change sequence, branching or recovery
  while preserving requirements

F3 IA
→ may change hierarchy / grouping / navigation
  while preserving goals and requirements

F4 wireframe
→ may change placement / grouping / spatial hierarchy
  while preserving task, flow and IA

F5 interaction
→ may change states and feedback
  while preserving structural direction

F6 visual direction
→ may change visual properties
  while preserving information hierarchy, task, navigation and interaction

F7 integrated prototype
→ structural changes require explicit upstream reopening
```

---

## 25. Canonical Artifact Workspace

Logical structure:

```text
ux/
├── product-context.md
├── human-problem.md
├── evidence/
├── interaction-requirements.md
├── interaction-hypotheses.md
├── design/
│   ├── task-model.md
│   ├── information-architecture.md
│   ├── flows/
│   ├── wireframes/
│   ├── visual-direction.md
│   └── design-system/
├── prototype/
├── evaluations/
├── decisions.md
└── handoff/
```

Directories and files are conditional. Do not create empty artifacts merely to satisfy the diagram.

---

## 26. Artifact Classes

### Evidence

Stores observations, source material and findings.

### Decision

Stores selected alternatives, approvals, explicit trade-offs and reopen decisions.

### Design Artifact

Represents task, IA, flow, wireframe, visual direction or prototype.

### Evaluation Result

Stores what was tested, evidence produced, outcome and diagnosis.

### Implementation Artifact

Stores interaction contracts, acceptance criteria and engineering-facing behaviour.

---

## 27. Canonical Artifact Contract

Every first-class artifact should be able to answer, as applicable:

```text
creator
purpose
evidence source
consumers
decisions preserved
confidence / status
refinement behaviour
approval behaviour
downstream impact
cross-project consumers
```

Do not duplicate this metadata mechanically if the information is obvious from the artifact.

---

## 28. Single Source of Truth

Store each concept once.

Examples:

- evidence statement belongs in `evidence/`;
- interaction requirement belongs in `interaction-requirements.md`;
- selection rationale belongs in `decisions.md`.

Other artifacts reference stable IDs.

Do not hide unique product decisions only in:

- screenshots;
- prototypes;
- Figma;
- implementation code.

---

## 29. Stable Identifiers

Recommended logical IDs:

```text
EV-12     Evidence
OBS-03    Observation
HP-02     Human Problem
HM-05     Human Mechanism
IR-04     Interaction Requirement
H-07      Interaction Hypothesis
D-12      Decision
EVAL-05   Evaluation
AC-17     Acceptance Criterion
```

Exact naming may be implementation-specific, but stable traceability is required.

---

## 30. Decisions Ledger

`decisions.md` acts as compact cross-workflow memory.

Use it for decisions such as:

- selected structural direction;
- explicit rejection of an alternative;
- approved task model;
- approved visual direction;
- reopened requirement;
- accepted local limitation.

Do not turn the ledger into a duplicate of all artifact content.

---

## 31. Evaluation Result

A useful evaluation record contains:

```text
id
target artifact / hypothesis
question
method
fidelity
evidence
result
limitations
diagnosis
recommended action
affected decisions
```

Canonical result states:

```text
SUPPORTED
PARTIALLY_SUPPORTED
INCONCLUSIVE
REFUTED
NOT_TESTED
```

---

## 32. Evaluation-to-Revision Outcomes

Use a bounded action vocabulary:

```text
ACCEPT
LOCAL_FIX
REOPEN_DESIGN
REOPEN_STRUCTURE
REOPEN_REQUIREMENT
REOPEN_PROBLEM
ROUTE_ENGINEERING
NEEDS_MORE_EVIDENCE
```

The recommendation identifies scope. It does not automatically execute a rewrite.

---

## 33. Root-Cause Model

Typical diagnosis:

```text
wrong user model
→ reopen evidence / research assumption

wrong task
→ revise task / flow

sound task, poor hierarchy
→ revise layout

sound interaction, inaccessible execution
→ revise accessibility / implementation layer

sound design, implementation regression
→ route engineering
```

Avoid whole-design regeneration.

---

## 34. Dependency-Aware Revision

When an artifact changes:

```text
pause downstream work
→ reopen owning artifact
→ revise
→ identify true dependants
→ propagate only necessary changes
→ resume
→ re-evaluate
```

Initially, stable IDs and explicit `depends-on` references are sufficient.

Do not require a graph database.

---

## 35. Minimal / Standard / Full Workflow

### Minimal

Use when the problem is bounded and evidence is already strong.

Possible artifacts:

```text
human-problem
interaction-requirement
design artifact
evaluation
handoff
```

### Standard

Use for ordinary feature work.

Adds:

```text
evidence
hypothesis
task / flow
decisions
```

### Full

Use when:

- evidence is uncertain;
- consequence is high;
- several mechanisms or structural alternatives exist;
- human-science reasoning matters;
- Level 5 end-to-end validation is required.

The workflow scales by uncertainty and consequence, not process ceremony.

---

## 36. Evidential Burden

Required rigour scales approximately with:

```text
uncertainty × consequence × irreversibility
```

High-consequence interactions may require:

- stronger real-user evidence;
- realistic data;
- executable fidelity;
- stricter accessibility;
- explicit trust/authority testing;
- human validation.

---

## 37. Synthetic Research

Synthetic research is allowed for:

- hypothesis exploration;
- edge cases;
- interview-protocol rehearsal;
- research-question generation;
- synthetic comparison cases.

Synthetic evidence must record:

```text
synthetic: true
grounding
population construction
limitations
transcript provenance
requires_real_validation: true
```

It cannot support real-world prevalence claims without observed evidence.

---

## 38. Extensions in Workflow

Activated extension packs add deltas to the same workflow.

Example:

```text
mobile-native
→ additional mobile context and interruption considerations

trust-and-ai-interaction
→ additional authority, uncertainty and reliance requirements

reference-driven-design
→ additional visual-reference provenance and visual-direction rules
```

Activated packs should be recorded in project context or decisions.

No separate extension state service is required.

---

## 39. Handoff

The handoff is an ownership boundary, not a waterfall boundary.

Logical handoff content:

```text
interaction contract
states
responsive behaviour
accessibility
content behaviour where material
motion semantics
design-system mapping
acceptance criteria
traceability
unresolved implementation risks
```

Engineering may collaborate before handoff; after handoff it owns production architecture.

---

## 40. Interaction Contract

The interaction contract captures runtime behaviour, including relevant:

- actions;
- states;
- state transitions;
- persistence;
- loading;
- errors;
- recovery;
- confirmation;
- cancellation;
- undo;
- user control;
- AI uncertainty;
- accessibility;
- motion semantics.

It is more important than static screen measurements.

---

## 41. Acceptance Criteria

Acceptance criteria derive from interaction requirements.

Example:

```text
IR-04
Users must reconstruct pending decision context after interruption.

AC-17
Returning to confirmation restores the previously selected decision
and supporting information without requiring backward navigation.
```

Avoid subjective criteria such as:

> The summary should feel clear.

---

## 42. Traceability

The target chain is:

```text
Evidence
→ Observation
→ Human Problem
→ Human Mechanism
→ Interaction Requirement
→ Interaction Hypothesis
→ Selected Design
→ Validation
→ Implementation Contract
→ Acceptance Criterion
```

Not every artifact requires every link, but material implementation behaviour should be explainable through upstream intent.

---

## 43. Cross-Project Consumers

Potential consumers include:

- deep-research skills for external evidence gathering;
- software-engineering skills for implementation;
- video-production skills for generated visual/media assets;
- narrative-production skills where content structure genuinely intersects.

Responsibilities remain project-local until repeated cross-domain need justifies extraction.

---

## 44. Workflow Acceptance Criteria

The workflow is correct when:

- the human problem remains solution-neutral;
- evidence provenance survives synthesis;
- conflicting evidence remains visible;
- mechanisms are treated as hypotheses, not facts;
- interaction requirements bridge research and design;
- alternatives are structurally meaningful;
- fidelity reflects uncertainty;
- approval constrains downstream work;
- evaluation tests explicit requirements/hypotheses;
- failure is diagnosed at the correct layer;
- revision remains bounded;
- failed hypotheses are retained;
- handoff behaviour traces back to UX intent.

---

## 45. Governing Rule

> Store evidence once, make decisions explicit, represent designs at the lowest useful fidelity, evaluate them independently and revise only the layer that evidence shows is wrong.


## 46. Consuming-Project State Boundary

This specification defines reusable artifact semantics. Actual instances of `product-context.md`, human-problem records, evidence, decisions, approvals, prototypes, evaluations and handoff artifacts belong to the consuming project.

The skills repository must not become a central store for product research or project-specific UX knowledge. Reusable production expertise may be promoted back into the skills repository only after it has been generalised and validated.

---

*UI/UX Design Skills — Workflows and Artifacts Specification v1.1*
