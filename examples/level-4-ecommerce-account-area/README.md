# Level 4 Ecommerce Account Area

**Level:** 4  
**Product:** Ecommerce account experience  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design, uiux-evaluate and uiux-handoff to design a coherent ecommerce account area spanning orders, returns, saved details, addresses and payment preferences.

Context:
Customers regularly move between order history, order detail, return initiation, address management and payment settings. Several flows share status, identity and saved-data patterns but have different risks and recovery needs.

Requirements:
- Model the major workflows and shared information before designing page-by-page
- Reuse interaction patterns deliberately across the product area
- Preserve order context while moving into returns or support actions
- Distinguish editable saved data from historical order data
- Include pending, failed, refunded, partially returned and cancelled states
- Keep accessibility consistent across flows
- Define mobile-responsive behaviour
- Ensure a local refinement does not rewrite unrelated approved flows

Workflow:
- Map the product-area IA and workflow relationships
- Identify shared patterns and flow-specific exceptions
- Select representative states for higher-fidelity work
- Evaluate cross-flow consistency, hierarchy, recovery, accessibility and preservation
- Produce reusable behavioural handoff rules and flow-specific acceptance criteria

What to optimise for:
- coherent account-area mental model
- low cross-flow context loss
- consistent reusable patterns
- clear historical versus editable data
- bounded refinement
```

## Primary benchmark focus

product-area coherence; shared patterns; complex states; responsive behaviour; preservation.
