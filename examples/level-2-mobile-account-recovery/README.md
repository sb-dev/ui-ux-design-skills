# Level 2 Mobile Account Recovery

**Level:** 2  
**Product:** Native mobile banking application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design a mobile account-recovery task for users who may leave the app to retrieve verification information and then return.

Context:
A user has lost access to their account and must verify identity using a code plus account information. The user may background the app, the code may expire, resend may be rate-limited and network failure may occur.

Requirements:
- Model the recovery task before assigning screens
- Generate at least two structurally different flow alternatives
- Preserve completed valid work across interruption where appropriate
- Cover code expiry, resend, rate limiting, background/resume and network failure
- Define back/cancel behaviour
- Avoid trapping the user in a dead end when one verification route fails
- Preserve accessibility
- Choose the lowest useful fidelity for testing interruption/recovery

Workflow:
- Map entry conditions, task stages, decisions, failure and recovery
- Generate structural alternatives
- Select one direction based on requirements
- Choose test fidelity from the unresolved uncertainty
- Evaluate task clarity, recovery, interruption behaviour and accessibility
- Produce behavioural acceptance criteria

What to optimise for:
- recoverability
- continuity after interruption
- understandable verification state
- low unnecessary repetition
- predictable navigation
```

## Primary benchmark focus

task model; structural alternatives; interruption/recovery; fidelity selection; accessibility.
