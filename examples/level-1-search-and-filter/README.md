# Level 1 Search and Filter

**Level:** 1  
**Product:** Support-ticket web application  
**Status:** Scaffold definition

## Generation prompt

```text
Use uiux-design and uiux-evaluate to design search and filtering for a support-ticket list.

Context:
Agents need to find tickets by text and narrow the list by status, priority and assignee. The result count may change frequently and filters may return no matches.

Requirements:
- Make active filters visible and individually removable
- Define how text search and filters combine
- Preserve useful query/filter state while the user inspects a result and returns
- Distinguish no-results from loading and failed-search states
- Keep reset/clear behaviour explicit
- Support keyboard operation and accessible result-count updates
- Avoid redesigning the surrounding ticket product

Workflow:
- Define the interaction requirements and meaningful states
- Compare at least two filter-presentation approaches if uncertainty remains
- Select the lowest useful fidelity
- Evaluate discoverability, state clarity, recovery and accessibility
- Produce behavioural acceptance criteria

What to optimise for:
- fast narrowing
- visible state
- reversible filtering
- clear empty results
- preserved context
```

## Primary benchmark focus

state visibility; filter/search combination; empty/error states; accessibility; context preservation.
