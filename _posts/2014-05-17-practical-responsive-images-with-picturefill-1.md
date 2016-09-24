---
id: 1750
title: 'Practical Responsive Images with PictureFill (#1)'
date: 2014-05-17T13:08:48+00:00
author: Ben
layout: default
guid: http://ox10.it/allbs/?p=1750
permalink: /2014/05/17/practical-responsive-images-with-picturefill-1/
categories:
  - Dynamic Media
  - Responsive Images
  - Rich Media
  - RWD
---
Thanks to the work of the Responsive Images Community Group and key supporters, the industry is gaining considerable momentum towards implementing the **<picture>** element and the **srcset** attribute.

Both of these could finally offer a standard solution to the gnarly problem of providing a mature and consistent approach to implementing images effectively, especially within Responsive Websites, and potentially also bringing some Web Performance benefits.

Ahead of full take-up, and considering future-legacy-browers, there is an updated version of Scott Jehl&#8217;s **PictureFill**: <a title="GitHub PictureFIll" href="https://github.com/scottjehl/picturefill" target="_blank">https://github.com/scottjehl/picturefill</a>.

**As such, you can seriously considering implementing a better images approach \*today\*.**

First steps to try:
  
&#8211; grab a copy of picturefill.js
  
&#8211; Use the <picture> element:

<code class="prettyprint lang-html">&lt;br />
&lt;picture&gt;&lt;br />
&lt;!--[if IE 9]&gt;&lt;video style="display: none;"&gt;&lt;![endif]--&gt;&lt;br />
&lt;source srcset="/image1_big.jpg" media="(min-width: 1000px)"&gt;&lt;br />
&lt;source srcset="/image1_medium.jpg" media="(min-width: 800px)"&gt;&lt;br />
&lt;source srcset="/image_small.jpg"&gt;&lt;br />
&lt;!--[if IE 9]&gt;&lt;/video&gt;&lt;![endif]--&gt;&lt;br />
&lt;img srcset="/image_fallback.jpg alt="context"&gt;&lt;br />
&lt;/picture&gt;&lt;br />
</code>

### [Update: I&#8217;ve launched a separate site focused on <a title="Practical Responsive Images" href="http://responsiveimag.es/" target="_blank">Practical Responsive Images: http://responsiveimag.es/</a> ]

### 

### <span style="color: #ff0000;"><strong>Demo: </strong></span>**<a title="Responsive Images PictureFill Demo" href="http://responsiveimag.es/picturefill1_apples.html" target="_blank">http://responsiveimag.es/picturefill1_apples.html</a>**

In my Demo, I change image payload/response size at 800px and 1000px, and change the visual (different asset requested) below 800, with a separate alternative image requested for non-javascript.

I am using a server-side Dynamic Imaging system to make the image manipulations on the fly (using query string parameters to specify the width, quality, and sharpening to be applied at-request time):

<code class="prettyprint lang-html">&lt;br />
&lt;picture&gt;&lt;br />
&lt;!--[if IE 9]&gt;&lt;video style="display: none;"&gt;&lt;![endif]--&gt;&lt;br />
&lt;source srcset="http://images.amplience.com/i/benco/Apple_Row2.jpg?w=1400&qlt=80&unsharp=0,1,1,7" media="(min-width: 1000px)"&gt;&lt;br />
&lt;source srcset="http://images.amplience.com/i/benco/Apple_Row2.jpg?w=800&qlt=80&unsharp=0,1,1,7" media="(min-width: 800px)"&gt;&lt;br />
&lt;source srcset="http://images.amplience.com/i/benco/Red_And_Green_Apples2.jpg?w=600&qlt=80&unsharp=0,1,1,7"&gt;&lt;br />
&lt;!--[if IE 9]&gt;&lt;/video&gt;&lt;![endif]--&gt;&lt;br />
&lt;img srcset="http://images.amplience.com/i/benco/Apple2.jpg?w=400&qlt=80" alt="How do you like them Apples?"&gt;&lt;br />
&lt;/picture&gt;&lt;br />
</code>

<img class="aligncenter wp-image-1762" src="http://ox10.it/allbs/wp-content/uploads/2014/05/Apple_Row2.jpg" alt="Apple_Row2" width="500" height="149" srcset="/images/allbsuploads/2014/05/Apple_Row2-300x89.jpg 300w, /images/allbsuploads/2014/05/Apple_Row2-1024x304.jpg 1024w, /images/allbsuploads/2014/05/Apple_Row2-900x267.jpg 900w, /images/allbsuploads/2014/05/Apple_Row2.jpg 3253w" sizes="(max-width: 500px) 100vw, 500px" />

&#8230;?w=1400

<img class="aligncenter wp-image-1762 size-medium" src="http://ox10.it/allbs/wp-content/uploads/2014/05/Apple_Row2-300x89.jpg" alt="Apple_Row2" width="300" height="89" srcset="/images/allbsuploads/2014/05/Apple_Row2-300x89.jpg 300w, /images/allbsuploads/2014/05/Apple_Row2-1024x304.jpg 1024w, /images/allbsuploads/2014/05/Apple_Row2-900x267.jpg 900w" sizes="(max-width: 300px) 100vw, 300px" />

&#8230;?w=800&#8230;

The second part of this overall problem, is in the workflows and solutions for actually sourcing and serving all of those image variants. There are two fundamental approaches:
  
1) generating batch statics
  
2) server-side solutions.

* more to come on these topics shortly.

I hasten to add, where feasible and appropriate, you should look outside of raster images for your site&#8217;s needs; So SVG, icon fonts, base64 encoding, but for many sites and many use cases, raster images are still the only way to go.

*image powered by Amplience dynamic Imaging