# UI/UX Design Skills

**Design evidence-grounded product experiences, not isolated screens.**

UI/UX Design Skills gives AI coding agents a production workflow for turning human and product evidence into validated interaction decisions and implementation-ready UX contracts.

It supports:

- **Research and problem framing**: context, evidence, provenance, human problems, mechanisms and interaction requirements
- **Interaction design**: task models, IA, flows, structural alternatives, hypotheses and state behaviour
- **Fidelity strategy**: resolve uncertainty with the cheapest useful representation before increasing fidelity
- **Evaluation and repair**: accessibility, preservation, human-performance evaluation, root-cause diagnosis and bounded refinement
- **Handoff**: behavioural contracts, responsive behaviour, accessibility requirements, acceptance criteria and traceability
- **Specialisation**: coherent Extension Packs for reusable specialist UX production grammars

The workflow is designed to understand before designing, explore cheaply, select deliberately, preserve approved decisions, increase fidelity only when the unresolved question requires it, validate the result and revise only the layer that failed.

## Approval and fidelity control

Selection and approval are different commitments.

- **Selected** means keep developing this direction.
- **Approved** means downstream design or engineering may rely on the decision.
- **Reopened** means new evidence or a diagnosed upstream defect justifies revisiting an approved decision.

Use the cheapest representation capable of resolving the uncertainty:

```text
problem statement instead of screen generation
task model instead of page mockups
flow instead of coded prototype
wireframe instead of visual polish
representative states instead of every screen
local correction instead of whole-design regeneration
```

Higher-fidelity work must preserve approved upstream decisions unless evidence explicitly reopens them.

## Install

Install the four core skills for Claude Code:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-research \
  --skill uiux-design \
  --skill uiux-evaluate \
  --skill uiux-handoff \
  --agent claude-code
```

For Codex, use `--agent codex` instead.

List all available core, support and Extension Pack skills:

```bash
npx skills add sb-dev/ui-ux-design-skills --list
```

Install the pack-authoring support skill when needed:

```bash
npx skills add sb-dev/ui-ux-design-skills \
  --skill uiux-pack-create \
  --agent claude-code
```

Project-local installation is the default. Playwright, axe, Storybook, Maestro, Appium and Figma are optional execution capabilities, not core dependencies.

## Quick start — Destructive Confirmation

```text
Use uiux-design and uiux-evaluate to design a proportionate confirmation interaction for permanently deleting a project containing multiple assets.

Requirements:
- Cover confirmation, processing, success and failure states
- Preserve user control
- Prevent accidental destructive action without adding unnecessary friction
- Do not require typing the project name unless the risk/evidence justifies it
- Do not rely on colour alone for destructive-state communication
- Define cancellation and failed-deletion recovery behaviour
- Keep the change bounded to this interaction
- Produce implementation-ready behavioural acceptance criteria

Workflow:
- Identify the interaction requirement before styling the control
- Define the meaningful states
- Choose the lowest useful fidelity for the uncertainty
- Design the interaction and feedback
- Evaluate error prevention, recovery and accessibility
- Preserve unaffected product behaviour

