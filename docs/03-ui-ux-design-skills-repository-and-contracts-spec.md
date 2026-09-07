# UI/UX Design Skills — Repository and Contracts Specification

**File:** `03-ui-ux-design-skills-repository-and-contracts-spec.md`  
**Status:** Canonical  
**Version:** 1.1

## 1. Purpose

This specification defines the repository structure, Agent Skill packaging, skill and command contracts, reference material, extension packs, examples, deterministic tools, installation, validation and open-source packaging for `ui-ux-design-skills`.

The repository is a skills product, not an application framework.

Its packaging must preserve:

- independent skill installation;
- agent-neutral contracts;
- low dependency weight;
- reproducible examples;
- benchmarkability;
- optional execution integrations.

---

## 2. Repository Goals

The repository must make it possible to:

1. discover available skills;
2. install skills independently;
3. use them in another project without copying the repository;
4. run focused command-level evals;
5. run end-to-end examples;
6. activate bounded extension packs;
7. integrate existing execution tooling;
8. validate artifacts deterministically;
9. reproduce benchmark results;
10. contribute new examples, benchmarks and extension packs without changing the core lifecycle.

---

## 3. Target Repository Structure

```text
ui-ux-design-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
│
├── docs/
│   ├── 01-ui-ux-design-skills-system-spec.md
│   ├── 02-ui-ux-design-skills-workflows-and-artifacts-spec.md
│   ├── 03-ui-ux-design-skills-repository-and-contracts-spec.md
│   ├── 04-testing-and-benchmark-spec.md
│   └── extraction-candidates.md
│
├── skills/
│   ├── uiux-research/
│   ├── uiux-design/
│   ├── uiux-evaluate/
│   └── uiux-handoff/
│
├── extension-packs/
│   ├── README.md
│   ├── product-interaction/
│   ├── human-science/
│   └── design-specialisation/
│
├── examples/
│   ├── level-1-*/
│   ├── level-2-*/
│   ├── level-3-*/
│   ├── level-4-*/
│   └── level-5-*/
│
├── evals/
│   ├── commands/
│   ├── skills/
│   ├── end-to-end/
│   └── extension-packs/
│
├── benchmarks/
│   ├── deterministic/
│   ├── semantic/
│   ├── research/
│   ├── human-science/
│   ├── preservation/
│   └── root-cause/
│
├── tools/
├── tests/
└── .github/
```

Only create optional directories when real requirements justify them.

---

## 4. Core Skills

The installable core is:

```text
skills/
├── uiux-research/
├── uiux-design/
├── uiux-evaluate/
└── uiux-handoff/
```

Do not add separate core skills for:

- prototyping;
- accessibility;
- human science;
- IA;
- visual design;
- motion;
- design systems;
- orchestration.

Those concerns remain commands, references, extension packs or external execution.

---

## 5. Skill Self-Containment

Each installable skill must contain everything necessary for its own reasoning contract.

A skill may reference external tools conditionally, but installation must not fail because those tools are absent.

A skill should not require another core skill to be installed.

If upstream artifacts are missing, the skill should:

- use available context;
- declare uncertainty;
- state which evidence is unavailable;
- continue where meaningful.

---

## 6. Canonical Skill Directory

A skill directory may contain:

