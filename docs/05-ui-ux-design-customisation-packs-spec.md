# UI/UX Design Customisation Packs Specification

**File:** `05-ui-ux-design-customisation-packs-spec.md`  
**Status:** Canonical  
**Version:** 1.0

## 1. Purpose

UI/UX Design Customisation Packs provide reusable production profiles for `ui-ux-design-skills`.

```text
UI/UX Design Skills
→ knows how to research, design, evaluate and hand off UX

customisation pack
→ defines a coherent specialist UX production grammar
```

A pack may combine:

```text
product / platform context
+
interaction / risk profile
+
human-performance priorities
+
design language
+
evaluation profile
+
tool / handoff requirements where relevant
```

Packs specialise the four core skills without replacing the evidence-to-validation lifecycle.

This specification owns the pack contract. The curated catalogue and showcase prompts are owned by `06-ui-ux-design-extension-pack-catalogue.md`.

---

## 2. Goals

A pack should:

- make a coherent specialist UX production grammar reusable across projects;
- materially change relevant production behaviour rather than merely add a label;
- remain optional;
- preserve the core evidence, accessibility, approval, fidelity and bounded-refinement rules;
- influence only the core skills and commands where specialist behaviour is useful;
- adapt evaluation to intentional specialist behaviour without weakening quality;
- remain independently installable when implemented as an Agent Skill;
- define a realistic showcase with a complete copyable generation prompt;
- support differential evaluation against core-only behaviour;
- avoid rebuilding execution tooling already owned by browsers, design tools, mobile automation or consumer-project infrastructure.

---

## 3. Non-Goals

A pack does not:

- replace `uiux-research`, `uiux-design`, `uiux-evaluate` or `uiux-handoff`;
- make accessibility optional;
- make evidence provenance optional;
- turn cognitive science, human factors, behavioural science, UX measurement or design-system reasoning into optional core responsibilities;
- silently override explicit project instructions;
- silently rewrite approved UX decisions;
- redefine synthetic evidence as observed human evidence;
- implement a browser, design tool, research platform, analytics platform or frontend framework;
- require a universal pack runtime;
- require pack inheritance;
- require low-level pack composition;
- reproduce a specific product or living designer's work as its production definition.

---

## 4. Core Model

A pack represents a **coherent UX production profile**.

```text
CUSTOMISATION PACK

Product / platform context
        +
Interaction / risk profile
        +
Human-performance priorities
        +
Design language
        +
Evaluation profile
        +
Optional tool / handoff requirements
        ↓
UX production profile
        ↓
uiux-research
uiux-design
uiux-evaluate
uiux-handoff
```

Prefer ready-made packs such as:

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
dense-operations-workspace
developer-tool-configuration
conversion-safe-ecommerce
```

over low-level pack fragments such as:

```text
mobile-native
cognitive-science
human-factors
design-system
motion-design
ux-measurement
```

The underlying dimensions remain explicit inside each pack so future modularisation remains possible. Independent low-level dimension packs are deferred until repeated production use demonstrates that users genuinely need to recombine them.

---

## 5. What remains core

The following remain part of core UI/UX behaviour whether or not a pack is active:

```text
problem framing
evidence provenance
human-science reasoning
competing mechanisms
solution-independent requirements
structural alternatives
lowest-useful-fidelity selection
accessibility
approval and preservation
hypothesis-based evaluation
root-cause diagnosis
bounded refinement
implementation handoff
traceability
```

A pack may increase the evidential burden, add specialist questions or sharpen evaluation criteria. It may not remove these responsibilities.

---

## 6. Pack Dimensions

### 6.1 Product / platform context

Defines operational constraints arising from the environment.

Examples:

```text
native mobile
responsive SaaS
enterprise operations
developer tooling
ecommerce
content / media
```

It may influence navigation conventions, interruption behaviour, device capabilities, data density, input methods, persistence, responsive behaviour and handoff requirements.

### 6.2 Interaction / risk profile

Defines consequences and interaction characteristics that materially change the design burden.

Examples:

```text
consequential decision
recovery flow
AI-assisted judgement
high-frequency operations
technical configuration
transactional purchase
```

It may increase requirements around confirmation, reversibility, auditability, authority, uncertainty, recovery or error prevention.

### 6.3 Human-performance priorities

Defines the human-performance concerns most relevant to the production profile.

Examples:

```text
interruption recovery
working-memory demand
automation bias
attention management
error prevention
expert efficiency
comprehension
```

These are production priorities, not replacements for the core human-science reasoning model.

### 6.4 Design language

Defines operational design characteristics where a specialist profile needs them.

Examples:

```text
information-dense but scannable
reference-derived but non-copying
native-platform conventions
progressive technical disclosure
transactional clarity
```

A design language must be expressed as observable production behaviour rather than aesthetic labels alone.

### 6.5 Evaluation profile

Defines specialist properties to preserve, intentional behaviour not to penalise, and failures to reject.

Example:

```yaml
evaluation:
  preserve:
    - explicit source distinction
    - user authority over final action
  do_not_penalise:
    - additional friction where consequence justifies it
  reject:
    - hidden AI uncertainty
    - automation presented as verified fact
    - irreversible action without proportionate control
