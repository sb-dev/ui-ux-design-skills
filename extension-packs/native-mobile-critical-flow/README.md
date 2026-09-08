# Native Mobile Critical Flow

**Pack:** `native-mobile-critical-flow`  
**Showcase:** Interrupted Identity Verification

This pack specialises lifecycle-aware native-mobile task continuity, interruption, recovery, navigation, input and accessible handoff behaviour.

## Generation prompt

```text
Use UI/UX Design Skills with the native-mobile-critical-flow Extension Pack to design **Interrupted Identity Verification**.

Context:
A mobile banking user must complete identity verification before increasing an account transfer limit. The task includes reviewing personal details, capturing an identity document, completing a short verification step and confirming submission.

The user may leave the app to retrieve their document or another piece of information. The app may be backgrounded, terminated by the operating system or resumed after a verification session expires.

Requirements:
- Preserve completed work when it remains valid
- Make expired or invalid state explicit rather than silently resetting the task
- Define back navigation and cancellation behaviour
- Define keyboard/focus behaviour for form fields
- Request camera permission only at the point it is needed
- Include loading, upload failure, offline and retry states
- Do not make the user repeat verified information without a defensible reason
- Preserve accessibility requirements throughout
- Produce an implementation-ready behavioural handoff

Workflow:
- Model the user task independently of screens
- Identify interruption and lifecycle risks
- Generate at least two structurally different recovery approaches where uncertainty remains
- Choose the lowest useful fidelity for testing resume behaviour
- Specify representative mobile states rather than polishing every screen
- Evaluate interruption, recovery, native navigation, accessibility and preservation
- Diagnose failures at the smallest owning layer

What to optimise for:
- continuity across interruption
- explicit session state
- proportionate re-verification
- predictable navigation
- recoverable failure
- minimal repeated work
```

## Evaluation focus

- interruption and resume;
- navigation/back behaviour;
- input and permission timing;
- recovery;
- accessibility;
- approved-state preservation;
- core-vs-pack differential behaviour.