```text
skills/uiux-design/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Only `SKILL.md` is mandatory.

Create `references/`, `scripts/` or `assets/` only when the skill genuinely needs them.

Avoid directory symmetry for its own sake.

---

## 7. `SKILL.md` Contract

Every core `SKILL.md` should define:

```text
name
purpose
activation conditions
inputs
outputs
owned decisions
non-owned decisions
workflow
P0 commands
optional commands
artifact expectations
preservation rules
external execution policy
failure / escalation behaviour
evaluation expectations
examples
```

The contract should remain operational rather than descriptive.

---

## 8. Skill Activation

A skill should state when it applies.

Examples:

### `uiux-research`

Activate when:

- the human problem is uncertain;
- evidence must be interpreted;
- interaction requirements are not yet defensible.

### `uiux-design`

Activate when:

- sufficient requirements exist to explore interaction strategies.

### `uiux-evaluate`

Activate when:

- a design, flow, prototype or implementation must be validated or diagnosed.

### `uiux-handoff`

Activate when:

- selected UX must become an engineering-ready behavioural contract.

---

## 9. Commands

Commands expose independently useful and independently testable production operations.

P0 command set:

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

Total: 18 P0 commands.

---

## 10. Command Granularity

Good commands name observable production operations:

```text
map-task
generate-alternatives
select-fidelity
diagnose-failure
verify-preservation
```

Avoid vague commands such as:

```text
think
analyse
improve
review
```

A command should exist only when it is:

```text
independently useful
+
independently testable
+
repeated within the skill
```

---

## 11. Command Representation

The repository may expose commands as:

- dedicated command files;
- named sections referenced by `SKILL.md`;
- agent-specific command wrappers generated from canonical definitions.

The canonical contract should remain agent-neutral.

Do not duplicate command logic separately for each supported agent unless packaging requires a thin wrapper.

---

## 12. Shared Artifacts

Skills interoperate through stable artifacts rather than internal APIs.

Typical project workspace:

```text
ux/
├── product-context.md
├── human-problem.md
├── evidence/
├── interaction-requirements.md
├── interaction-hypotheses.md
├── design/
├── prototype/
├── evaluations/
├── decisions.md
└── handoff/
```

A consumer project may use different paths if the skill can resolve them.

---

## 13. Artifact Contract Validation

Project-native deterministic tooling may validate:

- required fields;
- stable references;
- provenance links;
- hypothesis shape;
- approval references;
- traceability;
- required state completeness.

The repository should not enforce an unnecessarily rigid schema where Markdown remains sufficient.

Prefer lintable conventions over a database.

---

## 14. Reference Material

References contain durable specialist knowledge needed by a skill but too large or detailed for the main `SKILL.md`.

Potential references:

### `uiux-research`

```text
evidence-model.md
human-problem-model.md
human-science-translation.md
research-methods.md
```

### `uiux-design`

```text
interaction-hypothesis.md
task-and-flow.md
fidelity-strategy.md
design-preservation.md
```

### `uiux-evaluate`

```text
evaluation-model.md
root-cause-model.md
accessibility-evaluation.md
human-performance.md
```

### `uiux-handoff`

```text
interaction-contract.md
acceptance-criteria.md
handoff-traceability.md
```

Do not create every file before size and reuse justify the split.

---

## 15. Scripts

Native scripts must satisfy:

1. project-specific invariant;
2. deterministic result;
3. no mature external tool already owns the operation.

Likely script categories:

```text
validate-artifacts
validate-provenance
validate-hypotheses
validate-preservation
validate-handoff
small metric calculators
```

Do not implement:

```text
browser runtime
pixel-diff engine
WCAG engine
design renderer
analytics service
```

---

## 16. Runtime Constraints

Native tools should be:

- cross-platform where practical;
- dependency-light;
- CLI-invokable;
- deterministic;
- independently testable;
- agent-neutral;
- not dependent on a long-running service.

The implementation language should be chosen during repository implementation based on actual tool needs rather than mandated by this specification.

---

## 17. External Capability Detection

Skills should prefer existing consumer-project tooling.

Conceptual sequence:

```text
need browser validation?
→ detect Playwright
→ use if available
→ recommend installation only if materially justified
→ otherwise produce lower-fidelity/manual validation protocol
```

Equivalent behaviour applies to:

- axe;
- Storybook;
- Maestro;
- Appium;
- Figma;
- analytics infrastructure.

Missing tools reduce automation. They do not invalidate the UX workflow.

---

## 18. Execution Integrations

Recommended defaults where present or justified:

```text
browser interaction       Playwright
screenshots               Playwright
visual regression         Playwright / existing provider
web accessibility         axe
component state           Storybook
mobile flow               Maestro / existing Appium
design-tool integration   Figma
external research         dedicated research tooling
production implementation software engineering
```

These are not core package dependencies.

---

## 19. Extension Packs

Logical structure:

```text
extension-packs/
├── product-interaction/
│   ├── mobile-native/
│   ├── saas-dashboard/
│   ├── developer-tools/
│   ├── ecommerce/
│   ├── content-media/
│   └── landing-page/
│
├── human-science/
│   ├── cognitive-science/
│   ├── human-factors/
│   ├── behavioural-science/
│   ├── trust-and-ai-interaction/
│   └── ux-measurement/
│
└── design-specialisation/
    ├── motion-design/
    ├── design-system/
    ├── reference-driven-design/
    ├── immersive-web/
    └── conversion-design/
