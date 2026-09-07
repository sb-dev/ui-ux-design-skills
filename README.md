# UI/UX Design Skills

**Design evidence-grounded product experiences, not isolated screens.**

UI/UX Design Skills gives AI coding agents a production workflow for turning human and product evidence into validated interaction decisions and implementation-ready UX contracts.

It supports the UI/UX process from problem framing to engineering handoff:

- **Research and problem framing**: product context, evidence intake, provenance, human problems, candidate mechanisms and interaction requirements
- **Interaction design**: task models, information architecture, flows, structural alternatives, interaction hypotheses and state behaviour
- **Fidelity and prototyping strategy**: resolve uncertainty with the cheapest useful representation before increasing fidelity
- **Evaluation and repair**: requirement validation, accessibility, preservation checks, human-performance evaluation, root-cause diagnosis and bounded refinement
- **Handoff**: behavioural contracts, responsive behaviour, accessibility requirements, acceptance criteria and evidence-to-implementation traceability
- **Specialisation**: optional Extension Packs for product contexts, human-science lenses and design disciplines

The workflow is designed to understand before designing, explore cheaply, select deliberately, preserve approved decisions, increase fidelity only when the unresolved question requires it, validate the result, and revise only the layer that failed.

## Approval and fidelity control

Selection and approval are different commitments.

- **Selected** means “keep developing this direction”. Selection may be made when one candidate clearly satisfies the requirements better than the others or when the user has delegated the choice.
- **Approved** means downstream design or engineering may rely on the decision.
- **Reopened** means new evidence or a diagnosed upstream defect justifies revisiting an approved decision.

Human approval is preferred for high-impact UX decisions such as task structure, information architecture, consequential interaction models, AI authority boundaries and major product-area redesigns.

Before increasing fidelity, stabilise the decisions that materially affect the next step. A task-order question can be tested as a written flow. Navigation structure can be tested as IA. Layout can be tested as a wireframe. Behaviour can be tested as an interactive prototype. High-fidelity visual work is justified only when the unresolved question requires that fidelity.

Cost and complexity control come primarily from workflow design:

```text
problem statement instead of screen generation
task model instead of page mockups
flow instead of coded prototype
wireframe instead of visual polish
representative states instead of every screen
local correction instead of whole-design regeneration
```

A local hierarchy defect should not cause the task model to be rewritten. An implementation regression should not trigger a UX redesign. Higher-fidelity work must preserve approved upstream decisions unless evidence explicitly reopens them.

## Install

Install all UI/UX Design Skills for Claude Code:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-research \
  --skill uiux-design \
  --skill uiux-evaluate \
  --skill uiux-handoff \
  --agent claude-code
```

For Codex, use `--agent codex` instead.

Project-local installation is the default. Global installation is optional:

```bash
npx skills add sb-dev/ui-ux-design-skills --global
```

List the available skills:

```bash
npx skills add sb-dev/ui-ux-design-skills --list
```

Playwright, axe, Storybook, Maestro, Appium and Figma are optional execution capabilities. They are not installed or required by the core skills.

The exact clean-project installation and selective-installation contract is the next bootstrap validation step.

## Quick start — Destructive Confirmation

Start with one bounded interaction and learn the core design/evaluation loop before introducing full research, product-area architecture or high-fidelity execution.

```text
Use uiux-design and uiux-evaluate to design a proportionate confirmation
interaction for permanently deleting a project containing multiple assets.

Requirements:
- Cover confirmation, processing, success and failure states
- Preserve user control
- Prevent accidental destructive action without adding unnecessary friction
- Do not require typing the project name unless the risk/evidence justifies it
- Do not rely on colour alone for destructive-state communication
- Define recovery behaviour for a failed deletion
- Produce implementation-ready behavioural acceptance criteria

Workflow:
- Identify the interaction requirement before styling the control
- Define the meaningful states
- Choose the lowest useful fidelity for the uncertainty
- Design the interaction and feedback
- Evaluate error prevention, recovery and accessibility
- Preserve unaffected product behaviour
- Hand off only the behaviour engineering needs to implement

