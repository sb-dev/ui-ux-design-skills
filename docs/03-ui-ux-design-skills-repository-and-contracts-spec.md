# UI/UX Design Skills — Repository and Contracts Specification

**File:** `03-ui-ux-design-skills-repository-and-contracts-spec.md`  
**Status:** Canonical  
**Version:** 1.2

## 1. Purpose

This specification defines the repository structure, Agent Skill packaging, command contracts, Extension Pack packaging, examples, deterministic tooling, installation, validation and open-source contribution rules for `ui-ux-design-skills`.

The repository is a skills product, not an application framework.

Its packaging must preserve:

- independent core-skill installation;
- agent-neutral contracts;
- low dependency weight;
- reproducible examples;
- benchmarkability;
- optional execution integrations;
- independently installable Extension Packs;
- clean separation between core skills, support skills and pack skills.

---

## 2. Repository Goals

The repository must make it possible to:

1. discover available skills;
2. install the four core skills independently;
3. use them in another project without copying the repository;
4. run focused command-level evals;
5. run end-to-end progressive examples;
6. activate coherent Extension Packs;
7. author new packs through `uiux-pack-create`;
8. integrate existing execution tooling;
9. validate artifacts and repository structure deterministically;
10. reproduce benchmark results;
11. contribute examples, benchmarks and packs without changing the core lifecycle.

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
│   ├── 05-ui-ux-design-customisation-packs-spec.md
│   ├── 06-ui-ux-design-extension-pack-catalogue.md
│   └── extraction-candidates.md
│
├── skills/
│   ├── uiux-research/
│   ├── uiux-design/
│   ├── uiux-evaluate/
│   ├── uiux-handoff/
│   ├── uiux-pack-create/
│   ├── native-mobile-critical-flow/
│   ├── trustworthy-ai-decision-support/
│   └── reference-driven-saas-product/
│
├── extension-packs/
│   ├── README.md
│   ├── manifest.json
│   ├── native-mobile-critical-flow/
│   ├── trustworthy-ai-decision-support/
│   └── reference-driven-saas-product/
│
├── examples/
│   ├── README.md
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

## 4. Six Canonical Specification Responsibilities

A mature repository must cover:

1. **System** — mission, scope, architecture, core skills and boundaries.
2. **Workflows and Artifacts** — evidence, design, fidelity, approval, preservation, evaluation and handoff.
3. **Repository and Contracts** — packaging, commands, installation and repository acceptance.
4. **Testing and Benchmark** — deterministic and semantic evals, regression and release gates.
5. **Customisation Packs** — pack semantics, precedence, packaging, authoring and differential evaluation.
6. **Extension Pack Catalogue** — curated coherent packs, showcases, exact prompts and implementation status.

The filenames above are canonical for this repository.

---

## 5. Core Skills

The production core is exactly:

```text
uiux-research
uiux-design
uiux-evaluate
uiux-handoff
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

Those remain core responsibilities inside the four skills, bounded commands/references, or optional specialist pack behaviour where justified.

---

## 6. Support Skill

`uiux-pack-create` is an installable support skill, not part of the four-skill production chain.

Its commands are:

```text
pack:inspect
pack:create
pack:example
pack:evals
pack:validate
```

The support skill must inspect the existing catalogue before authoring a new pack and reject taxonomy-only or core-duplicating pack proposals.

---

## 7. Skill Self-Containment

Each installable skill must contain everything necessary for its own reasoning contract.

A skill may reference optional external tools conditionally, but installation must not fail because those tools are absent.

Core skills must not require another core skill to be installed.

A pack skill may assume that the consuming agent can also use relevant core skills, but its own instructions and references must remain self-contained.

If upstream artifacts are missing, a core skill should use available context, declare uncertainty and continue only where meaningful.

---

## 8. Canonical Skill Directory

A skill directory may contain:

```text
skills/uiux-design/
├── SKILL.md
├── commands/
├── references/
├── scripts/
├── assets/
└── evals/
```

Only create directories that contain useful material.

`SKILL.md` is the minimum installable contract.

---

## 9. Core `SKILL.md` Contract

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

## 10. Core Command Contract

The P0 command set remains:

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

Commands remain under their owning skill. Do not create a root-level universal `commands/` runtime.

A command should exist only when it is independently useful, independently testable and repeated within the skill.

---

## 11. Shared Artifacts

Skills interoperate through stable artifacts rather than internal APIs.

Typical consumer workspace:

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

Project artifacts belong to the consuming project, not this repository.

---

## 12. Artifact Validation

Project-native deterministic tooling may validate:

- required fields;
- stable references;
- provenance links;
- hypothesis shape;
- approval references;
- traceability;
- required-state completeness.

Prefer lintable conventions and Markdown over rigid schemas or databases until real need proves otherwise.

---

## 13. Reference Material

References contain durable specialist knowledge too large or detailed for a `SKILL.md`.

Potential core references include:

```text
uiux-research
→ evidence model, human-problem model, human-science translation, research methods

