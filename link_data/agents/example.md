---
description: Important! Do not treat this as a agent. It is only a framework intended for developing future agents.
mode: subagent # mode используется для определения того, как можно использовать агент. primary | subagent | all 
disable: true # true - чтобы отключить агент
hidden: true # Скройте субагент из меню вызова с @. Полезно для субагентов, которые должны вызывать программно другие агенты. 
#model: anthropic/claude-sonnet-4-20250514 # Переопределить модель этого агента
temperature: 0.1 # Контролируйте случайность и креативность ответов LLM. От 0.0 до 1.0 Более низкие значения делают ответы более целенаправленными, а более высокие значения повышают креативность и вариативность.
steps: 5 # Позволяет, контролировать расходы, устанавливать лимит на агентские действия.
permission: # "allow" — запуск без одобрения, "ask" — запрос на одобрение, "deny" — заблокировать действие
  edit: deny
  bash:
    "*": deny
    "git diff": deny
    "git log*": deny
    "grep *": deny
    "ls": deny
  task:   # Управляйте тем, какие субагенты может вызывать с помощью инструмента задач https://opencode.ai/docs/agents/#%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87
    orchestrator: "allow",
---
Important! Do not treat this as a agent. It is only a framework intended for developing future agents.