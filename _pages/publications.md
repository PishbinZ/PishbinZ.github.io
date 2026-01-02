---
title: "Publications"
permalink: /publications/
layout: single
---

{% for pub in site.publications reversed %}
- **{{ pub.title }}**{% if pub.venue %}, {{ pub.venue }}{% endif %} ({{ pub.year }})
  {% if pub.paperurl %}- [Paper]({{ pub.paperurl }}){% endif %}
{% endfor %}
