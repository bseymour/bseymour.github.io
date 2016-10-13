---
layout: archive
author_profile: true
permalink: /blog_archive/
---

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].all_posts | default: "Blog posts archive" }}</h3>

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
