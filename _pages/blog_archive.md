---
permalink: "/blog_archive/"
layout: archive
author_profile: true
sidebar:
  nav: blog_sidenav
---

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].all_posts | default: "Blog posts archive" }}</h3>

{% for post in site.posts %}
  {% unless post.category == "archive" %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}
