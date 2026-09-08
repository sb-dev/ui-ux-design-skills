# Level 4 Media Discovery and Playback

**Level:** 4  
**Product:** Streaming media application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design, uiux-evaluate and uiux-handoff to design a coherent product area spanning discovery, title detail, watchlist, playback entry and resume behaviour.

Context:
Users browse recommendations and search results, inspect title details, add items to a watchlist, start playback and later resume across devices. Content availability and entitlement may change.

Requirements:
- Keep discovery, detail and playback-entry states coherent
- Preserve progress and resume context across sessions/devices where available
- Distinguish unavailable, expired, entitled and purchase-required content states
- Support search/browse return without losing useful context
- Define watchlist feedback and failure behaviour
- Include accessibility across browsing and playback-entry surfaces
- Reuse patterns without flattening genuinely different content states
- Ensure local visual refinement does not alter approved playback or entitlement semantics

Workflow:
- Model the related workflows and shared state
- Define product-area IA and cross-flow transitions
- Select representative complex states
- Evaluate cross-flow consistency, state clarity, recovery, accessibility and preservation
- Produce behavioural handoff contracts for shared patterns and key exceptions

What to optimise for:
- continuity from discovery to playback
- clear entitlement state
- preserved progress/context
- coherent reusable patterns
- bounded product-area refinement
```

## Primary benchmark focus

cross-flow state; media continuity; entitlement clarity; accessibility; preservation.
