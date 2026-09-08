# Level 2 API Permission Setup

**Level:** 2  
**Product:** Developer platform  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design an API-permission setup task for developers creating a service credential.

Context:
A developer selects an environment, chooses API scopes, names the credential and confirms creation. Some scope combinations are invalid or require elevated approval. The secret is shown only once after creation.

Requirements:
- Model the developer task independently of current screens
- Make environment and permission scope explicit
- Explain consequences without replacing domain terminology with vague consumer language
- Generate structurally different permission-selection approaches where uncertainty remains
- Prevent invalid combinations before final creation where possible
- Define elevated-approval, failure and retry paths
- Make one-time secret disclosure explicit and accessible
- Do not design the underlying permission system

Workflow:
- Map goals, decision points, dependencies and recovery
- Generate at least two structural alternatives
- Select fidelity based on configuration uncertainty
- Evaluate comprehension, error prevention, scope clarity and recovery
- Produce behavioural acceptance criteria

What to optimise for:
- technical clarity
- safe permission selection
- efficient expert use
- predictable validation
- explicit one-time secret handling
```

## Primary benchmark focus

task modelling; technical configuration; validation; error prevention; recovery.
