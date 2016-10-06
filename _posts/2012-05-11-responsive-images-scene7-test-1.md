---
layout: single
author_profile: true
type: pages

title: 'Responsive Images &#8211; Scene7 test #1'
date: 2012-05-11T10:49:04+00:00
permalink: /2012/05/11/responsive-images-scene7-test-1/
post_image:
  - /images/allbsuploads/2012/05/rosette_template.jpg
categories:
  - Dynamic Media
  - general
  - Responsive Images
  - RWD
  - WebDev
---
Here are details of my initial implementation of Responsive Images (a.k.a. Fluid Image) using the <noscript> and jQuery approach along with Adobe Scene7:

Following on from :: [Responsive Images &#8211; #intro](http://allbs.co.uk/2012/05/11/responsive-images-intro/ "Responsive Images – #intro")

**<span style="color: #ff0000;">[Note: As my Scene7 account is no longer active, live demo&#8217;s will no longer work]</span>**

The img element is wrapped in a <noscript> tag meaning that javascript enabled browsers ignore the img element. The img element has the src set to reference a small/light image, and this is the default that any non-javascript browsers will end up seeing.

<span style="color: #333399;"><noscript data-imageid=&#8217;Lemon&#8217;></span>

<span style="color: #333399;"><img src=&#8217;http://s7e2a.scene7.com/is/image/benco/Lemon?wid=250&#8242; alt=&#8221;  /></span>

<span style="color: #333399;"></noscript></span>

//data-imageid holds the value of the Image ID for the future Image Requests

Meanwhile for browsers with javascript, a little jQuery is uses .insertAfter to swap in a revised img element instead of the noscript element &#8211; this can be based on values passed in the code, or if you have a nice <a title="http://www.scene7.com/" href="http://www.scene7.com/" target="_blank">Image Server</a> at your disposal you can programmatically drive the image request by whatever device/screen measures you can retrieve:

<span style="color: #333399;">$(&#8216;noscript[data-imageid]&#8217;).each(function(){</span>

<span style="color: #333399;">var s7base=&#8221;http://s7e2a.scene7.com/is/image/benco/&#8221;;</span>

 <span style="color: #333399;">var imageid = $(this).attr(&#8220;data-imageid&#8221;);</span>

<span style="color: #333399;">$(&#8216;<img src=&#8221;&#8216; + s7base + imageid + &#8216;?wid=&#8217; + (((areawidth/45).toFixed(0))*10) + &#8216;&#8221; alt=&#8221;&#8216; + $(this).data(&#8216;alt&#8217;) + &#8216;&#8221; />&#8217;).insertAfter($(this));</span>

 <span style="color: #333399;">});</span>

// only for those noscript elements containing the data-imageid perform a substitution for that ID and my Scene7 base URL

// the width for the image request is determined by the current browser width (which is calculated elsewhere (((areawidth/45).toFixed(0))*10) ensure that all 4 images will always fit in the width

// this also only makes image requests in increments of 10px to provide a little better caching efficiency (Scene7 assets are served via the Akamai CDN)

You can see the live example here:

<a title="http://allbs.co.uk/richmedia/scene7/noscript_test.html" href="http://allbs.co.uk/richmedia/scene7/noscript_test.html" target="_blank">http://allbs.co.uk/richmedia/scene7/noscript_test.html</a>

(This test page has an auto reload on page resize bigger than 10px difference, but for now this is just for demonstration purposes )

Testing on my Android tablet and smartphone switching orientation triggers the reload and this is where I see greater future benefits.

[<img class="alignnone size-medium wp-image-602" title="ResponsiveImages1" src="http://ox10.it/allbs/wp-content/uploads/2012/05/ResponsiveImages1-141x300.png" alt="" width="141" height="300" />](http://ox10.it/allbs/richmedia/scene7/noscript_test.html)  [ <img class="alignnone size-medium wp-image-603" title="ResponsiveImages2" src="http://ox10.it/allbs/wp-content/uploads/2012/05/ResponsiveImages2-300x273.png" alt="" width="300" height="273" srcset="/images/allbsuploads/2012/05/ResponsiveImages2-300x273.png 300w, /images/allbsuploads/2012/05/ResponsiveImages2.png 979w" sizes="(max-width: 300px) 100vw, 300px" />](http://ox10.it/allbs/richmedia/scene7/noscript_test.html)

(There is now also a follow example: <a title="Responsive Images – Scene7 #2" href="http://allbs.co.uk/2012/05/14/responsive-images-scene7-test-2/" target="_blank">Responsive Images &#8211; test #2</a> )

I&#8217;d would really appreciate any thoughts and suggestions, questions or comments, my work email address:: bseymour (at) adobe.com (or @bseymour)

(All views expressed are my own, and do not necessarily reflect those of my employer)
