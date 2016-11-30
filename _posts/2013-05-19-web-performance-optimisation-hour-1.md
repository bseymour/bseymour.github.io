---
layout: single
author_profile: false
type: pages

title: 'Web Performance Optimisation: hour 1'
date: 2013-05-19T20:33:08+00:00
permalink: /2013/05/19/web-performance-optimisation-hour-1/
post_image:
  - /images/allbsuploads/2013/05/ScreenShot20130519at21.20.372.8secs_thumb.png

categories: [WebDev, WebPerf]
category: feature
tags: [webperf, injustanhour]
sidebar:
    nav: "blog_sidenav"
---
On Saturday morning, I gave myself a challenge. **<span style="color: #ff6600;">How much could I improve the performance of one of my websites in 1 hour?</span>**

I saw Andy Davies (<a title="https://twitter.com/andydavies" href="https://twitter.com/andydavies" target="_blank">@andydavies</a>) give an <a href="http://www.slideshare.net/AndyDavies/speed-is-essential-for-a-great-web-experience" target="_blank">amazing talk</a> on Web Site Performance at <a href="http://port80events.co.uk/2012-talk-andy-davies/" target="_blank">Port80</a> last year, and then took advantage of the half day workshop Andy ran the day before the 2013 Port80 conference.

&nbsp;

