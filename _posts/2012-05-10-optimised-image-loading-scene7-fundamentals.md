---
title: 'Optimised Image Loading &#8211; Scene7 fundamentals #1'
date: 2012-05-10 07:25:32 Z
permalink: "/2012/05/10/optimised-image-loading-scene7-fundamentals/"
categories:
- Dynamic Media
- quicktip
- Rich Media
- WebDev
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2012/05/3Limes.jpg"
---

I&#8217;ve been working with Adobe&#8217;s Scene7 customers for many years years now &#8211; and in case you&#8217;ve not heard of it is is probably \_the\_ leading Dynamic Image Serving platform (which goes well beyond just serving images).

If you have a site with either a healthy number of visits per month (>10k) or for whom a rich and interactive visual experience is key to customer engagement, then it may be well worth your while to give <a title="http://www.scene7.com/" href="http://www.scene7.com/" target="_blank">Scene7 </a>the once over.

Over the last 6 months I&#8217;ve spent time with some of our main retail clients to review their current implementation, and exploring the opportunities for getting even more value from the platform.

<img class="wp-image-547 alignright" title="Lemon_Lime_Slices" src="/images/allbsuploads/2012/05/Lemon_Lime_Slices-300x300.jpg" alt="" width="200" height="200" srcset="/images/allbsuploads/2012/05/Lemon_Lime_Slices-150x150.jpg 150w, /images/allbsuploads/2012/05/Lemon_Lime_Slices-300x300.jpg 300w, /images/allbsuploads/2012/05/Lemon_Lime_Slices.jpg 499w" sizes="(max-width: 200px) 100vw, 200px" />

One of the simplest and easiest ways Scene7 can help is through using Image Presets.  These are like a back-end shortcut to a bunch of setting relating to the ways that an image request is made, they follow the ? in the querystring and are wrapped in $ signs. For example:

&nbsp;

http://s7e2a.scene7.com/is/image/benco/Lemon\_Lime\_Slices?$thumbnail\_high\_qual$

This calls the image using the Image Preset $thumbnail\_high\_qual$ which in the Scene7 back end (called SPS) can be used to control image format, jpg compression setting, sharpening, and literally hundreds of other image commands.

A great use case is where an image-heavy page on a site is having loading performance problems &#8211; it&#8217;s possible to tweak those back office setting to say increase the compression level, apply sharpening to compensate visually, and ultimately come out with a set of image requests which have near as dammit the same visual quality but with significantly lower page weight.

This can be especially important for your mobile visitors, who may well be on low bandwidth connections (which hopefully you are already testing for and adapting to) then implementing different image presets settings can give you a viable way to improve page load performance if your analytics are suggesting that load performance may be leading to page abandonment.

As an example, if you open the following to pages and tab between them, and you will hopefully agree that visually there is very little difference between them, yet the image file weights for one of them is around 70% lower:

<a title="http://allbs.co.uk/richmedia/scene7/products_high.html" href="/richmedia/scene7/products_high.html" target="_blank">http://allbs.co.uk/richmedia/scene7/products_high.html</a>

<a title="http://allbs.co.uk/richmedia/scene7/products_med.html" href="/richmedia/scene7/products_med.html" target="_blank">http://allbs.co.uk/richmedia/scene7/products_med.html</a>

[<img class="wp-image-565 alignnone" title="Fruit Gallery" src="/images/allbsuploads/2012/05/FruitGallery.png" alt="" width="450" height="457" />](http://ox10.it/allbs/richmedia/scene7/products_high.html)

Any questions or comments, my work email address:: bseymour (at) adobe.com

(All views expressed are my own, and do not necessarily reflect those of my employer)
