---
layout: single
author_profile: false
type: pages
title: Responsive Images in Jekyll without a plugin
date: 2017-02-24T2:09:00+00:00
post_image: /images/600/Butterfly.jpg
permalink: /2017/03/02/Responsive-Images-in-Jekyll-without-a-plugin
category: [feature]
categories: [general]
tags: [general]
sidebar:
    nav: "blog_sidenav"
image:
  - src: Butterfly.jpg
    alt: 'Butterfly, fluttering by.'

DM-image:
  - id: Butterfly
    alt: 'Butterfly, fluttering by. Powered by Amplience'
    quality: 65

---
I'd previously explored [using 1Writer Templates](https://benseymour.com/2016/11/08/Jekyll-Responsive-Images-without-plugins-after) to make it easier to generate the more complex embed code for responsive image images, but here we'll be exploring what feels like a more robust and flexible solution - using _includes.

(Note: I'm hosted oh gh-pages, and so am limited in the available plugins)

In my front matter (in _config.yml) I added some new site-wide defaults and configurations relating to Responsive Images (and Dynamic Image requests):

```yml
#srcset, sizes and dynamic media related
image_url: /images
amp_base: //i1.adis.ws/i/bendemo
default_width: '1000'
sizes: '(min-width: 1020px) 60vw, 90vw'

srcset:
  - 600
  - 850
  - 1200
```

Create a new file in your _includes folder (mine was called srcset-sizes.html) which contains the logic and markup to loop through the array of srcset values and sizes values, and to generate the html markup to make a responsive images request:

```html
{% raw %}
<img
  src="{{image_url}}/{{ image.src }}"
  sizes="`{{ site.sizes }}"
  srcset="{% for width in site.srcset %}{{ site.image_url }}/{{ width }}/{{ image.src }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
  alt="{{ image.alt }}">
{% endraw %}
```

Then in my blogpost itself, I pass in some front matter details of the image to be used:

```html
image:
  - src: Butterfly.jpg
    alt: 'Butterfly, fluttering by.'
```

and at the appropriate place in the post, call the array index of the image and then pass this into our relevant _includes file :

```md
{% raw %}
Srcset:  
{% assign image = page.image[0] %}
{% include srcset-sizes.html %}
{% endraw %}
```

Here is a live example (image size superimposed on the source image):

{% assign image = page.image[0] %}
{% include srcset-sizes.html %}

** Learn more about Responsive Images from this ebook: [Practical Responsive Images](http://responsiveimag.es/) **

<hr/>
<h2>Responsive Images and Dynamic Media</h2>
In the previous example, we had undertaken the step of manually creating different image files for the different sizing variants of the file. If you are working with more than a handful of images, or if you would like the flexibility to make future updates to your site layout, and would prefer to avoid the hassle of having to generate any further relevant sizes of images, then you should consider using a Dynamic Images solution. I wrote a post on [Dynamic Images 101](https://benseymour.com/2016/11/10/Dynamic-Images-101) last year - but fundamentally, it is a service which stores your master asset, and generates any and all image variants on-demand, based on image commands in the image request.

In this case, I created an additional _includes file to cover the relevant requests for a Dynamic Media service (in this case from [Amplience](http://amplience.com/products/dynamic-media/) )   

The main difference being to include the relevant image commands, such as: ?w=1000&qlt=65

Here is the full includes file.

```html
{% raw %}
<img
  src="{{ site.amp_base }}/{{ image.id }}.jpg?w={{ site.default_width }}&qlt={{ quality }}"
  sizes="{{ site.sizes }}"
  srcset="{% for width in site.srcset %}{{ site.amp_base }}/{{ image.id }}.jpg?w={{ width }}&qlt={{ quality }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
  alt="{{ image.alt }}">
{% endraw %}
```

Here is a live example using srcset and Dynamic Media (via Amplience):
{% assign image = page.DM-image[0] %}
{% include srcset-and-dm.html %}


Any questions - I'd love to hear from you on twitter [@bseymour](https://twitter.com/bseymour)
