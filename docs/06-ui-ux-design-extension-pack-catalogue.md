# UI/UX Design Skills — Extension Pack Catalogue

**File:** `06-ui-ux-design-extension-pack-catalogue.md`  
**Status:** Canonical  
**Version:** 1.0

## 1. Purpose

This catalogue defines coherent ready-made UI/UX Design Skills Extension Packs and the showcase used to prove each pack.

An Extension Pack is the installable Agent Skill form of the customisation-pack contract defined in `05-ui-ux-design-customisation-packs-spec.md`.

Every catalogue entry must answer:

```text
what UX production grammar does this pack specialise?
when should it be used?
what changes across the four core skills?
what must remain stable?
what specialist evaluation behaviour applies?
what does a representative production prompt look like?
```

A pack that only adds a label, style preference or generic best-practice list does not belong in the catalogue.

---

## 2. Catalogue Rules

Every published pack must:

- represent a coherent reusable UX production profile;
- materially change relevant production behaviour;
- keep evidence provenance, accessibility, approval and bounded refinement authoritative;
- document activation and precedence;
- define which core skills are affected;
- define specialist evaluation behaviour;
- include at least one realistic showcase;
- include a complete copyable generation prompt;
- include negative/boundary evaluation when implemented;
- support core-vs-pack differential evaluation;
- remain optional and independently installable when implemented.

Do not add a new pack merely because the product sector, visual mood or reference product differs.

---

## 3. Initial Catalogue

| Pack | Primary context | Production grammar | Status |
|---|---|---|---|
| `native-mobile-critical-flow` | native mobile, consequential/recovery tasks | lifecycle-aware mobile task continuity and recovery | first-wave showcase |
| `trustworthy-ai-decision-support` | AI-assisted consequential judgement | provenance, authority, uncertainty and correction | first-wave showcase |
| `reference-driven-saas-product` | SaaS product design using external references | reference analysis without structural copying | first-wave showcase |
| `dense-operations-workspace` | expert operational systems | dense information, rapid scanning, auditability and cross-flow consistency | catalogued |
| `developer-tool-configuration` | technical developer interfaces | progressive technical disclosure, validation and recovery | catalogued |
| `conversion-safe-ecommerce` | transactional ecommerce | conversion efficiency without dark patterns or loss of informed choice | catalogued |

The catalogue is intentionally small. Expand it only when repeated production evidence demonstrates a distinct reusable grammar.

---

## 4. `native-mobile-critical-flow`

**Primary context:** native mobile task with interruption, recovery or consequential completion  
**Production grammar:** lifecycle-aware mobile continuity

### Production profile

The pack prioritises:

```text
task continuity
→ native navigation/state expectations
→ interruption and resume
→ input/keyboard/touch behaviour
→ failure and recovery
→ accessible handoff
```

Typical concerns:

- app background/foreground transitions;
- navigation stack and back behaviour;
- code/link expiry;
- device switching where relevant;
- keyboard and focus behaviour;
- permission requests only when necessary;
- touch target and reachability concerns;
- loading, offline and retry states;
- preserved user context after interruption.

`uiux-evaluate` must not treat every platform convention as a hard rule when project requirements justify another interaction. It must still reject lost task context, inaccessible controls, dead-end recovery and implementation behaviour that contradicts approved UX.

### Showcase — Interrupted Identity Verification

A user begins identity verification in a mobile banking application, leaves the app to retrieve information, returns after the session partially expires and must resume safely without repeating completed work unnecessarily.

### Generation prompt

```text
Use UI/UX Design Skills with the native-mobile-critical-flow Extension Pack to design **Interrupted Identity Verification**.

Context:
A mobile banking user must complete identity verification before increasing an account transfer limit. The task includes reviewing personal details, capturing an identity document, completing a short verification step and confirming submission.

The user may leave the app to retrieve their document or another piece of information. The app may be backgrounded, terminated by the operating system or resumed after a verification session expires.

Requirements:
- Preserve completed work when it remains valid
- Make expired or invalid state explicit rather than silently resetting the task
- Define back navigation and cancellation behaviour
- Define keyboard/focus behaviour for form fields
- Request camera permission only at the point it is needed
- Include loading, upload failure, offline and retry states
- Do not make the user repeat verified information without a defensible reason
- Preserve accessibility requirements throughout
- Produce an implementation-ready behavioural handoff

Workflow:
- Model the user task independently of screens
- Identify interruption and lifecycle risks
- Generate at least two structurally different recovery approaches where uncertainty remains
- Choose the lowest useful fidelity for testing resume behaviour
- Specify representative mobile states rather than polishing every screen
- Evaluate interruption, recovery, native navigation, accessibility and preservation
- Diagnose failures at the smallest owning layer

What to optimise for:
- continuity across interruption
- explicit session state
- proportionate re-verification
- predictable navigation
- recoverable failure
- minimal repeated work
```

