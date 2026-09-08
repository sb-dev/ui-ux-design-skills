# Level 4 Operations Review Workspace

**Level:** 4  
**Product:** Enterprise operations platform  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design, uiux-evaluate and uiux-handoff to design a coherent operations product area spanning queue, case detail, evidence review, decision, escalation and history.

Context:
Operations analysts process a high volume of routine cases while also handling exceptions that require deeper evidence review and escalation. Queue state, case state, ownership and history must remain coherent across the workspace.

Requirements:
- Model the related workflows before designing screens independently
- Define shared IA and reusable interaction patterns
- Keep selected-case context coherent with queue state
- Support routine high-frequency work and complex exceptions
- Represent ownership, status, evidence, decision, escalation and history clearly
- Include loading, stale, conflicting, empty and failed-data states
- Preserve keyboard efficiency where appropriate and accessibility throughout
- Prove that a local hierarchy refinement does not rewrite unrelated approved flows

Workflow:
- Map workflow relationships and shared information
- Explore materially different workspace structures
- Select representative states for increased fidelity
- Evaluate cross-flow consistency, hierarchy, complex states, accessibility and preservation
- Diagnose local defects at the smallest owning layer
- Produce reusable behavioural handoff rules and flow-specific acceptance criteria

What to optimise for:
- rapid operational scanning
- low context-switch cost
- coherent cross-flow state
- safe decision/escalation
- bounded refinement
```

## Primary benchmark focus

cross-flow coherence; system consistency; complex states; accessibility; preservation; bounded refinement.