```

### 6.6 Tool and handoff requirements

A pack may prefer existing execution capabilities when the production context requires them.

Examples:

```text
native mobile → Maestro / Appium where available
web runtime → Playwright / axe where available
component system → existing Storybook where available
reference-driven work → supplied screenshots / design references
```

Tool absence reduces automation. It must not make the core workflow invalid.

---

## 7. Production Profile Contract

Each pack should answer:

```text
what production problem does this profile specialise?
when should it be used?
which core skills change behaviour?
what extra evidence or constraints matter?
what remains stable from core?
what intentional behaviour must evaluation preserve?
what failures must evaluation still reject?
what tools or handoffs are relevant?
```

Example:

```yaml
pack: trustworthy-ai-decision-support

context:
  product: decision-support interface
  interaction: consequential human judgement assisted by AI

priorities:
  - source provenance
  - authority clarity
  - uncertainty calibration
  - correction
  - reliance control

research:
  require_attention_to:
    - automation bias
    - trust calibration
    - user accountability

design:
  preserve:
    - distinction between verified source evidence and AI inference
    - explicit human control over consequential action

evaluation:
  reject:
    - AI inference presented as source fact
    - hidden uncertainty
    - ambiguous action authority
```

The profile is an operational contract, not metadata.

---

## 8. Decision Precedence

Use this precedence:

```text
1. explicit project / user instructions
2. approved UX artifacts and approved decisions
3. selected customisation pack
4. core UI/UX defaults
```

A pack may not reopen an approved decision merely because another specialist convention would be more typical.

If a pack conflicts with explicit instructions or approved work, surface the conflict rather than silently rewriting either side.

---

## 9. Activation

Persistent pack selection belongs to the consuming project or user.

Supported activation modes:

```text
EXPLICIT
→ use the requested pack

CONFIGURED
→ use a pack already selected by the project

SUGGESTED
→ recommend a pack when it materially fits the work