**What it proves:** the pack changes design and evaluation around mobile lifecycle behaviour rather than merely applying mobile visual styling.

---

## 5. `trustworthy-ai-decision-support`

**Primary context:** AI-assisted interface supporting consequential human judgement  
**Production grammar:** calibrated authority, provenance and correction

### Production profile

The pack prioritises:

```text
source evidence
→ AI inference
→ uncertainty
→ human judgement
→ correction / override
→ accountable action
```

Typical concerns:

- verified source material versus model inference;
- confidence/uncertainty communication;
- automation bias;
- user authority;
- correction and disagreement;
- explanation appropriate to the decision;
- auditability where required;
- preventing AI-generated text from laundering itself into source evidence.

`uiux-evaluate` should reject interfaces that make model inference indistinguishable from verified fact, obscure uncertainty, or make human override nominal rather than practical.

### Showcase — Regulatory Prioritisation

An operations analyst reviews AI-ranked regulatory cases, supporting evidence and suggested urgency before deciding which cases should be investigated first.

### Generation prompt

```text
Use UI/UX Design Skills with the trustworthy-ai-decision-support Extension Pack to design **Regulatory Prioritisation**.

Context:
An operations analyst receives a queue of regulatory review cases. An AI model assigns each case a suggested priority and summarises the factors that influenced the ranking. The analyst remains responsible for the final prioritisation decision.

Evidence available to the interface includes verified source records, operational metadata and AI-generated inference. These must remain distinguishable.

Requirements:
- Make verified source evidence visually and semantically distinct from AI inference
- Preserve the analyst's authority over final priority
- Communicate uncertainty only to the precision the system genuinely supports
- Allow correction, disagreement and override without punitive friction
- Preserve the original source material when the AI summary is wrong
- Avoid treating model confidence as decision certainty
- Support review of why a recommendation changed when relevant
- Define accessible behaviour and implementation acceptance criteria

Workflow:
- Frame the human decision problem before designing an AI panel
- Identify plausible trust/reliance failure mechanisms and competing explanations
- Define solution-independent interaction requirements
- Generate structurally different authority models, not cosmetic AI-card variants
- Select fidelity based on the uncertainty being tested
- Evaluate source distinction, comprehension, reliance, correction and user control
- Preserve the human responsibility model through handoff

What to optimise for:
- calibrated reliance
- evidence provenance
- clear authority
- useful uncertainty
- easy correction
- auditable decision support without automation theatre
```

**What it proves:** the pack changes the interaction and quality target for AI-assisted judgement while retaining the core evidence model.

---

## 6. `reference-driven-saas-product`

**Primary context:** SaaS product or feature using design references as production evidence  
**Production grammar:** reference analysis without structural copying

### Production profile

The pack prioritises:

```text
reference evidence
→ extract relevant characteristics
→ test contextual applicability
→ derive original interaction direction
→ preserve product requirements
```

Typical concerns:

- reference provenance;
- separating aesthetic cues from interaction evidence;
- identifying which reference characteristics are relevant;
- avoiding accidental copying of unsuitable IA or task structure;
- integrating with an existing design system;
- maintaining product-specific content and data realism.

`uiux-evaluate` should not reward superficial visual similarity when the resulting task model or information architecture is unsuitable.

### Showcase — Developer Analytics Redesign

A SaaS developer analytics feature must be redesigned using several supplied product references while preserving its own task model, data relationships and approved interaction requirements.

### Generation prompt

