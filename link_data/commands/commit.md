---
description: Stages all changes and creates a commit
agent: build
subtask: true
---

Use Build agent!
Stage all changed files and create a commit using the specified commands and rules.
Don't need to clarify anything from user. Just go through steps.

### Limitation:
- You don't validate written code
- You just go through steps, no improvisation

**Steps to**
1. Add all changed and new files to staging.
2. Investigate what had been changed in files.
3. Create a commit hame with:
- **message** short and appropriate message based on the changes
```bash
git add . && git commit -m "<FILL_IN_ACCORDINGLY>"
```

4. On this step you must ask user to push changes on server or not. Two options:
- Push change to server (default)
- Don't push changes.
If user select to push changes you must execute CLI command:
```bash
git push
```