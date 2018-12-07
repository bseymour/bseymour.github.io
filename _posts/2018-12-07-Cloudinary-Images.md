---
title: Cloudinary Images
date: 2018-12-07 09:09:00 Z
permalink: "/2018/12/07/Cloudinary-Images"
category: [feature]
categories:
- general
- feature
tags:
- general
layout: single
author_profile: false
type: pages
post_image: "/images/posts/first-aid.jpg"
sidebar:
  nav: blog_sidenav
Cl-image:
- imageref: Butterfly.orig.jpg
  alt: Butterfly, fluttering by. Powered by Cloudinary
---

Having recently joined the team at Cloudinary, it made sense to start leveraging ~~their~~ our amazing dynamic media APIs.

Here is a live example using srcset and Dynamic Media served by Cloudinary:
{% assign image = page.Cl-image[0] %}
{% include srcset-and-cloudinary.html %}

In my front matter (in _config.yml) I added some new site-wide defaults and configurations relating to Responsive Images (and Dynamic Image requests):

```yml
#srcset, sizes and dynamic media related
cloudinary_base: "//res.cloudinary.com/benseymourcom/image/upload/"
default_width: '1000'
sizes: '(min-width: 1020px) 60vw, 90vw'

srcset:
  - 600
  - 850
  - 1200
```

Then in my blogpost itself, I pass in some front matter details of the image to be used:

```html
Cl-image:
- imageref: Butterfly.orig.jpg
  alt: Butterfly, fluttering by. Powered by Cloudinary
---
```

and at the appropriate place in the post, call the array index of the image and then pass this into our relevant _includes file :

```md
{% assign image = page.Cl-image[0] %}
{% include srcset-and-cloudinary.html %}
```

The contents of the 'srcset-and-cloudinary' include file can be seen below, but it's main purpose is to set up the responsive images code, and to leverage relevant image commands, such as setting the width 'w_600' etc, and to also leverage the rather wonder q_auto and f_auto commands to automatically optimise the compression and iamge format, and now that every image variant will be generated instantly as needed.

Here is the full includes file.

```html
{% raw %}
<img
  src="{{ site.cloudinary_base }}/w_{{ site.default_width }},q_auto,f_auto/live/{{ image.imageref }}"
  sizes="{{ site.sizes }}"
  srcset="{% for width in site.srcset %}{{ site.cloudinary_base }}/w_{{ width }},q_auto,f_auto/live/{{ image.imageref }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
  alt="{{ image.alt }}">
{% endraw %}
```

Within my Cloudinary account I have setup a folder mapping to auto-upload any referenced file on this server to automatically ingest it into my account and to the immediately optimse both the compression and format of the image and to then serve back via Cloudinary's CDN.


Any questions - I'd love to hear from you on twitter [@bseymour](https://twitter.com/bseymour)