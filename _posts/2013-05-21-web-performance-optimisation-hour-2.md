---
layout: single
author_profile: true
type: pages

title: 'Web Performance Optimisation: hour 2'
date: 2013-05-21T19:51:26+00:00
permalink: /2013/05/21/web-performance-optimisation-hour-2/
post_image:
  - /images/allbsuploads/2013/05/Screen-Shot-2013-05-21-at-20.55.27.png
categories:
  - Mac
  - WebDev
---
After Saturday’s [rather fruitful hour](http://allbs.co.uk/2013/05/19/web-performance-optimisation-hour-1/ "Web Performance Optimisation: hour 1"), I set myself the follow up challenge to see **<span style="color: #ff8040;">how much more could I improve the Web Performance given a second hour</span>**.

Last time I took my PageSpeed from 79 –> 88/100

As I have hopefully finished updating my image assets (for now anyway) I increased the Expires headers for my images to access + 1 week in my .htaccess file:

\# Media

ExpiresByType image/gif &#8220;access plus 1 week&#8221;

ExpiresByType image/jpeg &#8220;access plus 1 week&#8221;

ExpiresByType image/png &#8220;access plus 1 week&#8221;

Which took my <span style="color: #ff6600;"><strong>PageSpeed score to 97/100</strong><strong> –</strong><strong>er </strong><strong>WOW!</strong></span>

I re-ran webpagetest ::

Fully loaded: 2.780s , requests 43, bytes in: 1076 KB

(as before, there is some variance when rerunning test, but typically between 2.8 – 3.1s), but I’m now looking at the summary graphic:

[<img style="display: inline; border: 0px;" title="AAADAX Screen Shot 2013-05-21 at 18.04.44" src="http://ox10.it/allbs/wp-content/uploads/2013/05/AAADAXScreenShot20130521at18.04.44_thumb.png" alt="AAADAX Screen Shot 2013-05-21 at 18.04.44" width="407" height="115" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/AAADAXScreenShot20130521at18.04.44.png)

&nbsp;

Oddly, WebPageTest is still not completely happy with my image compressions so I’ll perhaps need to investigate that at some point – however, clearly the biggest negative is that big black X , relating to **effective use of CDN.**

&nbsp;

During the day I routinely leverage Akamai and Level3, but for my side projects I generally make use of Amazon Cloudfront.

Referring back to my previous post on Cloudfront and Origin Pull:

<http://allbs.co.uk/2012/05/10/cloudfront-origin-pull/> the steps were:

> Create a new subdomain on the site i.e. images.mydomain

> Setup new S3 bucket (I like to name it same as the domain)

> Configure new Cloudfront distribution, CNAME&#8217;d for the specific site

> CNAME map the subdomain to the Cloudfront distribution

> Make all of the S3 contents ‘public’

I then URL remapped all of the img src’s to use images.mydomain , instead of the relative path they were using for local assets, and thanks to Cloudfront supporting origin pull &#8211; hey presto…

Running WebPageTest again, the results were a mixed bag. A nice green tick for now making effective use of the CDN, but also an indication that the Cache Expires headers for my images were now suboptimal. **Bugger**.

[<img style="display: inline; border: 0px;" title="Screen Shot 2013-05-19 at 19.28.54" src="http://ox10.it/allbs/wp-content/uploads/2013/05/ScreenShot20130519at19.28.54_thumb.png" alt="Screen Shot 2013-05-19 at 19.28.54" width="424" height="109" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/ScreenShot20130519at19.28.54.png)

>> To resolve, I needed to **set the Expires Header on my S3** contents.

This is possible via the browser based AWS S3 console, but I prefer to use the rather brilliant <a href="http://www.cloudberrylab.com/amazon-s3-explorer-pro-cloudfront-IAM.aspx" target="_blank">Cloudberry S3 Explorer Pro</a>. (unfortunately Windows only).

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border: 0px;" title="Cloudberry cache control" src="http://ox10.it/allbs/wp-content/uploads/2013/05/Cloudberrycachecontrol_thumb.png" alt="Cloudberry cache control" width="484" height="484" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/Cloudberrycachecontrol.png)

So having set Cache-control max-age=604800    (i.e. 1 week) I reran WebPageTest, to find that my &#8216;Cache Static Content grade was still an F. It appears that to get better scores on WebPageTest, you need to set max-age of around a month, so I used Cloudberry to update to:

Cache-control max-age=2592000

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border: 0px;" title="cache header Screen Shot 2013-05-21 at 20.17.44" src="http://ox10.it/allbs/wp-content/uploads/2013/05/cacheheaderScreenShot20130521at20.17.44_thumb.png" alt="cache header Screen Shot 2013-05-21 at 20.17.44" width="466" height="484" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/cacheheaderScreenShot20130521at20.17.44.png)

Of course, I’ll have to wait a week until my assets expire from the previous cache-control header, before I can verify the results. Another step I need to add to my planned code/build/deploy, will be to support some lite version controlled naming convention so I can avoid this problem of month long expiry headers.

&nbsp;

**After a slightly more involved second hour**:

The PageSpeed improvement was: **88/100 –> 98/100**

and my overall WebPageTest grades have moved from:

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border: 0px;" title="AAFDFX Screen Shot 2013-05-21 at 20.47.39" src="http://ox10.it/allbs/wp-content/uploads/2013/05/AAFDFXScreenShot20130521at20.47.39_thumb.png" alt="AAFDFX Screen Shot 2013-05-21 at 20.47.39" width="244" height="68" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/AAFDFXScreenShot20130521at20.47.39.png)

to

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-05-19 at 19.28.54" src="http://ox10.it/allbs/wp-content/uploads/2013/05/ScreenShot20130519at19.28.54_thumb1.png" alt="Screen Shot 2013-05-19 at 19.28.54" width="424" height="109" border="0" />](http://ox10.it/allbs/wp-content/uploads/2013/05/ScreenShot20130519at19.28.541.png)

&nbsp;

(and I’m hopeful that the grade F will have shown improvement once the cache headers have expired to allow my new max-age).

[<span style="color: #ff6600;">Update 2013-05-26</span>] Now that the 1 week expires header has expired, my revised cache-control setting are now live. Re-running WebPageTest is now giving me:

&nbsp;

<img class="aligncenter size-full wp-image-1373" src="http://ox10.it/allbs/wp-content/uploads/2013/05/AAADA-Screen-Shot-2013-05-26-at-19.24.40.png" alt="AAADA Screen Shot 2013-05-26 at 19.24.40" width="417" height="110" srcset="/images/allbsuploads/2013/05/AAADA-Screen-Shot-2013-05-26-at-19.24.40-300x79.png 300w, /images/allbsuploads/2013/05/AAADA-Screen-Shot-2013-05-26-at-19.24.40.png 417w" sizes="(max-width: 417px) 100vw, 417px" />

I also spent 10 minutes on a few other minor tweaks PageSpeed : <span style="color: #ff6600;"><strong>99/100</strong></span>

&#8211; optimise one image I had overlooked (reducing sieze by around 250 bytes)

&#8211; minify HTML (using Sublime Text pluging &#8216;HTML Compressor&#8217;)

&#8211; leverage browser caching (&#8220;access plus 1 week&#8221; on CSS and JS)

&#8211; specify image dimension

&nbsp;

Which leave that pesky Compress Images &#8216;D&#8217; to address. I plan to undertake some ad-hoc testing of some of the solutions mentioned in the following blog post:

<a title="Net Magazine - best image compression tools" href="http://www.netmagazine.com/features/best-image-compression-tools" target="_blank">www.netmagazine.com/features/best-image-compression-tools</a>

&nbsp;

Next steps: I still need to defer my javascript loading, and look at lazy loading the images for my carousel, and I’m rather looking forward to spending time improving my code/build/deploy workflow – probably starting with getting to know Sublime Text 2 a little better.
