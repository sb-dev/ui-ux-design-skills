# Level 2 Guest Checkout

**Level:** 2  
**Product:** Ecommerce web and mobile experience  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design a guest checkout task from basket review through order confirmation.

Context:
Customers may check out without creating an account. The task includes delivery details, delivery method, payment and confirmation. Payment may fail and basket state must survive recoverable errors.

Requirements:
- Model the checkout task before assigning screens
- Keep guest checkout available
- Make total price, delivery cost and optional charges explicit
- Generate structurally different flow alternatives where meaningful
- Preserve basket and entered delivery context after recoverable payment failure
- Define edit/back behaviour without losing completed work unnecessarily
- Include payment failure, retry and alternate-payment paths
- Preserve informed choice and accessibility

Workflow:
- Map the full task including failure/recovery
- Generate at least two structural alternatives
- Select the lowest useful fidelity for the main uncertainty
- Evaluate task clarity, friction, informed choice and recovery
- Produce implementation-ready behavioural acceptance criteria

What to optimise for:
- low unnecessary friction
- transparent pricing
- recoverable payment failure
- continuity across edits
- guest autonomy
```

## Primary benchmark focus

task modelling; structural alternatives; transactional recovery; informed choice; fidelity selection.
