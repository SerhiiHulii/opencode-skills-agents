---
description: Stages all changes and creates a commit
agent: build
subtask: true
---

Use Build agent!
Stage all changed files and create a commit using the specified commands and rules.
Don't need to clarify anything from user!!!. Just go through steps.
I repeat. DON'T need to clarify from user. Just do what is described in this file.
User will be not able to respond, and your clarification will not bring value and will break expected functionality.

### Limitation:
- You don't validate written code
- You just go through steps, no improvisation
- You don't clarify user response. 

**Steps to**
1. Add all changed and new files to staging.
2. Investigate what had been changed in files.
3. Create a commit hame with:
- **message** short and appropriate message based on the changes
```bash
git add . && git commit -m "<FILL_IN_ACCORDINGLY>"
```