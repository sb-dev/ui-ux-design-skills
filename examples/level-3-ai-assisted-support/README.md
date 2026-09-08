# Level 3 AI-Assisted Support

**Level:** 3  
**Product:** Customer-support application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design, uiux-evaluate and uiux-handoff to design an AI-assisted support-reply feature that drafts from ticket context while preserving agent review, correction and control.

Context:
Support agents review customer tickets, internal account context and previous responses. An AI assistant may propose a draft and supporting source references, but the agent remains responsible for the message sent to the customer.

Requirements:
- Distinguish source facts from AI-generated text or inference
- Compare materially different authority/review models rather than cosmetic variants
- Preserve agent editing and rejection
- Define draft generation, loading, stale-source, failed-generation and regenerate states
- Prevent an AI draft from silently overwriting agent-written content
- Use realistic ticket content and representative feature states
- Define responsive and accessible behaviour
- Produce an implementation-ready behavioural handoff

Workflow:
- Define the interaction hypothesis and human-AI authority question
- Model the agent task and source context
- Generate structurally distinct review/control approaches
- Select the lowest useful fidelity for testing authority and source distinction
- Evaluate comprehension, reliance, correction, state behaviour and accessibility
- Preserve approved authority boundaries through handoff

What to optimise for:
- useful assistance without hidden automation
- clear source distinction
- agent control
- safe correction
- coherent feature behaviour
```

## Primary benchmark focus

feature coherence; AI authority; source distinction; states; user control; handoff.
