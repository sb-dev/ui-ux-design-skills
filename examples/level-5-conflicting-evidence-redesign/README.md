# Level 5 Conflicting Evidence Redesign

**Level:** 5  
**Product:** Subscription management application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-research, uiux-design, uiux-evaluate and uiux-handoff to investigate and redesign a subscription-cancellation experience using conflicting evidence.

Context:
Analytics show a high cancellation-task completion rate. Support contacts complain that cancellation is confusing. Interviews report frustration, while a satisfaction survey is broadly positive. Task observations show repeated backtracking before confirmation.

Requirements:
- Preserve each evidence source and its provenance
- Do not force conflicting evidence into one narrative prematurely
- Identify competing human/problem mechanisms and evidence for/against each
- Define solution-independent interaction requirements
- Create falsifiable hypotheses
- Generate structurally different alternatives
- Choose fidelity based on the uncertainty being tested
- Define an evaluation capable of discriminating between the leading explanations
- Retain unresolved conflict where the evidence remains inconclusive
- Produce a traceable handoff only for decisions supported strongly enough to implement

Workflow:
- Frame the problem without accepting stakeholder solutions
- Ingest and classify all evidence
- Preserve contradiction explicitly
- Derive competing mechanisms and requirements
- Explore alternatives and select test fidelity
- Evaluate the hypothesis, diagnose the owning layer and revise only what failed
- Produce approved decisions and acceptance criteria with traceability

What to optimise for:
- epistemic discipline
- contradiction preservation
- falsifiable reasoning
- structural diversity
- bounded redesign
- evidence-to-handoff traceability
```

## Primary benchmark focus

conflicting evidence; mechanism reasoning; complete lifecycle; diagnosis; traceability.
