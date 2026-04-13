---
description: Stages all changes and creates a commit
agent: build
subtask: true
---

Use Build agent!
Stage all changed files and create a commit using the specified commands and rules.
Don't need to clarify anything from user. Just go through steps.
IMPORTANT If you have errors with executing command, show them in list, what you had been unable to run


**Instruction**
1. Add all changed and new files to staging.
2. Investigate what had been changed in files.
3. Create a commit with:
- **message** short and appropriate message based on the changes

**CLI command syntax**
```bash
git add . && git commit -m "<FILL_IN_ACCORDINGLY>"
```

