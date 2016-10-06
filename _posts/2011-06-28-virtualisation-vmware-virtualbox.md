---
layout: single
author_profile: true
type: pages

title: 'Virtual Machines : VMware &#038; VirtualBox'
date: 2011-06-28T18:50:21+00:00
permalink: /2011/06/28/virtualisation-vmware-virtualbox/
categories:
  - general
---
With the arrival of a nice new PC (HP HPE-599, i7-2600 based) I finally plan to spend some time using local machine virtualisation to change some of the fundamentals about how I use my PC&#8230;.

I would like to lighten the PC maintenance needs, and to endeavour to reduce the slowdown that all my machines suffer over time&#8230; by using different virtual machines for different primary functions &#8211; for example I will have a Win7 pro based VM for  my Visual Studio based development&#8230; this should make it much easier to contain and control all of those Services (like SQLserver) which I use infrequently, but which are a pain to stop and start &#8230;.

<span style="text-decoration: underline;">VMware</span>

Downloaded VMware Workstation&#8230;. 30 day trial&#8230; there was 20% for the next 2 days&#8230; which was really tempting&#8230; I really like the tabbed UI and the replay, and snapshot functionality&#8230; but  for my real day to day needs VMware player should suffice, and at &#8216;free&#8217; the value argument is an easy one.

<span style="text-decoration: underline;">VirtualBox</span>

Following the demo of Vagrant at OGN (Oxford Geek Night), which is based on Oracle&#8217;s VirtualBox, I will also continue to explore this option. At first use, it certainly lacks the shine of VMware, but after some tinkering it is starting to behave as required, and the vagrant project provides it with some compelling possibilities, so I will set aside some future time for this&#8230;

&nbsp;

To tie it all together&#8230; data/code sync &#8211; I will be using dropbox on the various wondiws and linux instances to keep my core files/code in sync. (link to my DropBox referral page:  [http://db.tt/GIJX8vd](http://db.tt/GIJX8vd "DropBox referral link") )

[Update: upgrading to 16GB RAM means that I can not dedicate the Win7 VM 4GB (and 2 cores) which means it has about the same processing available to it as my old machine &#8211; it certainly feels like it]
