---
id: 1513
title: 'Imagemagick with TIFF support &#8211; &#8220;no decode delegate for this image format&#8221;'
date: 2013-09-09T20:55:31+00:00
author: Ben
layout: default
guid: http://ox10.it/allbs/?p=1513
permalink: /2013/09/09/imagemagick-with-tiff/
categories:
  - Mac
  - quicktip
  - Terminal
---
I&#8217;ve been loving using Mac Terminal but I&#8217;d being having problem using ImageMagick with TIFFs.

I couldn&#8217;t get past : &#8220;no decode delegate for this image format&#8221; . I tried far too many overly-complex possibilities, and it was becoming a real time-suck so while this is a short post it took me far too much time to find this solution:

> >>$ brew uninstall imagemagick
> 
> &nbsp;
> 
> >>$ brew install libtiff
> 
> &nbsp;
> 
> >>$ brew install imagemagick &#8211;with-libtiff

&nbsp;

[update]: my work machine didn&#8217;t like the above approach, however the following then worked

> >>$ brew install imagemagick &#8211;build-from-source
> 
> &nbsp;

Then to confirm it has worked:

>>$ convert -list configure

and check the DELEGATES list I now see:

DELEGATES      bzlib freetype jng jp2 jpeg png tiff xml zlib

&nbsp;

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-09-09 at 21.54.46.png" alt="Screen Shot 2013 09 09 at 21 54 46" src="http://ox10.it/allbs/wp-content/uploads/2013/09/Screen-Shot-2013-09-09-at-21.54.46.png" width="457" height="59" border="0" />

&nbsp;

(I gather a similar approach may work for Graphics Magick too)

&nbsp;

Yet again, it was Stack Overflow which provided the eventual solution :

<http://stackoverflow.com/questions/9586048/imagemagick-no-decode-delegate>