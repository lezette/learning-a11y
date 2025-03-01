---
title: Journey to WAS
layout: base-layout
tags: page
modified: 2025-03-01 06:00:00
order: 2
---

<div class="my-10 text-xl/8">
{% if collections.was and collections.was.length > 0 %}
  <ul>
    {% for post in collections.was or [] %}
      {% include "blog-list.njk" %}
    {% endfor %}
  </ul>
{% else %}
  <p>No blog posts found.</p>
{% endif %}
</div>
