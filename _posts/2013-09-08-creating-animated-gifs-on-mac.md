---
title: Creating animated GIFs on Mac &#8211; the easy way
date: 2013-09-08 15:15:05 Z
permalink: "/2013/09/08/creating-animated-gifs-on-mac/"
categories:
- Mac
- photography
- Terminal
- Workflow
layout: single
author_profile: true
type: pages
---

I wanted to create an animated GIF from a sequence of static images, and initially I was considering a workflow using Photoshop/Lightroom or purchasing one of the many £2 app on the Mac App Store. However, after my recent successes using the Mac Terminal, I wanted to see if I could form my animated GIFs in a similar fashion.

My Goal: Can &#8216;I quickly create Animated GIFs on the Mac&#8217;

The Short Answer: &#8220;Yes:

Using the Terminal:

> >>$ convert -delay 4 -loop 0 *.jpg animation.gif

&nbsp;

The Slightly Longer Answer: &#8220;Yes&#8221;

But, this uses ImageMagick, so to caveat the last part of the title of this post : while it is easy, and quick, and free, and programmable, and relatively easy, it involves more use of the Terminal, and installing a few ancillary applications. So from a risk perspective, if everything works without a hitch you could easily be up and running in under 5 minutes, but of course if things don&#8217;t go smoothly, you could be opening pandoras box to a much longer period of Googling and Terminal&#8217;ing to get things working (I hope it&#8217;s the former).

So first, I needed to install ImageMagick:

After much praise from developers on Twitter, I had uninstalled MacPorts and installed Homebrew as a better Mac package manager:

Guidance on uninstalling MacPorts**: <http://guide.macports.org/chunked/installing.macports.uninstalling.html>

Then install HomeBrew**: <http://brew.sh/>

> >>$ ruby -e &#8220;$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)&#8221;
>
> >>$ brew doctor

and then use Homebrew to install ImageMagick**:

> >>$ brew install imagemagick

To verify the install:

> >>$ identify -version

and then, from amongst ImageMagick&#8217;s numerous plethora of image manipulation commands I used:

> >>$ convert -delay 4 -loop 0 *.jpg animation.gif

&nbsp;

** I&#8217;d recommend plenty of your own research into installing/using/uninstalling Mac Ports or Homebrew or ImageMagick on your machine before proceeding.

Hat-tip: to this article on Stack Exchange for initially getting me to take the more interesting road:

<http://apple.stackexchange.com/questions/30549/are-there-any-app-store-quality-apps-for-creating-animated-gifs-from-a-series>

&nbsp;

<img style="display: block; margin-left: auto; margin-right: auto;" title="Screen Shot 2013-09-08 at 16.08.06.png" alt="Screen Shot 2013 09 08 at 16 08 06" src="/images/allbsuploads/2013/09/Screen-Shot-2013-09-08-at-16.08.06.png" width="287" height="306" border="0" />

&nbsp;
