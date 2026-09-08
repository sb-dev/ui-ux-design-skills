# Level 1 Inline Form Validation

**Level:** 1  
**Product:** Account settings web application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design inline validation for changing a user's billing email address.

Context:
The form contains a current email value, a replacement email field and a save action. Validation may fail because of malformed input, an already-used address, a temporary server error or a verification requirement.

Requirements:
- Distinguish client-side format validation from server-side/business validation
- Do not show errors before the user has had a reasonable chance to enter the value
- Preserve entered input after recoverable failure
- Make error association accessible to keyboard and screen-reader users
- Define pending, success and failed-save feedback
- Do not rely on colour alone
- Keep the interaction bounded to this form

Workflow:
- Identify the interaction requirement and states
- Choose the lowest useful fidelity
- Design validation timing, placement and recovery
- Evaluate comprehension, accessibility and error recovery
- Produce behavioural acceptance criteria

What to optimise for:
- timely feedback
- low interruption
- clear recovery
- accessible error association
- preserved user input
```

## Primary benchmark focus

validation timing; feedback; accessibility; recovery; state preservation.
