# Level 1 Destructive Confirmation

**Level:** 1  
**Product:** Cloud file-management application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design a proportionate confirmation interaction for permanently deleting a project containing multiple assets.

Context:
The user has intentionally chosen Delete Project from the project's settings. Deletion is permanent after successful processing, but processing may fail.

Requirements:
- Cover confirmation, processing, success and failure states
- Preserve user control
- Prevent accidental destructive action without adding unnecessary friction
- Do not require typing the project name unless the risk/evidence justifies it
- Do not rely on colour alone for destructive-state communication
- Define cancellation and failed-deletion recovery behaviour
- Keep the change bounded to this interaction
- Produce implementation-ready behavioural acceptance criteria

Workflow:
- Identify the interaction requirement before styling the control
- Define the meaningful states
- Choose the lowest useful fidelity for the uncertainty
- Design the interaction and feedback
- Evaluate error prevention, recovery and accessibility
- Preserve unaffected product behaviour

What to optimise for:
- proportionate safeguards
- explicit consequences
- clear primary and cancellation actions
- recoverable failure
- accessible feedback
- minimal unnecessary friction
```

## Primary benchmark focus

interaction correctness; recovery; accessibility; proportionate safeguard; bounded scope.
