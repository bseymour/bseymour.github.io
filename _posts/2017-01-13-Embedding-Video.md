---
title: Embedding Videos into Jekyll without a plugin
date: 2017-01-13 02:09:00 Z
permalink: "/2017/01/13/Video-Embed"
categories:
- general
- feature
tags:
- general
layout: single
author_profile: false
type: pages
post_image: "/images/posts/video-embed-th.png"
sidebar:
  nav: blog_sidenav
---

I'd previously explored 2 options for embedding videos in Jekyll posts (I'm hosted oh gh-pages, and so am limited in the available plugins):

1) Placing an image in the page, which links to another site (such as Vimeo or YouTube) to play the video, as [discussed in an earlier post](https://benseymour.com/2016/11/13/Jekyll-Embedded-Video---timelapses).

2) Use the full embed code, as you can copy from Vimeo or YouTube, such as:

{% highlight html wrap %}
<iframe src="https://player.vimeo.com/video/193567768?title=0&byline=0&portrait=0"   
width="640" height="360" frameborder="0" ></iframe>
{% endhighlight %}


While these work, I didn't like that for #1 visitors are taken away from the site, and away from the context of the video, and #2 is a little cumbersome for my [mobile phone based editing workflows](https://benseymour.com/2016/11/07/Mobile-Git-with-Git2Go---Jekyll-workflow).

In this post I am experimenting with a 3rd way - which involves creating a simple .html file in \_includes directory, which contains the full embed code, and into which we can pass the YouTube ID, then you can embed the video in the following way:

``` md
{ % include youtubePlayer.html id="IvUU8joBb1Q" %}
```


{% include youtubePlayer.html id="IvUU8joBb1Q" %}


* Note: I initially read of this method [from this blog post](https://adam.garrett-harris.com/how-to-easily-embed-youtube-videos-in-jekyll-sites-without-a-plugin).
