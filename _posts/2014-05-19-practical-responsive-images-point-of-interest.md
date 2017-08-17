---
title: Practical Responsive Images &#8211; Crop to point of interest
date: 2014-05-19 18:43:02 Z
categories:
- Dynamic Media
- eCommerce
- HEADER
- Responsive Images
- Rich Media
layout: single
author_profile: true
type: pages
author: Ben
post_image:
- "/images/allbsuploads/2014/05/2014-05-19-18.30.59_framed.png"
---

Following on from yesterday&#8217;s <a title="Practical Responsive Images with Picturefill" /2014/05/17/practical-responsive-images-with-picturefill-1/" target="_blank">Practical Responsive Images</a> post, the next example use of the < picture > element (and using Picturefill), is to apply a point-of-interest crop to an image to maintain the desired focus at different breakpoints.

## Demo : <span style="color: #ff0000;"><a href="http://responsiveimag.es/picturefill2_cropApples.html"><span style="color: #ff0000;">http://responsiveimag.es/picturefill2_cropApples.html</span></a></span>

In this example, I’m apply different at-request-time crops depending at different min-width’s, with html scaling between those breakpoints.

<span style="color: #ff0000;"><strong>min-width: 850px  :  &#8230;?pcrop=700,0,2500,800</strong></span>

<span style="color: #ff0000;"><strong>min-width: 600px  :  &#8230;?pcrop=1300,0,1900,800</strong></span>

smaller than that, use a different, focused image request

(full code snippet below)

[Update: I&#8217;ve now launched a separate site focused on <a title="Practical Responsive Images" href="http://responsiveimag.es/" target="_blank">Practical Responsive Images: http://responsiveimag.es/</a> ]

Initial device testing is looking good, screen shots from Nexus 4 and Nexus7

<img title="2014-05-19 18.30.59_framed.png" src="/images/allbsuploads/2014/05/2014-05-19-18.30.59_framed.png" alt="2014 05 19 18 30 59 framed" width="500" height="333" border="0" />

<img class="alignnone size-full wp-image-1787" src="/images/allbsuploads/2014/05/2014-05-19-18.30.40_framed.png" alt="2014-05-19-18.30.40_framed.png" width="399" height="600" /><img class="alignnone size-full wp-image-1788" src="/images/allbsuploads/2014/05/2014-05-19-19.39.20_framed.png" alt="2014-05-19-19.39.20_framed.png" width="359" height="600" />

Even Kindle Paperwhite’s view of that page:

<img style="display: block; margin-left: auto; margin-right: auto;" title="2014-05-17 16.55.02.jpg" src="/images/allbsuploads/2014/05/2014-05-17-16.55.02.jpg" alt="2014 05 17 16 55 02" width="450" height="600" border="0" />

&nbsp;

`Following on from yesterday&#8217;s <a title="Practical Responsive Images with Picturefill" href="/2014/05/17/practical-responsive-images-with-picturefill-1/" target="_blank">Practical Responsive Images</a> post, the next example use of the < picture > element (and using Picturefill), is to apply a point-of-interest crop to an image to maintain the desired focus at different breakpoints.

## Demo : <span style="color: #ff0000;"><a href="http://responsiveimag.es/picturefill2_cropApples.html"><span style="color: #ff0000;">http://responsiveimag.es/picturefill2_cropApples.html</span></a></span>

In this example, I’m apply different at-request-time crops depending at different min-width’s, with html scaling between those breakpoints.

<span style="color: #ff0000;"><strong>min-width: 850px  :  &#8230;?pcrop=700,0,2500,800</strong></span>

<span style="color: #ff0000;"><strong>min-width: 600px  :  &#8230;?pcrop=1300,0,1900,800</strong></span>

smaller than that, use a different, focused image request

(full code snippet below)

[Update: I&#8217;ve now launched a separate site focused on <a title="Practical Responsive Images" href="http://responsiveimag.es/" target="_blank">Practical Responsive Images: http://responsiveimag.es/</a> ]

Initial device testing is looking good, screen shots from Nexus 4 and Nexus7

<img title="2014-05-19 18.30.59_framed.png" src="/images/allbsuploads/2014/05/2014-05-19-18.30.59_framed.png" alt="2014 05 19 18 30 59 framed" width="500" height="333" border="0" />

<img class="alignnone size-full wp-image-1787" src="/images/allbsuploads/2014/05/2014-05-19-18.30.40_framed.png" alt="2014-05-19-18.30.40_framed.png" width="399" height="600" /><img class="alignnone size-full wp-image-1788" src="/images/allbsuploads/2014/05/2014-05-19-19.39.20_framed.png" alt="2014-05-19-19.39.20_framed.png" width="359" height="600" />

Even Kindle Paperwhite’s view of that page:

<img style="display: block; margin-left: auto; margin-right: auto;" title="2014-05-17 16.55.02.jpg" src="/images/allbsuploads/2014/05/2014-05-17-16.55.02.jpg" alt="2014 05 17 16 55 02" width="450" height="600" border="0" />

&nbsp;

`

&nbsp;

Any questions or comments : <a title="bseymour on twitter" href="https://twitter.com/bseymour" target="_blank">@bseymour</a>
