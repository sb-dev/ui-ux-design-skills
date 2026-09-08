# UI/UX Extension Packs

Extension Packs provide coherent specialist UX production profiles for the four core UI/UX skills. The core remains fully usable without a pack.

The normative contract is defined in [`docs/05-ui-ux-design-customisation-packs-spec.md`](../docs/05-ui-ux-design-customisation-packs-spec.md). The curated catalogue and showcase prompts are defined in [`docs/06-ui-ux-design-extension-pack-catalogue.md`](../docs/06-ui-ux-design-extension-pack-catalogue.md).

## Catalogue

| Pack | Production grammar | Status |
|---|---|---|
| `native-mobile-critical-flow` | lifecycle-aware mobile continuity and recovery | first-wave |
| `trustworthy-ai-decision-support` | provenance, authority, uncertainty and correction | first-wave |
| `reference-driven-saas-product` | reference-informed product design without structural copying | first-wave |
| `dense-operations-workspace` | dense expert operations, scanning and auditability | catalogued |
| `developer-tool-configuration` | technical configuration, validation and recovery | catalogued |
| `conversion-safe-ecommerce` | transactional efficiency without coercive UX | catalogued |

Human science, accessibility, UX measurement and design-system reasoning remain core UI/UX responsibilities. They are not optional low-level packs.

## Pack rule

Prefer one coherent production profile over composing low-level platform, psychology and design-style fragments.

```text
coherent pack
+
explicit project requirements
```

is the initial model.

Pack inheritance, dependency solving and automatic multi-pack composition are deferred until repeated production use proves they are needed.

## Precedence

```text
1. explicit project / user instructions
2. approved UX artifacts and decisions
3. selected Extension Pack
4. core UI/UX defaults
```

A pack cannot silently reopen approved UX or weaken evidence, accessibility or approval rules.

## Activation

Persistent selection belongs to the consuming project or user.

- **Explicit**: use the requested pack.
- **Configured**: use a pack already selected by the project.
- **Suggested**: recommend a relevant pack.
- **Temporary inference**: apply only to the current operation when relevance is unambiguous, disclose it, and do not persist it automatically.

## Implementation contract

Every implemented pack must provide:

```text
installable SKILL.md
production profile
affected core skills
stable core invariants
precedence and boundaries
canonical showcase
complete copyable generation prompt
activation eval
specialisation eval
precedence eval
preservation eval
negative / boundary eval
core-vs-pack differential benchmark
```

Use `uiux-pack-create` to inspect, create, demonstrate, evaluate and validate new packs.