```text
Use UI/UX Design Skills with the reference-driven-saas-product Extension Pack to redesign **Developer Analytics**.

Context:
A SaaS platform provides developers with deployment health, request volume, error rates and recent incident information. The current feature is functionally complete but difficult to scan and visually inconsistent with the rest of the product.

The project supplies several interface references for layout density, typography, chart treatment and navigation ideas. These references are design evidence, not requirements and not user research.

Requirements:
- Record what each reference is being used to learn from
- Do not copy reference IA, navigation or content structure without contextual justification
- Preserve approved developer tasks and product-specific data relationships
- Generate at least two materially different structural directions before visual refinement
- Reuse the consuming product's design system where appropriate
- Use realistic operational content and states
- Include responsive behaviour for the representative feature surface
- Preserve accessibility and implementation traceability

Workflow:
- Separate reference evidence from product/user evidence
- Identify transferable characteristics and unsuitable characteristics
- Model the core analytics tasks independently of the references
- Generate structural alternatives
- Select a direction before increasing visual fidelity
- Produce representative visual direction only where it resolves a real uncertainty
- Evaluate hierarchy, task fit, reference influence, distinctiveness and preservation

What to optimise for:
- contextual rather than imitative reference use
- scannable information hierarchy
- coherent SaaS product language
- realistic data density
- preservation of product-specific behaviour
```

**What it proves:** the pack specialises reference-driven design as evidence-informed production rather than imitation.

---

## 7. `dense-operations-workspace`

**Primary context:** high-frequency expert operational system  
**Production grammar:** dense information with rapid scanning, state clarity and auditability

### Production profile

The pack prioritises:

```text
queue awareness
→ rapid triage
→ case context
→ decision / action
→ escalation
→ history / auditability
```

Typical characteristics:

- high information density without indiscriminate compression;
- keyboard efficiency where relevant;
- persistent context across queue and detail views;
- explicit status, ownership and SLA information;
- rapid comparison and triage;
- audit/history availability;
- robust empty, delayed, conflicting and failed states.

### Showcase — Incident Triage Console

A reliability operations team needs one coherent workspace for incoming incidents, evidence, ownership, escalation and action history.

### Generation prompt

```text
Use UI/UX Design Skills with the dense-operations-workspace Extension Pack to design **Incident Triage Console**.

Context:
A reliability operations team monitors a queue of incidents from multiple services. Operators need to triage new incidents, inspect evidence, understand current ownership, take or assign actions, escalate high-risk cases and review what has already happened.

Requirements:
- Support rapid scanning without hiding critical context
- Keep queue state and selected-case state coherent
- Represent ownership, severity, age and escalation clearly
- Support keyboard-efficient workflows where appropriate
- Preserve audit/history information
- Include conflicting, stale, empty and failed-data states
- Do not assume that more dashboard panels improve operational awareness
- Produce behavioural acceptance criteria for shared patterns

Workflow:
- Model the operator tasks before deciding the workspace layout
- Identify which information must remain visible during action
- Explore materially different queue/detail structures
- Test hierarchy and navigation cheaply before visual polish
- Evaluate task efficiency, information hierarchy, cross-flow consistency, accessibility and recovery

What to optimise for:
- expert scanning
- state clarity
- low context-switch cost
- safe action
- auditability
- coherent reuse across related workflows
```

**What it proves:** the pack treats density and expert efficiency as operational design requirements rather than a visual dashboard style.

---

## 8. `developer-tool-configuration`

**Primary context:** technical configuration or developer tooling  
**Production grammar:** progressive technical disclosure with validation and recovery

### Production profile

The pack prioritises:

```text
technical intent
→ configuration model
→ dependency / permission clarity
→ validation
→ safe apply
→ recoverable error
```

Typical characteristics:

- concepts expressed in the domain's real vocabulary;
- progressive disclosure without hiding important consequences;
- copyable values/commands where useful;
- validation before consequential apply;
- explicit permission and environment scope;
- useful error diagnostics;
- preservation of advanced-user efficiency.

### Showcase — Deployment Policy Builder

A developer configures deployment environments, approval rules, branch conditions and rollback behaviour before applying a policy to a service.

### Generation prompt

```text
Use UI/UX Design Skills with the developer-tool-configuration Extension Pack to design **Deployment Policy Builder**.

Context:
Developers need to configure a deployment policy for a service. The policy includes target environments, branch conditions, approval requirements, deployment windows and rollback behaviour.

Requirements:
- Model the configuration concepts before assigning them to form controls
- Make environment and permission scope explicit
- Support validation before the policy is applied
- Preserve advanced-user efficiency without making the default path cryptic
- Show dependency conflicts and invalid combinations at the point they become actionable
- Define unsaved-change, failed-apply and rollback states
- Provide copyable machine-readable representation only when it helps the workflow
- Produce accessible interaction and handoff requirements

Workflow:
- Map the developer's configuration task and decision points
- Identify which concepts can be progressively disclosed and which must remain visible
- Generate at least two structural approaches
- Select fidelity according to configuration uncertainty
- Evaluate comprehension, error prevention, validation, recovery and expert efficiency

What to optimise for:
- technical accuracy
- clear scope
- progressive disclosure
- early validation
- recoverable failure
- low friction for repeated expert use
```

