---
layout: single
author_profile: true
type: pages
title: Jekyll Static Site Generator - NaBloPoMo &#35;2
date: 2016-11-02T2:09:00+00:00
post_image: /images/posts/NaBloPoMo2-th.jpg
permalink: /2016/11/02/Jekyll-Static-Site-Generator
categories: [general, blogging]
tags: [jekyll]
sidebar:
    nav: "blog_sidenav"
---
As mentioned [yesterday](../01/Getting-back-into-blogging), having decided to move away from a database-based blog-aware site I started looking into static site generators. (Though inspired by Aral's [Breaking Things](http://www.breakingthin.gs/) I did also consider building my own locally scripted solution).  

[StaticGen](https://www.staticgen.com/) is a fantastic resource for reviewing the top Open-Source Static Site Generators, and it is so heartening to see that there are so many highly active and lovingly maintained projects.

![StaticGen screenshot ](/images/posts/NaBloPoMo2-sg.jpg){:height="200px"}

Friends had recommended Middleman, and I'd seen a lot of positive writing about Jekyll, so they formed my (very) shortlist. After a maddeningly unproductive first attempt with Middleman a few months ago, I gave Jekyll a try, and found it much smoother running.  

More details are available on the [Jekyll website](https://jekyllrb.com/)
Or directly from their [github repo](https://github.com/jekyll/jekyll)

Github also uses Jekyll under the covers for it's project pages, and effectively provides free hosting via '[GitHub-pages](https://pages.github.com/)' (a.k.a. gh-pages), with a simple-to-get-started-with automatic regeneration workflow when you commit new content to the repo for your gh-pages site.

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
