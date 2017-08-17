---
title: 'Responsive Images &#8211; #intro'
date: 2012-05-11 10:21:58 Z
permalink: "/2012/05/11/responsive-images-intro/"
categories:
- Dynamic Media
- Responsive Images
- Rich Media
- RWD
- WebDev
- Workflow
layout: single
author_profile: true
type: pages
post_image:
- "/images/allbsuploads/2012/05/ResponsiveImages3.png"
---

Since I first saw Simon Collison&#8217;s beautiful and responsive site ( <a title="http://colly.com/" href="http://colly.com/" target="_blank">http://colly.com/</a>) I&#8217;ve been enamoured by the prospect of Responsive Web Design.

Some other great examples of RWD in action here: <a title="http://designmodo.com/responsive-design-examples/" href="http://designmodo.com/responsive-design-examples/" target="_blank">http://designmodo.com/responsive-design-examples/</a>

A limitation in most Responsive Web Design implementations is due to it&#8217;s lack of control over the image elements of a[<img class="alignright  wp-image-584" title="ResponsiveImagesA" src="/images/allbsuploads/2012/05/ResponsiveImagesA-300x219.png" alt="" width="248" height="181" srcset="/images/allbsuploads/2012/05/ResponsiveImagesA-300x219.png 300w, /images/allbsuploads/2012/05/ResponsiveImagesA.png 972w" sizes="(max-width: 248px) 100vw, 248px" />](http://colly.com) site &#8211; though this is a limitation of CSS in it&#8217;s current form, rather than Responsive Design per se. CSS can control the background image elements for a layout, but not the foreground images.

For the majority of my retail clients the foreground images and other rich media elements are very much a pivotal aspect in their user&#8217;s experience &#8211; both in visual engagement, and in page load performance. It is their virtual shop front, and must allow for both an inspiring window display, and the ability to easily hold items up for closer inspection, without tripping over superfluous articles and displays standing in their way.

There were some interesting articles (for example by <a title="http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/" href="http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/" target="_blank">Filament Group</a>) late 2010 -> mid-2011 around the use of cookies and .htaccess to facilitate responsive images, but in my recent attempts to recreate those solutions (or use those older demos) I could not get them to reliably work across the majority of browsers, perhaps due do the browser updates in that time period.

When it comes to &#8216;responsive images&#8217; (a.k.a. Fluid Images) I really like Jeremy Keith&#8217;s concise <a title="http://adactio.com/journal/4997/" href="http://adactio.com/journal/4997/" target="_blank">perspective</a>:

  1. The small image should be default.
  2. Don’t load images twice (in other words, don’t load the small images _and_ the larger images).

It was also that <a title="http://adactio.com/journal/4997/" href="http://adactio.com/journal/4997/" target="_blank">post on Adactio</a>  that led me to the examples at <a title="http://www.monoliitti.com/images/" href="http://www.monoliitti.com/images/" target="_blank">http://www.monoliitti.com/images/</a> which I found most real-world usable, and last week I finally started to have some success with one technique using the <noscript and jQuery.

I plan to further explore the natural combination of Responsive Images and a capable Image Serving platform (such as Scene7) in some experiments that I am planning on running:

[http://allbs.co.uk/2012/05/11/responsive-images-scene7-test-1/](http://allbs.co.uk/2012/05/11/responsive-images-scene7-test-1/ "Responsive Images – Scene7 test #1")

&nbsp;

&nbsp;

<noscript>
  For example::</p>

  <p>
    , and for those browsers with javascript enabled or supported it automatically displays the following  <img src &#8211; so it makes sense
  </p>

  <p>
    I initially read about this technique here:
  </p>

  <p>
    <a title="http://processwire.com/talk/topic/344-responsive-web-design-responsive-images/" href="http://processwire.com/talk/topic/344-responsive-web-design-responsive-images/" target="_blank">http://processwire.com/talk/topic/344-responsive-web-design-responsive-images/</a>
  </p>

  <p>
    and saw demonstrated here:
  </p>

  <p>
    <a title="http://www.monoliitti.com/images/" href="http://www.monoliitti.com/images/" target="_blank">http://www.monoliitti.com/images/</a>
  </p>

  <p>
    I was able to replicate the demonstrations here:
  </p>

  <p>
    (despite the domain name, this is a domain and server entirely controlled and maintained by me personally, and is not an official demo site of Adobe)
  </p>

  <p>
    &nbsp;
  </p>

  <p>
    &nbsp;
  </p>

  <p>
    </noscript>
  </p>
