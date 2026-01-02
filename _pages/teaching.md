---
title: "Teaching"
permalink: /teaching/
layout: single
---

{% for t in site.teaching reversed %}
- **{{ t.title }}** — {{ t.institution }} ({{ t.term }})
{% endfor %}
