---
layout: archive
author_profile: false
permalink: /blog/
sidebar:
    nav: "blog_sidenav"
---

{% include base_path %}

Go to : [All Posts Archive](/blog_archive)

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent blog posts" }}</h3>

{% for post in site.posts limit:6 %}
  {% unless post.category == "archive" %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

Go to : [All Posts Archive](/blog_archive) / [Posts by Year](/year-archive)
