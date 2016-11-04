---
layout: single
author_profile: false
type: pages
title: Migrating Existing Content From Wordpress to Jekyll
date: 2016-11-04T2:09:00+00:00
post_image: /images/posts/default.png
permalink: /2016/11/04/Migrating-Existing-Content-From-Wordpress-to-Jekyll
categories: [general]
tags: [NaBloPoMo]
sidebar:
    nav: "blog_sidenav"
---
Having used self-hosted Wordpress instances for both my blog and my personal site for several years, I also needed to transfer my existing content.

I used a Wordpress plugin which, once installed on each Wordpress instance would run through all of my existing pages and posts, and export them into flat files, within a directory structure which was compatible with Jekyll.

![Screen shot of directory structure] ()

This was *mostly* successful, and while needing some manual cleanup, was considerably easier than starting from scratch. Some of the more laborious tasks (which are still ongoing) involved updating the YML front-matter for each post to be aligned with my Jekyll configuration.

Several of the pages were missing some or most of their content, though this typically was where I'd used plugins for LinkedIn or other networks to manage some of the content on my Wordpress sites. In these cases I undertook a manual process to copy/paste the relevant content from those sites, and have a TODO to bear in mind sync'ing that content going forward.

I also used this project as an opportunity to consolidate my separate blog site (AllBS) and personal site, into a single combined site.

This meant maintaining the bulk of my directory structure /YYYY/MM/DD/post-name through permalink configuration, to be the same as it had been, and then setting up a 301 redirect via an .htaccess on the old domain, to direct all existing bookmarked pages,  SERPs results to the new site.

TODO: code for 301 

Further rationalisation is needed to tidy up some of the less useful older posts, or ones which refer to environments which no longer exist, but I've taken the step to keep these old posts and pages available via the old URL (or in somecases 301 redirected), but unlisted. To do this I've added an item in my post front-matter:
category: archive

And then modified my blog-archive and other blog category listing pages as such:


