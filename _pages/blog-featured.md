---
layout: archive
author_profile: false
permalink: /blog-featured/
sidebar:
    nav: "blog_sidenav"
---

{% include base_path %}

Go to : [All Posts Archive](/blog_archive)

<h3 class="archive__subtitle">Featured Blog Posts</h3>

{% for post in site.posts %}
  {% if post.category == "feature" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

Go to : [All Posts Archive](/blog_archive) / [Posts by Year](/year-archive)
