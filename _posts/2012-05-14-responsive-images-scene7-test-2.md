---
layout: single
author_profile: true
type: pages

title: 'Responsive Images &#8211; test #2'
date: 2012-05-14T09:22:07+00:00
permalink: /2012/05/14/responsive-images-scene7-test-2/
post_image:
  - /images/allbsuploads/2012/05/Raspberry.jpg
categories:
  - Dynamic Media
  - general
  - Responsive Images
  - Rich Media
  - RWD
---
Here are details of my second test implementation of Responsive Images (a.k.a. Fluid Image) using the <noscript> and jQuery approach along with Adobe Scene7:

Following on from :: <a title="Responsive Images – Scene7 test #1" href="http://allbs.co.uk/2012/05/11/responsive-images-scene7-test-1/" target="_blank">Responsive Images Test #1</a>

(and [Responsive Images &#8211; #intro](http://allbs.co.uk/2012/05/11/responsive-images-intro/ "Responsive Images – #intro") )

**<span style="color: #ff0000;">[Note: As my Scene7 account is no longer active, live demo&#8217;s will no longer work]</span>**

This is a variation on test #1. In this example the noscript element contains attributes with values for the Image ID at normal sizes &#8216;data-imageid&#8217; , and alternate Image IDs for small &#8216;data-small-imageid&#8217; and large sizes &#8216;data-large-imageid&#8217;.<span style="color: #333399;"><br /> </span>

<span style="color: #333399;"><noscript data-imageid=&#8217;Lemon&#8217; data-small-imageid=&#8217;Orange&#8217; data-large-imageid=&#8217;Raspberry&#8217;><img src=&#8217;http://s7e2a.scene7.com/is/image/benco/Orange?wid=250&#8242; alt=&#8221;  /></noscript><br /> </span>

A couple of javascript variables are set to determine the widths at which those different alternates are shown. These values could also be passed in via attributes in the noscript element, which would again make this a more viable real-world solution.

Live example: <a title="http://allbs.co.uk/richmedia/scene7/noscript_test2.html" href="http://allbs.co.uk/richmedia/scene7/noscript_test2.html" target="_blank">http://allbs.co.uk/richmedia/scene7/noscript_test2.html</a>

Testing on my Android tablet and smartphone, switching orientation triggers different content to be loaded, and this is where I see greater future benefits &#8211; perhaps not in changing the product content so radically, but there could certainly be benefits in having such design control also over images in a responsive design layout.

&nbsp;

[<img class="alignnone  wp-image-632" title="ResponsiveImagesv2_1" src="http://ox10.it/allbs/wp-content/uploads/2012/05/ResponsiveImagesv2_1-210x300.png" alt="" width="190" height="271" />](http://ox10.it/allbs/richmedia/scene7/noscript_test2.html) [<img class="alignnone  wp-image-633" title="ResponsiveImagesv2_2" src="http://ox10.it/allbs/wp-content/uploads/2012/05/ResponsiveImagesv2_2-255x300.png" alt="" width="266" height="310" />](http://ox10.it/allbs/richmedia/scene7/noscript_test2.html)

[<img class="alignnone  wp-image-634" title="ResponsiveImagesv2_3" src="http://ox10.it/allbs/wp-content/uploads/2012/05/ResponsiveImagesv2_3.png" alt="" width="481" height="496" />](http://ox10.it/allbs/richmedia/scene7/noscript_test2.html)

(Note: for this test I have only so far tested the values are suitable for my Android smartphone and Android tablet &#8211; it is quite likely that there will be many devices for which this demo is not yet optimised &#8211; hopefully at some point my &#8216;device testing lab&#8217; will have more toys in it 😉 )

I&#8217;d would really appreciate any thoughts and suggestions, questions or comments, my work email address:: bseymour (at) adobe.com (or @bseymour)

(All views expressed are my own, and do not necessarily reflect those of my employer)
