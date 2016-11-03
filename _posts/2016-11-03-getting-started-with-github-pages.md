---
layout: single
author_profile: true
type: pages
title: Getting Started with Github Pages - NaBloPoMo &#35;3
date: 2016-11-02T2:09:00+00:00
post_image: /images/posts/default.png
permalink: /2016/11/02/getting-started-with-github-pages
categories: [general, blogging, draft]
tags: [jekyll, github]
sidebar:
    nav: "blog_sidenav"
---

......

There are tonnes of great getting started resources for github-pages and Jekyll, but the short gist is:

1) Start with a fork of an existing Jekyll/github-pages repo
(I can highly recommend [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)

2) Rename that Fork to be a repo called mygituser.github.io, so mine is bseymour.github.io

3) Clone a local working copy, and setup the remote such that commits go to that gh-pages repo  

4) Install the gem 'github-pages' such that your local environment mirrors the live environment

5) Be very careful about using plugins, as gh-pages supports [only a few](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/)

6) Experiment locally, push live early, and develop in the open.

7) (Optional), setup the CNAME for your own domain e.g. For me bseymour.com -> bseymour.github.io

8)  (Optional) Consider fronting your site with a CDN. I used this as an opportunity to Cloudflare for the first time, who thanks to them also being a DNS provider can offer some simpler-than-usual options for serving your site over SSL. More details [here](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)

9) Experiment, explore and have fun.