**What it proves:** the pack specialises complex configuration behaviour without turning UI/UX Design Skills into a developer-platform implementation system.

---

## 9. `conversion-safe-ecommerce`

**Primary context:** transactional ecommerce  
**Production grammar:** efficient purchase completion without coercion or loss of informed choice

### Production profile

The pack prioritises:

```text
purchase intent
→ product / price clarity
→ low-friction task
→ informed choice
→ recoverable payment / fulfilment
→ trustworthy confirmation
```

Typical concerns:

- guest versus account paths;
- total-price clarity;
- delivery/fulfilment state;
- payment failure and retry;
- preservation of basket state;
- avoiding deceptive defaults, forced continuity and hidden additions;
- evidence-based conversion improvements rather than dark-pattern folklore.

### Showcase — Express Checkout Recovery

A retailer wants to reduce checkout abandonment while preserving guest checkout, clear pricing and recoverable payment failures.

### Generation prompt

```text
Use UI/UX Design Skills with the conversion-safe-ecommerce Extension Pack to redesign **Express Checkout Recovery**.

Context:
A retailer observes high abandonment between delivery selection and payment. Stakeholders have proposed forcing account creation and preselecting optional services to increase completion, but the evidence does not establish that either change addresses the actual problem.

Requirements:
- Frame the abandonment problem before accepting the proposed solutions
- Preserve guest checkout unless evidence justifies removing it
- Keep total price and optional charges explicit
- Do not use preselection, scarcity pressure or hidden continuity as conversion shortcuts
- Preserve basket and delivery context after recoverable payment failure
- Support retry and alternate payment where available
- Include accessibility and mobile-responsive behaviour
- Produce measurable acceptance criteria

Workflow:
- Ingest available analytics, support evidence and checkout observations separately
- Identify competing explanations for abandonment
- Define solution-independent requirements
- Generate structurally different checkout/recovery approaches
- Use the cheapest credible representation to test the key uncertainty
- Evaluate completion friction, informed choice, trust, recovery and accessibility

What to optimise for:
- legitimate friction reduction
- pricing clarity
- recoverable payment failure
- guest autonomy
- evidence-grounded conversion improvement
```

**What it proves:** the pack can optimise transactional performance without redefining coercive behaviour as good UX.

---

## 10. Choosing a Pack

Choose by production grammar, not by superficial category matching.

| Need | Start with |
|---|---|
| Native mobile interruption/recovery | `native-mobile-critical-flow` |
| Consequential AI-assisted judgement | `trustworthy-ai-decision-support` |
| SaaS redesign informed by references | `reference-driven-saas-product` |
| Dense expert operational workspace | `dense-operations-workspace` |
| Technical configuration workflow | `developer-tool-configuration` |
| Transactional conversion with autonomy safeguards | `conversion-safe-ecommerce` |

Do not create a new pack when explicit project requirements can adapt an existing production grammar cleanly.

---

## 11. First-Wave Implementation

The first-wave implementation should prove three distinct specialist grammars:

```text
native-mobile-critical-flow
trustworthy-ai-decision-support
reference-driven-saas-product
```

For each implemented pack require:

```text
installable SKILL.md
production profile
showcase README
complete prompt
activation eval
specialisation eval
precedence eval
preservation eval
negative/boundary eval
core-vs-pack differential benchmark
```

The remaining catalogue entries may stay specified until real production evidence justifies implementation.

---

## 12. Pack Authoring

Use `uiux-pack-create` for new packs.

Before creating a pack:

```text
inspect catalogue
→ determine whether an existing pack already covers the production grammar
→ create only if the behaviour is materially distinct
```

A successful new pack should become another reference implementation rather than expanding the catalogue through taxonomy alone.

---

## 13. Catalogue Acceptance

The catalogue is healthy when:

- every pack has a distinct production grammar;
- the catalogue remains smaller than the set of possible product categories;
- every showcase makes the specialised behaviour visible;
- every showcase includes a copyable prompt;
- core responsibilities do not disappear when no pack is active;
- new packs are added from demonstrated need rather than completeness pressure.

---

*UI/UX Design Skills — Extension Pack Catalogue v1.0*
