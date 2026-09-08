# Level 5 Failed Interaction Hypothesis

**Level:** 5  
**Product:** Clinical scheduling application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-research, uiux-design, uiux-evaluate and uiux-handoff to respond to a failed interaction hypothesis in a clinical scheduling application.

Context:
Research suggested that users lose confidence because appointment constraints are difficult to reconstruct after interruption. A redesigned persistent summary was introduced to improve decision confidence. Evaluation shows that the underlying interruption mechanism remains plausible, but the persistent-summary interaction does not improve completion confidence and creates additional scanning cost.

Requirements:
- Preserve the original evidence and supported mechanism
- Record the failed interaction hypothesis rather than deleting it
- Do not interpret one failed intervention as proof that the human mechanism is false
- Diagnose why the interaction hypothesis failed
- Reopen only the smallest sufficient design layer
- Generate materially different replacement strategies
- Choose a new test representation based on the unresolved uncertainty
- Preserve unaffected approved task and information requirements
- Produce a new traceable hypothesis and evaluation plan before handoff

Workflow:
- Review evidence, mechanism and failed evaluation separately
- Classify the hypothesis outcome
- Diagnose the owning layer
- Generate bounded replacement alternatives
- Select the cheapest credible test
- Evaluate the new strategy
- Hand off only if the replacement is sufficiently supported

What to optimise for:
- retention of valid knowledge
- explicit failed-hypothesis history
- correct root cause
- smallest sufficient reopening
- cumulative learning rather than reset
```

## Primary benchmark focus

failed-hypothesis reasoning; root cause; preservation; bounded refinement; retained knowledge.