uiux-design
→ interaction hypotheses, task/flow, fidelity strategy, preservation

uiux-evaluate
→ evaluation model, root-cause model, accessibility, human performance

uiux-handoff
→ interaction contract, acceptance criteria, traceability
```

Do not split references prematurely.

---

## 14. Native Scripts

Native scripts are justified only when they encode a project-specific deterministic invariant that no mature external tool already owns.

Likely categories:

```text
validate-artifacts
validate-provenance
validate-hypotheses
validate-preservation
validate-handoff
small benchmark calculators
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

## 15. External Capability Detection

Skills should prefer existing consumer-project tooling.

Examples:

```text
browser interaction       Playwright
screenshots               Playwright
web accessibility         axe
component state           existing Storybook
mobile flow               Maestro / existing Appium
design-tool integration   optional Figma
external research         dedicated research tooling
production implementation Software Engineering
```

These are not core package dependencies.

Missing tools reduce automation. They do not invalidate the UX workflow.

---

## 16. Extension Pack Packaging

The normative contract is `docs/05-ui-ux-design-customisation-packs-spec.md`.

Implemented packs are installable Agent Skills:

```text
skills/<pack>/SKILL.md
```

The canonical discovery/showcase surface is:

```text
extension-packs/<pack>/README.md
```

The implemented catalogue index is:

```text
extension-packs/manifest.json
```

The manifest should record only useful discovery fields such as:

```text
slug
status
catalogue
showcase
skill path when implemented
benchmark case when implemented
```

Do not add marketplace ranking, pricing, download counts or speculative provider metadata.

---

## 17. Extension Pack Contract

Each implemented pack must define:

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
showcase
```

Packs contain specialist deltas and profile guidance. They do not duplicate the full core lifecycle.

Core responsibilities such as human-science reasoning, accessibility, measurement discipline and design-system reasoning must not disappear when no pack is active.

---

## 18. First-Wave Packs

The first-wave reference implementations are:

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
```

They prove three distinct reusable production grammars:

- mobile lifecycle/recovery;
- consequential AI-assisted judgement;
- reference-informed SaaS design.

The catalogue also specifies additional profiles that may remain unimplemented until evidence justifies them.

---

## 19. Pack Composition

The initial architecture does not require low-level pack composition.

Prefer:

```text
one coherent pack
+
explicit project requirements
```

Do not add dependency solvers, inheritance or last-loaded-wins semantics.

Composition may be revisited only when repeated real projects demonstrate stable independent recombination needs.

---

## 20. Pack Authoring

`uiux-pack-create` follows:

```text
pack:inspect
→ pack:create
→ pack:example
→ pack:evals
→ pack:validate
```

A new pack must demonstrate:

- repeated cross-project usefulness;
- material behavioural difference;
- non-duplication of core responsibility;
- a complete copyable showcase prompt;
- activation, boundary, precedence, preservation and core-vs-pack eval coverage.

---

## 21. Progressive Examples

The canonical public catalogue is exactly 15 primary examples:

```text
LEVEL 1
├── destructive-confirmation
├── inline-form-validation
└── search-and-filter

LEVEL 2
├── mobile-account-recovery
├── guest-checkout
└── api-permission-setup

LEVEL 3
├── ai-assisted-support
├── saas-analytics
└── reference-driven-developer-portal

LEVEL 4
├── operations-review-workspace
├── ecommerce-account-area
└── media-discovery-and-playback

LEVEL 5
├── interrupted-financial-decision
├── conflicting-evidence-redesign
└── failed-interaction-hypothesis
```

Additional examples may exist as supplementary showcases or regression fixtures without changing the 15-example public learning set.

---

## 22. Example Contract

Each primary example must contain:

```text
level
product context
complete copyable generation prompt
requirements
workflow
optimisation priorities
primary benchmark focus
```

When implemented with fixtures, it should also contain realistic evidence, expected properties, deliberate traps and an evaluation contract.

Examples must not contain hidden answer keys disguised as source material.

Multiple valid UX solutions may pass.

---

## 23. Evals and Benchmarks

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

