# Level 3 SaaS Analytics

**Level:** 3  
**Product:** B2B SaaS analytics application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design, uiux-evaluate and uiux-handoff to design a SaaS analytics feature for product teams investigating a sudden drop in activation.

Context:
The feature combines a summary metric, time series, segment breakdowns and a list of recent changes/events. Users need to move from "something changed" to a defensible area for investigation without treating correlation as causation.

Requirements:
- Model the analysis task before designing charts
- Define information architecture for summary, trend, segmentation and recent changes
- Use realistic content and data states
- Support loading, partial data, empty segments and failed queries
- Define responsive behaviour for representative desktop and narrow layouts
- Avoid presenting statistical coincidence as causal explanation
- Preserve accessible table/text alternatives where visualisation alone is insufficient
- Produce a behavioural handoff

Workflow:
- Define the interaction hypothesis and task model
- Generate structurally different feature directions
- Select the fidelity needed to test hierarchy and analysis flow
- Produce representative states, not every possible dashboard variation
- Evaluate task clarity, information hierarchy, interpretation risk, accessibility and preservation

What to optimise for:
- useful analytical progression
- realistic data density
- scannable hierarchy
- honest uncertainty
- responsive coherence
```

## Primary benchmark focus

feature coherence; IA; realistic data; hierarchy; responsive behaviour; interpretation safety.
