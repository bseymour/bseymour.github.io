---
title: Ben Seymour
date: 1970-01-01 00:00:00 Z
permalink: "/index.html"
custom_title: Ben Seymour, Oxford U.K. - Dynamic Media & Content Specialist, Responsive Images, Author & Founder
layout: splash
permalink: /index.html
date: 2017-08-17T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: '0.5'
  overlay_image: jqueryuk-book.jpg
  caption: 'Photo credit: Al Power'
excerpt: "• Dynamic Media & Content Specialist<br/> • Responsive
  Images • Author <br/> • Founder: Storyus & Unslump <br/> • Co-Founder: Haktive & Save Your Past <br/> • STEMNet Ambassador<br/> • Code Club"
intro:
- excerpt: "** Currently working on : [Storyus](https://storyus.life/),  [Unslump](https://unslump.me/), and at [Vercel](https://vercel.com/)
    *[*](/codeclub)<br/>Recently worked on: [Getting Kids into Coding](https://benseymour.com/2017/01/01/Getting-Kids-Into-Coding)"
feature_row:
- image_path: Storyus-Reflecting.JPG
  title: Storyus®
  excerpt: Storyus® is the family-friendly collaborative storytelling platform, which puts you in control of how your story is told. No 'likes' ♥. No public follower counts. No Adverts. You 'own' your story and can decide what was important, and how best to share it.
  url: https://storyus.life
  btn_label: To Storyus
  btn_class: btn--inverse
- image_path: Paul-Johnson_The-One-Show.png
  title: The One Show
  excerpt: Paul Johnson (my Dad) had his '5 minutes of fame' when he appeared on The One Show in December 2017. With around 5 million viewer it was an amazing opportunity for people to learn about 'Paper Engineering' and for his 'pop-up books' to be showcased to a national audience.
  url: https://bookartoriginals.com
  btn_label: To Bookart Originals
  btn_class: btn--inverse
- image_path: practical-responsive-images-book-and-speaking-th.jpg
  alt: Practical Responsive Images eBook
  title: Practical Responsive Images
  excerpt: This pocket guide considers the cost and value of images, reviews image
    formats and historic practices, and explores some of the new features and tools
    available to us, such that we can be in a position to undertake a practical approach
    to responsive images.
  url: http://responsiveimag.es/
  btn_label: Go To PRI Site
  btn_class: btn--inverse
feature_row2:
- image_path: net-mag-exchange-th.jpg
  alt: ".net magazine - exchange expert panel"
  title: Dynamic Media and Dynamic Content Specialist
  excerpt: A decade of helping shape product alignment, leading scores of  projects
    for global brands, leveraging industry-leading SaaS Dynamic Media and Dynamic
    Content solutions (inc. headless CMS) <br/>.net magazine industry expert, conference
    speaker (including Adobe Summit).
  url: "/work"
  btn_label: Read More
  btn_class: btn--inverse
feature_row3:
- image_path: 12devs-home.png
  alt: Getting Kids into Coding
  title: Getting Kids into Coding
  excerpt: For the 2017 '12 Devs of Xmas' I wrote about my experiences teaching Primary
    aged children, sharing insights into how to make coding interesting and relevant
    for all children.
  url: https://benseymour.com/2017/01/01/Getting-Kids-Into-Coding
  btn_label: To '12 Devs' site
  btn_class: btn--inverse
- image_path: NaBloPoMo-homepage.jpg
  title: NaBloPoMo 2016
  excerpt: NaBloPoMo is National Blog Post Month, which has the challenge of writing
    a blog post each day for the whole of November. I’d not heard of it before 1st
    November, but it sounded like just the tonic for getting back into writing. I’m
    happy to say it has been everything I had hoped it would be, and probably more.
  url: "/nablopomo/"
  btn_label: Read More
  btn_class: btn--inverse
- image_path: SaveYourPast2-th.jpg
  alt: Save Your Past Limited
  title: Save Your Past
  excerpt: Save Your Past Ltd. specialises in helping you make the most of your pre-digital
    precious memories. We carefully transform your videos, photos, slides/negatives
    into a form where they will degrade no more, and can undertake digital restoration
    work to sensitively turn back the hands of time and rejuvenate them.
  url: http://www.saveyourpast.co.uk/
  btn_label: Go To SYP Site
  btn_class: btn--inverse
feature_row4:
- image_path: seymour-family-th.jpg
  alt: Seymour Family
  title: Remembering Who I Work For
  excerpt: Ben is also the co-founder of two energetic creative entities aged 12  &
    9. He also enjoys motorbikes, mountain bikes, Formula1 and the occasional track
    day (most recently Lotus Exige and Audi R8 at Silverstone).<br/><br/> There are
    various less-public repositories of our very happy memories, which we tend to
    share with closer friends and family - ping me for an invitation if you don't
    already have access.
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
