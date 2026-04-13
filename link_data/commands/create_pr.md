---
description: Creates a PR of the current branch
agent: build
subtask: true
---

Create a PR to my main branch using the specified commands and rules.

**Instruction**
1. Inspect with a git diff everything that has changes on this branch in comparison with the main branch.
2. Create a PR with the following params:
- **head** the current branch name. `git branch --show-current`
- **title** short and appropriate title based on the changes of the PR
- **body** changes in short bullet points listed. Nothing else

**CLI command syntax**
```bash
gh pr create \
  --base master
  --head <FILL_IN_ACCORDINGLY>
  --title <FILL_IN_ACCORDINGLY>
  --body <FILL_IN_ACCORDINGLY>
```