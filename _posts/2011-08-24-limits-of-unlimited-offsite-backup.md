---
title: The limits of the unlimited (a.k.a. my offsite backup experiences)
date: 2011-08-24 10:21:35 Z
permalink: "/2011/08/24/limits-of-unlimited-offsite-backup/"
categories:
- engagement
- general
- services
layout: single
author_profile: true
type: pages
---

[Apologies in advance about the length of this post. It&#8217;s been as a draft for some time, and I guess I need to become emotional less attached before I can prune it further. But as a couple of people recently asked about my offsite backup experiences, so I wanted to post this anyway.]

The summary is: **Mozy**: were great but now aren&#8217;t. **Carbonite**: check the the small print. <span style="text-decoration: underline;"><strong>Crashplan</strong></span>: superb &#8211; long may it last.

&nbsp;

I’m not sure why or exactly when it started, but at some point around 5 years ago I started taking my backup seriously – both internal and external. (We have a moderate amount of data backed up : around 750GB (personal not business))

For internal backups I really like the simplicity of Western Digital’s World Book along with its ‘Anywhere Backup’, along with an NSLU2 Debian based subversion setup.

<span style="text-decoration: underline;">The Mozy Years</span>

Mozy were great, and for 5 years I was a happy customer who recommended then to many people.

One day early in 2011, I received am email with the subject “changes to your Mozy account” which outlined the abrupt end of unlimited backup and a new tiered rate that would see my current costs jump from $54 per yer to $70 per month! (**a 15x increase**)

I had paid up for another year’s subscription mid December, so at least that gave me 9 months of cover to get an alternate solution in place – I am not sure if this was fortunate timing for my current payment schedule, or a deliberate and considerate decision by Mozy – but either way I am thankful. [see update below]

<span style="text-decoration: underline;">Carbonite (check the small print)</span>

After some Twitter-based recommendations I plumped for Carbonite. They were really responsive and socially engaged (something which I actively like to support with my custom), and the deal was looking great and comparable to the previous Mozy pricing. So I tried the 15 day trial, and found it was nice and fast, had much better and more responsive control over the pause/ for 1,2,8, hours etc than Mozy ever did, and had a nice android app to boot. I was sold, and already kicking myself for having not searched for alternatives to Mozy sooner, so I very happily signed up for the 3 yr deal.

However, a month later, and I was tracking the upload speeds, and to check that the upload would be complete before the Mozy subscription ended, when I came to the conclusion that there was a rather dramatic slow down in upstream rate. After some research, and a helpful person on twitter, I finally found their notes that upload is throttled on their side after 35GB, and then even more so after 200GB. Here are the about the **<span style="text-decoration: underline;">&#8216;Bandwidth Allocation&#8217;</span>** with their service:

  * The first 35GB of data can achieve upload speeds of up to 2 mbps (megabits per second).
  * Between 35GB &#8211; 200GB of data can have the upload speeds reach up to <span style="text-decoration: underline;">512 kbps</span> (kilobits per second).
  * <span style="text-decoration: underline;">200GB</span> or more of data can be uploaded at up to <span style="text-decoration: underline;">100 kbps</span> (kilobits per second).

(<a title="Carbonite Bandwidth allocation" href="http://carbonite.custhelp.com/app/answers/detail/a_id/1440/partner/carbonite/default.php" target="_blank">http://carbonite.custhelp.com/app/answers/detail/a_id/1440/partner/carbonite/default.php)</a> [as of 2011-08-22]

This was in their small print but far from obvious. I clearly should have read the small print much more closely, but from a customer expectation management perspective, giving the notion of an ‘unlimited’ storage offer, but with such crippling upload throttling, meant that I see the unlimited as almost completely meaningless, and perhaps rather misleading. Though as long as you only have a small volume of data for initial backup and don&#8217;t generate much new content weekly then I guess you would be fine.

[Update: Some good news : Carbonite at least partially patched up my feeling toward them, by fully refunding the money I had paid for the 3 years subscription…. No quibble (after IMing their support team).]

<span style="text-decoration: underline;">Enter Crashplan</span>:

Following more research and further Twitter recommendations, I decided to trial another alternative backup service from Crashplan. The pricing looked good, and their team were also very responsive on twitter, and so I started my trial with them. Having been burnt by the Carbonite small print, I was very relieved to find the following in the Crashplan FAQ:

Q: Are Crashplan unlimited plans really unlimited? A: “We don’t limit in any way. No file size limits, no file type restrictions, no bandwidth throttling”

Q: How do I know you won’t cancel your unlimited plans like Mozy did? A: “We are completely committed to unlimited backup plans and have no plans to change that policy”

(<a title="http://support.crashplan.com/doku.php/faq/mozy#how_do_i_know_you_won_t_cancel_your_unlimited_plans_like_mozy_did" href="http://support.crashplan.com/doku.php/faq/mozy#how_do_i_know_you_won_t_cancel_your_unlimited_plans_like_mozy_did" target="_blank">http://support.crashplan.com/doku.php/faq/mozy#how_do_i_know_you_won_t_cancel_your_unlimited_plans_like_mozy_did</a>)

I paused my Carbonite backup, installed Crashplan and started my 15 day trial. The initial results were OK… and then after a few weeks I noticed the **<span style="text-decoration: underline;">defalt settings had the upstream set at max. 300kps!</span>**. I changed that to unlimited and have saw an immediate jump in improvement getting 20GB up in the next 3 days.

It took 2 to 3 months to get our initial data backed up (700GB or so), but that was a restriction of my upstream rather than Crashplan. As of today we are coming up to 770GB and the Crashplan desktop app happily sits there having minimal impact on my PC and keeping everything sync effortlessly.

The cherry on top: If you are transferring from Mozy you get a discount (http://www.crashplan.com/switcher/), and a if you commit to 4 years up front, the pretty amazing rate of $3 p/m&#8230; you probably won&#8217;t be surprised to hear that I duly signed up for the 4yrs.

&nbsp;

In a few months I will be cancelling my Mozy subscription, it will be interesting to see if they give any kind of response. I have gone from one of their cheerleaders and referrer of friends, to someone who will warn anyone who twitters any interest in their services, and has advised half a dozen members of my family to leave them. I am sure they have a strong business reason for the sudden U-turn on unlimited, and I generally hope it works out in accordance with their plans, but it would have been preferable to avoid all this hassle &#8211; though that said, I am very happy with Crashplan.

[2011-08-25 Update: in response to this blog, @MozyUK send a twitter response with a link to the following article : <a title="http://mozy.co.uk/newplans" href="http://mozy.co.uk/newplans" target="_blank">http://mozy.co.uk/newplans</a> which gives a much more considered message about their change of services focus. I am certainly impressed that someone at Mozy took the time to respond positively to my tweet and this post ]

&nbsp;

N.B. Other offsite storage/backup services that we use:

<a title="Amazon Web Services S3" href="http://aws.amazon.com/s3/" target="_blank">Amazon Web Services S3</a> – with an amazing indicated durability of 99.999999999% (http://aws.amazon.com/s3/#protecting). Which we typically utilise via the fantastic Cloudberry S3 Explorer Pro, or home baked utilities (typically AIR based)

Dropbox – I love and use more for small volumes of sync’ing between our main PC’s, laptop, phones (HTC Desire) and tablet (Asus Transformer)

Google Developer Storage via <a title="CloudBerry" href="http://www.cloudberrylab.com/" target="_blank">Cloudberry</a> : combination of another great Cloudberry product, and google very kindly giving me 100GB developer storage make this an interesting option.
