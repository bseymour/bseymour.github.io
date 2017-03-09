---
layout: single
author_profile: true
title: Speaking
date: 2017-03-05T09:00:00+00:00
type: pages
permalink: /speaking/
sidebar:
    nav: "core_sidenav"
---
* * *

## Upcoming Talks
{% capture current_date %}{{ site.time | date: '%Y-%m-%d' }}{% endcapture %}

<!-- future and past dates of course only get calculated at build time, but there would be a post-event update with say the URL/video/deck anyway -->

{% assign speaking = site.data.speaking | sort: "date" | reverse %}
<div class="list-archive">
  {% for talk in speaking %}

    {% capture event_date %}{{ talk.date | date: '%Y-%m-%d' }}{% endcapture %}

    {% if event_date >= current_date %}
    <H3>{{ talk.title }}</h3>
    <p><a href="{{ talk.event-url }}"  target="_blank">{{ talk.event }}</a> : {{ talk.date | date: '%B %Y'  }} : {{ talk.city }}</p>
    {% endif %}

  {% endfor %}
</div>


<h2>Past Talks</h2>
{% assign speaking = site.data.speaking | sort: "date" | reverse %}
<div class="list-archive">
  
  {% for talk in speaking %}

    {% capture event_date %}{{ talk.date | date: '%Y-%m-%d' }}{% endcapture %}

    {% if event_date < current_date %}
      <h3>{{ talk.title }}</h3>
      <p><a href="{{ talk.event-url }}"  target="_blank">{{ talk.event }}</a> : {{ talk.date | date: '%B %Y'  }} : {{ talk.city }}</p>
    {% endif %}

    {% if talk.slideshareid %}
      <iframe style="border: 1px solid #CCC; border-width: 1px; margin-bottom: 5px; max-width: 100%;" src="//www.slideshare.net/slideshow/embed_code/{{talk.slideshareid}}" width="700" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen">
      </iframe>
    {% endif %}


    {% if talk.youtubeid %}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{talk.youtubeid}}" frameborder="0" allowfullscreen>
    </iframe>
    {% endif %}


    {% if talk.photo %}
    <img src="/images/{{talk.photo}}" alt="{{talk.photoalt}}" />
    {% endif %}


    <hr/>
  {% endfor %}
</div>
