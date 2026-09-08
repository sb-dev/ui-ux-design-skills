# Benchmarks

The core benchmark target is 39 cases:

- 18 focused P0 command cases;
- 4 composed core-skill cases;
- 6 preservation cases;
- 7 root-cause cases;
- 4 Level 5 / end-to-end cases.

This number is target coverage, not scaffold implementation status.

The 15 public progressive examples form a capability-coverage surface. They may satisfy parts of the 39-case core target when their fixtures and rubrics genuinely cover the same behaviour; do not duplicate cases merely to increase counts.

Additional benchmark surfaces cover:

- Extension Pack activation, specialisation, precedence, preservation and boundary behaviour;
- core-vs-pack differential behaviour;
- `uiux-pack-create` authoring behaviour;
- clean installation and selective-installation smoke tests.

Start vertically with a small set of critical command evals plus `interrupted-financial-decision`, then grow from observed defects.

Do not collapse UX into one aggregate score. Deterministic invariants, semantic design quality, research quality, human-science reasoning, preservation, root-cause accuracy and pack behaviour remain separately visible.

See [`docs/04-testing-and-benchmark-spec.md`](../docs/04-testing-and-benchmark-spec.md).
