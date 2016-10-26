---
layout: single
author_profile: true
type: pages

title: Responsive Images in a Responsive Layout
date: 2013-01-20T23:15:25+00:00
permalink: /2013/01/20/responsive-images-responsive-layout/
post_image:
  - /images/allbsuploads/2013/01/Screenshot_2013-01-20-22-44-20-Copy.jpg
categories:
  - Dynamic Media
  - HEADER
  - Responsive Images
  - Rich Media
  - RWD
---
I&#8217;ve been meaning to update my previous responsive images example to be in conjunction with a responsive grid layout (rather than mapping to the whole page width). It&#8217;s a relatively small change, but makes for a more real-world use case. I used the rather excellent <a title="Initializr" href="http://www.initializr.com" target="_blank">Initializr</a> to form the initial page template

[Screen shots from Nexus7, where changing orientation causes the grid layout to change considerably, and the container with the image to change by 50px. ]

<img class="size-medium wp-image-1096 alignnone" src="/images/allbsuploads/2013/01/Screenshot_2013-01-20-23-02-49-300x187.png" alt="Screenshot_2013-01-20-23-02-49" width="300" height="187" srcset="/images/allbsuploads/2013/01/Screenshot_2013-01-20-23-02-49-300x187.png 300w, /images/allbsuploads/2013/01/Screenshot_2013-01-20-23-02-49-1024x640.png 1024w, /images/allbsuploads/2013/01/Screenshot_2013-01-20-23-02-49.png 1280w" sizes="(max-width: 300px) 100vw, 300px" />   <img class="size-medium wp-image-1095 alignnone" src="/images/allbsuploads/2013/01/Screenshot_2013-01-20-23-02-33-187x300.png" alt="Screenshot_2013-01-20-23-02-33" width="187" height="300" />

[on my HTC Sensation there is a more considerable **<span style="text-decoration: underline;">250px variance</span>** when switching between lanscape and portrait orientation]

As discussed in [Responsive Images #Intro](http://allbs.co.uk/2012/05/11/responsive-images-intro/ "Responsive Images – #intro") and some follow on posts, I&#8217;m still finding pretty consistent success using the jQuery/<no script> approach:

The img element is wrapped in a <noscript> tag so that javascript enabled browsers ignore the img element. The img element has the src set to reference a small/light image, and this is the default that any non-javascript browsers will end up seeing (in this case I am using different assets too).

<noscript data-imageid=’BS1-Raspberry’>

<img src=&#8217;http://images.amplience.com/i/bendemo/BS1-Orange?w=250&fmt=jpg&#8217; alt=”  />

</noscript>

//data-imageid holds the value of the Image ID for the future Image Requests

Meanwhile for browsers with javascript, a little jQuery is uses .insertAfter to swap in a revised img element instead of the noscript element – this can be based on values passed in the code, or if you have a nice  <a title="Amplience" href="http://amplience.com/" target="_blank">Dynamic Media Platform</a> at your disposal you can programmatically drive the image request by whatever device/screen measures you can retrieve:

$(‘noscript[data-imageid]‘).each(function(){

var ampBase=&#8221;http://images.amplience.com/i/bendemo/&#8221;;

var imageid = $(this).attr(“data-imageid”);

$(&#8216;<img src=&#8221;&#8216; + ampBase + imageid + &#8216;?w=&#8217; + (((articlewidth/44).toFixed(0))*10) + &#8216;&fmt=jpg&qlt=80&#8243; alt=&#8221;&#8216; + $(this).data(&#8216;alt&#8217;) + &#8216;&#8221; />&#8217;).insertAfter($(this));

});

// only for those noscript elements containing the data-imageid perform a substitution for that ID and my Amplience base URL

// the width for the image request is determined by the logic applied against the current container width : $(&#8220;article&#8221;).width(); (which is calculated elsewhere (((articlewidth/44).toFixed(0))*10) ensure that all 4 images will always fit in the container.

// this also only makes image requests in increments of 10px to provide a little better caching efficiency (Amplience Dynamic Media assets are served via the Level3 CDN)

You can see the live example here:

<a title="Responsive Images and layout" href="/richmedia/amplience/ADM/" target="_blank">http://allbs.co.uk/richmedia/amplience/ADM/</a>

(This test page has an auto reload on page resize bigger than 10px difference, which would be incredibly inefficient for live use, but is useful as for now this is just for demonstration purposes )

Testing on my Android tablet and smartphone switching orientation triggers the reload and this is where I see greater future benefits.

&nbsp;

I’d would really appreciate any thoughts and suggestions, questions or comments, my work email address:: bseymour (at) amplience.com (or @bseymour)

(All views expressed are my own, and do not necessarily reflect those of my employer)
