---
layout: single
author_profile: true
type: pages

title: 'Installing Lynx on Mac &#8211; a text-only browser'
date: 2013-03-02T15:57:33+00:00
permalink: /2013/03/02/installing-lynx-on-mac/
categories:
  - WebDev
tags:
  - lynx
  - mac
category: feature
---
> **&#8220;Content is the baseline, design is an enhancement&#8221;** : Paul Robert Lloyd : Responsive Conf 2013

&nbsp;

Following Paul&#8217;s (@paulrobertlloyd) session at [Responsive Conf](http://responsiveconf.com) I was really curious to try out [Lynx](http://en.wikipedia.org/wiki/Lynx_(web_browser)), which is a text-only browser. I was intrigued with looking at the world from such a limiting perspective, and the notion of viewing the web with no design-overlay really resonated with me:

Google on Lynx:

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-03-02 at 13.12.30.png" alt="Google on Lynx" src="/images/allbsuploads/2013/03/Screen-Shot-2013-03-02-at-13.12.30.png" width="446" height="265" border="0" />

Installing Lynx is straight forward enough, but is a little more involved than usual, so I thought I&#8217;d share my simple steps to installing Lynx on Mac:

[Update: Paul shared the following even easier option to direct download a .dmg to install Lynxlet: <a title="http://habilis.net/lynxlet/" href="http://habilis.net/lynxlet/" target="_blank">http://habilis.net/lynxlet/</a>]

&nbsp;

1) Install Xcode (From App Store)

2) Install MacPorts : download the .pkg from:

<http://www.macports.org/install.php>

Use Terminal to confirm installed ok:

: $ port

>> MacPorts 2.1.3, Entering interactive mode&#8230;

I then used the Terminal and tried:

3) $ sudo port install lynx

Which gave me the following response:

>> &#8216;org.macports.configure returned configure failure&#8217;

but reading the rest of the output it also included

&#8230;

>> Warning: The Command Line Tools for Xcode don&#8217;t appear to be installed;

4) install Xcode command line tools.

Open Xcode, and move to the &#8216;downloads&#8217; section, and it&#8217;s simple to install the Xcode command line tools:

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-03-02 at 12.52.28.png" alt="Xcode command line tools" src="/images/allbsuploads/2013/03/Screen-Shot-2013-03-02-at-12.52.28.png" width="480" height="218" border="0" />

Then re-tried

3) $sudo port install lynx

Which was this time successful, meaning I can browse sites as text-only via the terminal by typing:

$lynx http://thedomain.com

e.g.:

$lynx http://responsiveconf.com

<img style="display: block; margin-left: auto; margin-right: auto; border: 0px;" title="Screen Shot 2013-03-02 at 15.55.17.png" alt="Lynx: Responsive Conf Site" src="/images/allbsuploads/2013/03/Screen-Shot-2013-03-02-at-15.55.17.png" width="422" height="480" border="0" />

Footnote/Hat tip: I was initially pointed at this approach This approach based on the comments here (from &#8217;06):

<http://hints.macworld.com/article.php?story=20001105230841401>
