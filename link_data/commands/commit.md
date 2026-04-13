---
description: Stages all changes and creates a commit
agent: build
subtask: true
---

Stage all changed files and create a commit using the specified commands and rules.

**Instruction**
1. Add all changed and new files to staging.
2. Investigate what had been changed in files

2. Create a commit with:
- **message** short and appropriate message based on the changes

**CLI command syntax**
```bash
git add . && git commit -m "<FILL_IN_ACCORDINGLY>"
```