---
title: SMS Utilities (exit Skypekit, enter Tropo)
date: 2011-07-20 08:33:14 Z
permalink: "/2011/07/20/sms-utilities/"
categories:
- general
layout: single
author_profile: true
type: pages
---

I&#8217;ve been tinkering with some SMS based utilities for a little while using SkypeCOM and <a title="Skype4Py" href="http://skype4py.sourceforge.net/doc/html/" target="_blank">Skype4Py </a>(Python). It was great to be able to simplify some tasks that would otherwise need my own SMS  gateway. The downside was that it needs a version of the desktop client client running on the machine (not exactly ideal for any plans using a headless Linux based server) &#8230; furthermore the T&C&#8217;s restricted it&#8217;s use from server based apps.

Enter <a title="SkypeKit" href="https://developer.skype.com" target="_blank">SkypeKit</a>: after months on the waiting list for the proper headless Skype SDK and runtime, I finally received my access (coincidentally just days after the Microsoft acquisition announcement).Unfortunately in reading the T&Cs prior to accessing the SkypeKit 3.4 Download :

&#8220;At this time, the following use cases outside of consumer electronics are _**prohibited**_:&#8221;

&#8230;..

Web Applications

**Server Based Products**

Mobile Applications

Tablet Applications

&#8230;&#8230;

I can only presume that this is a short term restriction as it seems at odds with the description on the SkypeKit home page:

&#8220;Get plugged into Skype with SkypeKit Ready to enable the world&#8217;s conversations in your devices or _**software**_?&#8221;

Hopefully there will be a change to the T&C&#8217;s soon, but for now

:Exit SkypeKit

&nbsp;

From some Googling I found a few SMS Gateway service provided who looked interesting, but typically had quite high costs per SMS, or required you to buy buckets of SMS&#8217;s up front, or who had little or no International Support (such as Twilio).

<span style="text-decoration: underline;"><strong>Tropo</strong></span>

Finally last weekend, thanks to a response on  <a title="Stack Overflow" href="http://stackoverflow.com/" target="_blank">StackOverflow</a> I came across <a title="Tropo" href="http://www.tropo.com" target="_blank">Tropo</a>. I set up the account on Monday evening, and found a little space yesterday evening to start tinkering.

Having just about everything free for developers to experiment with is superb and liberating. The welcome and getting started docs are well thought out, as are the initial &#8216;hello World&#8217; type examples.

After a little frustration with problems trying to send a test SMS to my UK mobile number, I discovered that International SMS needed to be enabled via a request to Support. I duly sent off my request and figured that would be the end of any exploring for a couple of days while waiting for access.

Yet within 15 minutes I had a response from their Tech Evangelist via Twitter, and an email response (via forum) from Tech Support. After a little more back and forth, and within 30 minutes, I had been granted permissions, and could now get my first test SMS (to a UK number to work).

(In the space of 1 hour, I had 3 forum updates, 2 twitter responses, and a Google+ comment!)

I just love working with socially engaged companies. As someone who like to experiment in the evenings, it gives me the confidence to know that with the little time available, I am much less likely to encounter the blockers and time-sinks that rob a pet project of momentum.

I hope Tropo have an affiliate or referral program, because based on the last 24 hours, I will happily be recommending them.