`04-testing-and-benchmark-spec.md` owns exact behaviour.

---

## 24. Installation

Use the Agent Skills CLI.

List available skills:

```bash
npx skills add sb-dev/ui-ux-design-skills --list
```

Selective core installation:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-design \
  --skill uiux-evaluate \
  --agent claude-code
```

Pack-author installation:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-pack-create \
  --agent claude-code
```

Project-local installation is the default.

Do not silently install optional browser/design/mobile runtimes.

---

## 25. Installation Requirements

Every installable skill must:

- be discoverable;
- install independently where its contract permits;
- resolve local references after installation;
- avoid repository-only runtime paths absent in the consumer project;
- keep optional tools optional;
- remain usable in a clean consumer project.

Local source-checkout validation and clean external installation are separate gates.

---

## 26. Local Validation

Before publication verify:

```text
✓ six canonical specifications are present
✓ four core skills are present
✓ 18 core P0 command contracts are present
✓ uiux-pack-create and its five commands are present
✓ 15 primary example READMEs are present
✓ every primary example includes a complete prompt
✓ Extension Pack catalogue and manifest are present
✓ first-wave showcase READMEs are present
✓ first-wave pack skills are present
✓ deterministic tests pass
✓ at least one Level 1 workflow completes
✓ at least one Level 5 vertical completes
✓ packs do not redefine core lifecycle
✓ clean consumer-project installation succeeds
```

---

## 27. External Smoke Test

After publication verify:

```text
✓ repository is public
✓ CI passes
✓ README installation commands work
✓ skills list correctly
✓ core skills install individually
✓ uiux-pack-create installs
✓ implemented packs are discoverable/installable
✓ one clean consumer project completes a UI/UX workflow
✓ benchmark entry point is documented
✓ at least two agent targets are tested where practical
```

---

## 28. CI

CI should focus on:

- repository integrity;
- skill contract validation;
- deterministic tests;
- example-prompt integrity;
- pack-showcase integrity;
- benchmark smoke tests;
- installation smoke tests.

Do not build a hosted evaluation platform unless benchmark volume proves the need.

---

## 29. Versioning

Version:

- core skill contracts;
- support skill contracts;
- Extension Packs;
- benchmarks where material changes affect comparability.

Benchmark definition changes that alter expected behaviour must be recorded rather than silently compared with old baselines.

---

## 30. Security and Privacy

Skills and tools must respect consumer-project access controls.

Do not:

- invent credentials;
- bypass security;
- write to production merely to test UX;
- upload sensitive research artifacts to hosted services by default;
- leak user research or operational data.

Local execution is preferred where equivalent.

---

## 31. Contribution Rules

A new Extension Pack requires:

- demonstrated reusable need;
- clear activation and boundaries;
- production profile;
- affected core skills;
- stable core invariants;
- complete showcase prompt;
- behavioural evals;
- catalogue entry.

A new primary example requires a clear capability gap in the existing 15-example set. Otherwise prefer a supplementary or regression example.

A new benchmark requires a fixture, target behaviour, expected properties, prohibited behaviours, rubric and defect classification.

---

## 32. Anti-Over-Engineering Rules

Do not initially add:

- graph database;
- workflow service;
- agent hierarchy;
- universal adapter layer;
- Extension Pack dependency solver;
- nested pack inheritance;
- benchmark database;
- custom benchmark DSL;
- hosted dashboard;
- continuous monitoring service.

The repository should remain:

```text
Agent Skills
+
Markdown artifacts
+
small deterministic scripts
+
examples
+
Extension Packs
+
benchmarks
+
CI
```

---

## 33. Extraction Candidates

`docs/extraction-candidates.md` records concepts that might later become family abstractions.

Do not extract automatically.

Promotion requires substantially the same operational need in at least two independent Production Skills domains.

---

## 34. Repository Acceptance Criteria

The repository satisfies this specification when:

- six canonical specification responsibilities are represented;
- four core skills remain independently packaged;
- 18 core P0 commands have canonical definitions;
- `uiux-pack-create` has five bounded authoring commands;
- shared artifacts use stable contracts;
- optional execution dependencies remain optional;
- 15 primary progressive examples have complete prompts;
- first-wave Extension Packs can be installed without changing core semantics;
- pack showcases and catalogue are reproducible;
- deterministic tools remain small and project-specific;
- clean installation works;
- benchmark and smoke-test entry points are documented;
- no premature platform infrastructure is required.

---

*UI/UX Design Skills — Repository and Contracts Specification v1.2*
