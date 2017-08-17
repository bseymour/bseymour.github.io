---
title: Getting Started with Github Pages - NaBloPoMo &#35;3
date: 2016-11-03 02:09:00 Z
permalink: "/2016/11/03/getting-started-with-github-pages"
categories:
- general
- blogging
tags:
- jekyll
- github
- NaBloPoMo
layout: single
author_profile: false
type: pages
post_image: "/images/posts/NaBloPoMo3-th.png"
sidebar:
  nav: nablopomo_blog_sidenav
---

Following on from NaBloPoMo [day 1](../01/Getting-back-into-blogging) & [day 2](../02/Jekyll-Static-Site-Generator)... There are tonnes of great [getting started](https://24ways.org/2013/get-started-with-github-pages/) [resources](https://guides.github.com/features/pages/) for [github-pages](https://pages.github.com/) and Jekyll, but the short gist is:

1) Start with a fork of an existing Jekyll/github-pages repo
(I can highly recommend [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) ). This isn't mandatory, and you can certainly start with a blank slate, but starting from an existing repo can greatly speed up the learning curve.... and minimise some of those early mistakes.

2) Rename that Fork to be a repo called mygituser.github.io, so mine is bseymour.github.io

3) Clone a local working copy, and setup the remote such that commits go to that gh-pages repo  

4) Install the gem 'github-pages' to ensure that your local environment mirrors the live gh-pages environment, to avoid unpleasant surprises when deploying to live.

5) Be very careful about using plugins, as gh-pages supports [only a few](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/)

6) Experiment locally, push live early, and develop in the open.

7) Use the [livereload plugin](https://github.com/RobertDeRose/jekyll-livereload) locally to auto-re-generate after changes.

8) (Optional), setup the CNAME for your own domain e.g. For me bseymour.com -> bseymour.github.io

9)  (Optional) Consider fronting your site with a CDN. I used this as an opportunity to Cloudflare for the first time, who thanks to them also being a DNS provider can offer some simpler-than-usual options for serving your site over SSL. More details [here](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)

10) Experiment, explore and have fun.

![Jekyll and Github-pages](/images/posts/NaBloPoMo3-gh.png)
