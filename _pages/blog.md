---
layout: archive
author_profile: true
permalink: /blog/
---

{% include base_path %}

[All Posts Archive](/blog_archive)

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent blog posts" }}</h3>

{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

[All Posts Archive](/blog_archive)