```

Only first-wave packs need implementation initially.

---

## 20. Extension-Pack Contract

Each implemented pack must define:

```text
name
class
purpose
version
scope
activation conditions
non-goals
modified core skills
production-rule deltas
references
specialised evaluation
tool preferences
compatibility
conflicts
example prompt
showcase
benchmarks
```

Packs contain deltas only. Do not duplicate the full core lifecycle.

---

## 21. First-Wave Packs

Implement only after the core Level 5 workflow succeeds:

```text
mobile-native
trust-and-ai-interaction
reference-driven-design
```

This proves:

- product/environment specialisation;
- human-science specialisation;
- design-craft specialisation.

Remaining packs stay catalogued until evidence justifies implementation.

---

## 22. Pack Composition

Several packs may be active simultaneously.

Prefer orthogonal composition:

```text
product context
+
human-science lens
+
design specialisation
```

If two packs conflict:

```text
identify conflict
→ preserve both rules
→ resolve explicitly in context
→ record decision
```

No automatic dependency solver or last-loaded-wins behaviour.

---



### 22.1 Extension-Pack Activation Ownership

Persistent Extension Pack selection belongs to the consuming project or user.

Use four activation modes:

```text
EXPLICIT
→ use the pack requested by the user

CONFIGURED
→ use packs already selected by the consuming project

SUGGESTED
→ recommend a pack when it may materially improve the work

TEMPORARY INFERENCE
→ apply pack behaviour only for the current operation when relevance is unambiguous; disclose it and do not persist selection automatically
```

A skill must never silently convert contextual inference into durable project configuration.


## 23. Pack Authoring

A future `create-extension-pack` capability should follow:

```text
identify repeated need
→ prove concern does not belong in core
→ define scope
→ identify affected skills
→ define production-rule deltas
→ define evaluation deltas
→ create example
→ create benchmarks
→ test core + pack
→ test composition
→ publish
```

Do not implement the authoring skill before real packs validate the contract.

---

## 24. Progressive Examples

Logical catalogue:

```text
LEVEL 1
├── destructive-confirmation
├── inline-form-validation
├── search-and-filter
└── ai-suggestion-control

LEVEL 2
├── mobile-account-recovery
├── guest-checkout
├── create-and-publish
└── api-permission-setup

LEVEL 3
├── mobile-onboarding
├── saas-analytics
├── deployment-configuration
├── ai-assisted-support
└── reference-driven-developer-portal

LEVEL 4
├── operations-review-workspace
├── ecommerce-account-area
├── media-discovery-and-playback
├── ai-analyst-workspace
└── mobile-appointment-area

LEVEL 5
├── interrupted-financial-decision
├── ai-regulatory-prioritisation
├── mobile-recovery-redesign
├── reference-driven-saas-redesign
├── conflicting-evidence-redesign
├── failed-interaction-hypothesis
└── implementation-regression
```

The catalogue describes target coverage, not mandatory first-release implementation.

---

## 25. Example Contract

Each example should contain logical equivalents of:

```text
problem
prompt
fixtures
expected properties
evaluation
README
```

Suggested metadata:

```text
id
level
product class
problem
core skills
commands
extensions
evidence
expected artifacts
required decisions
evaluation
deliberate traps
```

Examples must be runnable independently.

---

## 26. Example Fixtures

Use realistic fixtures such as:

```text
analytics.csv
support-tickets.md
interview-transcripts/
screenshots/
existing-flow.md
product-context.md
scientific-evidence.md
design-system/
prototype/
implementation/
```

Fixtures should not contain hidden answer keys disguised as source material.

Higher-level examples should include supporting, conflicting, irrelevant and incomplete evidence.

---

## 27. Evals and Benchmarks

Logical structure:

```text
evals/
├── commands/
├── skills/
├── end-to-end/
└── extension-packs/

benchmarks/
├── deterministic/
├── semantic/
├── research/
├── human-science/
├── preservation/
└── root-cause/
```

The testing specification owns exact behaviour.

---

## 28. Installation

Use the Agent Skills CLI.

List available skills:

```bash
npx skills add <org>/ui-ux-design-skills --list
```

Selective installation:

```bash
npx skills add <org>/ui-ux-design-skills \
  --skill uiux-design \
  --skill uiux-evaluate \
  --agent claude-code
