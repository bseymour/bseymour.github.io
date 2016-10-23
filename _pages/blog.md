---
layout: archive
author_profile: true
permalink: /blog/
sidebar:
    nav: "core_sidenav"
---

{% include base_path %}

Go to : [All Posts Archive](/blog_archive)

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent blog posts" }}</h3>

{% for post in site.posts limit:6 %}
  {% include archive-single.html %}
{% endfor %}

Go to : [All Posts Archive](/blog_archive)

{% for tag in tags %}
	<a href="#{{ tag | slugify }}"> {{ tag }} </a>
{% endfor %}