What to optimise for:
- proportionate safeguards
- explicit consequences
- clear primary and cancellation actions
- recoverable failure
- accessible feedback
- minimal unnecessary friction
```

See [Destructive Confirmation](examples/level-1-destructive-confirmation/).

## Learn by producing

The public learning surface uses five progressive levels with three complementary examples per level.

### Level 1 — Control one interaction

**Interaction requirement → states → interaction → evaluation**

| Example | Product | Design challenge |
|---|---|---|
| [Destructive Confirmation](examples/level-1-destructive-confirmation/) | Cloud file management | Proportionate destructive safeguards and recovery |
| [Inline Form Validation](examples/level-1-inline-form-validation/) | Account settings | Validation timing, feedback and accessible error recovery |
| [Search and Filter](examples/level-1-search-and-filter/) | Support tickets | Visible filter state, reversible narrowing and empty/error states |

### Level 2 — Complete one user task

**Task model → structural alternatives → selected flow → evaluation**

| Example | Product | Design challenge |
|---|---|---|
| [Mobile Account Recovery](examples/level-2-mobile-account-recovery/) | Mobile banking | Interruption, expiry, resend and recovery |
| [Guest Checkout](examples/level-2-guest-checkout/) | Ecommerce | Transactional flow, informed choice and payment recovery |
| [API Permission Setup](examples/level-2-api-permission-setup/) | Developer platform | Technical configuration, validation and scope clarity |

### Level 3 — Design one feature

**Requirements → IA/task structure → interaction design → representative fidelity → feature evaluation**

| Example | Product | Design challenge |
|---|---|---|
| [AI-Assisted Support](examples/level-3-ai-assisted-support/) | Customer support | AI authority, source distinction and correction |
| [SaaS Analytics](examples/level-3-saas-analytics/) | B2B SaaS | Data hierarchy, IA and responsive analytical flow |
| [Reference-Driven Developer Portal](examples/level-3-reference-driven-developer-portal/) | Developer portal | Reference-informed design without structural copying |

### Level 4 — Design a coherent product area

**Several workflows → shared patterns → cross-flow consistency → bounded refinement**

| Example | Product | Design challenge |
|---|---|---|
| [Operations Review Workspace](examples/level-4-operations-review-workspace/) | Enterprise operations | Dense operational state, shared patterns and preservation |
| [Ecommerce Account Area](examples/level-4-ecommerce-account-area/) | Ecommerce | Orders, returns and saved-data coherence across flows |
| [Media Discovery and Playback](examples/level-4-media-discovery-and-playback/) | Streaming media | Discovery-to-playback continuity and entitlement state |

### Level 5 — Research-to-validated redesign

**Evidence → mechanism → requirement → hypothesis → alternatives → validation → bounded redesign → handoff**

| Example | Product | Design challenge |
|---|---|---|
| [Interrupted Financial Decision](examples/level-5-interrupted-financial-decision/) | Regulated operations | Complete evidence-to-handoff lifecycle |
| [Conflicting Evidence Redesign](examples/level-5-conflicting-evidence-redesign/) | Subscription management | Preserve contradiction and test competing explanations |
| [Failed Interaction Hypothesis](examples/level-5-failed-interaction-hypothesis/) | Clinical scheduling | Retain valid knowledge while replacing a failed intervention |

Every primary example contains a complete copyable generation prompt. Fixtures and reference outputs are added when an example is implemented so source material reflects a real testable case rather than a fabricated answer key.

See the [Examples index](examples/README.md).

## Project structure grows with the work

**One bounded interaction**  
Use only the product context, interaction requirement, design artifact, evaluation and handoff actually needed.

**The human problem is uncertain**  
Add evidence, human-problem framing and research findings before generating UI.

**Alternatives are meaningful**  
Add candidate task, IA or flow artifacts and record the selected direction instead of duplicating whole project trees.

**Executable behaviour is required**  
Add a prototype only when runtime interaction, device behaviour or semantic accessibility is the unresolved question.

**The work becomes a product area**  
Add shared IA, design-system mappings, cross-flow states and broader evaluation only when multiple workflows genuinely need them.

**A local defect needs repair**  
Reopen the smallest owning layer and preserve unaffected approved work.

## Core skills

### `uiux-research`

Turn product context and evidence into a defensible human-problem model and interaction requirements while preserving provenance, uncertainty and competing explanations.

### `uiux-design`

Turn interaction requirements into explicit testable UX alternatives at the lowest useful fidelity.

### `uiux-evaluate`

Evaluate requirements and hypotheses, identify the owning failure layer and direct the smallest sufficient revision.

### `uiux-handoff`

Convert approved UX into an explicit implementation contract with states, accessibility, responsive intent, acceptance criteria and traceability.

## Pack authoring

### `uiux-pack-create`

Create or revise reusable Extension Packs through:

```text
pack:inspect
→ pack:create
→ pack:example
→ pack:evals
→ pack:validate
```

It is a support skill, not a fifth core UI/UX production skill.

## Extension Packs

Core UI/UX remains fully usable without a pack.

Packs represent coherent reusable production profiles rather than low-level platform, psychology or design-style fragments.

Initial catalogue:

- `native-mobile-critical-flow`
- `trustworthy-ai-decision-support`
- `reference-driven-saas-product`
- `dense-operations-workspace`
- `developer-tool-configuration`
- `conversion-safe-ecommerce`

The first three are implemented reference profiles with canonical showcase prompts.

Human science, accessibility, UX measurement and design-system reasoning remain core responsibilities whether or not a pack is active.

Pack precedence:

```text
1. explicit project / user instructions
2. approved UX artifacts and decisions
3. selected Extension Pack
4. core UI/UX defaults
```

See [Extension Packs](extension-packs/README.md), [Spec 05](docs/05-ui-ux-design-customisation-packs-spec.md) and [Spec 06](docs/06-ui-ux-design-extension-pack-catalogue.md).

## Execution

The skills decide **what UI/UX work is needed**. Existing tools execute specialised operations.

- **Playwright** — browser interaction, runtime-state inspection, screenshots and web-flow validation
- **axe-core** — deterministic accessibility checks for executable web interfaces
- **Storybook** — optional component/state inspection
- **Maestro / Appium** — optional mobile interaction execution
- **Figma** — optional design-tool representation and collaboration
- **Consumer project runtime** — preferred environment for prototypes when it already exists
- **Dedicated research tooling** — external evidence retrieval where specialist research is required

The core does not maintain a browser framework, Figma replacement, frontend framework, analytics platform or accessibility rules engine.

## Repository checks

For contributors:

```bash
npm test
```

The deterministic repository gate validates structural contracts including:

```text
6 canonical specifications
4 core skill packages
18 core P0 command contracts
uiux-pack-create + 5 authoring commands
15 primary example READMEs
Extension Pack catalogue / manifest / first-wave showcases
first-wave pack skills
repository structure
```

This validator proves repository integrity, not semantic UX quality. The benchmark specification owns semantic, preservation, root-cause, Extension Pack and installation evaluation.

## Documentation

### Specifications

1. [System Specification](docs/01-ui-ux-design-skills-system-spec.md)
2. [Workflows and Artifacts Specification](docs/02-ui-ux-design-skills-workflows-and-artifacts-spec.md)
3. [Repository and Contracts Specification](docs/03-ui-ux-design-skills-repository-and-contracts-spec.md)
4. [Testing and Benchmark Specification](docs/04-testing-and-benchmark-spec.md)
5. [Customisation Packs Specification](docs/05-ui-ux-design-customisation-packs-spec.md)
6. [Extension Pack Catalogue](docs/06-ui-ux-design-extension-pack-catalogue.md)

### Project guidance

- [Progressive Examples](examples/README.md)
- [Extension Packs](extension-packs/README.md)
- [Cross-project extraction candidates](docs/extraction-candidates.md)

## Project boundary

UI/UX Design Skills owns **reusable UI/UX production intelligence**, not a design application, frontend framework, research platform, universal accessibility engine or software-engineering runtime.

It can consume external research, narrative/content, media and gameplay context through explicit artifacts. It returns interaction requirements, approved UX decisions, evaluation evidence and behavioural handoff contracts.

Actual product evidence, research, decisions, approvals and UX artifacts belong to the consuming project. Pactwright, when used, owns delivery/governance lifecycle semantics rather than the UI/UX production workflow.

## Status

Repository scaffolded with six canonical specifications, four core skills, 18 P0 command contracts, one pack-authoring support skill, 15 primary progressive example definitions, a coherent Extension Pack catalogue, three first-wave pack skills/showcases and deterministic repository validation.

Semantic benchmark cases and clean external installation evidence remain implementation gates before benchmarked/mature status.

## Licence

MIT. See [LICENSE](LICENSE).