```

Project-local installation is the default.

Do not silently install optional browser/design/mobile runtimes with the core skills package.

---

## 29. Installation Requirements

Every core skill must:

- be discoverable;
- install independently;
- resolve local references after installation;
- avoid references to repository-only paths that are absent in the consumer project;
- keep optional tools optional;
- remain usable in a clean consumer project.

Extension installation semantics must be documented explicitly before release.

---

## 30. Local Validation

Before publication verify:

```text
✓ every skill is discoverable
✓ every skill installs independently
✓ SKILL.md contracts validate
✓ references resolve
✓ P0 commands can be exercised independently
✓ deterministic tests pass
✓ at least one Level 1 workflow completes
✓ at least one Level 5 vertical workflow completes
✓ extension packs do not redefine core lifecycle
✓ benchmark fixtures execute
✓ clean consumer-project installation succeeds
```

---

## 31. External Smoke Test

After publication verify:

```text
✓ repository is public
✓ CI passes
✓ README installation commands work
✓ skills list correctly
✓ skills install individually
✓ one clean consumer project completes a UI/UX workflow
✓ extension examples are reproducible
✓ benchmark command is documented
✓ at least two agent targets are tested where practical
```

Only then is the repository implementation-ready.

---

## 32. CI

CI should initially focus on:

- repository integrity;
- skill contract validation;
- deterministic tests;
- example fixture integrity;
- benchmark smoke tests;
- installation smoke tests.

Do not build a large hosted evaluation platform.

---

## 33. Benchmark Outputs

Initial evaluation outputs should be ordinary files:

```text
results.json
results.md
```

This is sufficient for CI and release review.

A dashboard is explicitly deferred until benchmark volume demonstrates a real need.

---

## 34. Versioning

Version:

- core skill contracts;
- extension packs;
- benchmarks where material changes affect comparability.

A benchmark definition change that alters expected behaviour should be recorded rather than silently compared to old results.

---

## 35. Compatibility

Core contracts should describe capabilities rather than vendors.

Prefer:

```text
capture rendered state
run browser interaction
perform deterministic accessibility scan
write to design tool
```

over embedding one provider into the lifecycle.

Default adapters may still be recommended.

---

## 36. Security and Privacy

Skills and tools must respect consumer-project access controls.

Do not:

- invent credentials;
- bypass security;
- write to production merely to test UX;
- upload sensitive research artifacts to hosted services by default;
- leak user research or operational data.

Local execution is preferred where equivalent.

---

## 37. Open-Source Contribution Rules

Contributions should preserve:

- core lifecycle;
- evidence boundaries;
- installability;
- independent skill packaging;
- benchmarkability.

A new extension pack requires:

- clear scope;
- activation rules;
- production deltas;
- evaluation deltas;
- example;
- benchmark.

A new example requires:

- problem;
- fixtures;
- expected behaviour;
- benchmark criteria;
- known traps.

A new benchmark requires:

- fixture;
- target behaviour;
- expected properties;
- prohibited behaviours;
- rubric;
- defect classification.

---

## 38. Extraction Candidates

`docs/extraction-candidates.md` records concepts that might later become shared production-family abstractions.

Examples may include:

- preservation tests;
- progressive examples;
- extension-pack deltas;
- root-cause evaluation;
- deterministic/semantic split.

Do not extract automatically.

Promotion requires demonstrated need in at least two production domains.

---

## 39. Anti-Over-Engineering Rules

Do not initially add:

- graph database;
- workflow service;
- agent hierarchy;
- universal adapter layer;
- extension dependency solver;
- nested pack inheritance;
- benchmark database;
- custom benchmark DSL;
- hosted dashboard;
- continuous monitoring service.

The repository should begin as:

```text
Agent Skills
+
Markdown artifacts
+
small deterministic scripts
+
examples
+
benchmarks
+
CI
```

---

## 40. Repository Acceptance Criteria

The repository satisfies this specification when:

- the four core skills are packaged independently;
- 18 P0 commands have canonical definitions;
- shared artifacts use stable contracts;
- optional execution dependencies remain optional;
- first-wave extension packs can be added without changing core skill semantics;
- progressive examples are independently reproducible;
- deterministic tools remain small and project-specific;
- clean installation works;
- benchmark and smoke-test entry points are documented;
- no premature platform infrastructure is required.

---

*UI/UX Design Skills — Repository and Contracts Specification v1.1*
