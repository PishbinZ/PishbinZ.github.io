---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
You can also find my articles on [my Google Scholar profile]({{ site.author.googlescholar }}).
{% endif %}

<style>
:root {
  --accent-color: #467E8F;
  --text-primary: #1f2933;
  --text-secondary: #5f6f7a;
}

[data-theme="dark"] {
  --text-primary: #e5e7eb;
  --text-secondary: #aab4bf;
}

.pub-list { margin-top: 1.2rem; }

.pub-item { margin: 1.4rem 0 1.7rem 0; }

.pub-title-row {
  display: flex;
  align-items: center;
  gap: .6rem;
  flex-wrap: wrap;
}

.pub-badge {
  background-color: var(--accent-color);
  color: #fff;
  font-weight: 700;
  font-size: .8rem;
  padding: .2rem .55rem;
  border-radius: .45rem;
}

.pub-title {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.25;
}

.pub-icon a {
  display: inline-flex;
  opacity: .85;
  text-decoration: none;
}

.pub-icon a:hover { opacity: 1; }

.pub-authors {
  margin-top: .25rem;
  font-size: .98rem;
  color: var(--text-primary);
}

.pub-venue {
  margin-top: .15rem;
  font-size: .95rem;
  color: var(--text-secondary);
}

.pub-authors a {
  text-decoration: none;
}

.pub-authors a:hover {
  text-decoration: underline;
}
</style>

## Conference papers

<div class="pub-list">

<div class="pub-item">
  <div class="pub-title-row">
    <span class="pub-badge">C2</span>
    <div class="pub-title">Fairness in the Multi-Secretary Problem</div>
    <div class="pub-icon">
      <a href="https://arxiv.org/pdf/2511.23097.pdf" aria-label="PDF">
        <i class="fas fa-file-pdf"></i>
      </a>
    </div>
  </div>

  <div class="pub-authors">
    <a href="https://duch.mimuw.edu.pl/~gpapasotiropoulos">Georgios Papasotiropoulos</a>, <strong>Zein Pishbin</strong>
  </div>

  <div class="pub-venue">
    In <a href="https://aaai.org/conference/aaai/aaai-26/">AAAI-26</a>:
    <em>Proc. of the 40th AAAI Conference on Artificial Intelligence, 2026.</em>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title-row">
    <span class="pub-badge">C1</span>
    <div class="pub-title">Method of Equal Shares with Bounded Overspending</div>
    <div class="pub-icon">
      <a href="https://dl.acm.org/doi/pdf/10.1145/3736252.3742637" aria-label="PDF">
        <i class="fas fa-file-pdf"></i>
      </a>
    </div>
  </div>

  <div class="pub-authors">
    <a href="https://duch.mimuw.edu.pl/~gpapasotiropoulos">Georgios Papasotiropoulos</a>,
    <strong>Seyedeh Zeinab Pishbin</strong>,
    <a href="https://mimuw.edu.pl/~oski">Oskar Skibski</a>,
    <a href="https://duch.mimuw.edu.pl/~ps219737">Piotr Skowron</a>,
    <a href="https://www.mimuw.edu.pl/~twas">Tomasz Wąs</a>
  </div>

  <div class="pub-venue">
    In <a href="https://ec25.sigecom.org">EC-25</a>:
    <em>Proc. of the 26th ACM Conference on Economics and Computation, 2025.</em>
  </div>
</div>

</div>