TEMPORARY INFERENCE
→ apply only to the current operation when relevance is unambiguous; disclose it and do not persist automatically
```

Temporary inference must never become silent project configuration.

---

## 10. Integration with Core Skills

### 10.1 `uiux-research`

A pack may add:

- context-specific evidence questions;
- specialist failure hypotheses;
- relevant human-performance concerns;
- evidential burden appropriate to consequence;
- reference-analysis priorities.

It must not invent evidence or turn a specialist principle into a product fact.

### 10.2 `uiux-design`

A pack may influence:

- structural alternatives;
- state requirements;
- platform conventions;
- information density;
- authority and recovery patterns;
- visual-direction priorities;
- fidelity needed to test specialist behaviour.

It changes the search space, not approval ownership.

### 10.3 `uiux-evaluate`

A pack may add specialist evaluation dimensions and intentional behaviours.

The evaluator must still detect core failures such as:

- wrong task;
- unsupported mechanism;
- missing recovery;
- inaccessible interaction;
- preservation failure;
- incorrect root cause;
- implementation regression.

The pack changes the quality target, not the requirement for quality.

### 10.4 `uiux-handoff`

A pack may add implementation-facing requirements such as:

- mobile interruption/lifecycle behaviour;
- keyboard or touch expectations;
- uncertainty/source semantics;
- audit/history requirements;
- responsive data-density behaviour;
- technical validation states.

The handoff remains behavioural and does not take ownership of production architecture.

---

## 11. Packaging

An implemented pack should be an installable Agent Skill.

```text
skills/<pack>/
├── SKILL.md
├── references/        # only when useful
└── evals/             # only when useful
```

The canonical public showcase lives under:

```text
extension-packs/<pack>/README.md
```

Do not create empty directories for symmetry.

A pack `SKILL.md` should define:

```text
identity
intended use
activation
production profile
affected core skills
what remains stable
precedence
boundaries
evaluation behaviour
tool preferences where relevant
showcase reference
```

---

## 12. Pack Composition

Do not require users to compose low-level packs to obtain a useful specialist profile.

For the initial architecture:

```text
one coherent pack
+
explicit project requirements
```

is preferred over:

```text
platform pack
+
human-science pack
+
design-language pack
+
composition rules
```

If repeated production use demonstrates stable, independent recombination needs, composition may be revisited. Until then there is no dependency solver, inheritance model or universal pack-composition runtime.

---

## 13. Pack Authoring

`uiux-pack-create` owns reusable pack authoring.

The authoring workflow is:

```text
pack:inspect
→ pack:create
→ pack:example
→ pack:evals
→ pack:validate
```

### `pack:inspect`

Inspect the existing catalogue before creating a new pack. Prefer adapting an existing coherent profile when the requested difference is only product-specific detail.

### `pack:create`

Define the production grammar, activation, affected skills, stable core behaviour, precedence and boundaries.

### `pack:example`

Create a realistic showcase with a complete copyable generation prompt that visibly exercises the pack's specialist behaviour.

### `pack:evals`

Create behavioural coverage for activation, specialisation, precedence, preservation, boundary behaviour and core-vs-pack differential behaviour.

### `pack:validate`

Validate packaging, self-containment, catalogue completeness and that the pack does not duplicate core responsibility.

---

## 14. Pack Evaluation

Every implemented pack must test:

```text
activation
specialisation
precedence
preservation
boundary behaviour
evaluation adaptation
core-vs-pack differential behaviour
```

Required negative cases include:

```text
irrelevant pack
→ must not activate silently

explicit instruction conflicts with pack
→ explicit instruction wins

approved UX conflicts with pack convention
→ approved UX remains protected

core accessibility/evidence rule conflicts with pack shortcut
→ core invariant wins
```

A pack is not proven because its output merely looks different.

---

## 15. Catalogue Admission

Add a new catalogue pack only when:

1. the production grammar is reusable across projects;
2. it materially changes production behaviour;
3. the concern should not simply become a core rule;
4. an existing pack cannot absorb the variation cleanly;
5. the change is visible in evaluation behaviour;
6. a convincing showcase can demonstrate it.

Do not create a new pack merely for a product category, visual mood or named reference.

---

## 16. Cross-Domain Boundary

A UI/UX pack may define handoff needs for Software Engineering, Deep Research or another Production Skills domain, but it does not absorb that domain's production work or benchmark.

Pactwright, when present, may record compatibility and responsibility bindings. It does not own pack semantics or activation.

---

## 17. Acceptance Criteria

The pack architecture is sufficient when:

- core UI/UX remains fully usable without a pack;
- a pack materially changes relevant UX production behaviour;
- core evidence/accessibility/approval invariants remain authoritative;
- precedence is explicit;
- pack authoring checks the existing catalogue first;
- each implemented pack has a complete showcase prompt;
- negative and core-vs-pack evals exist;
- no universal pack runtime or low-level composition system is required.

---

*UI/UX Design Customisation Packs Specification v1.0*