My two main sources of data for the analysis of the sites performance were [http://www.webpagetest.org/](http://www.webpagetest.org/ "http://www.webpagetest.org/") and <a href="https://developers.google.com/speed/docs/insights/using_chrome" target="_blank">PageSpeed Insights for Google Chrome</a> – the later being a Chrome Extension that complements the already amazing Chrome Developer Tools.

At the start of my hour, I ran  both:

**<span style="color: #000080;">WebPageTest: Fully loaded: 6.8s , request 42, bytes in: 3427 KB</span>**

**<span style="color: #000080;">PageSpeed score 79/100.</span>**

&nbsp;

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border-width: 0px;" title="Screen Shot 2013-05-19 at 20.33.27" src="/images/allbsuploads/2013/05/ScreenShot20130519at20.33.27_thumb.png" alt="Screen Shot 2013-05-19 at 20.33.27" width="434" height="484" border="0" />](/images/allbsuploads/2013/05/ScreenShot20130519at20.33.27.png)

PageSpeed’s initial suggestions being that I should address these items first:  Optimize images, Leverage browser caching, Serve scaled images.

Clearly those long blue bars were an area ripe for improvement.

There are a stack of **image optimisation** tools around, and at some point I need to do a much deeper dive.  But within my tight timeframes, I opted to try out  <a href="http://www.jpegmini.com/" target="_blank">JPEGmini</a> and <a href="http://imageoptim.com/" target="_blank">ImageOptim</a>

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border-width: 0px;" title="Screen Shot 2013-05-19 at 20.42.37" src="/images/allbsuploads/2013/05/ScreenShot20130519at20.42.37_thumb.png" alt="Screen Shot 2013-05-19 at 20.42.37" width="404" height="205" border="0" />](/images/allbsuploads/2013/05/ScreenShot20130519at20.42.37.png)

The main page of the site in question (a luxury cottage available for rent) has a heavy emphasis on the rich visuals of this stunning property, using a jQuery based image slider to rotate through 10 beautiful images.

JPEGmini (for JPGs) knocked around 3MB of the sites slider based image assets (not all of which are on the main page).

[<img style="display: inline; border-width: 0px;" title="Screen Shot 2013-05-18 at 10.42.32" src="/images/allbsuploads/2013/05/ScreenShot20130518at10.42.32_thumb.png" alt="Screen Shot 2013-05-18 at 10.42.32" width="106" height="244" border="0" />](/images/allbsuploads/2013/05/ScreenShot20130518at10.42.32.png) [<img class="aligncenter" style="display: inline; border-width: 0px;" title="Screen Shot 2013-05-18 at 13.13.50" src="/images/allbsuploads/2013/05/ScreenShot20130518at13.13.50_thumb.png" alt="Screen Shot 2013-05-18 at 13.13.50" width="300" height="242" border="0" />](/images/allbsuploads/2013/05/ScreenShot20130518at13.13.50.png)

Rerunning webpagetest, I now get:

Fully loaded: 4.4s , requesst 42, bytes in: 1555 KB

I then ran JPEGmini, and ImageOptim (for the site’s PNGs) against the rest of the image assets across the site.

Next was the odd image I was resizing within the HTML (for no good reason), so I fixed them in Photoshop – this removed one of the PageSpeed medium level priorities.

&nbsp;

Next target was to “**leverage browser caching**”. Which I approached through updates to my .htaccess files.

Top Mac Tip: I use <a href="https://www.macupdate.com/app/mac/38299/desktoputility" target="_blank">DeskUtility</a> to make invisible files such as .htaccess visible. If it wasn’t for discovering this tool in recent weeks, I suspect this would have wasted a moderate amount of my performance hour.

&nbsp;

** Another top tip from Andy Davies: look at the .htaccess from HTML5 Boilerplate.  <https://github.com/h5bp/html5-boilerplate>

As I have further changes I plan to make to the site, I eased into my browser caching/expires header with a default of &#8220;access plus 1 hour&#8221; and then overrode the assets types that I knew I would be tweaking in the near future, so wanted to leave well alone.

My changes were as follows (BUT PLEASE DO YOUR OWN RESEARCH BEFORE CHANGING ANY OF YOUR SETTINGS – you can make a real mess of your site)

> \# &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;

> \# | Expires headers (for better cache control)                                 |

> \# &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;
>
> ExpiresActive on

> ExpiresDefault                                 &#8220;access plus 1 hour&#8221;
>
> \# HTML

> ExpiresByType text/html              &#8220;access plus 0 seconds&#8221;

> \# Media

> ExpiresByType image/gif             &#8220;access plus 0 seconds&#8221;

> ExpiresByType image/jpeg         &#8220;access plus 0 seconds&#8221;

> ExpiresByType image/png          &#8220;access plus 0 seconds&#8221;

&nbsp;

PageSpeed was now up to 88/100

I had a low warning:: specify a character set in the HTTP header. so I also added the following to my .htaccess:

> &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;

> \# | UTF-8 encoding                                                             |

> \# &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;
>
> \# Use UTF-8 encoding for anything served as \`text/html\` or \`text/plain\`.

> AddDefaultCharset utf-8

&nbsp;

PageSpeed also had an action for me to :: **enable compression**

So I again borrowed from HTML5 boilerplate:

> \# &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;

> \# | GZIP compression                                                            |

> \# &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;
>
> AddOutputFilterByType DEFLATE application/atom+xml \

> application/javascript \

> application/json \

> application/rss+xml \

> application/vnd.ms-fontobject \

> application/x-font-ttf \

> application/x-web-app-manifest+json \

> application/xhtml+xml \

> application/xml \

> font/opentype \

> image/svg+xml \

> image/x-icon \

> text/css \

> text/html \

> text/plain \

> text/x-component \

> text/xml

Reran webpagetest:

Fully loaded: 3.121s , request 43, bytes in: 1077 KB

PageSpeed had a low of: **javascript deferred loading**

So I moved some of my js lower in the page, and made sure I was using the newer asynchronous Google Analytics code. But more optimal javascript is definitely an area I need to come back to, especially getting that jQuery slider to do some lazy loading, and reducing the overall time to glass.

&nbsp;

Minor tweak::  **minify CSS**

At this time I am manually using the code generated by PageSpeed itself, and also am looking forward to improving my overall coding/build/deploy system – one day soon.

Minor Tweak :  **minify HTML**

Again, manually using the pagespeed generated version, saves a rather tiny 600B &#8211; but what the heck.

At the end of my allotted hour, I reran webpagetest :

Fully loaded:  2.780s , requests 43, bytes in: 1077 KB

(This was the best load time I saw on WebPageTest – other results were up to and around 3.1s)

&nbsp;

**After a rather enjoyable and satisfying <span style="text-decoration: underline;">first</span> hour**:

Fully loaded time : down from  **6.8s –-> 3.0s**

Page weight: down from **3427 KB &#8211;>1077KB**

PageSpeed score up from  **79/100 –> 88/100**

&nbsp;

All in all, an hour well spent, I just can’t figure out why I’ve not done it before &#8212; Thanks Andy <img src="http://allbs.co.uk/wp-includes/images/smilies/simple-smile.png" alt=":-)" class="wp-smiley" style="height: 1em; max-height: 1em;" />

[<img style="display: block; float: none; margin-left: auto; margin-right: auto; border-width: 0px;" title="Screen Shot 2013-05-19 at 21.20.37 - 2.8 secs" src="/images/allbsuploads/2013/05/ScreenShot20130519at21.20.372.8secs_thumb.png" alt="Screen Shot 2013-05-19 at 21.20.37 - 2.8 secs" width="426" height="484" border="0" />](/images/allbsuploads/2013/05/ScreenShot20130519at21.20.372.8secs.png)