What to optimise for:
- proportionate safeguards
- explicit consequences
- clear primary and cancellation actions
- recoverable failure behaviour
- accessible feedback
- minimal unnecessary friction
```

A small interaction project should stay small:

```text
ux/
├── product-context.md
├── interaction-requirements.md
├── design/
├── evaluations/
└── handoff/
```

The important behaviour is:

```text
interaction requirement → lowest useful fidelity → design → evaluate → bounded handoff
```

See [Destructive Confirmation](examples/level-1-destructive-confirmation/).

## Learn by producing

Progress through increasingly demanding UI/UX responsibilities. The public scaffold currently contains one canonical example per level; the broader target catalogue is defined in the canonical specifications so future examples can vary product class and failure mode rather than converging on one house style.

### Level 1 — Control one interaction

**Interaction requirement → states → interaction → evaluation**

Learn feedback, affordance, error handling, recovery and accessibility without redesigning the surrounding product.

| Example | Product | Design challenge |
|---|---|---|
| **[Destructive Confirmation](examples/level-1-destructive-confirmation/)** | Cloud file-management application | Add proportionate safeguards to permanent deletion without unnecessary friction |

### Level 2 — Complete one user task

**Task model → structural alternatives → selected flow → prototype contract → evaluation**

Learn to model a task independently of screens, compare meaningful flow alternatives and validate the task rather than polishing individual pages.

| Example | Product | Design challenge |
|---|---|---|
| **[Mobile Account Recovery](examples/level-2-mobile-account-recovery/)** | Native mobile banking application | Preserve recovery context across app interruption, code expiry and resend paths |

### Level 3 — Design a feature

**Evidence + requirements → IA/task structure → interaction design → representative fidelity → feature evaluation**

Learn multi-screen coherence, realistic states, responsive behaviour, visual direction and human-AI authority where relevant.

| Example | Product | Design challenge |
|---|---|---|
| **[AI-Assisted Support](examples/level-3-ai-assisted-support/)** | Customer-support application | Integrate AI drafting while preserving source distinction, correction and user control |

### Level 4 — Design a coherent product area

**Several workflows → shared patterns → cross-flow consistency → local refinement**

Learn design-system reasoning, dense operational information, complex states, accessibility across flows and dependency-aware correction.

| Example | Product | Design challenge |
|---|---|---|
| **[Operations Review Workspace](examples/level-4-operations-review-workspace/)** | Enterprise operations platform | Keep queue, case review, evidence, decision, escalation and history coherent without designing each screen independently |

### Level 5 — Research-to-validated redesign

**Observed human problem → evidence → mechanism → requirement → hypothesis → alternatives → validation → bounded redesign → handoff**

Learn the complete project thesis: preserve mixed evidence, reason about the human problem, generate structurally different interventions, test the cheapest credible representation, diagnose the owning failure layer and hand engineering an explicit interaction contract.

| Example | Product | Design challenge |
|---|---|---|
| **[Interrupted Financial Decision](examples/level-5-interrupted-financial-decision/)** | Regulated financial-operations application | Explain repeated backtracking before a consequential decision and redesign only what the evidence shows is responsible |

Every implemented example should keep its complete prompt, fixtures, expected properties, deliberate traps and evaluation evidence together. Multiple valid UX solutions may pass when they satisfy the required invariants.

See the [Examples index](examples/README.md).

## Project structure grows with the work

**One bounded interaction**  
Use only the product context, interaction requirement, design artifact, evaluation and handoff you actually need.

**The human problem is uncertain**  
Add evidence, `human-problem.md`, research findings and interaction requirements before generating UI.

**Alternatives are meaningful**  
Add candidate task, IA or flow artifacts and record the selected direction instead of duplicating whole project trees.

**Executable behaviour is required**  
Add a prototype only when the unresolved question requires runtime interaction, device behaviour or semantic accessibility.

**The work becomes a product area**  
Add shared IA, design-system mappings, cross-flow states and broader evaluation only when multiple workflows genuinely need them.

**A local defect needs repair**  
Reopen the smallest owning layer. Preserve unaffected evidence, requirements, task models, flows and approved interactions.

**Other Production Skills contribute**  
Compose through explicit artifacts and handoff contracts rather than shared runtime dependencies.

Keep the structure lean:

- use the smallest artifact capable of resolving the current uncertainty;
- keep evidence, interpretation, hypotheses and decisions distinguishable;
- use stable identifiers where traceability matters instead of building a graph database prematurely;
- preserve approved upstream decisions unless explicitly reopened;
- keep project-specific evidence and decisions in the consuming project rather than this skills repository;
- do not introduce a design-tool runtime, frontend framework, universal browser layer or UX database until a real workflow requires one.

## Skills

### `uiux-research`

Turn product context and available evidence into a defensible human-problem model and interaction requirements.

Use it for problem framing, evidence intake, provenance, synthesis, evidence gaps, candidate human mechanisms, human-science translation and research planning. It must keep observation, interpretation, evidence, implication, hypothesis and design distinct.

### `uiux-design`

Turn interaction requirements into explicit, testable UX alternatives at the lowest useful fidelity.

Use it for interaction hypotheses, task models, information architecture, flows, structural alternatives, fidelity selection, interaction behaviour, states, visual-direction integration and prototype contracts.

### `uiux-evaluate`

Determine whether a design satisfies its requirements and hypotheses, identify the owning failure layer and direct the smallest sufficient revision.

Evaluation is actionable rather than just a score:

```text
insufficient evidence                 → gather evidence, do not design blindly
wrong task structure                  → reopen task model
sound flow, poor hierarchy            → fix layout/hierarchy only
approved interaction lost in styling  → fail preservation
axe/runtime defect                    → fix accessibility/implementation as appropriate
implementation differs from approved UX → route engineering
failed design hypothesis, mechanism still plausible → retain mechanism and try another intervention
```

### `uiux-handoff`

Convert approved UX into an explicit implementation contract while preserving behavioural intent and traceability.

Use it for interaction contracts, state behaviour, responsive intent, accessibility requirements, design-system mapping where known, acceptance criteria and evidence-to-engineering traceability. It does not own production architecture.

## Extension packs

UI/UX Design Skills remains fully usable without an Extension Pack. Packs add bounded specialist production rules to the four core skills without replacing the evidence-to-validation lifecycle.

The catalogue currently defines three classes.

**Product / interaction**

- `mobile-native`
- `saas-dashboard`
- `developer-tools`
- `ecommerce`
- `content-media`
- `landing-page`

**Human science**

- `cognitive-science`
- `human-factors`
- `behavioural-science`
- `trust-and-ai-interaction`
- `ux-measurement`

**Design specialisation**

- `motion-design`
- `design-system`
- `reference-driven-design`
- `immersive-web`
- `conversion-design`

The first-wave implementation candidates are `mobile-native`, `trust-and-ai-interaction` and `reference-driven-design`, one from each class. They remain deliberately unimplemented until the core Level 5 workflow is proven.

Persistent pack selection belongs to the consuming project or user. A pack may be explicitly selected, already configured, suggested, or temporarily inferred for one disclosed operation, but temporary inference must not silently become persistent project state.

See the [Extension Pack catalogue and activation contract](extension-packs/README.md).

## Execution

The skills decide **what UI/UX work is needed**. Existing tools execute specialised operations.

- **Playwright** — browser interaction, runtime-state inspection, screenshots and web-flow validation
- **axe-core** — deterministic accessibility checks for executable web interfaces
- **Storybook** — optional component/state inspection when the consuming project already uses it
- **Maestro / Appium** — optional mobile interaction execution
- **Figma** — optional design-tool representation and collaboration
- **Consumer project runtime** — preferred environment for prototypes when it already exists
- **Deep Research / external research tooling** — external evidence retrieval where specialist research is required

The core does not maintain a browser framework, Figma replacement, frontend framework, analytics platform, universal screenshot engine or accessibility rules engine. Execution capabilities return evidence; UI/UX skills retain responsibility for the design question, evaluation and diagnosis.

> **Use the cheapest representation capable of resolving the current UX uncertainty.**
>
> **Preserve approved decisions and revise only the layer that failed.**

## Repository checks

For contributors:

```bash
npm test
```

The current deterministic scaffold gate validates:

```text
4 core skill packages
→ 18 P0 command contracts
→ canonical specifications
→ examples / eval / benchmark surfaces
→ repository structure
```

The current validator proves scaffold integrity, not semantic UX quality. The benchmark specification defines the future command, skill, preservation, root-cause, end-to-end and Extension Pack evaluation layers.

The target benchmark model deliberately separates deterministic invariants from semantic judgement and does not collapse UX into one numeric quality score.

## Documentation

### Specifications

- [UI/UX Design Skills System Specification](docs/01-ui-ux-design-skills-system-spec.md)
  - mission, scope, architecture, core skills, execution model, Extension Pack boundary and system acceptance

- [UI/UX Design Skills Workflows and Artifacts Specification](docs/02-ui-ux-design-skills-workflows-and-artifacts-spec.md)
  - evidence model, human problems, mechanisms, interaction requirements, hypotheses, task/IA/flows, fidelity, preservation, evaluation and handoff

- [UI/UX Design Skills Repository and Contracts Specification](docs/03-ui-ux-design-skills-repository-and-contracts-spec.md)
  - repository structure, `SKILL.md` contracts, 18 P0 commands, installation, examples and technical acceptance

- [Testing and Benchmark Specification](docs/04-testing-and-benchmark-spec.md)
  - deterministic and semantic evals, research/human-science evaluation, preservation, root cause, progressive examples, Extension Pack benchmarks and release gates

### Project guidance

- [Progressive Examples](examples/README.md)
- [Extension Packs](extension-packs/README.md)
- [Cross-project extraction candidates](docs/extraction-candidates.md)

## Project boundary

UI/UX Design Skills owns **reusable UI/UX production intelligence**, not a design application, frontend framework, research platform, universal accessibility engine or software-engineering runtime.

It can consume external research, narrative/content, media and gameplay context through explicit artifacts. It returns interaction requirements, approved UX decisions, evaluation evidence and behavioural handoff contracts. Deep Research, Narrative, Video, Music, Game Development and Software Engineering remain independently owned Production Skills domains.

Actual product evidence, research, decisions, approvals and UX artifacts belong to the consuming project. Pactwright, when used, owns delivery/governance lifecycle semantics rather than the UI/UX production workflow.

## Status

Repository scaffolded. The four canonical specifications, four core `SKILL.md` packages, 18 P0 command contracts, five progressive example definitions, Extension Pack catalogue and deterministic repository validator are present.

The next bootstrap step validates clean-project skill discovery and selective installation before implementing the minimum end-to-end core workflow.

## Licence

MIT. See [LICENSE](LICENSE).
