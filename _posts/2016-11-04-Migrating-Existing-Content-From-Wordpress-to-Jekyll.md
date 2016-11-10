---
layout: single
author_profile: false
type: pages
title: Migrating Existing Content From Wordpress to Jekyll - NaBloPoMo &#35;4
date: 2016-11-04T2:09:00+00:00
post_image: /images/posts/NaBloPoMo4-directory.png
permalink: /2016/11/04/Migrating-Existing-Content-From-Wordpress-to-Jekyll
categories: [general]
tags: [jekyll, NaBloPoMo, wordpress]
sidebar:
    nav: "nablopomo_blog_sidenav"
---
Having used self-hosted Wordpress instances for both my blog and my personal site for several years, I also needed to transfer my existing content.

I used a [Wordpress plugin](https://wordpress.org/plugins/jekyll-exporter/other_notes/) which, once installed on each Wordpress instance could run through all of my existing pages and posts, and export them into flat files, within a directory structure which was compatible with Jekyll.

![Screen shot of directory structure](/images/posts/NaBloPoMo4-directory.png)

This was *mostly* successful, and while needing some manual cleanup, was considerably easier than starting from scratch. Some of the more laborious tasks (which are still ongoing) involved updating the YML front-matter for each post to be aligned with my Jekyll configuration.

Several of the pages were missing some or most of their content, though this typically was where I'd used plugins for LinkedIn or other networks to manage some of the content on my Wordpress sites. In these cases I undertook a manual process to copy/paste the relevant content from those sites, and have a TODO to bear in mind sync'ing that content going forward.

I also used this project as an opportunity to consolidate my separate blog site (AllBS) and personal site, into a single combined site.

This meant maintaining the bulk of my directory structure /YYYY/MM/DD/post-name through permalink configuration, to be the same as it had been, and then setting up a 301 redirect via an .htaccess on the old domain, to direct all existing bookmarked pages,  SERPs results to the new site.

```
  Redirect 301 / http://benseymour.com/
```

Further rationalisation is needed to tidy up some of the less useful older posts, or ones which refer to environments which no longer exist, but I've taken the step to keep these old posts and pages available via the old URL (or in somecases 301 redirected), but unlisted. To do this I've added an item in my post front-matter:

```
  category: archive
```

And then modified my blog-archive and other blog category listing pages as such:

```
  { % unless post.category == "archive" % }
      ...
  { % endunless % }
```

So pages such as [this one](https://benseymour.com/blog/) no longer list the archive posts, but they are still accessible by direct URL.

The bulk of this post was written using my iPad and bluetooth keyboard... but more about that tomorrow :)

![Writing this post on an iPad](/images/posts/NaBloPoMo4-ipad.jpg)
