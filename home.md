---
title: "Ben Seymour"
custom_title: "Ben Seymour, Oxford U.K. - eCommerce & Dynamic Content Specialist, Responsive Images Advocate"
layout: splash
permalink: /index.html
date: 2016-13-13T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: jqueryuk-book.jpg
  caption: "Photo credit: Al Power"
excerpt: "• eCommerce & Optimisation<br/>
          • Dynamic Content Specialist<br/>
          • Responsive Images • Author <br/>
          • STEMNet Ambassador<br/>
          • Code Club"
intro:
  - excerpt: '** Currently working on: [unslump.me](http://unslump.me/) **<br/>Recently worked on: [Getting Kids into Coding](http://12devsofxmas.co.uk/2017/01/day-7-getting-kids-into-coding/), [Code.Parents()](https://codeparents.org)'
feature_row:
  - image_path: practical-responsive-images-book-and-speaking-th.jpg
    alt: "Practical Responsive Images eBook"
    title: "Practical Responsive Images"
    excerpt: "This pocket guide considers the cost and value of images, reviews image formats and historic practices, and explores some of the new features and tools available to us, such that we can be in a position to undertake a practical approach to responsive images."
    url: "http://responsiveimag.es/"
    btn_label: "Go To PRI Site"
    btn_class: "btn--inverse"
  - image_path: 12devs-home.png
    alt: "Getting Kids into Coding"
    title: "Getting Kids into Coding"
    excerpt: "For the 2017 '12 Devs of Xmas' I wrote about my experiences teaching Primary aged children, sharing insights into how to make coding interesting and relevant for all children."
    url: "http://12devsofxmas.co.uk/2017/01/day-7-getting-kids-into-coding/"
    btn_label: "To '12 Devs' site"
    btn_class: "btn--inverse"
  - image_path: NaBloPoMo-homepage.jpg
    title: "NaBloPoMo 2016"
    excerpt: "NaBloPoMo is National Blog Post Month, which has the challenge of writing a blog post each day for the whole of November. I’d not heard of it before 1st November, but it sounded like just the tonic for getting back into writing. I’m happy to say it has been everything I had hoped it would be, and probably more."
    url: "/nablopomo/"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row2:
  - image_path: net-mag-exchange-th.jpg
    alt: ".net magazine - exchange expert panel"
    title: "Dynamic Media and Dynamic Content Specialist"
    excerpt: 'A decade of helping shape product alignment, leading scores of  projects for global brands, leveraging industry-leading SaaS Dynamic Media and Dynamic Content solutions (inc. headless CMS) <br/>.net magazine industry expert, conference speaker (including Adobe Summit).'
    url: "/work"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: Movember-homepage.jpg
    alt: "Movember 2016"
    title: "Movember 2016"
    excerpt: "Throughout November I grew my first ever moustache, in support of The Movember Foundation which is s global charity focused on men’s health."
    url: "/movember/"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: SaveYourPast2-th.jpg
    alt: "Save Your Past Limited"
    title: "Save Your Past"
    excerpt: "Save Your Past Ltd. specialises in helping you make the most of your pre-digital precious memories. We carefully transform your videos, photos, slides/negatives into a form where they will degrade no more, and can undertake digital restoration work to sensitively turn back the hands of time and rejuvenate them."
    url: "http://www.saveyourpast.co.uk/"
    btn_label: "Go To SYP Site"
    btn_class: "btn--inverse"
  - image_path: codeparents1-th.jpg
    title: "code.parents()"
    excerpt: "Code Parents is for people with little or no prior computing experience, who would like to be better prepared to encourage and support children in starting to explore coding. Ben founded Code Parents, and is keen that it should develop into a community on contributors."
    url: "http://codeparents.org/"
    btn_label: "Go To CP Site"
    btn_class: "btn--inverse"
feature_row4:    
  - image_path: seymour-family-th.jpg
    alt: "Seymour Family"
    title: "Remembering Who I Work For"
    excerpt: "Ben is also the co-founder of two energetic creative entities aged 10  & 7. He also enjoys motorbikes, mountain bikes, Formula1 and the occasional track day (most recently Lotus Exige and Audi R8 at Silverstone).<br/><br/> There are various less-public repositories of our very happy memories, which we tend to share with closer friends and family - ping me for an invitation if you don't already have access."

---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

# Top 5 Blog Posts  ( . . . . [all posts ](/blog) )
<div class="post_object">
{% for post in site.posts %}
  {% if post.category contains "top5" %}
    {% include archive-short.html %}
  {% endif %}
{% endfor %}
</div>
<hr/>

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" %}

{% include feature_row id="feature_row4" type="left" %}
