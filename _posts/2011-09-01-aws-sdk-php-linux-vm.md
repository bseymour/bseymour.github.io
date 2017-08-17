---
title: AWS sdk for PHP on Linux VM &#8211; time sync
date: 2011-09-01 13:52:50 Z
permalink: "/2011/09/01/aws-sdk-php-linux-vm/"
categories:
- general
- archive
layout: single
author_profile: true
type: pages
---

After some interesting exploration of an issue I was having with the AWS sdk for PHP I found the problem was actually quite a simple one. The Ubuntu (10.4) default appears to have the date/time settings on manual, hence when stop/starting the VM the time quickly becomes out of sync. For security considerations the Amazon Web Services requests have only a small tolerance for time disparities (max 5 mins difference)  &#8211; hence after leaving my VM stopped for a few days, I came back to find the my PHP code failing.

Follwing this, getting Python Boto setup and working was a cinch, and so the upshot is that I now have python (for pure admin and back-end tasks) and PHP setup and working nicely both on Windows and Linux, on my local VMs and Amazon Web Services EC2 based instances. This should hopefully speed up my development and deployment cycles for this next pet project.
