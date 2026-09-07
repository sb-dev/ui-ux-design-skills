# Contributing

Contributions should improve reusable UI/UX production behaviour without weakening the core lifecycle:

```text
UNDERSTAND → DESIGN → EVALUATE → HAND OFF
```

Before contributing:

1. Read the four canonical specifications in `docs/`.
2. Keep skills independently installable.
3. Put commands under their owning skill.
4. Do not add provider/tool infrastructure when an existing tool already owns the operation.
5. Add examples or evals for new production behaviour.
6. Preserve evidence provenance, approved decisions, accessibility and bounded refinement.
7. Do not promote project-specific knowledge into reusable skill guidance without generalisation and evidence.

Run:

```bash
npm test
```

before submitting a change.
